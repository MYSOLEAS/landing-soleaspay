import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carte virtuelle SoleasPay',
  description: 'Creez et managez en toutes simplicité des cartes visa virtuelle SoleasPay et beneficiez d\'un controle total sur vos depenses',
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
    title: "Prennez le Controle sur vos depenses",
    description: 'Les cartes virtuelles de SoleasPay représentent une solution moderne et flexible pour sécuriser vos achats en ligne. Elles vous permettent de mieux contrôler votre budget en émettant des cartes directement en dollars. Grâce à cette approche, il devient plus facile d’anticiper les dépenses sans les fluctuations inattendues des taux de change. En plus de la gestion budgétaire, les cartes virtuelles renforcent la sécurité d’usage, car elles limitent l’exposition des informations de votre carte bancaire principale lors de transactions en ligne.<br/><br/> Le confort d’utilisation est un autre atout majeur : une carte peut être créée et gérée entièrement en ligne. Vous pouvez la verrouiller, la déverrouiller ou définir des limites d’utilisation selon vos besoins, avec davantage de contrôle sur vos finances.<br/><br/> L’un des avantages distinctifs des cartes virtuelles SoleasPay est la possibilité de créer plusieurs cartes, chacune destinée à un usage spécifique, comme un abonnement ou un achat unique. Toutes ces cartes peuvent être gérées facilement au même endroit, offrant ainsi une vision claire et centralisée de vos dépenses.',
    image: '/home/images/Services/card.webp'
  },
  {
    id: "2",
    title: "Bouton et Formulaire de Paiement",
    description: 'Le bouton de paiement et le formulaire de paiement sont des outils essentiels pour tout site de commerce en ligne. En intégrant un bouton de paiement directement sur vos pages de produits ou de services, vos clients peuvent finaliser leurs achats en un seul clic, sans quitter votre site. Cela simplifie grandement l\'expérience utilisateur en réduisant le nombre d\'étapes nécessaires pour effectuer un paiement, ce qui diminue les abandons de panier et augmente les conversions. <br/><br/>Le formulaire de paiement, quant à lui, permet de recueillir toutes les informations de manière sécurisée et personnalisable. Vous pouvez l\'adapter à vos besoins spécifiques, en demandant uniquement les informations pertinentes. Les formulaires de paiement SoleasPay sont entièrement optimisés pour être fluides et compatibles avec tous les appareils. Cette flexibilité permet à vos clients de choisir la méthode de paiement qui leur convient le mieux, tout en leur offrant une expérience de paiement cohérente et fiable.',
    image: '/home/images/Faq/faq.svg'
  },
  {
    id: "3",
    title: "Intégration de l'API de Paiement SoleasPay",
    description: 'L\'API de paiement SoleasPay offre une solution puissante et flexible pour intégrer des fonctionnalités de paiement directement dans vos applications et sites web. Que vous gériez une plateforme e-commerce, une marketplace ou un service en ligne, l\'intégration de cette API vous permet de personnaliser complètement l\'expérience de paiement selon vos besoins. Grâce à cette API, vous pouvez traiter des paiements de manière automatisée, suivre les transactions en temps réel, et offrir une gamme de méthodes de paiement à vos clients.<br /><br /> L\'avantage clé de l\'API SoleasPay réside dans sa facilité d\'intégration et sa documentation claire, qui permet aux développeurs d\'ajouter des fonctionnalités de paiement de manière rapide et sécurisée. Cette solution est parfaitement adaptée aux entreprises souhaitant garder le contrôle total sur leurs flux de paiement, tout en bénéficiant de la sécurité et de la fiabilité de SoleasPay.',
    image: "/home/images/payments.png",
  },

]

export default function Cards() {

  return (
    <div className="mx-auto max-w-7xl my-20 px-6" id="payments">
      <h1  className="text-center text-3xl lg:text-5xl font-bold text-ink mb-7">
        Cartes virtuelles SoleasPay
      </h1>
      <p className='text-center text-muted py-5 px-5'>
         </p>
      <div className="mx-auto max-w-7xl">
            <div className={`lg:grid lg:grid-cols-2 lg:gap-10`}>
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
            </div>

      </div>
    </div>
  )
}
