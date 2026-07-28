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

export default function Home() {
  return (
    <main>
      <Banner />
      <LegacyAccess />
      <Faq />
      <Work />
      <Plugin />
      <Features />
      <Simple />
      <Trade />
      <Companies />
      <CustomerItems />
    </main>
  );
}