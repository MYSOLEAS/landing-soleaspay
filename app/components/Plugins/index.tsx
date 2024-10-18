"use client"
import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
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
                        slidesToShow: 3,
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

            <div className='text-center bg-lightpink' >
                <div className="mx-auto max-w-2xl py-5 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>En Plus <s>+</s></h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Découvrez nos differents plugins conçuent pour une intégration facile des moyens de paiements supporté par SoleasPay. <br /> Ils vous permettrons d'offrir une expérience de paiement fluide et securisée à vos clients; d'Augmenter votre taux de conversion et booster votre chiffre d&apos;affaires en quelques clics</p>
                    <Slider {...settings}>

                        <div >
                        <Link href={"https://packagist.org/packages/mysoleas/package-sopay"} ><Image  src={"/images/plugins/LA.svg"} alt={"Laravel soleaspay plugin"} width={700} height={50} /></Link>
                        </div>
                        <div>
                            <br />
                            <Link href={"https://www.npmjs.com/package/@mysoleas/soleaspay-button-react"} ><Image src={"/images/plugins/RE.svg"} alt={"React soleapay plugin"} width={700} height={50} /></Link>
                        </div>
                        <div>
                            <br />
                            <Link href={"https://fr.wordpress.org/plugins/soleaspay-payment-gateway-for-woocommerce/"}><Image src={"/images/plugins/WP.svg"} alt={"wordpress soleaspay plugin"} width={700} height={50} /></Link>
                        </div>
                        <div>
                            <br />
                            <Image src={"/images/plugins/OD.svg"} alt={"Odoo soleaspay plugin"} width={700} height={50} />
                        </div>
                    </Slider>
                </div>
            </div>

        )
    }
}
