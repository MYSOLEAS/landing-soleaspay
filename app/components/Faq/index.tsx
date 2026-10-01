"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [
    {
        heading: "Des partenaires qui apportent une valeur à ma marque ",
        subheading: 'La clé pour se distinguer de la concurrence réside dans la qualité des partenariats que vous établissez. En tant que partenaire de choix pour les entreprises, nous ne nous contentons pas de vous fournir des outils financiers : nous apportons une véritable valeur ajoutée à votre marque. <br><br>SoleasPay devient donc un atout stratégique pour renforcer la crédibilité et le standing de votre entreprise. Grâce à notre expertise dans les services de paiement et les solutions fintech, vous offrez à vos clients des outils conçus pour renforcer la sécurité, le confort d’utilisation, et des produits sur-mesure qui répondent aux besoins d’un marché en constante évolution. Cela inspire confiance à vos clients en montrant que chaque transaction est suivie avec attention.<div style="text-align: right;"><a style="color: var(--sp-primary); text-decoration: underline; font-weight: 600;" href="/home/blog/our-values">En savoir plus</a></div>'
    },
    {
        heading: "Une facturation flexible ",
        subheading: 'SoleasPay propose une facturation flexible qui s\'adapte aux besoins de chaque entreprise, qu\'elle soit petite ou grande. Grâce à une tarification transparente et évolutive, vous payez uniquement pour les services que vous consommez, tout en accédant à des solutions de qualité, comme la sécurisation des paiements et la gestion des cartes virtuelles... <br> <br> Notre approche modulaire permet d\'optimiser les coûts tout en maintenant une expérience client soignée. De plus, SoleasPay offre des cotations personnalisées pour répondre aux besoins spécifiques de chaque entreprise et aider au contrôle des dépenses.<br/><div style="text-align: right;"><a style="color: var(--sp-primary); text-decoration: underline; font-weight: 600;" href="/home/pricing">En savoir plus</a></div>'
    },
    {
        heading: "Des Services intuitifs et continus",
        subheading: 'SoleasPay, se projete dans l\'avenir avec des technologies évolutives, conçues pour suivre l\'innovation et répondre aux besoins croissants des entreprises modernes. Il s\'adapte à l\'évolution constante du marché et des exigences de ses utilisateurs, afin que les solutions de paiement, de gestion de cartes virtuelles, et d\'e-commerce restent pertinentes. Cela permet aux entreprises de se développer avec des outils adaptés à leurs besoins. <br/><br/> SoleasPay met en œuvre des mesures techniques pour favoriser la disponibilité de ses services, sous réserve des maintenances, des réseaux et des partenaires de paiement impliqués.'
    },
    {
        heading: "L'assistance client",
        subheading: 'Une équipe d’experts peut répondre à vos questions, étudier vos préoccupations et vous guider dans l’utilisation de nos solutions. Grâce à un support client proactif, nous vous accompagnons dans votre parcours et dans le suivi des demandes liées à SoleasPay.<div style="text-align: right;"><a style="color: var(--sp-primary); text-decoration: underline; font-weight: 600;" href="/home/blog/our-team">En savoir plus</a></div>'
    },
]

const Faq = () => {
    return (
        <div className="my-20 px-6">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-ink mb-3">Qu&apos;est-ce qui vous distingue de vos concurrents ?</h3>
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-x-10 items-start">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">
                            {faqdata.map((items, i) => (
                                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white border border-border shadow-[0_4px_14px_rgba(26,35,126,0.05)] py-6 px-6 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between items-center rounded-lg text-ink sm:px-2 sm:py-2 text-left md:text-xl font-semibold">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-primary flex-shrink-0`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-2 pt-4 pb-2 md:text-base text-muted font-normal" dangerouslySetInnerHTML={{ __html: items.subheading }}></Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-16 lg:mt-32 hidden lg:block">
                        <Image src={'/home/images/Faq/faq.svg'} alt="soleaspay faq image" width={941} height={379} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Faq;
