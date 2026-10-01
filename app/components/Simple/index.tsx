"use client";
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { companyInfo } from '../../config/company';

const Simple = () => {

  return (
    <div className="simple-bg relative sm:block sm:mx-auto py-24">
      <div className="simpleone hidden lg:block"></div>
      <div className="simpletwo hidden lg:block"></div>
      <div className="simplethree hidden lg:block"></div>
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-center text-ink text-3xl lg:text-5xl font-semibold mb-6">Pratique pour tout le monde 😎</h3>
        <p className="text-center text-muted text-lg font-normal mb-10 max-w-2xl mx-auto">L’installation du Bouton de paiement SOLEASPAY tient juste à l’insertion comme suit des scripts suivants dans votre page web</p>
        <div className="flex justify-center mb-12">
          <Link
            href={companyInfo.documentationUrl}
            target="_blank"
            className="btn-outline px-6 py-3 font-semibold"
          >
            Explorer la documentation
          </Link>
        </div>

        <div className="code-window max-w-3xl mx-auto">
          <div className="code-window__bar">
            <span className="code-window__dot" style={{ background: '#ff5f57' }}></span>
            <span className="code-window__dot" style={{ background: '#febc2e' }}></span>
            <span className="code-window__dot" style={{ background: '#28c840' }}></span>
            <span className="code-window__filename">integration.html</span>
          </div>
          <div className="code-window__body">
            <Typewriter
              options={{
                loop: true,
                delay: 25,
                wrapperClassName: 'typewriter-text',
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('&lt;script id="SBScript" type="text/javascript" data-lang=${LANGUE}')
                  .pauseFor(30)
                  .typeString('<br/>data-apikey=${votre APIKEY} src="https://btn.soleaspay.com/main.js"&gt;')
                  .pauseFor(30)
                  .typeString('<br/>&lt;/script&gt;<br/>')
                  .pauseFor(30)
                  .typeString('<br/>&lt;script type="text/javascript"&gt;<br/>')
                  .pauseFor(30)
                  .typeString('<br/>const options = {')
                  .pauseFor(30)
                  .typeString('<br/>&nbsp;&nbsp;btnTitle: "Pay",')
                  .pauseFor(30)
                  .typeString('<br/>&nbsp;&nbsp;amount: 25,')
                  .pauseFor(30)
                  .typeString('<br/>&nbsp;&nbsp;currency: "USD",')
                  .pauseFor(30)
                  .typeString('<br/>&nbsp;&nbsp;orderId: "MLS00000025F",')
                  .pauseFor(30)
                  .typeString('<br/>&nbsp;&nbsp;description: "Test sopay button payment",')
                  .pauseFor(30)
                  .typeString('<br/>&nbsp;&nbsp;businessName: "Shop Name",')
                  .pauseFor(30)
                  .typeString('<br/>&nbsp;&nbsp;loadInvoice: true,')
                  .pauseFor(30)
                  .typeString('<br/>&nbsp;&nbsp;successUrl: "https://yourdomain.com/receivePayment",')
                  .pauseFor(30)
                  .typeString('<br/>&nbsp;&nbsp;mode: "BILLING" // ou "TIPING"')
                  .pauseFor(30)
                  .typeString('<br/>}<br/>')
                  .pauseFor(30)
                  .typeString('<br/>function initButton() {')
                  .pauseFor(30)
                  .typeString('<br/>&nbsp;&nbsp;return SopayButton.pay(options)')
                  .pauseFor(30)
                  .typeString('<br/>&nbsp;&nbsp;&nbsp;&nbsp;.then((res) =&gt; console.log(res))')
                  .pauseFor(30)
                  .typeString('<br/>&nbsp;&nbsp;&nbsp;&nbsp;.catch((err) =&gt; console.log(err))')
                  .pauseFor(30)
                  .typeString('<br/>&nbsp;&nbsp;&nbsp;&nbsp;.finally(initButton)')
                  .pauseFor(30)
                  .typeString('<br/>}<br/>')
                  .pauseFor(30)
                  .typeString('<br/>initButton()<br/>')
                  .pauseFor(30)
                  .typeString('<br/>&lt;/script&gt;')
                  .pauseFor(3000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Simple;
