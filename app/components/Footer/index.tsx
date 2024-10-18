import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string,
  href: string,
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Liens",
    link: ['Accueil', 'Nos Services', 'Tarifs', 'FAQ'],
  }
]

const socialLinks: Social[] = [
  { imgsrc: '/images/Footer/linkedin.svg', href: "https://www.linkedin.com/showcase/soleaspay"},
  { imgsrc: '/images/Footer/insta.svg', href: "https://instagram.com/soleaspay"},
  { imgsrc: '/images/Footer/twitter.svg', href: "https://twitter.com/mysoleas"},
  { imgsrc: '/images/Footer/youtube.svg', href: "https://youtube.com/soleaspay"},
]


const footer = () => {
  return (
    <div className=" relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-24 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* COLUMN-1 */}

          <div className='col-span-4'>
            <Image
              src={'/images/Footer/sectigo.svg'}
              alt="sectigo"
              width={150}
              height={100}
            />
            <br />
            <br /><br /><br />
            {/* <h3 className='text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16'> Simplifiez vos transactions en ligne avec SoleasPay ! Notre solution de paiement sécurisée est rapide et facile a utiliser.</h3> */}
            <div className='flex gap-4'>
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i} target="_blank"><Image src={items.imgsrc} alt={items.imgsrc} width={50} height={50} className='footer-icons'/></Link>
              ))}
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          
            <div  className="group relative col-span-3">
              <p className="text-white text-xl font-medium mb-9">Services</p>
              <ul>
                  <li className='mb-5'>
                    <Link href="/services/payments" className="text-offwhite  text-sm font-normal mb-6 space-links">Paiement</Link>
                  </li>
                  <li className='mb-5'>
                    <Link href="/services/e-bills" className="text-offwhite  text-sm font-normal mb-6 space-links">Facturier numerique</Link>
                  </li>
                  <li className='mb-5'>
                    <Link href="/services/virtual-cards" className="text-offwhite  text-sm font-normal mb-6 space-links">Carte virtuelles</Link>
                  </li>
                  <li className='mb-5'>
                    <Link href="/services/e-commerce" className="text-offwhite  text-sm font-normal mb-6 space-links">Boutique en ligne</Link>
                  </li>
                  <li className='mb-5'>
                    <Link href="/services/e-marketing" className="text-offwhite  text-sm font-normal mb-6 space-links">Marketing digital</Link>
                  </li>
              </ul>
            </div>
          

          <div className="group col-span-3">
            <h3 className="text-white text-xl font-medium mb-9">Ressources</h3>
            <ul>
                  <li className='mb-5'>
                    <Link href="/services/developers" className="text-offwhite  text-sm font-normal mb-6 space-links">Developpeurs</Link>
                  </li>
                  <li className='mb-5'>
                    <Link href="/blog" className="text-offwhite  text-sm font-normal mb-6 space-links">Blogs</Link>
                  </li>
                  <li className='mb-5'>
                    <Link href="/faq" className="text-offwhite  text-sm font-normal mb-6 space-links">FAQ</Link>
                  </li>
                  <li className='mb-5'>
                    <Link href="/terms" className="text-offwhite  text-sm font-normal mb-6 space-links">Terms & Conditions</Link>
                  </li>
                  <li className='mb-5'>
                    <Link href="/privacy" className="text-offwhite  text-sm font-normal mb-6 space-links">Privacy Policy</Link>
                  </li>
                
            </ul>
          </div>

          <div className="group col-span-2">
            <h3 className="text-white text-xl font-medium mb-9">Contact</h3>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/inputIcon.svg'} alt="join-us-icon" width={20} height={20} /><Link href="/join-us">Nous Rejoindre</Link></h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} /><a href="tel:+237698618200">(+237) 698 618 200</a></h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} /><a href="tel:+237676411506">(+237) 676 411 506</a></h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/email.svg'} alt="email-icon" width={20} height={20} /><a href="mailto:support@mysoleas.com" target="_blank">support@mysoleas.com</a></h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20} />Douala CAMEROUN</h4>
          </div>

        </div>
      </div>

      {/* All Rights Reserved */}

      <div className='py-8 px-4 border-t border-t-lightblue'>
        <h3 className='text-center text-offwhite'>@2023 - All Rights Reserved by <Link href="https://mysoleas.com/" target="_blank">MYSOLEAS</Link></h3>
      </div>

    </div>
  )
}

export default footer;
