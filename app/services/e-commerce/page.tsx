import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developper son e-commerce grace à SoleasPay',
  description: 'Creer, personnalisez et boostez votre activité grace au service e-business de SoleasPay et aux moyens de paiement supportés selon les marchés disponibles',
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
    description: 'SoleasPay propose une API robuste et polyvalente pour les développeurs, leur permettant d\'intégrer facilement nos services dans leurs propres applications ou plateformes. Voici un aperçu des services accessibles via notre API, ainsi que les avantages qu\'elle offre aux développeurs : <br/><br/> <strong>* Encaissement de paiements :</strong> Grâce à l\'API de SoleasPay, vous pouvez intégrer des solutions de paiement rapides et sécurisées dans vos applications. Que vous développiez un site e-commerce, une application mobile ou un service en ligne, SoleasPay vous permet de recevoir des paiements par diverses méthodes comme les QR codes, les liens de paiement ou encore les formulaires personnalisés. Cela réduit la complexité liée à la gestion des transactions et garantit une expérience fluide pour vos utilisateurs.<br /><br /><strong>* Revente de cartes virtuelles :</strong> L\'API de SoleasPay permet également de revendre des cartes Visa virtuelles. En utilisant SoleasPay, vous pouvez créer, gérer et revendre des cartes, offrant ainsi à vos clients un moyen sécurisé et flexible de faire des achats en ligne. Les cartes étant en dollars, cela aide à mieux contrôler les dépenses.<br/><br/><strong>* Création instantanée de boutiques e-commerce :</strong> SoleasPay permet aux développeurs de créer des boutiques en ligne entièrement personnalisables en quelques clics via l\'API. Cela offre une opportunité aux entreprises et aux particuliers de lancer leur activité en ligne rapidement, sans tracas techniques.<br/> MyShup, notre application de distribution, permet également de rendre les produits visibles et accessibles à un large public.<br/><br/><span style="color:var(--sp-primary)"><strong>Pourquoi intégrer notre API ?</strong></span><br/><br/><strong>* Facilité d\'intégration :</strong> Notre documentation est claire et complète, avec des exemples de code, des guides pas-à-pas, et une API RESTful bien conçue pour simplifier l\'intégration. Accédez à notre documentation complète à l\'adresse suivante : <a style="color: var(--sp-primary); text-decoration: underline;" href="https://developper.mysoleas.com">htttps://developper.mysoleas.com</a>.<br/><br/><strong>* Sécurité et fiabilité :</strong> Nos API sont sécurisées et suivent les normes de l\'industrie pour protéger vos données et ceux de vos utilisateurs, assurant ainsi la conformité avec les régulations en vigueur.<br/><br/><strong>* Flexibilité et scalabilité :</strong> Que vous soyez une startup ou une entreprise établie, SoleasPay vous permet d\'adapter facilement vos services et d\'évoluer en fonction de la demande de votre marché.<br /><br />Avec l\'API SoleasPay, vous accédez à des services complets, à une documentation intuitive, et à une équipe de support technique prête à vous accompagner dans votre intégration.',
    image: '/home/images/Services/developer.webp'
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

export default function Business() {

  return (
    <div className="mx-auto max-w-7xl my-20 px-6" id="e-business">
      <h1  className="text-center text-3xl lg:text-5xl font-bold text-ink mb-7">
        SoleasPay pour les developpeurs
      </h1>

      <div className="mx-auto max-w-7xl">
            <div className={`lg:grid lg:grid-cols-1 lg:gap-10`}>
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
                  className="text-center font-bold text-3xl lg:text-2xl text-primary"
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
