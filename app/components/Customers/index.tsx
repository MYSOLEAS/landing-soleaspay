"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";


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

            <div className='text-center bg-lightpink' >
                <div className="mx-auto max-w-2xl py-10 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-1'>Ils sont satisfais de SoleasPay</h3>
                    <Slider {...settings}>

                        <div>
                            <img src={"/images/partners/5.jpg"} alt={"PayOol"} className="w-20 h-12" />
                        </div>
                        <div>
                            <img src={"/images/partners/16.png"} alt={"Open Market"} className="w-20 h-12" />
                        </div>
                        <div>
                            <img src={"/images/partners/15.jpeg"} alt="shop" className="w-20 h-12" />
                        </div>
                        <div>
                            <img src={"/images/partners/10.jpg"} alt={"yassa shop"} className="w-20 h-12" />
                        </div>
                        <div>
                            
                            <img src={"/images/partners/8.png"} alt={"tchopify"} className="w-20 h-12" />
                        </div>
                        <div>
                            <img src={"/images/partners/13.png"} alt={"master academy"} className="w-20 h-12" />
                        </div>
                        <div>
                            <img src={"/images/partners/2.jpg"} alt="shop" className="w-20 h-12" />
                        </div>
                        <div>
                            <img src={"/images/partners/3.jpg"} alt={"yassa shop"} className="w-20 h-12" />
                        </div>
                        <div>
                            
                            <img src={"/images/partners/11.png"} alt={"tchopify"} className="w-20 h-12" />
                        </div>
                        <div>
                            <img src={"/images/partners/4.png"} alt={"master academy"} className="w-20 h-12" />
                        </div>
                        <div>
                            <img src={"/images/partners/9.jpg"} alt={"master academy"} className="w-20 h-12" />
                        </div>
                        <div>
                            <img src={"/images/partners/12.jpeg"} alt={"master academy"} className="w-20 h-12" />
                        </div>
                    </Slider>
                </div>
            </div>

        )
    }
}
