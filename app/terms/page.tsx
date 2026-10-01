import React from "react";
import { Metadata } from "next";
import { companyInfo } from "../config/company";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation | SoleasPay",
  description:
    "Conditions générales encadrant l'accès et l'utilisation des services de paiement SoleasPay.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Conditions générales d'utilisation | SoleasPay",
    description:
      "Règles applicables aux marchands, clients et utilisateurs des services de paiement SoleasPay.",
    url: "/terms",
    siteName: "SoleasPay",
    type: "website",
  },
};

const prohibitedActivities = [
  "fraude, tentative de fraude ou transactions non autorisées",
  "blanchiment de capitaux, financement du terrorisme ou violation de sanctions",
  "fausse déclaration d'identité, d'activité commerciale ou d'objet de transaction",
  "vente de produits ou services illégaux, contrefaits, dangereux ou interdits",
  "abus des API, tests de sécurité non autorisés ou interférence avec la plateforme",
  "activité contraire au droit applicable, aux règles des réseaux de paiement ou aux exigences des partenaires",
];

export default function Terms() {
  return (
    <main className="mx-auto max-w-7xl pt-16 lg:pt-24 pb-20 px-6">
      <article className="max-w-4xl mx-auto">
        <p className="feature-font text-sm font-semibold uppercase tracking-wide mb-4 text-center">
          Conditions générales d'utilisation
        </p>
        <h1 className="text-4xl lg:text-6xl font-bold mb-5 text-ink text-center">
          Conditions générales d'utilisation
        </h1>
        <p className="text-muted md:text-lg font-normal leading-8 mb-10 text-center">
          Dernière mise à jour : 05 janvier 2026
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            1. Introduction
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Les présentes conditions générales encadrent l'accès et
            l'utilisation de {companyInfo.productName}, une plateforme de
            paiement développée et exploitée par {companyInfo.legalName}. En
            utilisant SoleasPay, les utilisateurs, marchands et clients
            acceptent de respecter ces conditions, les lois applicables et les
            exigences des partenaires de paiement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            2. Définitions
          </h2>
          <p className="text-muted md:text-lg leading-8">
            « SoleasPay » désigne le produit et les services de paiement fournis
            via la plateforme SoleasPay. « MYSOLEAS » désigne la société qui
            exploite SoleasPay. « Marchand » désigne une entreprise ou une
            personne utilisant SoleasPay pour recevoir ou gérer des paiements.
            « Client » désigne une personne effectuant un paiement à un marchand
            via SoleasPay. « Partenaires de paiement » désigne notamment les
            banques, opérateurs Mobile Money, réseaux de cartes, processeurs et
            autres prestataires financiers ou techniques impliqués dans les
            transactions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            3. Acceptation des conditions
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Les utilisateurs doivent lire ces conditions avant d'utiliser
            SoleasPay. Si un utilisateur n'accepte pas ces conditions, il ne
            doit pas accéder aux services ni les utiliser. Des accords
            complémentaires ou conditions d'enrôlement marchand peuvent
            s'appliquer à certains produits, comptes ou intégrations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            4. Description des services SoleasPay
          </h2>
          <p className="text-muted md:text-lg leading-8">
            SoleasPay fournit des outils de paiement numérique aux marchands et
            entreprises, notamment l'encaissement de paiements, le support du
            Mobile Money lorsque disponible, les liens de paiement, les outils
            de checkout, les expériences de paiement par QR code, la facturation
            numérique, l'intégration API et les outils marchands de gestion des
            transactions. Les moyens de paiement et leur disponibilité peuvent
            varier selon le pays du client, la devise et l'éligibilité du
            marchand.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            5. Éligibilité des utilisateurs
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Les utilisateurs doivent avoir la capacité juridique d'utiliser
            SoleasPay et fournir des informations exactes lors de la création
            d'un compte, d'une demande d'accès ou d'une vérification. MYSOLEAS
            peut demander des informations complémentaires pour répondre aux
            exigences de conformité, de gestion des risques, de KYC, de KYB, de
            prévention de la fraude ou des partenaires de paiement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            6. Responsabilités des marchands
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Les marchands sont responsables des produits et services qu'ils
            vendent, de l'exactitude des prix et descriptions, de la livraison
            ou de l'exécution de leurs obligations, du service client, des
            décisions de remboursement lorsque applicable, des obligations
            fiscales et comptables, ainsi que du respect des lois et règles des
            partenaires de paiement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            7. Responsabilités des clients
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Les clients sont responsables de fournir des informations de
            paiement exactes, de vérifier les détails de la transaction avant de
            confirmer un paiement, d'utiliser des moyens de paiement autorisés
            et de contacter le marchand pour les questions liées au produit, au
            service, à la livraison, à l'annulation ou à toute demande
            commerciale.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            8. Paiements et frais
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Les paiements peuvent être traités via SoleasPay et ses partenaires
            de paiement. Les frais, conditions de règlement, méthodes de
            décaissement, limites, devises supportées et moyens de paiement
            disponibles peuvent dépendre de l'accord marchand, de la
            configuration du service, du pays, de la devise et des règles des
            partenaires de paiement. SoleasPay ne définit sur cette page aucun
            frais, plafond ou délai de règlement universel.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            9. Remboursements et litiges de paiement
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Les remboursements peuvent dépendre du marchand, du type de
            transaction, du moyen de paiement et des règles applicables. Les
            litiges liés à un produit ou service doivent normalement être
            signalés d'abord au marchand. Les problèmes de traitement du
            paiement peuvent être signalés au support SoleasPay. Plus de
            détails sont disponibles dans la{" "}
            <a className="text-primary underline" href="/legal/refund-policy">
              Politique de remboursement
            </a>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            10. Contestations de paiement par carte
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Les transactions par carte peuvent être soumises aux procédures de
            rétrofacturation, de contestation ou d'annulation établies par les
            réseaux de cartes, banques émettrices, banques acquéreuses et
            processeurs de paiement. Les marchands doivent coopérer aux demandes
            d'informations liées aux litiges ou rétrofacturations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            11. Activités interdites et prévention de la fraude
          </h2>
          <p className="text-muted md:text-lg leading-8 mb-4">
            SoleasPay ne doit pas être utilisé pour :
          </p>
          <ul className="list-disc pl-6 text-muted md:text-lg leading-8">
            {prohibitedActivities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-muted md:text-lg leading-8 mt-4">
            MYSOLEAS peut surveiller les transactions, demander des
            informations, restreindre une activité, retenir ou retarder un
            traitement lorsque cela est autorisé, ou signaler une activité aux
            partenaires ou autorités compétentes lorsque cela est nécessaire
            pour la sécurité, la conformité ou la prévention de la fraude.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            12. Suspension ou résiliation de compte
          </h2>
          <p className="text-muted md:text-lg leading-8">
            MYSOLEAS peut suspendre, restreindre ou résilier l'accès à
            SoleasPay lorsque cela est requis pour des raisons de sécurité, de
            conformité, de suspicion de fraude, de violation des présentes
            conditions, de non-coopération aux demandes de vérification,
            d'exigences des partenaires de paiement ou de droit applicable. Le
            processus applicable peut dépendre du type de compte et du service
            utilisé.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            13. Prestataires de paiement tiers
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Certaines transactions reposent sur des prestataires de paiement
            tiers, institutions financières, opérateurs Mobile Money, réseaux de
            cartes, processeurs et prestataires techniques. Leur disponibilité,
            leurs règles de traitement, exigences de vérification et procédures
            de contestation peuvent s'appliquer aux transactions concernées.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            14. Disponibilité du service
          </h2>
          <p className="text-muted md:text-lg leading-8">
            SoleasPay vise à fournir un service fiable, mais sa disponibilité
            peut être affectée par la maintenance, les conditions réseau, les
            interruptions de prestataires tiers, les revues de conformité, les
            contrôles de sécurité ou des événements échappant au contrôle de
            MYSOLEAS.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            15. Limitation de responsabilité
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Dans la mesure permise par le droit applicable, MYSOLEAS n'est pas
            responsable des produits ou services des marchands, d'une mauvaise
            utilisation par les clients, des informations incorrectes fournies
            par les utilisateurs, des défaillances de prestataires tiers, des
            pertes indirectes ou des événements échappant à son contrôle
            raisonnable. Rien dans ces conditions n'exclut une responsabilité
            lorsque cette exclusion n'est pas permise par la loi.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            16. Propriété intellectuelle
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Les noms, logos, contenus du site, logiciels, documentations et
            éléments associés à SoleasPay appartiennent à MYSOLEAS ou à ses
            concédants. Les utilisateurs ne peuvent pas les copier, les détourner
            ou les modifier, sauf autorisation écrite de MYSOLEAS ou indication
            prévue dans la documentation officielle.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            17. Confidentialité
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Les données personnelles sont traitées comme décrit dans la{" "}
            <a className="text-primary underline" href="/privacy">
              Politique de confidentialité
            </a>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            18. Modification des conditions
          </h2>
          <p className="text-muted md:text-lg leading-8">
            MYSOLEAS peut mettre à jour ces conditions afin de refléter des
            évolutions opérationnelles, légales, réglementaires, de sécurité ou
            liées aux partenaires de paiement. La version mise à jour sera
            publiée sur ce site avec une nouvelle date de mise à jour.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            19. Droit applicable et juridiction
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Le droit applicable et la juridiction compétente peuvent dépendre de
            l'accord marchand, de la localisation de l'utilisateur, du lieu
            d'établissement légal de MYSOLEAS, des règles impératives de
            protection des consommateurs et des exigences des partenaires de
            paiement. Cette section doit être validée par un conseil juridique
            avant une utilisation en production dans le cadre de l'activation de
            paiements internationaux par carte.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            20. Informations de contact
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Pour toute question concernant ces conditions, contactez{" "}
            {companyInfo.legalName} à l'adresse{" "}
            <a
              className="text-primary underline"
              href={`mailto:${companyInfo.supportEmail}`}
            >
              {companyInfo.supportEmail}
            </a>
            . Les demandes commerciales peuvent être envoyées à{" "}
            <a
              className="text-primary underline"
              href={`mailto:${companyInfo.businessEmail}`}
            >
              {companyInfo.businessEmail}
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
