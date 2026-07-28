import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collecter ses paiements via l\'agregateur SoleasPay',
  description: 'Emettre et recevoir ses paiements via une multitude de moyens de paiements disponible sur SoleasPay',
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
    title: "QR Code et Lien de Paiement : La Simplicité à Portée de Main",
    description: 'Avec SoleasPay, le paiement par QR code et le lien de paiement offrent à vos clients une solution ultra-simple et rapide pour régler leurs achats. Grâce au QR code, les transactions sont facilitées : vos clients n’ont qu’à scanner le code avec leur téléphone pour accéder instantanément à un formulaire de paiement sécurisé. C’est une solution idéale pour les commerces physiques ou lors d’événements, où la rapidité est primordiale. <br/><br/> Le lien de paiement, quant à lui, est parfait pour les ventes en ligne ou à distance. Vous envoyez un lien personnalisé à vos clients par email, SMS ou tout autre canal de communication, leur permettant d’effectuer le paiement en quelques clics, sans aucune intégration technique complexe. Cette solution apporte une flexibilité accrue, que ce soit pour vendre des produits ou services, collecter des dons, ou régler des factures. <br/><br/> Ces deux options simplifient considérablement le parcours d’achat, améliorent l’expérience utilisateur, et réduisent le temps de traitement des transactions. En tant que commerçant, vous bénéficiez d’une méthode de paiement moderne et sécurisée qui renforce la confiance de vos clients et améliore votre efficacité',
    image: '/images/Services/qr-code.webp'
  },
  {
    id: "2",
    title: "Bouton et Formulaire de Paiement",
    description: 'Le bouton de paiement et le formulaire de paiement sont des outils essentiels pour tout site de commerce en ligne. En intégrant un bouton de paiement directement sur vos pages de produits ou de services, vos clients peuvent finaliser leurs achats en un seul clic, sans quitter votre site. Cela simplifie grandement l\'expérience utilisateur en réduisant le nombre d\'étapes nécessaires pour effectuer un paiement, ce qui diminue les abandons de panier et augmente les conversions. <br/><br/>Le formulaire de paiement, quant à lui, permet de recueillir toutes les informations de manière sécurisée et personnalisable. Vous pouvez l\'adapter à vos besoins spécifiques, en demandant uniquement les informations pertinentes. Les formulaires de paiement SoleasPay sont entièrement optimisés pour être fluides et compatibles avec tous les appareils. Cette flexibilité permet à vos clients de choisir la méthode de paiement qui leur convient le mieux, tout en leur offrant une expérience de paiement cohérente et fiable.',
    image: '/images/Services/pay-button.webp'
  },
  {
    id: "3",
    title: "Intégration de l'API de Paiement SoleasPay",
    description: 'L\'API de paiement SoleasPay offre une solution puissante et flexible pour intégrer des fonctionnalités de paiement directement dans vos applications et sites web. Que vous gériez une plateforme e-commerce, une marketplace ou un service en ligne, l\'intégration de cette API vous permet de personnaliser complètement l\'expérience de paiement selon vos besoins. Grâce à cette API, vous pouvez traiter des paiements de manière automatisée, suivre les transactions en temps réel, et offrir une gamme de méthodes de paiement à vos clients.<br /><br /> L\'avantage clé de l\'API SoleasPay réside dans sa facilité d\'intégration et sa documentation claire, qui permet aux développeurs d\'ajouter des fonctionnalités de paiement de manière rapide et sécurisée. Cette solution est parfaitement adaptée aux entreprises souhaitant garder le contrôle total sur leurs flux de paiement, tout en bénéficiant de la sécurité et de la fiabilité de SoleasPay.',
    image: "/images/Services/api-integration.webp",
  },

]

export default function Payments() {

  return (
    <div className="mx-auto max-w-7xl my-20 px-6" id="payments">
      <h1  className="text-center text-3xl lg:text-5xl font-bold text-ink mb-7">
        Emettre et recevoir des paiements
      </h1>
      <p className='text-muted py-5 px-5'>SoleasPay met à votre disposition une panoplie de solutions de paiement modernes, conçues pour répondre aux besoins variés des marchands et de leurs clients. Vous pouvez accepter les paiements via des méthodes simples et sécurisées comme le QR code, le lien de paiement, ou encore intégrer notre bouton et formulaire de paiement directement sur votre site. Notre service d'e-facturier simplifie la gestion de vos factures, et pour une flexibilité maximale, notre API vous permet d'intégrer facilement toutes ces options dans vos systèmes existants.</p>
      <div className="mx-auto max-w-7xl">
            <div className={`lg:grid lg:grid-cols-2 lg:gap-10`}>
              {/* Texte */}
              <div className="mx-auto w-full max-w-5xl rounded-2xl py-8 px-6 mb-5 flex flex-col justify-center">
                <h2
                  className="text-center font-bold text-3xl lg:text-2xl text-primary mb-8"
                >
                  {data[0].title}
                </h2>
                <p
                  className="text-muted md:text-lg font-normal mb-10 md:text-start"
                  dangerouslySetInnerHTML={{ __html: data[0].description }}
                ></p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center">
                <img
                  src={`${data[0].image}`}
                  alt={`Image for ${data[0].title}`}
                  width={500}
                  height={300}
                  className="rounded-lg border border-border shadow-[0_4px_14px_rgba(26,35,126,0.06)]"
                />
              </div>
            </div>


            <div className={`lg:grid lg:grid-cols-2 lg:gap-10 mt-2`}>
              {/* Image */}
              <div className="flex justify-center items-center">
                <img
                  src={`${data[1].image}`}
                  alt={`Image for ${data[1].title}`}
                  width={500}
                  height={300}
                  className="rounded-lg border border-border shadow-[0_4px_14px_rgba(26,35,126,0.06)]"
                />
              </div>
              {/* Texte */}
              <div className="mx-auto w-full max-w-5xl rounded-2xl py-8 px-6 mb-5 flex flex-col justify-center">
                <h2
                  className="text-center font-bold text-3xl lg:text-2xl text-primary mb-8"
                >
                  {data[1].title}
                </h2>
                <p
                  className="text-muted md:text-lg font-normal mb-10 md:text-start"
                  dangerouslySetInnerHTML={{ __html: data[1].description }}
                ></p>
              </div>

            </div>
            <div className={`lg:grid lg:grid-cols-2 lg:gap-10`}>
              {/* Texte */}
              <div className="mx-auto w-full max-w-5xl rounded-2xl py-8 px-6 mb-5 flex flex-col justify-center">
                <h2
                  className="text-center font-bold text-3xl lg:text-2xl text-primary mb-8"
                >
                  {data[2].title}
                </h2>
                <p
                  className="text-muted md:text-lg font-normal mb-10 md:text-start"
                  dangerouslySetInnerHTML={{ __html: data[2].description }}
                ></p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center">
                <img
                  src={`${data[2].image}`}
                  alt={`Image for ${data[2].title}`}
                  width={500}
                  height={300}
                  className="rounded-lg border border-border shadow-[0_4px_14px_rgba(26,35,126,0.06)]"
                />
              </div>
            </div>
      </div>
    </div>
  )
}