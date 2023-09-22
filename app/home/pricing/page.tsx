import Image from "next/image";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pricing on SoleasPay Gateway',
    description: 'Enjoy with our SoleasPay gateway pricing policy and level up your business',
  }

interface table {
    index: number;
    name: string;
    imgSrc: string;
    retrait: string;

}

const tableData: table[] = [
    {
        index: 1,
        name: "Orange Money",
        imgSrc: '/images/Table/bitcoin.svg',
        retrait: "A partir de 2%",

    },
    {
        index: 2,
        name: "MTN Mobile Money",
        imgSrc: '/images/Table/cryptoone.svg',
        retrait: "A partir de 2%",
    },
    {
        index: 3,
        name: "Express Union Mobile",
        imgSrc: '/images/Table/cryptothree.svg',
        retrait: "A partir de 2%",
    },
    {
        index: 4,
        name: "PayPal",
        imgSrc: '/images/Table/cryptotwo.svg',
        retrait: "A partir de 4%",
    },
    {
        index: 5,
        name: "Perfect Money",
        imgSrc: '/images/Table/cryptotwo.svg',
        retrait: "A partir de 4%",
    },
    {
        index: 6,
        name: "Bitcoin",
        imgSrc: '/images/Table/bitcoin.svg',
        retrait: "A partir de 6%",
    },
    {
        index: 7,
        name: "Litcoin",
        imgSrc: '/images/Table/cryptotwo.svg',
        retrait: "A partir de 6%",
    },
    {
        index: 8,
        name: "Dogecoin",
        imgSrc: '/images/Table/cryptotwo.svg',
        retrait: "A partir de 6%",
    },
    {
        index: 9,
        name: "Visa",
        imgSrc: '/images/Table/cryptotwo.svg',
        retrait: "A partir de 4%",
    },
    {
        index: 10,
        name: "Banque Transfert",
        imgSrc: '/images/Table/cryptotwo.svg',
        retrait: "A partir de 3000 XAF",
    },
]

const Table = () => {
    return (
        <>
            <div className='mx-auto max-w-7xl pt-40 px-6' >
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Tarification SoleasPay</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Notre grille tarifaire vous permet d'avoir une vue d'ensemble sur vos transactions. Elle est garantie 100% exacte sans frais supplementaires. </p>
                </div>
                <div className="table-b bg-navyblue p-8 overflow-x-auto">

                    <table className="table-auto w-full mt-10">
                        <thead>
                            <tr className="text-white bg-darkblue rounded-lg">
                                <th className="px-4 py-4 font-normal">#</th>
                                <th className="px-4 py-4 text-start font-normal">SERVICE</th>
                                <th className="px-4 py-4 font-normal">CHARGE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((items, i) => (
                                <tr key={i} className="border-b border-b-darkblue">
                                    <td className="px-4 py-6 text-center text-white">{items.index}</td>
                                    <td className="px-4 py-6 text-center text-white flex items-center justify-start gap-5 ">{items.name}</td>
                                    <td className="px-4 py-6 text-center text-white">{items.retrait}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
        </>
    )
}

export default Table;
