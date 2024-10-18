import { Metadata } from 'next'
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Developper son e-commerce grace à SoleasPay',
  description: 'Creer, personnalisez et boostez votre activité grace au service e-business de SoleasPay et vendez partout dans le monde',
}

interface data {
  id: string;
  title: string;
  description: string;
  image: string;
}

const data: data[] = [

  {
    id: "1",
    title: "",
    description: 'SoleasPay propose une solution complète et innovante pour les entrepreneurs souhaitant se lancer dans le e-commerce avec <strong>l’e-Business</strong>, un module permettant de créer une boutique en ligne entièrement personnalisable en quelques clics. Ce service ne se contente pas de faciliter la création d’une boutique : il est conçu pour offrir une <strong>expérience de vente fluide et professionnelle</strong>, adaptée aux besoins spécifiques de chaque entreprise.<br /><br /> <span style="color:#FFA500"><strong>Pourquoi choisir l’e-Business de SoleasPay ?</strong></span> <br /><br/> 1. <strong>Création simple et rapide</strong> : En quelques clics, vous pouvez configurer et personnaliser votre boutique, ajouter des produits et ajuster les paramètres pour refléter l\'identité de votre marque. <br /><br /> 2. <strong>Personnalisation complète</strong> : Chaque aspect de la boutique est modifiable, de l\'apparence générale jusqu’aux descriptions de produits, garantissant une boutique qui se distingue. <br /><br/>3. <strong>Gestion centralisée</strong> : Toutes vos transactions sont intégrées à la plateforme SoleasPay, offrant une vue d’ensemble de vos paiements, commandes et rapports financiers, le tout en un seul endroit. <br/><br/>4. <strong>Intégration avec MyShup</strong> : Pour maximiser votre visibilité, la boutique que vous créez via SoleasPay est également intégrée à <strong>MyShup</strong>, une application dédiée à la distribution de produits et services. Cette application vous permet d’élargir votre portée en touchant de nouveaux clients au-delà de votre réseau habituel. Vous pouvez découvrir davantage sur MyShup en visitant <a href="https://myshup.biz">le site de myshup.biz</a>.<br /><br/> <span style="color:#FFA500"><strong>Concrètement, comment cela vous aide ?</strong></span> <br /><br/>Avec <strong>SoleasPay e-Business</strong>, vous n’avez pas besoin de compétences techniques poussées pour entrer dans le monde du commerce en ligne. L’interface intuitive et l’accompagnement proposé vous permettent de démarrer rapidement. Que vous soyez un entrepreneur en quête de nouveaux canaux de vente ou un commerçant cherchant à moderniser son activité, SoleasPay offre une solution sur mesure.<br/><br/> <strong>Prêt à passer à l\'action ?</strong> Inscrivez-vous dès aujourd\'hui sur <a href="https://app.soleaspay.com/auth/register">SoleasPay</a> et lancez votre boutique en ligne pour commencer à vendre sans plus attendre. SoleasPay vous accompagne à chaque étape de votre transformation digitale ! <br/><br/>Ce service est un véritable atout pour quiconque veut <strong>accélérer sa croissance dans le e-commerce</strong> et répondre aux attentes des consommateurs d\'aujourd\'hui, à la recherche de <strong>flexibilité, de sécurité et d\'accessibilité</strong.',
    image: '/images/Services/e-business.webp'
  },
  {
    id: "2",
    title: "Bouton et Formulaire de Paiement",
    description: 'Le bouton de paiement et le formulaire de paiement sont des outils essentiels pour tout site de commerce en ligne. En intégrant un bouton de paiement directement sur vos pages de produits ou de services, vos clients peuvent finaliser leurs achats en un seul clic, sans quitter votre site. Cela simplifie grandement l\'expérience utilisateur en réduisant le nombre d\'étapes nécessaires pour effectuer un paiement, ce qui diminue les abandons de panier et augmente les conversions. <br/><br/>Le formulaire de paiement, quant à lui, permet de recueillir toutes les informations de manière sécurisée et personnalisable. Vous pouvez l\'adapter à vos besoins spécifiques, en demandant uniquement les informations pertinentes. Les formulaires de paiement SoleasPay sont entièrement optimisés pour être fluides et compatibles avec tous les appareils. Cette flexibilité permet à vos clients de choisir la méthode de paiement qui leur convient le mieux, tout en leur offrant une expérience de paiement cohérente et fiable.',
    image: '/images/Faq/faq.svg'
  },
  {
    id: "3",
    title: "Intégration de l'API de Paiement SoleasPay",
    description: 'L\'API de paiement SoleasPay offre une solution puissante et flexible pour intégrer des fonctionnalités de paiement directement dans vos applications et sites web. Que vous gériez une plateforme e-commerce, une marketplace ou un service en ligne, l\'intégration de cette API vous permet de personnaliser complètement l\'expérience de paiement selon vos besoins. Grâce à cette API, vous pouvez traiter des paiements de manière automatisée, suivre les transactions en temps réel, et offrir une gamme de méthodes de paiement à vos clients.<br /><br /> L\'avantage clé de l\'API SoleasPay réside dans sa facilité d\'intégration et sa documentation claire, qui permet aux développeurs d\'ajouter des fonctionnalités de paiement de manière rapide et sécurisée. Cette solution est parfaitement adaptée aux entreprises souhaitant garder le contrôle total sur leurs flux de paiement, tout en bénéficiant de la sécurité et de la fiabilité de SoleasPay.',
    image: "/images/payments.png",
  },

]

export default function Business() {

  return (
    <div className="mx-auto max-w-7xl my-20 px-6" id="e-business">
      <h1  className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-7">
        L'E-Commerce By SoleasPay
      </h1>
      
      <div className="mx-auto max-w-7xl">            
            <div className={`lg:grid lg:grid-cols-1 lg:gap-10`}>
            <div className="flex justify-center items-center">
                <Image
                  src={`${data[0].image}`}
                  alt={`Image for ${data[0].title}`}
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              {/* Texte */}
              <div className="mx-auto w-full max-w-5xl rounded-2xl py-8 px-6 mb-5 flex flex-col justify-center">
                <h2
                  style={{ color: "#FFA500" }}
                  className="text-center font-bold text-3xl lg:text-2xl text-offwhite"
                >
                  {data[0].title}
                </h2>
                <p
                  className="text-white md:text-lg font-normal mb-10 md:text-start"
                  dangerouslySetInnerHTML={{ __html: data[0].description }}
                ></p>
              </div>              
            </div>
            
      </div>
    </div>
  )
}
