"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';


const Banner = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='bg-image relative' id="1">
            <div className='arrowOne'></div>
            <div className='radial-banner hidden lg:block'></div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">

                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                        {/* <div className='arrowTwo'></div> */}
                        <div className='col-span-7'>
                            <h2 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                            Le compagnon de vos paiements numériques.
                            </h2>
                            <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'>
                            Simplifiez vos transactions en toute sécurité avec SoleasPay, votre agrégateur de paiement de confiance et allié pour une gestion financière efficace et transparente.
                            </p>
                            <div className='flex align-middle justify-center md:justify-start'>
                                <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6'><Link href={'https://app.soleaspay.com/auth/login'}>Commencer</Link></button>
                                <button onClick={() => setOpen(true)} className='bg-transparent flex justify-center items-center text-white'><Image src={'/images/Banner/playbutton.svg'} alt="soleaspay demo button" className='mr-3' width={47} height={47} />Démo</button>
                            </div>
                        </div>

                        <div className='col-span-5 lg:-m-48'>
                            <div className='arrowThree'></div>
                            <div className='arrowFour'></div>
                            <div className='arrowFive'></div>
                            <Image src="/images/Banner/bannerphone.svg" alt="solaspay gateway dashboard" width={1013} height={760} />
                            <div className='arrowSix'></div>
                            <div className='arrowSeven'></div>
                            <div className='arrowEight'></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
