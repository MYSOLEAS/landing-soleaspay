import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  BanknotesIcon,
  BuildingStorefrontIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  CubeTransparentIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  LinkIcon,
  LockClosedIcon,
  QrCodeIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { companyInfo, paymentAvailabilityNotice } from "../../config/company";

const paymentMethods = [
  { name: "Orange Money", image: "/home/images/Table/services/om.svg" },
  { name: "MTN MoMo", image: "/home/images/Table/services/momo.svg" },
  { name: "Wave", image: "/home/images/Table/services/wave.png" },
  { name: "Moov Money", image: "/home/images/Table/services/moov.png" },
  { name: "TMoney", image: "/home/images/Table/services/tmoney.png" },
  { name: "Cards", image: "/home/images/Table/services/card.png" },
];

const capabilities = [
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Money",
    text: "Acceptez les wallets locaux disponibles selon le pays et le marchand.",
    href: "/services/payments",
  },
  {
    icon: BanknotesIcon,
    title: "Cards",
    text: "Activez les paiements par carte lorsque le moyen est disponible et autorise.",
    href: "/services/payments",
  },
  {
    icon: LinkIcon,
    title: "Payment Links",
    text: "Partagez un lien de paiement sans developpement specifique.",
    href: "/services/payments",
  },
  {
    icon: ShoppingCartIcon,
    title: "Checkout",
    text: "Proposez une experience de paiement prete a l'emploi.",
    href: "/services/payments",
  },
  {
    icon: QrCodeIcon,
    title: "QR Payment",
    text: "Facilitez les encaissements par QR lorsque ce parcours est disponible.",
    href: "/services/payments",
  },
  {
    icon: CodeBracketIcon,
    title: "API",
    text: "Construisez une experience personnalisee autour de vos propres flux.",
    href: "/services/developers",
  },
  {
    icon: DocumentTextIcon,
    title: "Invoices",
    text: "Creez et suivez des demandes de paiement via l'e-facturier.",
    href: "/services/e-bills",
  },
  {
    icon: Squares2X2Icon,
    title: "Plugins",
    text: "Integrez SoleasPay plus vite avec les plugins disponibles.",
    href: "#plugins",
  },
];

const useCases = [
  {
    icon: BuildingStorefrontIcon,
    title: "E-commerce",
    text: "Recevez les paiements depuis votre boutique avec la checkout, le bouton ou le lien de paiement.",
  },
  {
    icon: CodeBracketIcon,
    title: "SaaS et apps",
    text: "Intégrez les paiements directement dans votre produit via l\'API ou le bouton.",
  },
  {
    icon: CubeTransparentIcon,
    title: "PME",
    text: "Centralisez les encaissements, factures et suivis de transactions.",
  },
  {
    icon: LinkIcon,
    title: "Services et freelances",
    text: "Envoyez un lien de paiement et suivez la transaction depuis un seul espace.",
  },
];

const trustItems = [
  "KYC et informations marchand (KYB) requis",
  "Suivi des transactions depuis le dashboard",
  "Intégration avec des partenaires de paiement et financiers",
  "Mesures techniques et organisationnelles de protection des données",
];

