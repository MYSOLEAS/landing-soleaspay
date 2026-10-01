"use client";

import React, { ReactNode } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'
import LanguageSwitcher from "../LanguageSwitcher";

interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
    
    return (
        <main
            aria-hidden={!isOpen}
            className={
                "fixed inset-0 z-[80] overflow-hidden bg-gray-900 bg-opacity-35 transform ease-in-out " +
                (isOpen
                    ? "pointer-events-auto transition-opacity opacity-100 duration-300 translate-x-0"
                    : "pointer-events-none transition-all delay-300 opacity-0 -translate-x-full")
            }
        >
            <section
                className={
                    "relative z-[90] h-full w-[min(88vw,360px)] max-w-sm bg-white shadow-2xl duration-300 ease-in-out transition-transform transform " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
                }
            >

                <article className="relative h-full w-full flex flex-col bg-white">
                    <header className="px-5 py-4 flex items-center justify-between gap-3 border-b border-border">

                        <div className="flex flex-shrink-0 items-center">
                            <img
                                src={'/home/images/Logo/sopay.png'}
                                alt="soleaspay"
                                width={80}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <LanguageSwitcher />
                            <button
                                type="button"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-primary hover:bg-surface"
                                aria-label="Fermer le menu"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                <XMarkIcon className="block h-5 w-5" />
                            </button>
                        </div>
                    </header>
                    <div className="flex-1 overflow-y-auto" onClick={() => {
                        // setIsOpen(false)
                    }}>{children}</div>
                </article>
            </section>
            <section
                className="absolute inset-0 z-[80] h-full w-full cursor-pointer"
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}

export default Drawer;
