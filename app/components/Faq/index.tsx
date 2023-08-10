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
        heading: "1. Qu'est-ce qu'un agrégateur de paiement ?",
        subheading: 'L\'agrégateur de paiement est un service qui permet de regrouper différents moyens de paiement (cartes de crédit, portefeuilles électroniques, virements bancaires, etc.) en un seul et même système. Il permet aux commerçants en ligne de proposer à leurs clients plusieurs options de paiement, simplifiant ainsi le processus d\'achat. Les agrégateurs de paiement peuvent également offrir des fonctionnalités supplémentaires telles que la gestion des remboursements et des litiges.'
    },
    {
        heading: "2. Qu'est ce que Soleaspay ?",
        subheading: 'SoleasPay est une passerelle de paiement qui aggrège pret de 50 moyens de paiements au cameroun et a l\'étranger afin de permetre aux marchands de recevoir les paiements de leurs clients partout dans le monde.'
    },
    {
        heading: "3. Qui peut utiliser SoleasPay ?",
        subheading: 'SoleasPay est conçu pour être pris en main par des professionnel du developement mais aussi et surtout par tout utilisateur n\'ayant aucune notion en programmation informatique. Il s\'emploi aussi bien pour les commerçants traditionnel que pour les e-commerçants.'
    },
    {
        heading: "4. Qu'est-ce qu'un plugin ?",
        subheading: 'Un plugin est un module d\'extension logiciel qui ajoute des fonctionnalités supplémentaires à un programme existant. Les plugins sont souvent utilisés dans les navigateurs Web pour ajouter des fonctionnalités telles que la lecture de vidéos, la gestion des cookies ou l\'installation de modules de sécurité.'
    },

]

const Faq = () => {
    return (
        <div className="my-20 px-6">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Foire Aux Questions</h3>
            <p className="text-center lg:text-lg font-normal text-bluish">Vous trouverez ici les réponses aux questions les plus fréquemment posées par nos utilisateurs.</p>

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
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">{items.subheading}</Disclosure.Panel>
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
