"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/envoi-reception.svg',
        heading: 'ENVOYER ET RECEVOIR',
        subheading: 'Que vous soyez une boutique en ligne, un marchand ou un simple consommateur,  envoyez et recevez des paiements instantanément sur Soleaspay.',
        hiddenpara: '',
    },
    {
        imgSrc: '/images/Work/echange.svg',
        heading: 'E-CHANGE',
        subheading: 'Transférez rapidement votre argent d\'un de vos comptes personnels à un autre avec les taux de change les plus bas du marché.',
        hiddenpara: '',
    },
    {
        imgSrc: '/images/Work/transfertsopay.svg',
        heading: 'TRANSFERT',
        subheading: 'Transférez de l\'argent de votre compte Soleaspay à un autre avec des paramètres de sécurité définis par vous ',
        hiddenpara: '(direct ou soumis à condition).',
    },
    {
        imgSrc: '/images/Work/lien.svg',
        heading: 'LIENS DE PAIEMENT',
        subheading: 'Générez gratuitement des liens de paiement pour vendre ou recevoir un paiement instantanément dans votre compte Soleaspay et gérez chacun d\'eux.',
        hiddenpara: '',
    },
    {
        imgSrc: '/images/Work/qrcode.svg',
        heading: 'QR CODE',
        subheading: 'Avec Soleaspay, vous pouvez facilement obtenir un code QR pour recevoir ou effectuer des paiements.',
        hiddenpara: '',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'CARTE VISA VIRTUELLE',
        subheading: 'Protégez vos achats en ligne avec notre carte Visa virtuelle. Générez des cartes uniques pour vos transactions et contrôlez vos dépenses en ligne. ',
        hiddenpara: '',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'PAIEMENTS INTERNATIONAUX',
        subheading: 'Soleaspay vous permet d\'accepter les paiements internationaux par les canaux légaux (Visa, Paypal, etc.)',
        hiddenpara: ' pour faciliter la vente de vos services en ligne et promouvoir la notoriété de votre produit à l\'international.',
    },
    {
        imgSrc: '/images/Work/api.svg',
        heading: 'REST APIS',
        subheading: 'Pour des solutions personnalisées, intégrez facilement et rapidement (une seule fois) tous les moyens de paiement supportés par Soleaspay dans votre projet.',
        hiddenpara: '',
    },
    
    {
        imgSrc: '/images/Work/ecouteurs.svg',
        heading: 'SUPPORT H24/7',
        subheading: 'Une équipe technique est disponible en temps réel pour vous accompagner pas à pas 24h/24 et 7j/7.',
        hiddenpara: '',
    },
]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Nos services</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Découvrez notre gamme de services sur mesure pour répondre à tous vos besoins ! Nous mettons notre savoir-faire à votre disposition pour vous garantir des résultats à la hauteur de vos attentes. </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h4 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h4>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;
