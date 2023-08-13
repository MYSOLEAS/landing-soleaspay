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
  { imgsrc: '/images/Footer/linkedin.svg', href: "https://linkedin.com/mysoleas"},
  { imgsrc: '/images/Footer/insta.svg', href: "https://instagram.com/mysoleas"},
  { imgsrc: '/images/Footer/twitter.svg', href: "https://twitter.com/mysoleas"},
  { imgsrc: '/images/Footer/youtube.svg', href: "https://youtube.com/mysoleas"},
]


const footer = () => {
  return (
    <div className=" relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* COLUMN-1 */}

          <div className='col-span-6'>
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
                <Link href={items.href} key={i}><Image src={items.imgsrc} alt={items.imgsrc} className='footer-icons' /></Link>
              ))}
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          
            <div  className="group relative col-span-2">
              <p className="text-white text-xl font-medium mb-9">Resources</p>
              <ul>
                  <li className='mb-5'>
                    <Link href="/" className="text-offwhite  text-sm font-normal mb-6 space-links">Accueil</Link>
                  </li>
                  <li className='mb-5'>
                    <Link href="/terms" className="text-offwhite  text-sm font-normal mb-6 space-links">Terms & Conditions</Link>
                  </li>
                  <li className='mb-5'>
                    <Link href="/privacy" className="text-offwhite  text-sm font-normal mb-6 space-links">Privacy Policy</Link>
                  </li>
                
              </ul>
            </div>
          

          <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-9">Contact</h3>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} />(+237) 698 618 200</h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/email.svg'} alt="email-icon" width={20} height={20} /><a href="mailto:support@mysoleas.com">support@mysoleas.com</a></h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20} />Kotto Douala</h4>
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
