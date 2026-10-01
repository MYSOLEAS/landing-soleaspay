import React from "react";
import { Metadata } from "next";
import { companyInfo } from "../config/company";

export const metadata: Metadata = {
  title: "À propos | SoleasPay",
  description:
    "Découvrez SoleasPay, une plateforme de paiement développée et exploitée par MYSOLEAS.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "À propos | SoleasPay",
    description:
      "SoleasPay est une solution de paiement MYSOLEAS destinée aux marchands et aux entreprises.",
    url: "/about",
    siteName: "SoleasPay",
    type: "website",
  },
};

const services = [
  "encaissement Mobile Money lorsque ce moyen de paiement est disponible",
  "outils de paiement en ligne pour marchands et entreprises",
  "liens de paiement et parcours de checkout",
  "intégration API pour les développeurs",
  "outils marchands pour le suivi des transactions et des opérations de paiement",
  "facturation numérique et parcours de paiement associés aux activités professionnelles",
];

export default function About() {
  return (
    <main className="mx-auto max-w-7xl pt-16 lg:pt-24 pb-20 px-6">
      <section className="max-w-4xl mx-auto">
        <p className="feature-font text-sm font-semibold uppercase tracking-wide mb-4 text-center">
          À propos
        </p>
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-ink text-center">
          {companyInfo.productName}
        </h1>
        <p className="text-muted md:text-lg font-normal leading-8 mb-8">
          {companyInfo.productName} est une plateforme de paiement développée et
          exploitée par {companyInfo.legalName}. Elle aide les entreprises et
          les marchands à accepter, gérer et suivre des paiements numériques à
          travers les moyens de paiement disponibles sur les marchés supportés
          par la plateforme.
        </p>
        <p className="text-muted md:text-lg font-normal leading-8 mb-10">
          SoleasPay est le produit et le service utilisé par les marchands et
          leurs clients.<br /> {companyInfo.legalName} est la société exploitante
          responsable de la plateforme, de son site public et de ses relations
          commerciales.
        </p>

        <div className="bg-white border border-border shadow-[0_4px_14px_rgba(26,35,126,0.05)] rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Ce que propose SoleasPay
          </h2>
          <ul className="list-disc pl-6 text-muted md:text-lg leading-8">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Disponibilité des moyens de paiement
          </h2>
          <p className="text-muted md:text-lg font-normal leading-8">
            Les moyens de paiement et leur disponibilité peuvent varier selon le
            pays du client, la devise et l'éligibilité du marchand. SoleasPay ne
            présente pas les paiements internationaux par carte comme disponibles
            de manière universelle, sauf lorsque le partenaire de paiement
            concerné, le pays, la devise et l'éligibilité du marchand permettent
            effectivement cette disponibilité.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Informations de l'entreprise
          </h2>
          <dl className="grid gap-4 text-muted md:text-lg">
            <div>
              <dt className="font-semibold text-ink">Société exploitante</dt>
              <dd>{companyInfo.legalName}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Produit</dt>
              <dd>{companyInfo.productName}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Adresse d'activité</dt>
              <dd>{companyInfo.businessAddress}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Site web</dt>
              <dd>
                <a
                  className="text-primary underline"
                  href={companyInfo.website}
                >
                  {companyInfo.website}
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </section>
    </main>
  );
}
