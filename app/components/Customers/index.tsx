"use client"
import React, { Component } from "react";
import Slider from "react-slick";

const customerLogos = [
    { name: "PayOol", image: "/home/images/partners/5.jpg" },
    { name: "Open Market", image: "/home/images/partners/16.png" },
    { name: "Shop", image: "/home/images/partners/15.jpeg" },
    { name: "Yassa Shop", image: "/home/images/partners/10.jpg" },
    { name: "Tchopify", image: "/home/images/partners/8.png" },
    { name: "Master Academy", image: "/home/images/partners/13.png" },
    { name: "Shop Partner", image: "/home/images/partners/2.jpg" },
    { name: "Resaspot", image: "/home/images/partners/3.jpg" },
    { name: "Combi Food", image: "/home/images/partners/11.png" },
    { name: "BCA Cameroon", image: "/home/images/partners/4.png" },
    { name: "Biz Academy", image: "/home/images/partners/9.jpg" },
    { name: "Master Academy Partner", image: "/home/images/partners/12.jpeg" },
];

// CAROUSEL SETTINGS
export default class CustomerItems extends Component {
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
            <div className='text-center section-alt py-16'>
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h3 className='text-ink text-3xl md:text-5xl font-bold mb-4'>Des entreprises connectées à l'ecosysteme SoleasPay</h3>
                    <p className="text-muted md:text-lg font-normal leading-8 max-w-2xl mx-auto mb-10">
                        Ils sont des milliers de marchands à nous faire confiance pour la gestion et le suivi de leurs encaissements.
                        Grâce à leur confiance, nous avons pu construire un ecosystème de paiement solide et fiable, capable d'opérer un grand volume de transactions par minute.

                    </p>
                    <Slider {...settings}>
                        {customerLogos.map((partner) => (
                            <div className="px-3" key={partner.name}>
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="mx-auto h-20 w-full max-w-[150px] rounded-xl border border-border bg-white object-contain p-4 shadow-[0_8px_24px_rgba(26,35,126,0.06)] grayscale opacity-80 transition-all hover:-translate-y-0.5 hover:grayscale-0 hover:opacity-100 hover:shadow-[0_12px_30px_rgba(26,35,126,0.10)]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        )
    }
}
