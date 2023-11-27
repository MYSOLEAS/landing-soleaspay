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
        heading: "Comment accepter les paiements de vos clients en ligne en toute sécurité ? ",
        subheading: 'Dans un monde numérique en constante évolution, il est devenu essentiel pour les entreprises d\'être capable de recevoir des paiements en ligne rapidement et en toute sécurité. <br/>Cependant, les transactions financières en ligne sont souvent associées à des risques de sécurité importants tels que le vol d\'informations bancaires et les fraudes en ligne, les scams et les piratages.<br/>Alors, comment pouvez-vous accepter des paiements de vos clients en ligne tout en sécurisant vos transactions financières ? La réponse est simple : <br/><strong style="color: #FFA500;">en utilisant une solution de paiement en ligne sécurisée</strong>. <br/><div style="text-align: right;"><a style="color: #FFA500; text-decoration: underline;" href="/home/blog#1">En savoir plus</a></div>'
    },
    {
        heading: "Pourquoi opter pour un système de paiement financier ? ",
        subheading: 'Vous avez une entreprise qui vend des produits ou des services et vous vous demandez si vous devez  accepter les paiements en ligne. La réponse est simple : oui, En effet, dans un monde de plus en plus numérique, les consommateurs ont adopté une nouvelle manière de consommer. Les paiements digitaux sont de plus en plus courants et pour les entreprises, il est essentiel d\'offrir cette option de paiement pour ne pas se laisser distancer par la concurrence. Voici les raisons pour lesquelles vous devriez opter pour un système de paiement en ligne pour votre entreprise :<br/><div style="text-align: right;"><a style="color: #FFA500; text-decoration: underline;" href="/home/blog#2">En savoir plus</a></div>'
    },
    {
        heading: "Solutions pour les paiements au Cameroun.",
        subheading: 'Les paiements modernes ont évolué de manière significative en raison de l\'ère numérique. Les solutions de paiement modernes ont remplacé les transactions en espèces traditionnelles. Les entreprises et les particuliers au Cameroun, ainsi que dans d\'autres pays, ont désormais accès à diverses plates-formes de paiement. Nous aborderons cinq solutions de paiement populaires au Cameroun dans cet article de blog.<br/><div style="text-align: right;"><a style="color: #FFA500; text-decoration: underline;" href="/home/blog#3">En savoir plus</a></div>'
    },


]

const Faq = () => {
    return (
        <div className="my-20 px-6">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Dites-nous, que voulez-vous faire ?</h3>
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
