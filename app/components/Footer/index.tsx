import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "../../config/company";

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
    imgsrc: "/home/images/Footer/linkedin.svg",
    href: "https://www.linkedin.com/showcase/soleaspay",
  },
  {
    imgsrc: "/home/images/Footer/insta.svg",
    href: "https://instagram.com/soleaspay",
  },
  {
    imgsrc: "/home/images/Footer/twitter.svg",
    href: "https://twitter.com/mysoleas",
  },
  {
    imgsrc: "/home/images/Footer/youtube.svg",
    href: "https://youtube.com/soleaspay",
  },
];

const footer = () => {
  return (
    <div className="relative section-dark">
      <div className="mx-auto max-w-2xl pt-24 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-2">
            <Image
              src={"/home/images/Footer/sectigo.svg"}
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
          <div className="group relative col-span-2">
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
                  href="/services/payments"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Checkout & liens
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
              <li className="mb-4">
                <Link
                  href="/services/developers"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN-3 */}
          <div className="group col-span-2">
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
                  href={companyInfo.documentationUrl}
                  target="_blank"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Documentation
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
            </ul>
          </div>

          {/* COLUMN-4 */}
          <div className="group col-span-2">
            <h3 className="text-white text-xl font-semibold mb-8">Entreprise</h3>
            <ul>
              <li className="mb-4">
                <Link
                  href="/about"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  À propos
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/contact"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/join-us"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Nous Rejoindre
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN-5 */}
          <div className="group col-span-2">
            <h3 className="text-white text-xl font-semibold mb-8">Légal</h3>
            <ul>
              <li className="mb-4">
                <Link
                  href="/terms"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Conditions générales
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/privacy"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/legal/refund-policy"
                  className="text-inverse-muted text-sm font-normal space-links"
                >
                  Politique de remboursement
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN-6 */}
          <div className="group col-span-2">
            <h3 className="text-white text-xl font-semibold mb-8">Contact</h3>
            <h4 className="text-inverse-muted text-sm font-normal mb-5 flex gap-2 min-w-0">
              <Image
                src={"/home/images/Footer/inputIcon.svg"}
                alt="join-us-icon"
                width={20}
                height={20}
                className="shrink-0"
              />
              <Link href="/contact" className="min-w-0 break-words [overflow-wrap:anywhere]">Nous contacter</Link>
            </h4>
            <h4 className="text-inverse-muted text-sm font-normal mb-5 flex gap-2 min-w-0">
              <Image
                src={"/home/images/Footer/number.svg"}
                alt="number-icon"
                width={20}
                height={20}
                className="shrink-0"
              />
              <a
                href={`tel:${companyInfo.phones[0].replace(/\s/g, "")}`}
                className="min-w-0 break-words [overflow-wrap:anywhere]"
              >
                {companyInfo.phones[0]}
              </a>
            </h4>
            <h4 className="text-inverse-muted text-sm font-normal mb-5 flex gap-2 min-w-0">
              <Image
                src={"/home/images/Footer/number.svg"}
                alt="number-icon"
                width={20}
                height={20}
                className="shrink-0"
              />
              <a
                href={`tel:${companyInfo.phones[1].replace(/\s/g, "")}`}
                className="min-w-0 break-words [overflow-wrap:anywhere]"
              >
                {companyInfo.phones[1]}
              </a>
            </h4>
            <h4 className="text-inverse-muted text-sm font-normal mb-5 flex gap-2 min-w-0">
              <Image
                src={"/home/images/Footer/email.svg"}
                alt="email-icon"
                width={20}
                height={20}
                className="shrink-0"
              />
              <a
                href={`mailto:${companyInfo.supportEmail}`}
                target="_blank"
                className="min-w-0 break-words [overflow-wrap:anywhere]"
              >
                {companyInfo.supportEmail}
              </a>
            </h4>
            <h4 className="text-inverse-muted text-sm font-normal mb-5 flex gap-2 min-w-0">
              <Image
                src={"/home/images/Footer/email.svg"}
                alt="business-email-icon"
                width={20}
                height={20}
                className="shrink-0"
              />
              <a
                href={`mailto:${companyInfo.businessEmail}`}
                target="_blank"
                className="min-w-0 break-words [overflow-wrap:anywhere]"
              >
                {companyInfo.businessEmail}
              </a>
            </h4>
            <h4 className="text-inverse-muted text-sm font-normal mb-5 flex gap-2 min-w-0">
              <Image
                src={"/home/images/Footer/address.svg"}
                alt="address-icon"
                width={20}
                height={20}
                className="shrink-0"
              />
              <span className="min-w-0 break-words [overflow-wrap:anywhere]">
                {companyInfo.businessAddress}
              </span>
            </h4>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="py-6 px-4 border-t border-t-[rgba(255,255,255,0.1)]">
        <h3 className="text-center text-inverse-muted text-sm">
          ©{new Date().getFullYear()} - All Rights Reserved by{" "}
          <Link
            href={companyInfo.parentWebsite}
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
