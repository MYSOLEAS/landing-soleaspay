"use client";
import { BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/react/24/outline";
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
    name: "OM",
    imgSrc: "/home/images/Table/services/6.jpg",
    fees: "A partir de 2.5%",
    feesPro: "A partir de 2%",
    country: "CMR",
    countryFlag: "/home/images/Table/country/cm.svg",
  },
  {
    index: 2,
    name: "MOMO",
    imgSrc: "/home/images/Table/services/5.jpg",
    fees: "A partir de 2.5%",
    feesPro: "A partir de 2%",
    country: "CMR",
    countryFlag: "/home/images/Table/country/cm.svg",
  },
  {
    index: 3,
    name: "Express Union Mobile",
    imgSrc: "/home/images/Table/services/3.png",
    fees: "A partir de 2.5%",
    feesPro: "A partir de 2%",
    country: "CMR",
    countryFlag: "/home/images/Table/country/cm.svg",
  },
  {
    index: 11,
    name: "Orange Money",
    imgSrc: "/home/images/Table/services/6.jpg",
    fees: "A partir de 5.75%",
    feesPro: "A partir de 4.5%",
    country: "CIV",
    countryFlag: "/home/images/Table/country/ci.svg",
  },
  {
    index: 12,
    name: "MTN Mobile Money",
    imgSrc: "/home/images/Table/services/5.jpg",
    fees: "A partir de 5.75",
    feesPro: "A partir de 4.5%",
    country: "CIV",
    countryFlag: "/home/images/Table/country/ci.svg",
  },
  {
    index: 13,
    name: "MOOV",
    imgSrc: "/home/images/Table/services/moov.png",
    fees: "A partir de 5.75%",
    feesPro: "A partir de 4.5%",
    country: "CIV",
    countryFlag: "/home/images/Table/country/ci.svg",
  },
  {
    index: 14,
    name: "WAVE",
    imgSrc: "/home/images/Table/services/wave.png",
    fees: "A partir de 5.75%",
    feesPro: "A partir de 4.5%",
    country: "CIV",
    countryFlag: "/home/images/Table/country/ci.svg",
  },
  {
    index: 14,
    name: "MTN",
    imgSrc: "/home/images/Table/services/5.jpg",
    fees: "A partir de 4.25%",
    feesPro: "A partir de 3.5%",
    country: "BENIN",
    countryFlag: "/home/images/Table/country/bj.svg",
  },
  {
    index: 14,
    name: "MOOV",
    imgSrc: "/home/images/Table/services/moov.png",
    fees: "A partir de 4.25%",
    feesPro: "A partir de 3.5%",
    country: "BENIN",
    countryFlag: "/home/images/Table/country/bj.svg",
  },
  {
    index: 14,
    name: "MOOV",
    imgSrc: "/home/images/Table/services/moov.png",
    fees: "A partir de 5.75%",
    feesPro: "A partir de 4.5%",
    country: "TOGO",
    countryFlag: "/home/images/Table/country/tg.svg",
  },
  {
    index: 14,
    name: "T-MONEY",
    imgSrc: "/home/images/Table/services/tmoney.png",
    fees: "A partir de 5.75%",
    feesPro: "A partir de 4.5%",
    country: "TOGO",
    countryFlag: "/home/images/Table/country/tg.svg",
  },
  {
    index: 14,
    name: "OM",
    imgSrc: "/home/images/Table/services/6.jpg",
    fees: "A partir de 5.75%",
    feesPro: "A partir de 4.5%",
    country: "BF",
    countryFlag: "/home/images/Table/country/bf.svg",
  },
  {
    index: 14,
    name: "MOOV",
    imgSrc: "/home/images/Table/services/moov.png",
    fees: "A partir de 5.75%",
    feesPro: "A partir de 4.5%",
    country: "BF",
    countryFlag: "/home/images/Table/country/bf.svg",
  },
  {
    index: 14,
    name: "OM",
    imgSrc: "/home/images/Table/services/6.jpg",
    fees: "A partir de 4.25%",
    feesPro: "A partir de 3.5%",
    country: "MALI",
    countryFlag: "/home/images/Table/country/ml.svg",
  },
  {
    index: 14,
    name: "MOOV",
    imgSrc: "/home/images/Table/services/moov.png",
    fees: "A partir de 5.75%",
    feesPro: "A partir de 4.5%",
    country: "MALI",
    countryFlag: "/home/images/Table/country/ml.svg",
  },
  {
    index: 14,
    name: "OM",
    imgSrc: "/home/images/Table/services/6.jpg",
    fees: "A partir de 4.25%",
    feesPro: "A partir de 3.5%",
    country: "SEN",
    countryFlag: "/home/images/Table/country/sn.svg",
  },
  {
    index: 14,
    name: "WAVE",
    imgSrc: "/home/images/Table/services/wave.png",
    fees: "A partir de 4.25%",
    feesPro: "A partir de 3.5%",
    country: "SEN",
    countryFlag: "/home/images/Table/country/sn.svg",
  },
  {
    index: 14,
    name: "EXPRESSO",
    imgSrc: "/home/images/Table/services/expresso.png",
    fees: "A partir de 4.25%",
    feesPro: "A partir de 3.5%",
    country: "SEN",
    countryFlag: "/home/images/Table/country/sn.svg",
  },
  {
    index: 14,
    name: "FREE MONEY",
    imgSrc: "/home/images/Table/services/free-money.png",
    fees: "A partir de 4.25%",
    feesPro: "A partir de 3.5%",
    country: "SEN",
    countryFlag: "/home/images/Table/country/sn.svg",
  },
  {
    index: 14,
    name: "WIZALL",
    imgSrc: "/home/images/Table/services/wizall.png",
    fees: "A partir de 4.25%",
    feesPro: "A partir de 3.5%",
    country: "SEN",
    countryFlag: "/home/images/Table/country/sn.svg",
  },
  {
    index: 14,
    name: "OM",
    imgSrc: "/home/images/Table/services/6.jpg",
    fees: "A partir de 5.25%",
    feesPro: "A partir de 4.5%",
    country: "RDC",
    countryFlag: "/home/images/Table/country/cd.svg",
  },
  {
    index: 14,
    name: "AIRTEL",
    imgSrc: "/home/images/Table/services/airtel.jpeg",
    fees: "A partir de 6.25%",
    feesPro: "A partir de 5.5%",
    country: "RDC",
    countryFlag: "/home/images/Table/country/cd.svg",
  },
  {
    index: 14,
    name: "VODACOM",
    imgSrc: "/home/images/Table/services/vodacom.jpeg",
    fees: "A partir de 5.75%",
    feesPro: "A partir de 5%",
    country: "RDC",
    countryFlag: "/home/images/Table/country/cd.svg",
  },
  {
    index: 14,
    name: "MOMO",
    imgSrc: "/home/images/Table/services/5.jpg",
    fees: "A partir de 6.25%",
    feesPro: "A partir de 5.5%",
    country: "CONGO",
    countryFlag: "/home/images/Table/country/cg.svg",
  },
  {
    index: 14,
    name: "AIRTEL",
    imgSrc: "/home/images/Table/services/airtel.jpeg",
    fees: "A partir de 6.25%",
    feesPro: "A partir de 5.5%",
    country: "CONGO",
    countryFlag: "/home/images/Table/country/cg.svg",
  },
  {
    index: 14,
    name: "AIRTEL",
    imgSrc: "/home/images/Table/services/airtel.jpeg",
    fees: "A partir de 4.25%",
    feesPro: "A partir de 3.5%",
    country: "GABON",
    countryFlag: "/home/images/Table/country/ga.svg",
  },
  {
    index: 14,
    name: "MOMO",
    imgSrc: "/home/images/Table/services/5.jpg",
    fees: "A partir de 5.25%",
    feesPro: "A partir de 4.5%",
    country: "UGANDA",
    countryFlag: "/home/images/Table/country/ug.svg",
  },
  {
    index: 14,
    name: "AIRTEL",
    imgSrc: "/home/images/Table/services/airtel.jpeg",
    fees: "A partir de 5.25%",
    feesPro: "A partir de 4.5%",
    country: "UGANDA",
    countryFlag: "/home/images/Table/country/ug.svg",
  },
  {
    index: 14,
    name: "MOMO",
    imgSrc: "/home/images/Table/services/5.jpg",
    fees: "A partir de 6.25%",
    feesPro: "A partir de 5.5%",
    country: "ZAMBIA",
    countryFlag: "/home/images/Table/country/zw.svg",
  },
  {
    index: 14,
    name: "AIRTEL",
    imgSrc: "/home/images/Table/services/airtel.jpeg",
    fees: "A partir de 5.25%",
    feesPro: "A partir de 4.5%",
    country: "ZAMBIA",
    countryFlag: "/home/images/Table/country/zw.svg",
  },
  {
    index: 14,
    name: "ZAMTEL",
    imgSrc: "/home/images/Table/services/zamtel.png",
    fees: "A partir de 5.25%",
    feesPro: "A partir de 4.5%",
    country: "ZAMBIA",
    countryFlag: "/home/images/Table/country/zw.svg",
  },
  {
    index: 15,
    name: "PayPal",
    imgSrc: "/home/images/Table/services/paypal.jpeg",
    fees: "A partir de 6.5%",
    feesPro: "A partir de 5.5%",
    country: "INT",
    countryFlag: "/home/images/Table/country/eu.svg",
  },
  {
    index: 16,
    name: "Perfect Money",
    imgSrc: "/home/images/Table/services/pm.jpeg",
    fees: "A partir de 6.5%",
    feesPro: "A partir de 5.5%",
    country: "INT",
    countryFlag: "/home/images/Table/country/eu.svg",
  },
  {
    index: 20,
    name: "Visa",
    imgSrc: "/home/images/Table/services/card.png",
    fees: "A partir de 5.5%",
    feesPro: "A partir de 4.5%",
    country: "INT",
    countryFlag: "/home/images/Table/country/eu.svg",
  },
  {
    index: 21,
    name: "Banque Transfert",
    imgSrc: "/home/images/Table/services/bank.jpg",
    fees: "A partir de 3000 XAF",
    feesPro: "A partir de 3000 XAF%",
    country: "INT",
    countryFlag: "/home/images/Table/country/eu.svg",
  },
];

