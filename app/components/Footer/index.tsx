import Image from "next/image";
import Link from "next/link";

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string;
  href: string;
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Liens",
    link: ["Accueil", "Nos Services", "Tarifs", "FAQ"],
  },
];

const socialLinks: Social[] = [
  {
    imgsrc: "/images/Footer/linkedin.svg",
    href: "https://www.linkedin.com/showcase/soleaspay",
  },
  {
    imgsrc: "/images/Footer/insta.svg",
    href: "https://instagram.com/soleaspay",
  },
  {
    imgsrc: "/images/Footer/twitter.svg",
    href: "https://twitter.com/mysoleas",
  },
  {
    imgsrc: "/images/Footer/youtube.svg",
    href: "https://youtube.com/soleaspay",
  },
];

const footer = () => {
  return (
    <div className="relative section-dark">
      <div className="mx-auto max-w-2xl pt-24 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-4">
            <Image
              src={"/images/Footer/sectigo.svg"}
              alt="sectigo"
              width={150}
              height={100}
            />
            <p className="text-inverse-muted text-sm font-normal leading-7 mt-6 mb-8 max-w-xs">
              Simplifiez vos transactions en ligne avec SoleasPay ! Notre
              solution de paiement sécurisée est rapide et facile à utiliser.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i} target="_blank">
                  <Image
                    src={items.imgsrc}
                    alt={items.imgsrc}
                    width={40}
                    height={40}
                    className="footer-icons"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="group relative col-span-3">
            <p className="text-white text-xl font-semibold mb-8">Services</p>
            <ul>
              <li className="mb-4">
                <Link
                  href="/services/payments"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Paiement
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/services/e-bills"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Facturier numerique
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/services/e-marketing"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Marketing digital
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN-3 */}
          <div className="group col-span-3">
            <h3 className="text-white text-xl font-semibold mb-8">
              Ressources
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  href="/services/developers"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Developpeurs
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/blog"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Blogs
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/faq"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  FAQ
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/terms"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/privacy"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN-4 */}
          <div className="group col-span-2">
            <h3 className="text-white text-xl font-semibold mb-8">Contact</h3>
            <h4 className="text-inverse-muted text-sm font-normal mb-5 flex gap-2">
              <Image
                src={"/images/Footer/inputIcon.svg"}
                alt="join-us-icon"
                width={20}
                height={20}
              />
              <Link href="/join-us">Nous Rejoindre</Link>
            </h4>
            <h4 className="text-inverse-muted text-sm font-normal mb-5 flex gap-2">
              <Image
                src={"/images/Footer/number.svg"}
                alt="number-icon"
                width={20}
                height={20}
              />
              <a href="tel:+237698618200">(+237) 698 618 200</a>
            </h4>
            <h4 className="text-inverse-muted text-sm font-normal mb-5 flex gap-2">
              <Image
                src={"/images/Footer/number.svg"}
                alt="number-icon"
                width={20}
                height={20}
              />
              <a href="tel:+237676411506">(+237) 676 411 506</a>
            </h4>
            <h4 className="text-inverse-muted text-sm font-normal mb-5 flex gap-2">
              <Image
                src={"/images/Footer/email.svg"}
                alt="email-icon"
                width={20}
                height={20}
              />
              <a href="mailto:support@mysoleas.com" target="_blank">
                support@mysoleas.com
              </a>
            </h4>
            <h4 className="text-inverse-muted text-sm font-normal mb-5 flex gap-2">
              <Image
                src={"/images/Footer/address.svg"}
                alt="address-icon"
                width={20}
                height={20}
              />
              Douala CAMEROUN
            </h4>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="py-6 px-4 border-t border-t-[rgba(255,255,255,0.1)]">
        <h3 className="text-center text-inverse-muted text-sm">
          ©{new Date().getFullYear()} - All Rights Reserved by{" "}
          <Link
            href="https://mysoleas.com/"
            target="_blank"
            className="text-white hover:underline"
          >
            MYSOLEAS
          </Link>
        </h3>{" "}
      </div>
    </div>
  );
};

export default footer;
