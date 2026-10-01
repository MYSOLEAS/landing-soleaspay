"use client";

import { useI18n } from "../i18n/I18nProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const nextLocale = locale === "fr" ? "en" : "fr";

  return (
    <button
      type="button"
      className="language-switcher"
      aria-label={locale === "fr" ? "Passer le site en anglais" : "Switch website to French"}
      title={locale === "fr" ? "English" : "Français"}
      onClick={() => setLocale(nextLocale)}
      data-no-translate
    >
      <span aria-hidden="true">{locale === "fr" ? "🇬🇧" : "🇫🇷"}</span>
      <span className="language-switcher__text">{locale === "fr" ? "EN" : "FR"}</span>
    </button>
  );
}
