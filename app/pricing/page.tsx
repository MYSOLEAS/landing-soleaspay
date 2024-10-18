import Image from "next/image";
import { Metadata } from 'next'
import React from "react";
import PricingData from "./pricingData";
export const metadata: Metadata = {
    title: 'Pricing on SoleasPay Gateway',
     description: 'Enjoy with our SoleasPay gateway pricing policy and level up your business',
   }
const Pricing = () => {
    
    return (
        <>
            <div className="mx-auto max-w-7xl my-10 px-6" id="pricing" >
                <h1  className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-4">
                    Combien ça coute ?
                </h1>
                <div className={`lg:grid lg:grid-cols-1 lg:gap-10`}>
                    <div className="mx-auto w-full max-w-5xl rounded-2xl py-8 px-6 mb-5 flex flex-col justify-center">
                        <p className='text-white md:text-lg font-normal mb-10 md:text-start'>Chez SoleasPay, nous croyons que la qualité des relations professionnelles est la clé du succès dans la gestion des services financiers. Nos utilisateurs, qu'ils soient professionnels ou marchands, méritent non seulement un produit performant, mais aussi un accompagnement et une expertise dédiés. </p>
                        <p className='text-white md:text-lg font-normal mb-10 md:text-start'>En tant que Fintech, nous comprenons l'importance de la qualité de service comme facteur déterminant. C'est pourquoi nous avons bâti une infrastructure robuste, sécurisée, et évolutive qui vous permet d'exploiter toutes les capacités des services financiers digitaux, qu'il s'agisse de la gestion de paiements, de l'émission de cartes Visa virtuelles, ou de la création rapide de boutiques e-commerce. </p>
                        <p className='text-white md:text-lg font-normal mb-10 md:text-start'>Bien que les coûts aient une place dans toute décision d'affaires, nous vous invitons à déprioriser les frais facturés pour vous concentrer sur la qualité des services que nous offrons. En tant que partenaire financier, notre mission est de vous fournir un outil puissant qui vous permettra de gérer vos finances avec agilité, sécurité et confort.</p>
                        <p className='text-white md:text-lg font-normal mb-10 md:text-start'>Sachant que chacun de vous a des besoins spécifiques, nous vous offrons la possibilité de recevoir une cotation sur mesure en fonction des services dont vous avez besoin. Qu'il s'agisse de solutions de paiements, d'API de gestion, ou d'outils pour booster votre boutique, notre équipe est à votre disposition pour vous fournir un tarif adapté à votre activité. <br/>Alors, <a href='/home/join-us'>contactez-nous</a> dès aujourd'hui pour découvrir comment SoleasPay peut transformer votre gestion financière tout en vous garantissant le meilleur rapport entre qualité de service et coût.</p>
                        <p className='text-white md:text-lg font-normal mb-10 md:text-start'>Afin de mieux vous accompagner dans votre choix, voici un aperçu des commissions minimales appliquées sur nos principaux services. Ce tableau vous permet d'avoir une idée claire des frais de base, en sachant que nous proposons des offres personnalisées selon les volumes d'utilisation et la nature des services choisis.</p>
                        
                    </div>
                </div>
                <div className={`mx-auto w-full max-w-5xl rounded-2xl py-8 px-6 mb-5 flex flex-col justify-center`}>
                    <div className="table-b bg-navyblue overflow-x-auto">
                        <PricingData />
                    </div>
                </div>
            </div>
            <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
        </>
    )
}

export default Pricing;
