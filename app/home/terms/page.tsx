import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SoleasPay Gateway terms and conditions',
  description: 'Get touch on SoleasPay gateway terms and conditions',
}

export default function Terms() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">

        <div style={{ marginLeft: '1rem', marginRight: '1rem' }} className='height-work'>
          <h2 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px  text-center">
            Terms & Conditions
          </h2>
          <p className='text-white md:text-lg font-normal mb-10 md:text-start text-align'>
            Les conditions générales d’utilisation correspondent à l&apos;ensemble des informations et règlements à considérer par l’une ou l’autre partie, préalablement à la création d’un compte Soleaspay et l’utilisation des services mis à la disposition de l’internaute. Il s’agit donc de l’ensemble de devoirs, droits et obligations pour toute personne physique ou morale désirant utiliser les services SOLEASPAY.
          </p>
          <h3 className="text-2xl typewriter-text">Les droits des titulaires de compte Soleaspay</h3>
          <ul style={{listStyleType: 'square'}} className='text-white md:text-lg font-normal mb-10  text-align'>
            <li >A chaque transaction d’argent, entrante ou sortante du compte, le titulaire du compte recevra instantanément un mail et/ou éventuellement un SMS, respectivement à l’adresse email et au numéro de téléphone renseignés à la création du compte.</li>
            <li >Le titulaire du compte pourra consulter son historique, et la totalité de son activité, directement en ligne</li>
            <li >Avant chaque achat ou dépense en ligne, le titulaire du compte lira d’abord un résumé contenant les détails de la transaction qu’il s’apprête à confirmer. Ce résumé présentera le montant de l’achat, et le montant total des frais de transaction.</li>
            <li >Le titulaire d’un compte peut à tout moment contacter MYSOLEAS par mail, ou se rendre au siège de l’entreprise, pour toute suggestion ou revendication. Nous apporterons pour chacun des cas, une réponse dans un delai de 72H.</li>
          </ul>
          <h3 className="text-2xl typewriter-text">Obligation de MYSOLEAS</h3>
          <ul style={{listStyleType: 'square'}} className='text-white md:text-lg font-normal mb-10  text-align'>
            <li>MYSOLEAS s’engage à mettre en œuvre tous les moyens techniques et logistiques permettant d’assurer la sécurité et l’intégrité du compte, et de son contenu. Par contenu, nous entendons le solde, l’historique et les paramètres du compte.</li>
            <li>MYSOLEAS s’engage à maintenir le caractère confidentiel d’un compte et de son contenu. Par contenu, nous entendons le solde, l’historique et les paramètres du compte.</li>
            <li>MYSOLEAS vous tiendra informé chaque fois que quelqu’un tente de se connecter à votre compte, avec échec. Et nous vous inviterons à modifier votre mot de passe.</li>
            <li>MYSOLEAS s’engage à laisser le service disponible en ligne 24H/24 et 7J/7. Par contre les opérations de transferts d’argent vers les comptes en Banque et les EMF sont traitées aux heures et jours ouvrables, et peuvent être sujettes à des délais d’exécution.</li>
          </ul>
          <h3 className="text-2xl typewriter-text">Contraintes de Soleaspay</h3>
          <ul style={{listStyleType: 'square'}} className='text-white md:text-lg font-normal mb-10  text-align'>
            <li>Lors des paiements PAYPAL et dans tout compte client, MYSOLEAS se réserve une période de mise en vigueur de ces versements. C’est à l’issue de cette période allant de 1 à 15 jours, que le compte crédité pourra utiliser l’argent versé via Paypal. Cette période de mise en vigueur permet à MYSOLEAS de s’assurer automatiquement de l’effectivité du dépôt, et également de déposer plus surement cet argent à la disposition du client pour qu’il puisse effectuer toutes ces transactions et services Soleaspay.</li>
            <li>Toutes les transactions sortantes d’un compte Soleaspay sont facturées par un prélèvement minime sur le montant de la transaction. MYSOLEAS met à votre disposition sa grille tarifaire, accessible directement en ligne.</li>
            <li>L’usage des services Soleaspay est facturé au prorata semestriellement à tout compte Soleaspay standard à hauteur de 1500FCFA, ou annuellement à hauteur de 2000FCFA, ou encore mensuellement à prorata. Ces frais représentent les frais d’entretien du compte Soleaspay. Le tarif des comptes entreprise(Compte professionnel) représente 5000FCFA annuel.</li>
            <li>Les frais paiements de chaque type de transaction Soleaspay sont complètement distincts des frais coupés par l’opérateur de transfert que vous avez choisi. C&apos;est-à-dire, pour des transferts mobile-money par exemple, le client paie premièrement le prix normal de l’opérateur, auquel s’ajoutent les frais Soleaspay.</li>
          </ul>
          <h3 className="text-2xl typewriter-text">Responsabilité du titulaire du Compte</h3>
          <ul style={{listStyleType: 'square'}} className='text-white md:text-lg font-normal mb-10 text-align'>
            <li>Le titulaire d’un compte Soleaspay est le premier et seul responsable, dans le cas où son compte et son mot de passe se retrouvent usurpés par une connaissance ou un tiers.</li>
            <li>Lors de la création de votre compte, vous vous engagez à remplir votre profil via le formulaire en précisant votre nom réel et complet, votre date de naissance réelle et vos coordonnées réelles. A défaut, en cas de problème, ce compte à nos yeux, appartient au nom qui est mentionné sur votre compte Soleaspay.</li>
            <li>Si vous vous connectez à Soleaspay dans un Cyber café, ou avec un ordinateur non-personnel, veuillez-vous déconnecter lorsque vous finissez de travailler. MYSOLEAS ne sera en aucun cas tenu pour responsable lors d’un détournement de votre compte par un tiers.</li>
            <li>Les services Soleaspay ne sont pas permis pour une réutilisation à but lucratif sans autorisation au préalable à la direction de MYSOLEAS.</li>
            <li>En cas de détection automatique ou assistée, de requêtes ou manipulations frauduleuses, provenant de votre compte, ou de votre ordinateur de travail habituel, ou en direction de votre compte, le titulaire du compte s’expose à des poursuites judiciaires, et la fermeture immédiate du compte.</li>
            <li>Le titulaire du compte est informé que Soleaspay est un service payant qui engage des frais d’entretien de compte annuels. Ces frais couvrent l&apos;ensemble des dispositifs et logistiques mis en œuvre pour vous offrir en continu, un maximum de services avec toujours plus d&apos;exigences de qualité. Lors de tout transfert d’argent vers une EMF, le titulaire du compte s’engage à donner des informations toutes vraies dans les formulaires à remplir. A défaut, en cas d’erreur et de revendication sur un transfert, MYSOLEAS ne saurait être tenu pour responsable des dommages et intérêts.</li>
          </ul>
          <h3 className="text-2xl text-white md:text-end ">MYSOLEAS Team, le 12 Juillet 2021</h3>
        </div>
      </div >
    </>
  )
}
