"use client";
import Link from "next/link";
import {
  DocumentTextIcon,
  LinkIcon,
  MegaphoneIcon,
  QrCodeIcon,
  ArrowsRightLeftIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import { ForwardRefExoticComponent, SVGProps, RefAttributes } from "react";

interface workdata {
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
  >;
  heading: string;
  subheading: string;
  url: string;
}

const workdata: workdata[] = [
  {
    icon: BanknotesIcon,
    heading: "PAIEMENT MARCHAND",
    subheading:
      "Que vous soyez une boutique en ligne, un marchand ou un utilisateur lamda, envoyez et recevez des paiements instantanément depuis votre compte SoleasPay.",
    url: "/services/payments",
  },
  {
    icon: DocumentTextIcon,
    heading: "E-FACTURIER",
    subheading:
      "Donnez une touche supplémentaire de professionnalisme à vos services en envoyant des factures entièrement personnalisables à vos partenaires en quelques clics seulement.",
    url: "/services/e-bills",
  },
  {
    icon: LinkIcon,
    heading: "LIENS DE PAIEMENT",
    subheading:
      "Générez gratuitement des liens de paiement pour vendre ou recevoir un paiement instantanément dans votre compte SoleasPay et gérez chacun d'eux.",
    url: "/home/work#4",
  },
  {
    icon: MegaphoneIcon,
    heading: "MARKETING BOOSTER",
    subheading:
      "Restez en contact permanent avec vos clients et partagez avec eux toutes vos nouveautés à travers des campagnes emails et sms marketing directement depuis votre compte SoleasPay.",
    url: "/services/e-marketing",
  },
  {
    icon: QrCodeIcon,
    heading: "QR CODE",
    subheading:
      "Avec SoleasPay, vous pouvez facilement obtenir un code QR pour recevoir ou effectuer des paiements.",
    url: "/services/payments",
  },
  {
    icon: ArrowsRightLeftIcon,
    heading: "E-CHANGE",
    subheading:
      "Transférez rapidement votre argent d'un de vos comptes personnels à un autre avec les taux de change les plus bas du marché.",
    url: "/services/payments",
  },
  {
    icon: GlobeAltIcon,
    heading: "PAIEMENTS INTERNATIONAUX",
    subheading:
      "SoleasPay vous permet d'accepter les paiements internationaux par les canaux légaux (Visa, Paypal, etc.) pour faciliter la vente de vos services en ligne et promouvoir la notoriété de votre produit à l'international.",
    url: "/services/payments",
  },
  {
    icon: CodeBracketIcon,
    heading: "REST APIS",
    subheading:
      "Pour des solutions personnalisées, intégrez facilement et rapidement (une seule fois) tous les moyens de paiement supportés par SoleasPay dans votre projet.",
    url: "/services/payments/",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    heading: "SUPPORT H24/7",
    subheading:
      "Une équipe technique est disponible en temps réel pour vous accompagner pas à pas 24h/24 et 7j/7.",
    url: "/join-us",
  },
];

const Work = () => {
  return (
    <div id="services" className="section-alt">
      <div className="mx-auto max-w-7xl pt-20 px-6 pb-20 relative">
        <div className="text-center mb-14">
          <span className="feature-font text-sm font-semibold uppercase tracking-wide">
            Nos solutions
          </span>
          <h3 className="text-ink text-3xl md:text-5xl font-bold mb-3 mt-2">
            La Solution !
          </h3>
          <p className="text-muted md:text-lg font-normal leading-8 max-w-2xl mx-auto">
            Nous proposons une varieté de produits et service sur mesure pour
            répondre à tous vos besoins de croissance !{" "}
            <br className="hidden md:block" />
            Tous notre savoir-faire est mis à votre disposition pour vous
            garantir des résultats à la hauteur de vos attentes à travers :{" "}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-5 mt-24">
          {workdata.map((items, i) => {
            const Icon = items.icon;
            return (
              <div className="card-b p-6 pt-10" key={i}>
                <div className="work-img-bg rounded-full flex justify-center absolute p-4 left-6">
                  <Icon className="h-9 w-9 text-white" strokeWidth={1.75} />
                </div>
                <Link href={items.url}>
                  <h6 className="text-xl text-ink font-semibold text-center mt-4 hover:text-primary">
                    {items.heading}
                  </h6>
                </Link>
                <p className="text-base font-normal text-muted text-center mt-2">
                  {items.subheading}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
