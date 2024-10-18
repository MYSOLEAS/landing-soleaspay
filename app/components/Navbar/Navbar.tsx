import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Accueil', href: '/', current: false },
    { name: 'Nos Services', href: '#', current: false },
    { name: 'Tarifs', href: '/pricing', current: false },
    { name: 'Nous rejoindre', href: '/join-us', current: false },
    { name: 'FAQ', href: '/faq', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
     // État pour gérer l'ouverture du menu déroulant des services
    const [isServicesMenuOpen, setIsServicesMenuOpen] = React.useState(false);

    // Fonction pour basculer l'affichage du menu Services
    const toggleServicesMenu = () => {
        setIsServicesMenuOpen(!isServicesMenuOpen);
    };

    // Fonction pour fermer le menu si on clique en dehors
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      setIsServicesMenuOpen(false);
    }
  };

    React.useEffect(() => {
        // Ajouter un event listener au clic global
        document.addEventListener('click', handleClickOutside);
        
        return () => {
        // Nettoyer l'event listener lorsqu'on quitte le composant
        document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    src={'/images/Logo/sopay.png'}
                                    alt="soleaspay"
                                    width={80}
                                />
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item, index) => (
                                        index == 1 
                                        ? 
                                        <li className={classNames(
                                            item.current ? 'bg-gray-900' : 'dropdown text-white hover:text-offwhite hover-underline',
                                            'px-3 py-4 rounded-md text-lg font-normal'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        <button onClick={toggleServicesMenu} style={{ cursor: 'pointer', background: 'none', border: 'none' }}>
                                        {item.name} {isServicesMenuOpen ? '▲' : '▼'}
                                        </button>
                                        {isServicesMenuOpen && (
                                        
                                            <ul className='dropdown-menu'>
                                                <li className='navbutton services' onClick={toggleServicesMenu}><Link href={'/services/payments'}>* Paiement</Link></li>
                                                <li className='navbutton services' onClick={toggleServicesMenu}><Link href={'/services/e-bills'}>* E-Facturier</Link></li>
                                                <li className='navbutton services' onClick={toggleServicesMenu}><Link href={'/services/e-commerce'}>* E-Commerce</Link></li>
                                                <li className='navbutton services' onClick={toggleServicesMenu}><Link href={'/services/e-marketing'}>* E-Marketing</Link></li>
                                                <li className='navbutton services' onClick={toggleServicesMenu}><Link href={'/services/virtual-cards'}>* Carte virtuelle</Link></li>
                                                <li className='navbutton services' onClick={toggleServicesMenu}><Link href={'/services/developers'}>* Developpeurs</Link></li>
                                            </ul>
                                        )}
                                        </li>
                                    :
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks text-white hover:text-offwhite hover-underline',
                                                'px-3 py-4 rounded-md text-lg font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                            <button className='hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-9 navbutton text-white'><Link href={'https://app.soleaspay.com/auth/register'}>S'inscrire</Link></button>
                            <button className='hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-9 navbutton text-white'><Link href={'https://app.soleaspay.com/auth/login'}>Mon Compte</Link></button>
                            {/* <Contactusform /> */}
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} children={<Drawerdata setIsOpen={setIsOpen} />} />

                    </div>
                </div>
            </>
            {/* Ajout de quelques styles CSS inline pour gérer le dropdown */}
      <style jsx>{`
        navbar ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }
        
        navbar ul li {
          margin-right: 20px;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 10px;
          display: block;
          width: 220px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 10px;
          border-radius: 4px;
        }
        
        .dropdown-menu li {
          margin-bottom: 10px;
        }
        .dropdown-menu .services{
            padding-left: 15px;
        }
        .dropdown-menu li:last-child {
          margin-bottom: 0;
        }
      `}</style>
        </Disclosure>
        
    )
}

export default Navbar;
