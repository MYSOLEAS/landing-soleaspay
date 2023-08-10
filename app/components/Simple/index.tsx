"use client";
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const Simple = () => {

  return (
    <div className="simple-bg relative sm:block sm:mx-auto">
      <div className="simpleone"></div>
      <div className="simpletwo"></div>
      <div className="simplethree"></div>
      <div className="simplefour"></div>
      <div className="simplefive"></div>
      <div className="mx-auto max-w-5xl py-24 px-6">
        <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">SoleasPay Button</h3>
        <p className="text-center text-bluish text-lg font-normal mb-8">L’installation du SOLEASPAY BUTTON se résume à l’insertion des scripts suivants dans votre page web comme suit :</p>
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
          <div className='col-span-7'>
            <Typewriter
              options={{
                loop:true,
                delay: 30,
                wrapperClassName: 'typewriter-text',
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<script id="SBScript" type="text/javascript" data-lang=${LANGUE}')
                  .pauseFor(30)
                  .typeString('<br/>data-apikey=${votre APIKEY} src="https://soleaspay.com/webPay/v2/sopayButton.min.js">')
                  .pauseFor(30)
                  .typeString('<br/><\ /script><br/>')
                  .pauseFor(30)
                  .typeString('<br/><\ script type=\ "text/javascript\ "><br/>')
                  .pauseFor(30)
                  .typeString('<br/>const options = {')
                  .pauseFor(30)
                  .typeString('<br/>btnTitle : "Pay",')
                  .pauseFor(30)
                  .typeString('<br/>amount : 25,')
                  .pauseFor(30)
                  .typeString('<br/>currency : "USD",')
                  .pauseFor(30)
                  .typeString('<br/>orderId : "MLS00000025F",')
                  .pauseFor(30)
                  .typeString('<br/>description : "Test sopay button payment ",')
                  .pauseFor(30)
                  .typeString('<br/>businessName : "Shop Name",')
                  .pauseFor(30)
                  .typeString('<br/>loadInvoice : true,')
                  .pauseFor(30)
                  .typeString('<br/>successUrl : "https://yourdomain.com/receivePayment"')
                  .pauseFor(30)
                  .typeString('<br/>}<br/>')
                  .pauseFor(30)
                  .typeString('<br/>function initButton(){')
                  .pauseFor(30)
                  .typeString('<br/>return SopayButton.tiping(options)')
                  .pauseFor(30)
                  .typeString('<br/>.then((res)=>console.log(res))')
                  .pauseFor(30)
                  .typeString('<br/>.catch((err)=>console.log(err))')
                  .pauseFor(30)
                  .typeString('<br/>.finally(initButton)')
                  .pauseFor(30)
                  .typeString('<br/>}<br/>')
                  .pauseFor(30)
                  .typeString('<br/>initButton()<br/>')
                  .pauseFor(30)
                  .typeString('<br/><\ /script>')
                  .pauseFor(3000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
          <div className='col-span-5 lg:-m-45  flex justify-center items-center mt-50' style={{marginTop: '1px'}}>
            <br />
            <Image
              src='/images/Simple/phonesoleaspay.svg'
              alt='bannerphone'
              width={1013}
              height={760}
              layout='intrinsic'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simple;