const PricingData = () => {
  // Grouper les données par pays
  const groupedData = tableData.reduce(
    (acc, item) => {
      if (!acc[item.country]) {
        acc[item.country] = [];
      }
      acc[item.country].push(item);
      return acc;
    },
    {} as Record<string, table[]>,
  );
  // État pour savoir quel pays est déplié
  const [expandedCountry, setExpandedCountry] = React.useState<string | null>(
    null,
  );
  const toggleCountry = (country: string) => {
    setExpandedCountry(expandedCountry === country ? null : country);
  };
  return (
    <>
      <table className="table-auto w-full mt-2">
        <thead>
          <tr className="text-white bg-primary rounded-lg">
            <th className="px-4 py-4 text-start font-medium rounded-l-lg">
              Pays
            </th>
            <th className="px-4 py-4 text-start font-medium">Service</th>
            <th className="px-4 py-4 font-medium">Professionnel</th>
            <th className="px-4 py-4 font-medium rounded-r-lg">Marchand</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedData).map(([country, items]) => (
            <React.Fragment key={country}>
              {/* Ligne du pays avec son premier service */}
              <tr className="border-b border-b-border hover:bg-surface transition-colors">
                <td
                  className="px-4 py-6 text-center text-ink cursor-pointer font-medium"
                  onClick={() => toggleCountry(country)}
                >
                  <div className="flex items-center gap-2 justify-center">
                    <img
                      src={items[0].countryFlag}
                      alt={`${items[0].country} flag`}
                      className="w-5 h-5"
                    />
                    <span>{items[0].country}</span>
                    <span className="ml-2 text-primary">
  {expandedCountry === country ? (
    <BarsArrowUpIcon className="h-5 w-5" />
  ) : (
    <BarsArrowDownIcon className="h-5 w-5" />
  )}
</span>
                  </div>
                </td>
                <td className="px-4 py-6 text-center text-ink">
                  <img
                    src={items[0].imgSrc}
                    alt={`${items[0].name}`}
                    className="w-10 h-10 mx-auto rounded object-contain"
                  />
                </td>
                <td className="px-4 py-6 text-center text-ink">
                  {items[0].feesPro}
                </td>
                <td className="px-4 py-6 text-center text-ink">
                  {items[0].fees}
                </td>
              </tr>

              {/* Si le pays est déplié, afficher les services supplémentaires */}
              {expandedCountry === country &&
                items.slice(1).map((item) => (
                  <tr
                    key={item.index}
                    className="border-b border-b-border bg-surface/60"
                  >
                    <td className="px-4 py-6 text-center text-ink"></td>
                    <td className="px-4 py-6 text-center text-ink">
                      <img
                        src={item.imgSrc}
                        alt={`${item.name}`}
                        className="w-10 h-10 mx-auto rounded object-contain"
                      />
                    </td>
                    <td className="px-4 py-6 text-center text-ink">
                      {item.feesPro}
                    </td>
                    <td className="px-4 py-6 text-center text-ink">
                      {item.fees}
                    </td>
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PricingData;
