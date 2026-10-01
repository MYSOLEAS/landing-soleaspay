import Banner from './components/Banner/index';
import Companies from './components/Companies/index';
import Work from './components/Work/index';
import Features from './components/Features/index';
import Simple from './components/Simple/index';
import Trade from './components/Trade/index';
import Faq from './components/Faq/index';
import Plugin from './components/Plugins'
import CustomerItems from './components/Customers';
import LegacyAccess from './components/LegacyAccess';
import FloatingWhatsAppButton from './components/whatsapp/FloatingWhatsApp';
import {
  CapabilityGrid,
  DeveloperExperience,
  FinalCTA,
  GrowthMarkets,
  HowItWorks,
  PaymentFlowProblem,
  PaymentMethodsTrust,
  ProductPreview,
  SecurityTrust,
  UseCases,
} from './components/LandingConversion';
import { companyInfo } from './config/company';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SoleasPay | Payment infrastructure for African businesses',
  description:
    'SoleasPay helps businesses connect to Mobile Money, checkout, payment links and payment APIs through one payment infrastructure.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SoleasPay | Payment infrastructure for African businesses',
    description:
      'Accept and manage online payments, Mobile Money, payment links, checkout and API integrations with SoleasPay.',
    url: '/',
    siteName: 'SoleasPay',
    type: 'website',
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: companyInfo.productName,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    url: companyInfo.website,
    creator: {
      '@type': 'Organization',
      name: companyInfo.legalName,
      url: companyInfo.parentWebsite,
    },
    description:
      'Payment infrastructure for businesses using Mobile Money, payment links, checkout and API integrations where available.',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Banner />
      <PaymentMethodsTrust />
      <LegacyAccess />
      <PaymentFlowProblem />
      <Faq />
      <Work />
      <CapabilityGrid />
      <HowItWorks />
      <Plugin />
      <Features />
      <ProductPreview />
      <UseCases />
      <Simple />
      <DeveloperExperience />
      <Trade />
      <GrowthMarkets />
      <SecurityTrust />
      <Companies />
      <CustomerItems />
      <FinalCTA />
    </main>
  );
}
