import React from "react";
import { Metadata } from "next";
import { companyInfo } from "../config/company";

export const metadata: Metadata = {
  title: "Contact | SoleasPay",
  description:
    "Contactez MYSOLEAS pour les demandes commerciales, le support et les questions de paiement liées à SoleasPay.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | SoleasPay",
    description:
      "Coordonnées officielles de SoleasPay, solution de paiement de MYSOLEAS.",
    url: "/contact",
    siteName: "SoleasPay",
    type: "website",
  },
};

export default function Contact() {
  return (
    <main className="mx-auto max-w-7xl pt-16 lg:pt-24 pb-20 px-6">
      <section className="max-w-4xl mx-auto">
        <p className="feature-font text-sm font-semibold uppercase tracking-wide mb-4 text-center">
          Nous contacter
        </p>
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-ink text-center">
          Contacter SoleasPay
        </h1>
        <p className="text-muted md:text-lg font-normal leading-8 mb-10">
          Utilisez les coordonnées officielles ci-dessous pour toute question
          concernant les services {companyInfo.productName}, l'inscription
          marchand, le support transactionnel ou les demandes commerciales.
        </p>

        <dl className="grid gap-5 bg-white border border-border shadow-[0_4px_14px_rgba(26,35,126,0.05)] rounded-2xl p-6 md:p-8 text-muted md:text-lg">
          <div>
            <dt className="font-semibold text-ink">Société</dt>
            <dd>{companyInfo.legalName}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Produit</dt>
            <dd>{companyInfo.productName}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Email professionnel</dt>
            <dd className="min-w-0">
              <a
                className="text-primary underline break-words [overflow-wrap:anywhere]"
                href={`mailto:${companyInfo.businessEmail}`}
              >
                {companyInfo.businessEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Email support</dt>
            <dd className="min-w-0">
              <a
                className="text-primary underline break-words [overflow-wrap:anywhere]"
                href={`mailto:${companyInfo.supportEmail}`}
              >
                {companyInfo.supportEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Téléphone</dt>
            <dd className="grid gap-1">
              {companyInfo.phones.map((phone) => (
                <a
                  className="text-primary underline"
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  key={phone}
                >
                  {phone}
                </a>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">
              Adresse physique d'activité
            </dt>
            <dd>{companyInfo.businessAddress}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
