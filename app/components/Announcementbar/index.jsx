"use client";
import Link from "next/link";
import { useState } from "react";
import { XMarkIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary to-tertiary text-white">
      <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-center gap-3 text-sm">
        <span className="pill bg-white/15 text-white font-semibold shrink-0">
          Nouveau
        </span>
        <p className="text-center leading-tight">
          <span className="font-medium">Nouvelle API disponible</span>
          <span className="hidden sm:inline">
            {" "}
            — intégrez SoleasPay en quelques lignes de code.
          </span>
        </p>
        <Link
          href="https://documentation.mysoleas.com"
          target="_blank"
          className="hidden sm:inline-flex items-center gap-1 font-semibold underline underline-offset-2 shrink-0 hover:opacity-90"
        >
          Découvrir <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Fermer la bannière"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/15 transition-colors"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
