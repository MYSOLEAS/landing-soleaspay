import React from "react";
import { Metadata } from "next";
import { companyInfo } from "../config/company";

export const metadata: Metadata = {
  title: "Politique de confidentialité | SoleasPay",
  description:
    "Politique de confidentialité de SoleasPay, plateforme de paiement exploitée par MYSOLEAS.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Politique de confidentialité | SoleasPay",
    description:
      "Comment MYSOLEAS collecte, utilise, partage et protège les données personnelles dans le cadre des services SoleasPay.",
    url: "/privacy",
    siteName: "SoleasPay",
    type: "website",
  },
};

const collectedInformation = [
  "informations d'identité, telles que le nom et les informations de profil du compte",
  "coordonnées, telles que l'adresse e-mail et le numéro de téléphone",
  "informations de transaction, notamment références de paiement, montants, dates, marchands et statuts de paiement",
  "données techniques, telles que l'adresse IP, le navigateur, l'appareil, les journaux et les données d'utilisation",
  "informations KYC, de vérification ou de conformité lorsqu'elles sont requises pour un service, un compte marchand ou une obligation réglementaire",
  "communications avec le support et informations transmises via les formulaires ou canaux d'assistance SoleasPay",
];

const purposes = [
  "fournir, exploiter et améliorer les services SoleasPay",
  "traiter les paiements et accompagner les opérations de paiement des marchands",
  "sécuriser les transactions et protéger les comptes",
  "détecter, prévenir et examiner la fraude, les abus ou les activités non autorisées",
  "fournir une assistance aux clients, marchands et équipes techniques",
  "respecter les obligations légales, réglementaires, fiscales, comptables et financières",
  "communiquer les mises à jour de service, avis de sécurité et messages opérationnels",
];

export default function Privacy() {
  return (
    <main className="mx-auto max-w-7xl pt-16 lg:pt-24 pb-20 px-6">
      <article className="max-w-4xl mx-auto">
        <p className="feature-font text-sm font-semibold uppercase tracking-wide mb-4 text-center">
          Politique de confidentialité
        </p>
        <h1 className="text-4xl lg:text-6xl font-bold mb-5 text-ink text-center">
          Politique de confidentialité
        </h1>
        <p className="text-muted md:text-lg font-normal leading-8 mb-10 text-center">
          Dernière mise à jour : 05 janvier 2026
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Introduction
          </h2>
          <p className="text-muted md:text-lg leading-8">
            La présente politique de confidentialité explique comment{" "}
            {companyInfo.legalName} collecte, utilise, partage et protège les
            données personnelles dans le cadre de {companyInfo.productName}, une
            plateforme de paiement exploitée par {companyInfo.legalName}. Elle
            s'applique aux visiteurs, marchands, clients et autres utilisateurs
            des services SoleasPay.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Informations collectées
          </h2>
          <p className="text-muted md:text-lg leading-8 mb-4">
            Selon le service utilisé et le rôle de l'utilisateur, SoleasPay peut
            collecter :
          </p>
          <ul className="list-disc pl-6 text-muted md:text-lg leading-8">
            {collectedInformation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Utilisation des informations
          </h2>
          <p className="text-muted md:text-lg leading-8 mb-4">
            Les données personnelles peuvent être utilisées pour :
          </p>
          <ul className="list-disc pl-6 text-muted md:text-lg leading-8">
            {purposes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Données de paiement
          </h2>
          <p className="text-muted md:text-lg leading-8">
            SoleasPay peut traiter les informations liées aux transactions et
            aux paiements nécessaires à l'exécution ou au suivi d'un paiement.
            Les numéros complets de carte, codes CVV et autres identifiants de
            paiement sensibles peuvent être traités par les processeurs de
            paiement autorisés, réseaux de cartes, banques ou partenaires
            financiers impliqués dans une transaction. SoleasPay ne déclare pas
            de certification PCI DSS ou certification similaire sur ce site,
            sauf si cette certification est vérifiée séparément et publiée par
            MYSOLEAS.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Tiers et partenaires
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Lorsque cela est nécessaire, certaines informations peuvent être
            partagées avec des banques, opérateurs Mobile Money, réseaux de
            cartes, processeurs de paiement, passerelles de paiement,
            prestataires techniques, prestataires de conformité, conseils
            professionnels et autorités publiques lorsque la loi ou une
            procédure légale valide l'exige.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Sécurité
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Nous mettons en place des mesures techniques et organisationnelles
            appropriées destinées à protéger les données personnelles contre
            l'accès non autorisé, l'altération, la divulgation ou la
            destruction. Aucun service accessible par Internet ne peut garantir
            une sécurité absolue, mais SoleasPay agit pour réduire les risques
            de sécurité et protéger les opérations de paiement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Conservation des données
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Les données personnelles sont conservées aussi longtemps que
            nécessaire pour fournir les services, accompagner les transactions,
            résoudre les litiges, prévenir la fraude, respecter les obligations
            légales et réglementaires et conserver les documents professionnels.
            Les durées de conservation peuvent varier selon le type de données,
            le service utilisé et les exigences légales applicables.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Droits des utilisateurs
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Sous réserve du droit applicable, les utilisateurs peuvent demander
            l'accès à leurs données personnelles, la rectification des
            informations inexactes, la suppression lorsque cela est légalement
            possible, ou la limitation ou l'opposition à certains traitements.
            Certaines informations peuvent devoir être conservées pour des
            raisons légales, réglementaires, de sécurité ou de conservation des
            traces de transaction.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Traitement international
          </h2>
          <p className="text-muted md:text-lg leading-8">
            SoleasPay peut travailler avec des partenaires de paiement,
            techniques et financiers situés dans différents pays. Certaines
            informations peuvent être traitées ou transférées vers d'autres
            juridictions lorsque cela est nécessaire pour fournir les services,
            traiter les paiements, prévenir la fraude ou respecter des
            obligations légales, sous réserve des protections applicables.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Modifications de cette politique
          </h2>
          <p className="text-muted md:text-lg leading-8">
            Cette politique de confidentialité peut être mise à jour afin de
            refléter l'évolution des services, des exigences légales ou des
            pratiques opérationnelles. La version mise à jour sera publiée sur
            ce site avec une nouvelle date de mise à jour.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Contact</h2>
          <p className="text-muted md:text-lg leading-8">
            Pour toute question ou demande relative aux données personnelles,
            contactez {companyInfo.legalName} à l'adresse{" "}
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
