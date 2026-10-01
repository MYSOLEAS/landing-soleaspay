import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Une equipe dynamique au service de SoleasPay',
   description: 'Ils ouvrent au quotidien pour accompagner les clients et soutenir la fourniture des services de SoleasPay',
 }
export default function Team() {
  return (
    <>
      <div className="mx-auto max-w-7xl my-10 px-6" id="join-us">
      <h1  className="text-center text-3xl lg:text-5xl font-bold text-ink mb-4">
        Booster sa marque
      </h1>
      
      <div className="mx-auto max-w-7xl">            
            <div className={`lg:grid lg:grid-cols-1 lg:gap-10`}>
              {/* Texte */}
              <div className="mx-auto w-full max-w-5xl rounded-2xl py-8 px-6 mb-5 flex flex-col justify-center">
                <p className="text-muted md:text-lg font-normal mb-10 md:text-start">
                Chez SoleasPay, notre engagement envers nos clients va bien au-delà de la simple prestation de services. Nous plaçons l'excellence de l'assistance au cœur de tout ce que nous faisons, car nous comprenons que chaque interaction compte. Que vous soyez un entrepreneur débutant ou un professionnel aguerri, nous nous efforçons d’offrir une assistance rapide, efficace et personnalisée, adaptée à chaque situation.
                </p>
                <p className="text-muted md:text-lg font-normal mb-10 md:text-start">
                Notre équipe d’experts peut répondre à vos questions, étudier vos préoccupations et vous guider dans l’utilisation de nos solutions. Grâce à notre support client proactif, nous vous accompagnons dans votre parcours avec SoleasPay et dans le suivi des demandes liées aux transactions.
                </p>
                <p className="text-muted md:text-lg font-normal mb-10 md:text-start">
                Enfin, nous croyons que la proximité et l’écoute sont essentielles. Nous avons mis en place plusieurs canaux de communication, que ce soit par téléphone, chat en direct ou email, pour que vous puissiez toujours trouver l’assistance dont vous avez besoin, au moment où vous en avez besoin. Avec SoleasPay, vous avez l’assurance de travailler avec un partenaire dévoué à votre succès, prêt à vous soutenir et à relever les défis à vos côtés.
                </p>
              </div>              
            </div>
      </div>
    </div>
    </>
  )
}
