import Banner from './components/Banner/index';
import Companies from './components/Companies/index';
import Work from './components/Work/index';
import Features from './components/Features/index';
import Simple from './components/Simple/index';
import Trade from './components/Trade/index';
import Faq from './components/Faq/index';
import Plugin from'./components/Plugins'
import FloatingWhatsAppButton from './components/whatsapp/FloatingWhatsApp';

export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Work />
      <Plugin />
      <Features />
      <Simple />
      <Trade />
      <Faq />
      <FloatingWhatsAppButton/>
    </main>
  );
}
