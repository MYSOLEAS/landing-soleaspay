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
