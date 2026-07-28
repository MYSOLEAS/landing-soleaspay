import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Facture numerique via SoleasPay',
  description: 'Envoyez des factures numerique via SoleasPay et faites vous payer directement en un clic via tous les moyens de paiements disponible sur SoleasPay',
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
    title: "Une gestion des factures simplifiée et efficace",
    description: 'L\'e-Facturier de SoleasPay est bien plus qu\'un simple outil de facturation. Il vous permet de créer, envoyer et suivre vos factures en ligne en toute simplicité. Conçu pour répondre aux besoins des particuliers et entreprises modernes, il vous aide à gérer vos paiements rapidement et sans tracas, tout en offrant à vos clients une expérience de paiement fluide et sécurisée. <br/> Que vous soyez un particulier, une petite entreprise ou une grande structure, notre solution s’adapte à vos besoins. <br/> En intégrant cette solution dans vos processus, vous bénéficiez d\'une gestion centralisée des paiements et des facturations, réduisant ainsi les erreurs manuelles et accélérant les cycles de paiement.<br /><br /> En detail, opter pour l\'e-facturier de SoleasPay, c\'est beneficier : <ul><li><strong>* De l\'Automatisation du processus de facturation</strong> : Simplifiez la création, l\'envoi et le suivi des factures.</li><li><strong>* Du suivi en temps réel</strong> : Recevez des notifications sur l’état des paiements et des relances automatiques pour les factures impayées.</li><li><strong>* De la sécurité des transactions</strong> : Toutes les données et paiements sont sécurisés, offrant une protection optimale.</li><li><strong>* De l\'économie de temps et de ressources</strong> : Réduction des tâches manuelles, de l\'utilisation de papier, et gain d\'efficacité.</li><li><strong>* D\'une personnalisation des factures</strong> : Ajoutez le logo et les informations spécifiques à votre entreprise pour des factures professionnelles.</li></ul>',
    image: '/images/Services/e-bill.webp'
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

export default function Bills() {

  return (
    <div className="mx-auto max-w-7xl my-20 px-6" id="e-bill">
      <h1  className="text-center text-3xl lg:text-5xl font-bold text-ink mb-7">
        L'E-Facturier
      </h1>
      <p className='text-center text-muted py-5 px-5'>Generez des factures, patagez les et encsaissez votre argent en toute simplicité<br />
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