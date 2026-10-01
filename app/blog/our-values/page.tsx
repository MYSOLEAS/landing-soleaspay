import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoleasPay un partenaire de choix pour votre croissance",
  description:
    "Renforcez la croissance et la notorité de votre marque grace à des partenariats solides et valorisants comme SoleasPay",
};
export default function Values() {
  return (
    <>
      <div className="mx-auto max-w-7xl my-10 px-6" id="join-us">
        <h1 className="text-center text-3xl lg:text-5xl font-bold text-ink mb-4">
          Booster sa marque
        </h1>

        <div className="mx-auto max-w-7xl">
          <div className={`lg:grid lg:grid-cols-1 lg:gap-10`}>
            {/* Texte */}
            <div className="mx-auto w-full max-w-5xl rounded-2xl py-8 px-6 mb-5 flex flex-col justify-center">
              <p className="text-muted md:text-lg font-normal mb-10 md:text-start">
                Chez SoleasPay, nous croyons fermement que la clé pour se
                distinguer de la concurrence réside dans la qualité des
                partenariats que nous établissons. En tant que partenaire de
                choix pour les entreprises, nous ne nous contentons pas de vous
                fournir des outils financiers : nous apportons une véritable
                valeur ajoutée à votre marque.
              </p>
              <p className="text-muted md:text-lg font-normal mb-10 md:text-start">
                SoleasPay devient un atout stratégique pour renforcer la
                crédibilité et le standing de votre entreprise. Grâce à notre
                expertise dans les services de paiement et les solutions
                fintech, vous offrez à vos clients des outils conçus pour
                renforcer la sécurité, le confort d’utilisation, et des produits
                sur-mesure qui répondent aux besoins d’un marché en constante
                évolution. Cela inspire confiance à vos clients, en montrant
                que chaque transaction est suivie avec attention.
              </p>
              <p className="text-muted md:text-lg font-normal mb-10 md:text-start">
                Collaborer avec SoleasPay, c’est aussi choisir une technologie
                de pointe, facile à intégrer, et qui évolue avec vous. Nous
                travaillons main dans la main avec nos partenaires pour créer
                des solutions innovantes qui améliorent l’expérience utilisateur
                et augmentent leur satisfaction. Ainsi, vous pouvez vous
                concentrer sur votre cœur de métier, tandis que nous nous
                occupons de transformer chaque interaction avec votre marque en
                un acte de fidélisation.
              </p>

              <p className="text-muted md:text-lg font-normal mb-10 md:text-start">
                En tant que partenaires, nous avons pour mission de faire
                grandir votre entreprise et de renforcer la relation avec vos
                clients, tout en veillant à ce que vous soyez perçu comme un
                acteur fiable et tourné vers l’avenir.
              </p>

              <div className="md:text-start">
                <p className="mb-4">Alors qu'attendez-vous ?</p>

                <a href="/home/join-us">
                  <span
                    
                    className="font-bold text-3xl lg:text-2xl text-secondary"
                  >
                    Rejoignez l'aventure dès maintenant et boostez votre marque
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
