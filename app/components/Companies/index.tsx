"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";


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

            <div className='text-center bg-lightpink' >
                <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Ils nous ont fait confiance</h3>
                    <Slider {...settings}>

                        <div>
                            <Image src={"/images/Companies/OM.svg"} alt={"Orange Money"} width={300} height={30} />
                        </div>
                        <div>
                            <Image src={"/images/Companies/MTN.svg"} alt={"MTN mobile money"} width={300} height={30} />
                        </div>
                        <div>
                            <Image src={"/images/Companies/PP.svg"} alt={"paypal"} width={300} height={30} />
                        </div>
                        <div>
                            <Image src={"/images/Companies/EU.svg"} alt={"Express union mobile"} width={400} height={30} />
                        </div>
                        <div>
                            <br />
                            <Image src={"/images/Companies/PM.svg"} alt={"perfect money"} width={300} height={30} />
                        </div>
                        <div>
                            <Image src={"/images/Companies/AF.svg"} alt={"Afriland first bank"} width={300} height={30} />
                        </div>

                    </Slider>
                </div>
            </div>

        )
    }
}
