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
        subheading: 'La clé pour se distinguer de la concurrence réside dans la qualité des partenariats que vous établissez. En tant que partenaire de choix pour les entreprises, nous ne nous contentons pas de vous fournir des outils financiers : nous apportons une véritable valeur ajoutée à votre marque. <br><br>SoleasPay devient donc un atout stratégique pour renforcer la crédibilité et le standing de votre entreprise. Grâce à notre expertise dans les services de paiement et les solutions fintech, vous offrez à vos clients un niveau de sécurité inégalé, un confort d’utilisation optimal, et des produits sur-mesure qui répondent aux besoins d’un marché en constante évolution. Cela inspire confiance à vos clients, en leur garantissant que chaque transaction est traitée avec le plus grand soin.<div style="text-align: right;"><a style="color: #FFA500; text-decoration: underline;" href="/home/blog/our-values">En savoir plus</a></div>'
    },
    {
        heading: "Une facturation flexible ",
        subheading: 'SoleasPay propose une facturation flexible qui s\'adapte aux besoins de chaque entreprise, qu\'elle soit petite ou grande. Grâce à une tarification transparente et évolutive, vous payez uniquement pour les services que vous consommez, tout en accédant à des solutions de haute qualité, comme la sécurisation des paiements et la gestion des cartes virtuelles... <br> <br> Notre approche modulaire permet d\'optimiser les coûts tout en maintenant une expérience client premium. De plus, SoleasPay offre des cotations personnalisées pour répondre aux besoins spécifiques de chaque entreprise, garantissant ainsi un contrôle total sur les dépenses tout en assurant un service de premier ordre.<br/><div style="text-align: right;"><a style="color: #FFA500; text-decoration: underline;" href="/home/pricing">En savoir plus</a></div>'
    },
    {
        heading: "Des Services intuitifs et continus",
        subheading: 'SoleasPay, se projete dans l\'avenir avec des technologies évolutives, conçues pour suivre l\'innovation et répondre aux besoins croissants des entreprises modernes. Il s\'adapte à l\'évolution constante du marché et des exigences de ses utilisateurs, garantissant que les solutions de paiement, de gestion de cartes virtuelles, et d\'e-commerce restent à la pointe. Cela permet aux entreprises de se développer sans contraintes technologiques et de bénéficier d\'outils toujours performants. <br/><br/> Une haute disponibilité de ses services est assurée, pour que chaque transaction soit effectuée en toute fluidité, à tout moment. Des infrastructures redondantes et robustes garantissent une continuité de service ininterrompue, vous offrant ainsi la tranquillité d\'esprit et à vos clients une expérience sans faille, peu importe la demande.'
    },
    {
        heading: "L'assistance client",
        subheading: 'Une équipe d’experts est disponible 24/7 pour répondre à vos questions, résoudre vos préoccupations et vous guider dans l’utilisation de nos solutions. Grâce à un support client proactif, nous vous accompagnons tout au long de votre parcours, vous offrant non seulement des réponses, mais des solutions sur mesure pour optimiser votre expérience avec SoleasPay. Nous sommes là pour vous à chaque étape, pour garantir que votre entreprise continue de fonctionner sans interruption et que vos clients se sentent en confiance.<div style="text-align: right;"><a style="color: #FFA500; text-decoration: underline;" href="/home/blog/our-team">En savoir plus</a></div>'
    },
    



]

const Faq = () => {
    return (
        <div className="my-20 px-6">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Qu'est-ce qui vous distingue de vos concurrents ?</h3>
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">

                            {faqdata.map((items, i) => (
                                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-purple-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50" dangerouslySetInnerHTML={{ __html: items.subheading }}></Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-32">
                        <Image src={'/images/Faq/faq.svg'} alt="soleaspay faq image" width={941} height={379} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Faq;
