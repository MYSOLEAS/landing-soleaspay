import React from 'react'
import { Metadata } from 'next'
import ContactForm from './contactForm';

export const metadata: Metadata = {
  title: 'Rejoindre SoleasPay',
   description: 'Vous souhaitez evoluer dans le secteur des finctechs et participer au developpement de SoleasPay alors rejoignez nous. ',
 }
export default function JoinUs() {
  return (
    <>
      <div className="mx-auto max-w-7xl my-10 px-6" id="join-us">
      <h1  className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-4">
        Rejoindre SoleasPay ?
      </h1>
      
      <div className="mx-auto max-w-7xl">            
            <div className={`lg:grid lg:grid-cols-1 lg:gap-10`}>
              {/* Texte */}
              <div className="mx-auto w-full max-w-5xl rounded-2xl py-8 px-6 mb-5 flex flex-col justify-center">
                <p
                  className="text-white md:text-lg font-normal mb-10 md:text-start">
                    Tout a commencé avec une vision : celle de rendre le paiement en ligne accessible, sécurisé et simple pour tous. Depuis sa création, SoleasPay a su innover en proposant une gamme de solutions de paiement adaptées aux besoins des entrepreneurs, des e-commerçants et des particuliers. Que vous soyez un jeune startup cherchant une passerelle de paiement fiable ou une entreprise établie à la recherche de flexibilité dans la gestion des paiements, SoleasPay vous accompagne.</p>
                <p className="text-white md:text-lg font-normal mb-10 md:text-start">
                Notre entreprise ne se contente pas seulement de fournir des services. Nous croyons en une communauté solidaire, engagée et dynamique. C’est pourquoi nous ouvrons nos portes à tous ceux qui partagent notre vision et souhaitent contribuer à notre mission. Rejoindre SoleasPay, c’est intégrer une équipe passionnée par l’innovation, le service et l’impact dans le secteur financier.
                </p>
                <p style={{color: "#FFA500"}}
                className="text-start font-bold text-3xl lg:text-2xl text-offwhite">
                Pourquoi nous rejoindre ?
                </p>
                <p className="text-white md:text-lg font-normal mb-10 md:text-start">
                Chez SoleasPay, chaque rôle est une opportunité de faire une réelle différence. Que vous soyez un stagiaire en quête d'expérience, un employé motivé pour bâtir l’avenir du paiement digital, un bénévole désireux d’apporter votre pierre à l'édifice, ou un investisseur prêt à soutenir une vision prometteuse, il y a une place pour vous. Nous croyons fermement que chaque talent est unique, et ensemble, nous pouvons façonner l'avenir de l'e-commerce et des paiements en ligne.
                </p>
                <p style={{color: "#FFA500"}}
                className="text-start font-bold text-3xl lg:text-2xl text-offwhite">
                  Rejoignez l'aventure !</p>
                <p className="text-white md:text-lg font-normal mb-5 md:text-start">Nous vous invitons à découvrir les multiples opportunités qui s'offrent à vous au sein de SoleasPay. En tant que stagiaire, vous apprendrez des meilleures pratiques et acquerrez des compétences pratiques dans un environnement dynamique. Si vous cherchez une carrière, nos équipes vous attendent pour travailler sur des projets innovants et ambitieux. Vous souhaitez contribuer autrement ? En tant que bénévole, vous pouvez nous aider à renforcer notre engagement social et solidaire. Enfin, pour les investisseurs, SoleasPay est une opportunité unique de participer à la révolution des paiements en ligne.</p>
              </div>              
            </div>
            <div className='mx-auto w-full max-w-5xl rounded-2xl px-6 py-8 mb-5'>
            <h3 className="text-center font-bold text-3xl lg:text-2xl mb-6 text-offwhite">Remplissez ce formulaire pour nous rejoindre</h3>
            <ContactForm />
            </div>
      </div>
    </div>
    </>
  )
}
