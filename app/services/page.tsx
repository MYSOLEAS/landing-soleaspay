"use client"
import React, { useEffect } from 'react'
//import { Metadata } from 'next'

//export const metadata: Metadata = {
//  title: 'SoleasPay gateway blog',
//  description: 'Get touch on SoleasPay gateway blog',
//}

interface blogdata {
  id: string;
  title: string;
  description: string;
}

const blogdata: blogdata[] = [

  {
    id: "1",
    title: "Comment accepter les paiements de vos clients en ligne en toute sécurité ?",
    description: 'Dans un monde numérique en constante évolution, il est devenu essentiel pour les entreprises d\'être capable de recevoir des paiements en ligne rapidement et en toute sécurité. <br/><br/>Cependant, les transactions financières en ligne sont souvent associées à des risques de sécurité importants tels que le vol d\'informations bancaires et les fraudes en ligne, les scams et les piratages.<br/><br/>Alors, comment pouvez-vous accepter des paiements de vos clients en ligne tout en sécurisant vos transactions financières ? La réponse est simple : <strong style="color: #FFA500;">en utilisant une solution de paiement en ligne sécurisée</strong>.<br/><br/>Avec une solution de paiement en ligne sécurisée, vous pouvez offrir à vos clients une expérience de paiement facile , rapide et simple tout en garantissant un niveau de sécurité élevé pour toutes vos transactions financières.<br/><br/>Parmi les multiples avantages d\'utiliser une solution de paiement en ligne sécurisée, on peut citer :<ul><li>- La conformité aux normes en matière de sécurité des paiements;</li><li>- Une réduction du taux de fraude en ligne;</li><li>- Une authentification forte des utilisateurs ainsi qu’une protection contre les risques de rétrofacturation;</li><li>- Une traçabilité accrue de toutes les transactions.</li><ul><br/><strong style="color: #FFA500;">SOLEASPAY</strong>, votre nouvelle solution de paiement innovante ,  est la solution idéale pour les entreprises qui cherchent une sécurité maximale pour leurs paiements en ligne. La technologie de <strong style="color: #FFA500;">SOLEASPAY</strong> permet de crypter les informations de paiement sensibles et de garantir une protection contre les fraudes financières.<br/><br/>En conclusion, accepter des paiements en ligne en toute sécurité est un aspect important pour la croissance de votre entreprise. Avec une solution de paiement en  sécurisée comme <strong style="color: #FFA500;">SOLEASPAY</strong>, vous pouvez offrir une expérience de paiement rapide et facile tout en garantissant un niveau de sécurité élevé pour toutes les transactions financières de votre entreprise.<br/><br/>Obtenez votre démo gratuite dès maintenant 👉🏾👉🏾👉🏾'
  },
  {
    id: "2",
    title: "Pourquoi opter pour un système de paiement financier ?",
    description: 'Vous avez une entreprise qui vend des produits ou des services et vous vous demandez si vous devez  accepter les paiements en ligne. La réponse est simple : oui, En effet, dans un monde de plus en plus numérique, les consommateurs ont adopté une nouvelle manière de consommer. Les paiements digitaux sont de plus en plus courants et pour les entreprises, il est essentiel d\'offrir cette option de paiement pour ne pas se laisser distancer par la concurrence. Voici les raisons pour lesquelles vous devriez opter pour un système de paiement en ligne pour votre entreprise :<br/><br/><strong style="color: #FFA500;">1. Une meilleure expérience client</strong>.<br/>Les clients apprécient les options de paiement en ligne, ce qui facilite la vie des consommateurs et offre une meilleure expérience client. Les systèmes de paiement en ligne sont pratiques et rapides pour vos clients, et sont susceptibles d\'amener un plus grand nombre de clients à choisir votre entreprise à cause du large éventail de choix de paiement proposés.<br/><br/><strong style="color: #FFA500;">2.  Une Sécurité accrue au cœur de vos transactions commerciales et financières</strong><br/>Les solutions de paiement en ligne sécurisés permettent de garantir la confidentialité des informations de paiement des clients. <strong style="color: #FFA500;">SOLEASPAY</strong>, solution de paiement innovante et adaptée permet aux entreprises, commerces, entrepreneurs de crypter efficacement les informations des clients lors des transactions afin de réduire et  protéger contre les fraudes financières.<br/><br/><strong style="color: #FFA500;">3. Gestion simplifiée des transactions</strong><br/>Vous pouvez  suivre et gérer facilement les transactions financières de votre entreprise partout où vous êtes et à tout moment. Les solutions de paiement en lignes comme <strong style="color: #FFA500;">SOLEASPAY</strong> offrent une plateforme permettant de facilement suivre les transactions et d\'automatiser la facturation et les paiements récurrents.<br/><br>En conclusion, un système de paiement en ligne est une solution idéale pour les entreprises cherchant des options de paiement supplémentaires pour leurs clients tout en leur offrant une meilleure expérience client. <strong style="color: #FFA500;">SOLEASPAY</strong> offre une solution de paiement en ligne sécurisée, facile à utiliser et est accessible à toutes les entreprises, quelle que soit leur taille.<br/><br/>Essayez <strong style="color: #FFA500;">SOLEASPAY</strong> dès maintenant et constatez les avantages que cette solution de paiement en ligne peut apporter à votre entreprise.<br/><br/>Contactez notre service client au Cameroun 👉🏾 <a style="color: #FFA500; text-decoration: underline;" href="http://wa.me/237698618200">http://wa.me/237698618200</a>'
  },
  {
    id: "3",
    title: "Solutions pour les paiements au Cameroun.",
    description: 'Les paiements modernes ont évolué de manière significative en raison de l\'ère numérique. Les solutions de paiement modernes ont remplacé les transactions en espèces traditionnelles. Les entreprises et les particuliers au Cameroun, ainsi que dans d\'autres pays, ont désormais accès à diverses plates-formes de paiement. Nous aborderons cinq solutions de paiement populaires au Cameroun dans cet article de blog. <br/><br/><strong style="color: #FFA500;">1. La monnaie mobile</strong>.<br/>La monnaie mobile est de plus en plus populaire au Cameroun, permettant aux individus d\'effectuer des paiements via leurs téléphones portables. Les deux principales plateformes de monnaie mobile au Cameroun sont MTN Mobile Money et Orange Money. Ces plateformes permettent aux utilisateurs de transférer des fonds, de régler des factures d\'utilité publique et d\'effectuer des achats chez des commerçants désignés. Avec la monnaie mobile, les individus n\'ont plus besoin de transporter de l\'argent liquide, réduisant ainsi le risque de vol et les inconvénients.<br/><br/><strong style="color: #FFA500;">2. Cartes de débit et de crédit.</strong><br/>Les cartes de débit et de crédit demeurent une méthode de paiement largement utilisée au Cameroun. De nombreuses banques proposent des cartes à leurs clients, leur permettant d\'effectuer des paiements en ligne et en personne. Ces cartes offrent également des avantages supplémentaires tels que des programmes de récompenses et des offres de remise en argent. Cependant, il est important de noter que certains pays peuvent avoir des restrictions sur les transactions internationales, donc les individus devraient vérifier auprès de leur banque avant de voyager.<br/><br/><strong style="color: #FFA500;">3. Portefeuilles électroniques</strong><br/>Les portefeuilles électroniques sont de plus en plus populaires au Cameroun, permettant aux particuliers et aux entreprises d\'effectuer des paiements numériques sans avoir besoin d\'un compte bancaire. Des exemples de portefeuilles électroniques populaires au Cameroun incluent PayPal, Skrill et EcoCash. Ces plateformes offrent praticité et sécurité, permettant aux individus d\'effectuer des paiements instantanés et sécurisés. De plus, les portefeuilles électroniques proposent souvent une gamme de fonctionnalités, telles que des transactions transfrontalières et des outils de gestion budgétaire.<br/><br/><strong style="color: #FFA500;">4. Les virements bancaires</strong><br/>Les virements bancaires restent une option fiable et sécurisée pour effectuer des paiements au Cameroun. Les particuliers peuvent transférer des fonds électroniquement de leur compte bancaire vers le compte du destinataire, généralement dans la même journée. Cette méthode est particulièrement populaire pour régler des factures, verser des salaires et envoyer de l\'argent à l\'étranger. Cependant, il est important de noter qu\'il peut y avoir des frais de transaction associés aux virements bancaires.<br/><br/><strong style="color: #FFA500;">5. Les paiements par code QR</strong><br/>Les paiements par code QR ont gagné du terrain au Cameroun, notamment auprès des petites entreprises et des commerçants informels. Ces paiements consistent à scanner un code QR affiché au point de vente d\'un commerçant à l\'aide d\'un smartphone, et les fonds sont déduits du portefeuille électronique ou du compte bancaire du client. Les codes QR offrent praticité et rapidité, surtout pour les petites transactions. Cependant, leur adoption généralisée et l\'acceptation par les commerçants sont nécessaires pour qu\'ils soient pleinement adoptés.<br/><br/><strong style="color: #FFA500;">Conclusion</strong><br/>Les solutions de paiement au Cameroun ont révolutionné la manière dont les particuliers et les entreprises effectuent des paiements. La monnaie mobile, les cartes de débit et de crédit, les portefeuilles électroniques, les virements bancaires et les paiements par code QR font partie des options populaires actuellement disponibles. Chaque méthode de paiement a ses avantages et ses inconvénients, et il revient aux particuliers et aux entreprises de choisir celle qui répond le mieux à leurs besoins. À mesure que la technologie continue de progresser, nous pouvons nous attendre à voir émerger encore plus de solutions de paiement innovantes au Cameroun.'
  },

]

export default function Blog() {

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const offset = elementTop - (windowHeight / 2);
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="my-20 px-6" id="faq">
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-7">Blog</h3>
      {blogdata.map((items, i) => (
        <div id={items.id} className="table-b bg-navyblue p-8 overflow-x-auto  mb-8">
          <h2 style={{ color: '#FFA500' }} className="text-center font-bold text-3xl lg:text-2xl text-offwhite mb-8">{items.title}</h2>
          <p className='text-white md:text-lg font-normal mb-10 md:text-start text-align' dangerouslySetInnerHTML={{ __html: items.description }}></p>
        </div>
      ))}
    </div>
  )
}