export function PaymentMethodsTrust() {
  return (
    <section className="bg-white py-14 px-6" id="payment-infrastructure">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="feature-font text-sm font-semibold uppercase tracking-wide">
            Paiements sans frontiere. Une seule infrastructure.
          </span>
          <h2 className="text-ink text-3xl md:text-5xl font-bold mt-2 mb-4">
            Connectez votre activité aux moyens de paiement que vos clients utilisent déjà.
          </h2>
          <p className="text-muted md:text-lg leading-8">
            SoleasPay agit comme une couche unique entre votre entreprise et les
            moyens de paiement disponibles sur vos marches. {paymentAvailabilityNotice}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {paymentMethods.map((method) => (
            <div
              className="bg-white border border-border rounded-2xl min-h-[120px] p-4 flex flex-col items-center justify-center gap-3 shadow-[0_4px_14px_rgba(26,35,126,0.05)]"
              key={method.name}
            >
              <Image
                src={method.image}
                alt={method.name}
                width={84}
                height={50}
                className="h-12 w-auto object-contain"
              />
              <p className="text-sm font-semibold text-ink text-center">{method.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PaymentFlowProblem() {
  return (
    <section className="section-alt py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div>
            <span className="feature-font text-sm font-semibold uppercase tracking-wide">
              Le problème
            </span>
            <h2 className="text-ink text-3xl md:text-5xl font-bold mt-2 mb-5">
              Accepter des paiements ne devrait pas nécessiter plusieurs intégrations.
            </h2>
            <p className="text-muted md:text-lg leading-8 mb-8">
              Quand chaque moyen de paiement devient un projet séparé, les
              équipes perdent du temps entre les intégrations, les dashboards et
              les suivis opérationnels.
            </p>
            <Link href="/services/payments" className="btn-outline px-6 py-3 font-semibold">
              Voir les solutions de paiement
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-[0_4px_14px_rgba(26,35,126,0.05)]">
              <p className="text-sm font-semibold text-muted uppercase mb-5">
                Sans orchestration
              </p>
              <div className="space-y-3 text-sm text-muted">
                {[
                  "Business",
                  "Orange Money integration",
                  "MTN integration",
                  "Card provider",
                  "Multiple dashboards",
                ].map((item, index) => (
                  <div className="flex items-center gap-3" key={item}>
                    <span className="h-7 w-7 rounded-full bg-surface-2 text-primary flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-primary/20 rounded-2xl p-6 shadow-[0_12px_30px_rgba(26,35,126,0.08)]">
              <p className="text-sm font-semibold text-primary uppercase mb-5">
                Avec SoleasPay
              </p>
              <div className="space-y-4">
                {["Business", "SoleasPay", "Dashboard unifié"].map((item, index) => (
                  <div className="flex items-center gap-3" key={item}>
                    <span className="h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-ink">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted text-sm leading-7 mt-6">
                Une seule couche pour connecter, suivre et faire évoluer vos
                parcours de paiement selon les moyens de paiements disponibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CapabilityGrid() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-12">
          <span className="feature-font text-sm font-semibold uppercase tracking-wide">
            Une infrastructure, plusieurs possibilités
          </span>
          <h2 className="text-ink text-3xl md:text-5xl font-bold mt-2 mb-4">
            Choisissez le parcours de paiement adapté à votre activité.
          </h2>
          <p className="text-muted md:text-lg leading-8">
            API, checkout, liens, QR ou factures : SoleasPay vous laisse avancer
            avec le niveau d'intégration dont votre équipe a besoin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <div
                className="bg-white border border-border rounded-2xl p-6 min-h-[220px] shadow-[0_4px_14px_rgba(26,35,126,0.05)]"
                key={capability.title}
              >
                <div className="h-11 w-11 rounded-full bg-surface-2 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{capability.title}</h3>
                <p className="text-muted text-sm leading-7 mb-4">{capability.text}</p>
                <Link href={capability.href} className="text-primary text-sm font-semibold inline-flex items-center gap-1">
                  En savoir plus <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    ["Créez votre compte", "Configurez votre entreprise et les informations nécessaires."],
    ["Faite valider votre KYC/KYB", "Fournissez les éléments justificatif pour soutenir les informations de votre compte."],
    ["Choisissez votre integration", "API, checkout, lien de paiement ou bouton selon votre besoin."],
    ["Acceptez les paiements", "Vos clients paient avec les moyens disponibles pour leur marché."],
    ["Pilotez l'activité", "Suivez transactions et operations depuis votre dashboard."],
    ["Grandissez", "Generez des revenus et développez votre entreprise."],
    
  ];

  return (
    <section className="section-alt py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="feature-font text-sm font-semibold uppercase tracking-wide">
            Comment ça marche ?
          </span>
          <h2 className="text-ink text-3xl md:text-5xl font-bold mt-2 mb-4">
            Commencez à accepter des paiements en quelques etapes.
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map(([title, text], index) => (
            <div
              className="bg-white border border-border rounded-2xl p-6 shadow-[0_4px_14px_rgba(26,35,126,0.05)]"
              key={title}
            >
              <span className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-5">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-ink mb-2">{title}</h3>
              <p className="text-muted text-sm leading-7">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductPreview() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="feature-font text-sm font-semibold uppercase tracking-wide">
            Encaissement Habile
          </span>
          <h2 className="text-ink text-3xl md:text-5xl font-bold mt-2 mb-5">
            Tout votre paiement. Un seul espace.
          </h2>
          <p className="text-muted md:text-lg leading-8 mb-8">
            SoleasPay rassemble les parcours utiles aux marchands : liens de
            paiement, QR Codes, factures, moyens de paiement, transactions et outils
            d'intégration.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {["Payments", "Transactions", "Payment methods", "Integrations"].map((item) => (
              <div className="flex items-center gap-2 text-sm text-muted" key={item}>
                <CheckCircleIcon className="h-5 w-5 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-border bg-surface p-4 shadow-[0_20px_50px_rgba(26,35,126,0.12)]">
            <div className="rounded-xl bg-white border border-border overflow-hidden">
              <Image
                src="/home/images/Banner/bannerphone.png"
                alt="SoleasPay product interface preview"
                width={1014}
                height={760}
                className="w-full h-auto"
                priority={false}
              />
            </div>
          </div>
          <p className="text-xs text-muted mt-3 text-center">
            Interface produit issue des assets existants du site SoleasPay.
          </p>
        </div>
      </div>
    </section>
  );
}

export function UseCases() {
  return (
    <section className="section-alt py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-12">
          <span className="feature-font text-sm font-semibold uppercase tracking-wide">
            Cas d'usage
          </span>
          <h2 className="text-ink text-3xl md:text-5xl font-bold mt-2 mb-4">
            SoleasPay s'adapte a votre activité.
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Que vous vendiez en ligne, intégriez une app ou facturiez des
            services, vous pouvez demarrer avec le parcours le plus simple puis
            évoluer vers une intégration plus avancée.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <div
                className="bg-white border border-border rounded-2xl p-6 shadow-[0_4px_14px_rgba(26,35,126,0.05)]"
                key={useCase.title}
              >
                <Icon className="h-8 w-8 text-primary mb-5" strokeWidth={1.75} />
                <h3 className="text-lg font-semibold text-ink mb-2">{useCase.title}</h3>
                <p className="text-muted text-sm leading-7">{useCase.text}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <Link href="https://business.soleaspay.com/register" className="navbutton px-7 py-3 font-semibold">
            Créer mon compte
          </Link>
        </div>
      </div>
    </section>
  );
}

export function DeveloperExperience() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="feature-font text-sm font-semibold uppercase tracking-wide">
            Creer pour les developpeurs. Simple pour les entreprises.
          </span>
          <h2 className="text-ink text-3xl md:text-5xl font-bold mt-2 mb-5">
            Une intégration lisible pour aller plus vite.
          </h2>
          <p className="text-muted md:text-lg leading-8 mb-8">
            Le site reference un bouton de paiement, une API, une documentation
            publique et des plugins pour accelerer l'integration sur vos
            projets web.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={companyInfo.documentationUrl}
              target="_blank"
              className="navbutton px-7 py-3 font-semibold"
            >
              Voir la documentation
            </Link>
            <Link href="/services/developers" className="btn-outline px-7 py-3 font-semibold">
              Page developpeurs
            </Link>
          </div>
        </div>
        <div className="code-window">
          <div className="code-window__bar">
            <span className="code-window__dot" style={{ background: "#ff5f57" }}></span>
            <span className="code-window__dot" style={{ background: "#febc2e" }}></span>
            <span className="code-window__dot" style={{ background: "#28c840" }}></span>
            <span className="code-window__filename">soleaspay-button.html</span>
          </div>
          <pre className="code-window__body min-h-0 overflow-x-auto">
{`<script
  id="SBScript"
  data-apikey="\${YOUR_API_KEY}"
  src="https://btn.soleaspay.com/main.js">
</script>

SopayButton.pay({
  amount: 25,
  currency: "USD",
  orderId: "ORDER-001",
  businessName: "Shop Name"
})`}
          </pre>
        </div>
      </div>
    </section>
  );
}

export function GrowthMarkets() {
  const markets = [
    { code: "CM", label: "Cameroon", image: "/home/images/Table/country/cm.svg" },
    { code: "CI", label: "Cote d'Ivoire", image: "/home/images/Table/country/ci.svg" },
    { code: "SN", label: "Senegal", image: "/home/images/Table/country/sn.svg" },
    { code: "BJ", label: "Benin", image: "/home/images/Table/country/bj.svg" },
    { code: "TG", label: "Togo", image: "/home/images/Table/country/tg.svg" },
    { code: "GH", label: "Ghana", image: "/home/images/Table/country/gh.svg" },
  ];

  return (
    <section className="section-alt py-20 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="feature-font text-sm font-semibold uppercase tracking-wide">
            Payments locaux. Une seule infrastructure.
          </span>
          <h2 className="text-ink text-3xl md:text-5xl font-bold mt-2 mb-5">
            Pensé pour les réalités locales. Construit pour grandir au-delà des frontieres.
          </h2>
          <p className="text-muted md:text-lg leading-8">
            La plateforme SoleasPay reférence plusieurs pays, moyens de paiement et
            partenaires. Leur disponibilité éffective dépend du pays, de la
            devise, du partenaire et de l'éligibilité du marchand.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {markets.map((market) => (
            <div
              className="bg-white border border-border rounded-2xl p-5 flex items-center gap-3 shadow-[0_4px_14px_rgba(26,35,126,0.05)]"
              key={market.code}
            >
              <Image src={market.image} alt={market.label} width={34} height={34} className="rounded-full" />
              <div>
                <p className="font-semibold text-ink text-sm">{market.label}</p>
                <p className="text-xs text-muted">Marché référencé</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SecurityTrust() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="feature-font text-sm font-semibold uppercase tracking-wide">
            Confiance & sécurité
          </span>
          <h2 className="text-ink text-3xl md:text-5xl font-bold mt-2 mb-5">
            La confiance est au coeur du paiement.
          </h2>
          <p className="text-muted md:text-lg leading-8 mb-8">
            SoleasPay présente une approche prudente : protection des données,
            suivi operationnel, KYC/KYB lorsque applicable et coordination avec les
            partenaires de paiement. 
            Nous respectons les normes reglementaire COBAC R-2023-01 LBC/FT pour une conformité aux exigences locales et internationales.
          </p>
          <Link href="/privacy" className="btn-outline px-7 py-3 font-semibold">
            Lire la politique de confidentialité
          </Link>
        </div>
        <div className="grid gap-4">
          {trustItems.map((item) => (
            <div className="bg-surface border border-border rounded-2xl p-5 flex gap-4" key={item}>
              <ShieldCheckIcon className="h-6 w-6 text-primary shrink-0" />
              <p className="text-muted leading-7">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl section-dark rounded-2xl px-6 py-14 md:px-12 text-center">
        <LockClosedIcon className="h-10 w-10 mx-auto mb-5 text-white" strokeWidth={1.75} />
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-5">
          Pret à simplifier vos paiements ?
        </h2>
        <p className="text-inverse-muted md:text-lg leading-8 max-w-2xl mx-auto mb-8">
          Une seule infrastructure pour connecter votre entreprise aux moyens de
          paiement disponibles sur vos marchès.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://business.soleaspay.com/register"
            className="bg-white text-primary rounded-full px-8 py-4 font-semibold inline-flex items-center justify-center"
          >
            Commencer avec SoleasPay
          </Link>
          <Link href="/contact" className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white inline-flex items-center justify-center hover:bg-white/10 transition-colors">
            Parler à notre equipe
          </Link>
        </div>
      </div>
    </section>
  );
}
