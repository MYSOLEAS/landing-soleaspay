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
    { name: 'Nous rejoindre', href: '/join-us', current: false },
    { name: 'FAQ', href: '/faq', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Drawerdata: React.FC<DrawerDataProps> = ({setIsOpen}) => {
  const [isServiceOpen, setIsServiceOpen] = React.useState(false);
  const serviceMenuRef = React.useRef<HTMLDivElement | null>(null);
  // Toggle service dropdown
  const handleServiceClick = () => {
    setIsServiceOpen((prev) => !prev);
  };

  const handleServiceCloseDrawer = () => {
    setIsServiceOpen((prev) => !prev);
    setIsOpen(false)
  };

  const handleCloseDrawer = () => {
    setIsOpen(false)
  };
  
  // Close dropdown if click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (serviceMenuRef.current && !serviceMenuRef.current.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    return (
        <div className="rounded-md max-w-sm w-full">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item, index) => (
                            index == 1 
                            ? 
                            <li className={classNames(
                                item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                             style={{ cursor: 'pointer', background: 'none', border: 'none' }}
                             onClick={handleServiceClick}
                            >
                            {item.name} {isServiceOpen ? '▲' : '▼'}
                            {isServiceOpen && (
                            
                                <ul className='dropdown-menu px-5'>
                                    <li className='services my-2' onClick={handleServiceCloseDrawer}><Link href={'/services/payments'}>* Paiement</Link></li>
                                    <li className='services my-2' onClick={handleServiceCloseDrawer}><Link href={'/services/e-bills'}>* E-Facturier</Link></li>
                                    <li className='services my-2' onClick={handleServiceCloseDrawer}><Link href={'/services/e-commerce'}>* E-Commerce</Link></li>
                                    <li className='services my-2' onClick={handleServiceCloseDrawer}><Link href={'/services/e-marketing'}>* E-Marketing</Link></li>
                                    <li className='services my-2' onClick={handleServiceCloseDrawer}><Link href={'/services/virtual-cards'}>* Carte virtuelle</Link></li>
                                    <li className='services my-2' onClick={handleServiceCloseDrawer}><Link href={'/services/developers'}>* Developpeurs</Link></li>
                                </ul>
                            )}
                            </li>
                            :
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={handleCloseDrawer}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4"></div>
                        <button className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded">
                            <Link href={'https://app.soleaspay.com/auth/login'}>
                                Se Connecter
                            </Link>
                        </button>
                        <button className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded">
                            <Link href={'https://app.soleaspay.com/auth/register'}>
                                S'inscrire
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drawerdata;
