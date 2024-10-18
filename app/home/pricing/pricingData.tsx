'use client'
import Image from "next/image";
import React from "react";

interface table {
    index: number;
    name: string;
    imgSrc: string;
    fees: string;
    feesPro: string;
    country: string;
    countryFlag: string;
}

const tableData: table[] = [
    {
        index: 1,
        name: "Orange Money",
        imgSrc: '/images/Table/bitcoin.svg',
        fees: "A partir de 2%",
        feesPro : "A partir de 2%",
        country: "CM",
        countryFlag:"/images/Table/country/cm.svg"

    },
    {
        index: 2,
        name: "MTN Mobile Money",
        imgSrc: '/images/Table/cryptoone.svg',
        fees: "A partir de 2%",
        feesPro : "A partir de 2%",
        country: "CM",
        countryFlag:"/images/Table/country/cm.svg"
    },
    {
        index: 3,
        name: "Express Union Mobile",
        imgSrc: '/images/Table/cryptothree.svg',
        fees: "A partir de 2%",
        feesPro : "A partir de 2%",
        country: "CM",
        countryFlag:"/images/Table/country/cm.svg"
    },
    {
        index: 4,
        name: "PayPal",
        imgSrc: '/images/Table/cryptotwo.svg',
        fees: "A partir de 4%",
        feesPro : "A partir de 2%",
        country: "INT",
        countryFlag:"/images/Table/country/cm.svg"
    },
    {
        index: 5,
        name: "Perfect Money",
        imgSrc: '/images/Table/cryptotwo.svg',
        fees: "A partir de 4%",
        feesPro : "A partir de 2%",
        country: "INT",
        countryFlag:"/images/Table/country/cm.svg"
    },
    {
        index: 6,
        name: "Bitcoin",
        imgSrc: '/images/Table/bitcoin.svg',
        fees: "A partir de 6%",
        feesPro : "A partir de 2%",
        country: "INT",
        countryFlag:"/images/Table/country/cm.svg"
    },
    {
        index: 7,
        name: "Litcoin",
        imgSrc: '/images/Table/cryptotwo.svg',
        fees: "A partir de 6%",
        feesPro : "A partir de 2%",
        country: "INT",
        countryFlag:"/images/Table/country/cm.svg"
    },
    {
        index: 8,
        name: "Dogecoin",
        imgSrc: '/images/Table/cryptotwo.svg',
        fees: "A partir de 6%",
        feesPro : "A partir de 2%",
        country: "INT",
        countryFlag:"/images/Table/country/cm.svg"
    },
    {
        index: 9,
        name: "Visa",
        imgSrc: '/images/Table/cryptotwo.svg',
        fees: "A partir de 4%",
        feesPro : "A partir de 2%",
        country: "INT",
        countryFlag:"/images/Table/country/cm.svg"
    },
    {
        index: 10,
        name: "Banque Transfert",
        imgSrc: '/images/Table/cryptotwo.svg',
        fees: "A partir de 3000 XAF",
        feesPro : "A partir de 2%",
        country: "INT",
        countryFlag:"/images/Table/country/cm.svg"
    },
    {
        index: 11,
        name: "Orange Money",
        imgSrc: '/images/Table/bitcoin.svg',
        fees: "A partir de 2%",
        feesPro : "A partir de 2%",
        country: "CI",
        countryFlag:"/images/Table/country/cm.svg"

    },
    {
        index: 12,
        name: "MTN Mobile Money",
        imgSrc: '/images/Table/cryptoone.svg',
        fees: "A partir de 2%",
        feesPro : "A partir de 2%",
        country: "CI",
        countryFlag:"/images/Table/country/cm.svg"
    },
    {
        index: 13,
        name: "Moov",
        imgSrc: '/images/Table/cryptothree.svg',
        fees: "A partir de 2%",
        feesPro : "A partir de 2%",
        country: "CI",
        countryFlag:"/images/Table/country/cm.svg"
    },
    {
        index: 14,
        name: "WAVE",
        imgSrc: '/images/Table/cryptothree.svg',
        fees: "A partir de 2%",
        feesPro : "A partir de 2%",
        country: "CI",
        countryFlag:"/images/Table/country/cm.svg"
    },
]

const PricingData = () => {
        // Grouper les données par pays
    const groupedData = tableData.reduce((acc, item) => {
        if (!acc[item.country]) {
        acc[item.country] = [];
        }
        acc[item.country].push(item);
        return acc;
    }, {} as Record<string, table[]>);
    // État pour savoir quel pays est déplié
    const [expandedCountry, setExpandedCountry] = React.useState<string | null>(null);
    const toggleCountry = (country: string) => {
        setExpandedCountry(expandedCountry === country ? null : country);
      };
    return (
        <>
            <table className="table-auto w-full mt-2">
                <thead>
                    <tr className="text-white bg-darkblue rounded-lg">
                        <th className="px-4 py-4 text-start font-normal">Pays</th>
                        <th className="px-4 py-4 text-start font-normal">Service</th>
                        <th className="px-4 py-4 font-normal">Professionnel</th>
                        <th className="px-4 py-4 font-normal">Marchand</th>
                    </tr>
                </thead>
                <tbody>
                {Object.entries(groupedData).map(([country, items]) => (
                    <React.Fragment key={country}>
                        {/* Ligne du pays avec son premier service */}
                        <tr className="border-b border-b-darkblue">
                        <td
                            className="px-4 py-6 text-center text-white cursor-pointer"
                            onClick={() => toggleCountry(country)}
                        >
                            <div className="flex items-center gap-2">
                            <img
                                src={items[0].countryFlag}
                                alt={`${items[0].country} flag`}
                                className="w-5 h-5"
                            />
                            <span>{items[0].country}</span>
                            <span className="ml-2">
                                {expandedCountry === country ? "⬆️" : "⬇️"}
                            </span>
                            </div>
                        </td>
                        <td className="px-4 py-6 text-center text-white">
                            {items[0].name}
                        </td>
                        <td className="px-4 py-6 text-center text-white">
                            {items[0].feesPro}
                        </td>
                        <td className="px-4 py-6 text-center text-white">
                            {items[0].fees}
                        </td>
                        </tr>

                        {/* Si le pays est déplié, afficher les services supplémentaires */}
                        {expandedCountry === country &&
                        items.slice(1).map((item) => (
                            <tr key={item.index} className="border-b border-b-darkblue">
                            <td className="px-4 py-6 text-center text-white"></td>
                            <td className="px-4 py-6 text-center text-white">
                                {item.name}
                            </td>
                            <td className="px-4 py-6 text-center text-white">
                                {item.feesPro}
                            </td>
                            <td className="px-4 py-6 text-center text-white">
                                {item.fees}
                            </td>
                            </tr>
                        ))}
                    </React.Fragment>
                    ))}
                </tbody>
            </table>
                    
        </>
    )
}

export default PricingData;
