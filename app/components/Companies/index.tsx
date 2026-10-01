"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

const paymentPartners = [
    { name: "Orange Money", image: "/home/images/Companies/OM.svg" },
    { name: "MTN Mobile Money", image: "/home/images/Companies/MTN.svg" },
    { name: "PayDunya", image: "/home/images/Companies/paydunya.png" },
    { name: "PayPal", image: "/home/images/Companies/PP.svg" },
    { name: "Express Union Mobile", image: "/home/images/Companies/EU.svg" },
    { name: "Flutterwave", image: "/home/images/Companies/flutterwave.png" },
    { name: "Afriland First Bank", image: "/home/images/Companies/AF.svg" },
    { name: "PawaPay", image: "/home/images/Companies/pawapay.svg" },
    { name: "Maplerad", image: "/home/images/Companies/maplerad.jpeg" },
];

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className='text-center py-16 bg-white'>
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h3 className='text-ink text-3xl md:text-5xl font-bold mb-4'>Un ecosysteme de paiement connecté</h3>
                    <p className="text-muted md:text-lg font-normal leading-8 max-w-2xl mx-auto mb-10">
                        SoleasPay s'appuie sur des moyens de paiement et partenaires
                        referencées dans son ecosystème. Leur disponibilité dépend du
                        marché et de l'eligibilité du marchand.
                    </p>
                    <Slider {...settings}>
                        {paymentPartners.map((partner) => (
                            <div className="px-3" key={partner.name}>
                                <div className="h-24 rounded-xl border border-border bg-white px-5 py-4 shadow-[0_8px_24px_rgba(26,35,126,0.06)] flex items-center justify-center opacity-85 hover:opacity-100 transition-all">
                                    <Image
                                        src={partner.image}
                                        alt={partner.name}
                                        width={170}
                                        height={72}
                                        className="max-h-14 w-full object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        )
    }
}
