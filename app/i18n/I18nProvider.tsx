"use client";

import React from "react";
import {
  DEFAULT_LOCALE,
  Locale,
  SUPPORTED_LOCALES,
  translations,
} from "./translations";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export const I18nContext = React.createContext<I18nContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => undefined,
});

const exactMaps = translations.reduce(
  (acc, entry) => {
    acc.en.set(normalize(entry.fr), entry.en);
    acc.en.set(normalize(entry.en), entry.en);
    acc.fr.set(normalize(entry.en), entry.fr);
    acc.fr.set(normalize(entry.fr), entry.fr);
    return acc;
  },
  { fr: new Map<string, string>(), en: new Map<string, string>() },
);

const replacements = translations
  .flatMap((entry) => [
    { source: entry.fr, fr: entry.fr, en: entry.en },
    { source: entry.en, fr: entry.fr, en: entry.en },
  ])
  .sort((a, b) => b.source.length - a.source.length);

const textOriginals = new WeakMap<Text, string>();
const attrOriginals = new WeakMap<Element, Record<string, string>>();

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function getPreferredLocale(): Locale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const stored = window.localStorage.getItem("soleaspay-locale") as Locale | null;
  if (stored && SUPPORTED_LOCALES.includes(stored)) {
    return stored;
  }

  const browserLocale = window.navigator.languages?.[0] || window.navigator.language;
  if (browserLocale?.toLowerCase().startsWith("en")) {
    return "en";
  }

  return DEFAULT_LOCALE;
}

function shouldSkipNode(node: Node) {
  const parent = node.parentElement;
  if (!parent) return true;

  return Boolean(
    parent.closest(
      "script, style, noscript, code, pre, svg, canvas, [data-no-translate], .code-window",
    ),
  );
}

function translateValue(value: string, locale: Locale) {
  const normalized = normalize(value);
  if (!normalized) return value;

  const exact = exactMaps[locale].get(normalized);
  if (exact) {
    const leadingWhitespace = value.match(/^\s*/)?.[0] || "";
    const trailingWhitespace = value.match(/\s*$/)?.[0] || "";
    return `${leadingWhitespace}${exact}${trailingWhitespace}`;
  }

  let translated = value;
  for (const item of replacements) {
    const target = item[locale];
    if (item.source === target || !translated.includes(item.source)) continue;
    translated = translated.split(item.source).join(target);
  }

  return translated;
}

function translateAttributes(root: ParentNode, locale: Locale) {
  const selector = "[placeholder], [aria-label], [title], img[alt]";
  root.querySelectorAll?.(selector).forEach((element) => {
    if (element.closest("[data-no-translate], .code-window")) return;

    const originalAttrs = attrOriginals.get(element) || {};
    ["placeholder", "aria-label", "title", "alt"].forEach((attr) => {
      const current = element.getAttribute(attr);
      if (!current) return;

      if (!originalAttrs[attr]) {
        originalAttrs[attr] = current;
      }

      const next = translateValue(originalAttrs[attr], locale);
      if (next !== current) {
        element.setAttribute(attr, next);
      }
    });
    attrOriginals.set(element, originalAttrs);
  });
}

function translateTextNodes(root: Node, locale: Locale) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (!shouldSkipNode(node)) {
      nodes.push(node);
    }
  }

  nodes.forEach((node) => {
    const original = textOriginals.get(node) || node.nodeValue || "";
    if (!textOriginals.has(node)) {
      textOriginals.set(node, original);
    }

    const translated = translateValue(original, locale);
    if (node.nodeValue !== translated) {
      node.nodeValue = translated;
    }
  });
}

function applyTranslations(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;
  document.title = translateValue(document.title, locale);
  translateTextNodes(document.body, locale);
  translateAttributes(document.body, locale);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(DEFAULT_LOCALE);
  const localeRef = React.useRef<Locale>(DEFAULT_LOCALE);

  const setLocale = React.useCallback((nextLocale: Locale) => {
    localeRef.current = nextLocale;
    setLocaleState(nextLocale);
    window.localStorage.setItem("soleaspay-locale", nextLocale);
    window.dispatchEvent(new CustomEvent("soleaspay:locale-change", { detail: nextLocale }));
    window.requestAnimationFrame(() => applyTranslations(nextLocale));
  }, []);

  React.useEffect(() => {
    const initialLocale = getPreferredLocale();
    localeRef.current = initialLocale;
    setLocaleState(initialLocale);
    applyTranslations(initialLocale);

    const observer = new MutationObserver((mutations) => {
      const currentLocale = localeRef.current;
      window.requestAnimationFrame(() => {
        document.title = translateValue(document.title, currentLocale);
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
              translateTextNodes(node, currentLocale);
              if (node.nodeType === Node.ELEMENT_NODE) {
                translateAttributes(node as Element, currentLocale);
              }
            }
          });
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return React.useContext(I18nContext);
}
