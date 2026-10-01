import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import LanguageSwitcher from "../LanguageSwitcher";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Accueil", href: "/", current: false },
  { name: "Nos Services", href: "#", current: false },
  { name: "Tarifs", href: "/pricing", current: false },
  { name: "À propos", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "Nous rejoindre", href: "/join-us", current: false },
  { name: "FAQ", href: "/faq", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = React.useState(false);

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".dropdown")) {
      setIsServicesMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
          <div className="relative flex h-14 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center">
                {/* Note: le logo actuel (sopay.png) est probablement conçu pour un fond sombre.
                                    Sur navbar blanche il faudra une variante foncée du logo — sopay-dark.png ci-dessous
                                    est un nom d'exemple, à remplacer par ton vrai fichier. */}
                <img
                  src={"/home/images/Logo/sopay.png"}
                  alt="soleaspay"
                  width={80}
                />
              </div>

              {/* LINKS */}
              <div className="hidden lg:flex items-center">
                <ul className="flex justify-end items-center gap-1 list-none m-0 p-0">
                  {navigation.map((item, index) =>
                    index == 1 ? (
                      <li
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-slate-100"
                            : "dropdown text-ink/80 hover:text-primary",
                          "relative px-3 py-4 rounded-md text-base font-medium",
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <button
                          onClick={toggleServicesMenu}
                          style={{
                            cursor: "pointer",
                            background: "none",
                            border: "none",
                          }}
                          className="flex items-center gap-1 hover-underline"
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={classNames(
                              isServicesMenuOpen ? "rotate-180" : "",
                              "h-4 w-4 transition-transform",
                            )}
                          />
                        </button>
                        {isServicesMenuOpen && (
                          <ul className="dropdown-menu">
                            <li
                              className="services"
                              onClick={toggleServicesMenu}
                            >
                              <Link href={"/services/payments"}>Paiement</Link>
                            </li>
                            <li
                              className="services"
                              onClick={toggleServicesMenu}
                            >
                              <Link href={"/services/e-bills"}>
                                E-Facturier
                              </Link>
                            </li>
                            <li
                              className="services"
                              onClick={toggleServicesMenu}
                            >
                              <Link href={"/services/e-commerce"}>
                                E-Commerce
                              </Link>
                            </li>
                            
                            <li
                              className="services"
                              onClick={toggleServicesMenu}
                            >
                              <Link href={"/services/e-marketing"}>
                                E-Marketing
                              </Link>
                            </li>
                            <li
                              className="services"
                              onClick={toggleServicesMenu}
                            >
                              <Link href={"/services/virtual-cards"}>
                                Carte virtuelle
                              </Link>
                            </li>
                            
                            <li
                              className="services"
                              onClick={toggleServicesMenu}
                            >
                              <Link href={"/services/developers"}>
                                Developpeurs
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    ) : (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-slate-100"
                              : "text-ink/80 hover:text-primary hover-underline",
                            "px-3 py-4 rounded-md text-base font-medium inline-flex",
                          )}
                          aria-current={item.href ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="hidden lg:flex items-center gap-3">
                <LanguageSwitcher />
                <Link
                  href={"https://business.soleaspay.com/login"}
                  className="btn-outline text-base font-semibold py-3 px-6"
                >
                  Mon Compte
                </Link>
                <Link
                  href={"https://business.soleaspay.com/register"}
                  className="navbutton text-base font-semibold py-3 px-6"
                >
                  S&apos;inscrire
                </Link>
              </div>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6 text-primary"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            <Drawer
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              children={<Drawerdata setIsOpen={setIsOpen} />}
            />
          </div>
        </div>
      </>
      <style jsx>{`
        .dropdown-menu {
          list-style: none;
          position: absolute;
          top: 100%;
          left: 0;
          display: block;
          width: 220px;
          background: #ffffff;
          border: 1px solid var(--sp-border);
          box-shadow: 0 20px 40px rgba(26, 35, 126, 0.12);
          padding: 10px;
          border-radius: 12px;
          margin: 8px 0 0 0;
          z-index: 60;
        }

        .dropdown-menu li {
          margin-bottom: 2px;
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 14px;
          color: #0f1430;
          transition: background 0.2s ease;
        }

        .dropdown-menu li:hover {
          background: var(--sp-surface);
          color: var(--sp-primary);
        }

        .dropdown-menu li:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </Disclosure>
  );
};

export default Navbar;
