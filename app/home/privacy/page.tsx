import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SoleasPay Gateway privacy policy',
  description: 'Get touch on SoleasPay gateway privacy policy',
}

export default function Privacy() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-16 lg:pt-24 sm:pb-24 px-6">

        <div style={{ marginLeft: '1rem', marginRight: '1rem' }} className='height-work'>
          <h2 className="text-4xl lg:text-6xl font-bold mb-5 text-ink md:4px text-center">
          Politique de Confidentialité de SoleasPay
          </h2>
          <h3 className="text-2xl font-semibold text-primary text-center mb-8">Date d'entrée en vigueur : 12 Juillet 2021</h3>
          <p className='text-muted md:text-lg font-normal mb-10 md:text-start text-align'>Chez SoleasPay, nous attachons une grande importance à la confidentialité de nos utilisateurs. <br/>
            Cette politique de confidentialité décrit comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez notre plateforme accessible via l'adresse https://soleaspay.com (ci-après "la Plateforme").<br />
           En utilisant la Plateforme, vous acceptez les pratiques décrites dans cette politique.</p>
          <ul style={{listStyleType: 'square'}} className='text-muted md:text-lg font-normal mb-10 text-align'>
            <li className="text-2xl font-semibold text-ink mt-8 mb-2">Collecte d'informations</li>
              <h4 className="font-semibold text-primary mt-4">a. Informations d'identification :</h4>
              <p>Lors de votre inscription, nous pouvons collecter votre nom, votre adresse e-mail, votre numéro de téléphone, ainsi que des informations de facturation.</p>
              <h4 className="font-semibold text-primary mt-4">b. Informations de paiement :</h4>
              <p>Pour faciliter les transactions, nous pouvons collecter des informations de paiement telles que les détails de votre compte bancaire, de votre carte de crédit ou d'autres moyens de paiement.</p>
              <h4 className="font-semibold text-primary mt-4">c. Informations de transaction :</h4>
              <p>Nous enregistrons les détails des transactions que vous effectuez sur la Plateforme, y compris les informations sur les destinataires des paiements et les montants transférés.</p>
              <h4 className="font-semibold text-primary mt-4">d. Informations techniques :</h4>
              <p>Lorsque vous utilisez la Plateforme, nous pouvons collecter des informations techniques telles que votre adresse IP, le type de navigateur que vous utilisez, vos préférences linguistiques et d'autres données d'utilisation.</p>
            <li className="text-2xl font-semibold text-ink mt-8 mb-2">Utilisation des informations</li>
              <p>Nous utilisons les informations collectées pour les finalités suivantes :</p>
              <h4 className="font-semibold text-primary mt-4">a. Fournir nos services :</h4>
              <p>Nous utilisons vos informations pour traiter vos paiements, émettre des factures, demander des paiements à vos créanciers et fournir d'autres services liés aux transactions financières.</p>
              <h4 className="font-semibold text-primary mt-4">b. Améliorer notre Plateforme :</h4>
              <p>Nous utilisons les données d'utilisation pour comprendre comment nos utilisateurs interagissent avec la Plateforme et améliorer continuellement nos services.</p>
              <h4 className="font-semibold text-primary mt-4">c. Communication avec vous :</h4>
              <p>Nous pouvons vous envoyer des notifications concernant votre compte, les mises à jour de la Plateforme ou des offres promotionnelles, avec votre consentement le cas échéant.</p>
              <h4 className="font-semibold text-primary mt-4">d. Respect des obligations légales :</h4>
              <p>Dans certains cas, nous pouvons être tenus de traiter vos informations pour nous conformer aux lois et réglementations applicables.</p>
            <li className="text-2xl font-semibold text-ink mt-8 mb-2">Partage des informations</li>
              <p>Nous ne vendons pas vos informations personnelles à des tiers. Cependant, nous pouvons partager vos informations dans les circonstances suivantes :</p>
              <h4 className="font-semibold text-primary mt-4">a. Avec des partenaires de traitement :</h4>
              <p>Nous pouvons partager vos informations avec des tiers qui nous aident à fournir nos services, tels que les prestataires de services de paiement et les partenaires techniques.</p>
              <h4 className="font-semibold text-primary mt-4">b. Conformité légale :</h4>
              <p>Nous pouvons divulguer vos informations si nous sommes tenus de le faire par la loi ou si cela est nécessaire pour protéger nos droits, notre sécurité ou celle d'autrui.</p>
              <h4 className="font-semibold text-primary mt-4">c. Consentement :</h4>
              <p>Nous pouvons partager vos informations avec votre consentement explicite.</p>
            <li className="text-2xl font-semibold text-ink mt-8 mb-2">Sécurité des informations</li>
              <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations contre tout accès non autorisé, toute altération, toute divulgation ou destruction non autorisée. Cependant, gardez à l'esprit qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sûre.</p>
            <li className="text-2xl font-semibold text-ink mt-8 mb-2">Modification de la politique de confidentialité</li>
              <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. En cas de modification substantielle, nous vous en informerons par le biais de la Plateforme ou par d'autres moyens appropriés. L'utilisation continue de la Plateforme après de tels changements signifie que vous acceptez la politique de confidentialité mise à jour.</p>
            <li className="text-2xl font-semibold text-ink mt-8 mb-2">Contact</li>
              <p>Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou vos informations personnelles, veuillez nous contacter à l'adresse suivante : support@mysoleas.com.</p>
              <p>En utilisant la Plateforme, vous acceptez cette politique de confidentialité et consentez à la collecte, l'utilisation et le partage de vos informations conformément à celle-ci.</p>
          </ul>
        </div>
      </div >
    </>
  )
}