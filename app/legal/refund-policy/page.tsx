import React from "react";
import { Metadata } from "next";
import { companyInfo } from "../../config/company";

export const metadata: Metadata = {
  title: "Politique de remboursement | SoleasPay",
  description:
    "Politique de remboursement et de traitement des problèmes de paiement liés aux transactions SoleasPay.",
  alternates: {
    canonical: "/legal/refund-policy",
  },
  openGraph: {
    title: "Politique de remboursement | SoleasPay",
    description:
      "Comment les remboursements, problèmes de paiement, débits en double et contestations sont traités sur SoleasPay.",
    url: "/legal/refund-policy",
    siteName: "SoleasPay",
    type: "website",
  },
};

const refundRequestDetails = [
  "référence de transaction ou identifiant de paiement",
  "montant et devise de la transaction",
  "date de la transaction",
  "nom du marchand ou de l'entreprise concernée",
  "moyen de paiement utilisé",
  "motif de la demande de remboursement",
  "coordonnées du client nécessaires au suivi de la demande",
];

export default function RefundPolicy() {
  return (
    <main className="mx-auto max-w-7xl pt-16 lg:pt-24 pb-20 px-6">
      <article className="max-w-4xl mx-auto">
        <p className="feature-font text-sm font-semibold uppercase tracking-wide mb-4 text-center">
          Politique de remboursement
        </p>
        <h1 className="text-4xl lg:text-6xl font-bold mb-5 text-ink text-center">
          Politique de remboursement
        </h1>
        <p className="text-muted md:text-lg font-normal leading-8 mb-10 text-center">
          Dernière mise à jour : 05 janvier 2026
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Rôle de SoleasPay
          </h2>
          <p className="text-muted md:text-lg leading-8">
            {companyInfo.productName} est une plateforme de paiement exploitée
            par {companyInfo.legalName}. SoleasPay aide les marchands et les
            entreprises à recevoir et gérer des paiements. Dans la plupart des
            transactions, le marchand est le vendeur du produit ou du service,
            tandis que SoleasPay agit comme prestataire ou intermédiaire de
            paiement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Responsabilité du marchand
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Pour les problèmes liés à un produit non livré, un service non
            fourni, l'annulation d'une commande, la qualité d'un produit ou
            service, ou toute demande commerciale, le client doit en priorité
            contacter le marchand qui a vendu le produit ou le service.
            L'éligibilité au remboursement peut dépendre de la politique du
            marchand, de la nature de la transaction et du droit applicable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Problèmes liés au paiement
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Lorsqu'un problème est directement lié au traitement du paiement,
            SoleasPay peut assister dans l'identification de la transaction, la
            vérification de son statut et le suivi auprès du marchand, du
            prestataire de paiement, de la banque, de l'opérateur Mobile Money
            ou du partenaire financier concerné.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Comment demander un remboursement
          </h2>
          <p className="text-muted md:text-lg leading-8 mb-4">
            Pour demander une assistance liée à un remboursement, contactez
            d'abord le marchand lorsque la demande concerne le produit, le
            service ou la commande. Pour une assistance liée au paiement,
            contactez le support SoleasPay à l'adresse{" "}
            <a
              className="text-primary underline"
              href={`mailto:${companyInfo.supportEmail}`}
            >
              {companyInfo.supportEmail}
            </a>
            .
          </p>
          <p className="text-muted md:text-lg leading-8 mb-4">
            SoleasPay ou le marchand peut demander les informations suivantes :
          </p>
          <ul className="list-disc pl-6 text-muted md:text-lg leading-8">
            {refundRequestDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Traitement des remboursements
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Certains remboursements peuvent nécessiter l'autorisation du
            marchand. Les délais de traitement peuvent varier selon le marchand,
            le moyen de paiement, la banque, le réseau de carte, l'opérateur
            Mobile Money ou tout autre prestataire de paiement impliqué dans la
            transaction. La date d'apparition effective du remboursement sur le
            compte du client peut également dépendre de ces tiers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Transactions en double, incorrectes ou incertaines
          </h2>
          <p className="text-muted md:text-lg leading-8">
            En cas de débit en double, de montant incorrect, de transaction
            débitée avec un statut incertain ou de paiement non reconnu,
            contactez le support SoleasPay avec les détails de la transaction.
            SoleasPay peut examiner les informations disponibles et coordonner,
            si nécessaire, avec le marchand ou les partenaires de paiement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Contestations et rétrofacturations
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Les transactions par carte peuvent également être soumises aux
            procédures de contestation et de rétrofacturation applicables aux
            réseaux de cartes, banques émettrices, banques acquéreuses et autres
            institutions financières. Ces procédures peuvent être distinctes
            d'une demande de remboursement adressée directement au marchand ou
            au support SoleasPay.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Contact</h2>
          <p className="text-muted md:text-lg leading-8">
            Les demandes relatives aux remboursements et aux problèmes de
            paiement peuvent être envoyées à{" "}
            <a
              className="text-primary underline"
              href={`mailto:${companyInfo.supportEmail}`}
            >
              {companyInfo.supportEmail}
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
