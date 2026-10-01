"use client";

import React from "react";
import Link from "next/link";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

interface DrawerDataProps {
    setIsOpen: (open: boolean) => void;
  }

const navigation: NavigationItem[] = [
    { name: 'Accueil', href: '/', current: false },
    { name: 'Nos Services', href: '#', current: false },
    { name: 'Tarifs', href: '/pricing', current: false },
    { name: 'À propos', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Nous rejoindre', href: '/join-us', current: false },
    { name: 'FAQ', href: '/faq', current: false },
]

const serviceLinks = [
    { name: 'Paiement', href: '/services/payments' },
    { name: 'E-Facturier', href: '/services/e-bills' },
    { name: 'E-Commerce', href: '/services/e-commerce' },
    { name: 'E-Marketing', href: '/services/e-marketing' },
    { name: 'Carte virtuelle', href: '/services/virtual-cards' },
    { name: 'Developpeurs', href: '/services/developers' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Drawerdata: React.FC<DrawerDataProps> = ({setIsOpen}) => {
  const serviceMenuRef = React.useRef<HTMLDivElement | null>(null);

  const handleServiceCloseDrawer = () => {
    setIsOpen(false)
  };

  const handleCloseDrawer = () => {
    setIsOpen(false)
  };
  
  // Close dropdown if click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (serviceMenuRef.current && !serviceMenuRef.current.contains(event.target as Node)) {
        serviceMenuRef.current.querySelector("details")?.removeAttribute("open");
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    return (
        <div className="flex h-full w-full flex-col">
            <nav className="flex-1 overflow-y-auto px-5 pt-3" aria-label="Menu mobile">
                <div className="divide-y divide-border">
                    {navigation.map((item, index) => (
                        index == 1
                        ?
                        <div
                            key={item.name}
                            ref={serviceMenuRef}
                            className="mobile-drawer-item"
                            aria-current={item.current ? 'page' : undefined}
                        >
                            <details className="group">
                                <summary className="flex w-full cursor-pointer list-none items-center justify-between py-4 text-left text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                                    <span>{item.name}</span>
                                    <span className="text-lg leading-none text-primary transition-transform group-open:rotate-180" aria-hidden="true">⌄</span>
                                </summary>
                                <ul className='mb-3 rounded-2xl border border-border bg-surface px-3 py-2 text-sm text-ink'>
                                    {serviceLinks.map((service) => (
                                        <li key={service.href} onClick={handleServiceCloseDrawer}>
                                            <Link className="block rounded-xl px-3 py-2.5 font-medium text-ink hover:bg-white hover:text-primary" href={service.href}>
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </div>
                        :
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={handleCloseDrawer}
                            className={classNames(
                                item.current ? 'text-primary' : 'text-ink hover:text-primary',
                                'mobile-drawer-item flex items-center justify-between py-4 text-base font-semibold'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </nav>

            <div className="border-t border-border bg-white px-5 pb-6 pt-4">
                <div className="grid gap-3">
                    <Link
                        href={'https://app.soleaspay.com/auth/login'}
                        onClick={handleCloseDrawer}
                        className="mobile-drawer-cta mobile-drawer-cta--secondary"
                    >
                        Se Connecter
                    </Link>
                    <Link
                        href={'https://app.soleaspay.com/auth/register'}
                        onClick={handleCloseDrawer}
                        className="mobile-drawer-cta mobile-drawer-cta--primary"
                    >
                        S'inscrire
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Drawerdata;
