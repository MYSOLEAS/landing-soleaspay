import Image from "next/image";

interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const featuresdata: featuresdata[] = [
    {
        imgSrc: '/home/images/Features/featureOne.svg',
        heading: 'Securité',
        subheading: 'SoleasPay prends très au sérieux l\'intégrité, la sécurité et la confidentialité de vos données.',
    },
    {
        imgSrc: '/home/images/Features/featureTwo.svg',
        heading: 'Paiement assuré',
        subheading: 'Les demandes de remboursement peuvent être examinées selon le marchand, la transaction et le moyen de paiement.',
    },
]

const Features = () => {
    return (
        <div id="features" className="mx-auto max-w-7xl my-20 md:my-40 px-6 relative">
            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-10 items-center">
                {/* Column-1 */}
                <div>
                    <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">Passez à l&apos;action !</h3>
                    <h2 className="text-ink text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">Profitez d&apos;un agrégateur de paiement sur mesure qui vous offre une expérience sécurisée, flexible et personnalisée.</h2>
                </div>
                {/* Column-2 */}
                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-4">
                        {featuresdata.map((items, i) => (
                            <div className="bg-white border border-border shadow-[0_4px_14px_rgba(26,35,126,0.05)] py-10 pr-8 pl-6 rounded-2xl" key={i}>
                                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-8 shadow-[0_10px_24px_rgba(26,35,126,0.2)]">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} />
                                </div>
                                <h5 className="text-ink text-lg font-semibold mb-3">{items.heading}</h5>
                                <p className="text-muted text-sm font-normal">{items.subheading}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
