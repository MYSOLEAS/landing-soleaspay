import Image from "next/image";

const Trade = () => {
    return (
        <div className="mx-auto max-w-7xl mt-20 mb-16 px-6 relative">
            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-10 items-center">
                {/* Column-1 */}
                <div>
                    <Image src={'/home/images/Trade/pc.svg'} alt="macBook-image" width={787} height={512} />
                </div>

                {/* Column-2 */}
                <div>
                    <h3 className="text-3xl lg:text-5xl font-semibold text-ink mb-6 text-center sm:text-start">Où Trouver SoleasPay ? 🧐</h3>
                    <p className="lg:text-lg font-normal text-muted mb-16 text-center sm:text-start">SoleasPay est conçu pour accompagner les usages web et mobiles de vos équipes.<br /> Les accès et applications disponibles peuvent varier selon la version du service.</p>
                    <div className="flex justify-between items-center bg-white border border-border rounded-2xl px-8 py-6 shadow-[0_4px_14px_rgba(26,35,126,0.05)]">
                        <Image src={'/home/images/Trade/mac.svg'} alt="macOS-image" width={51} height={90} className="icon-tint" />
                        <div className="verticalLine"></div>
                        <Image src={'/home/images/Trade/appstore.svg'} alt="appstore-image" width={70} height={90} className="icon-tint" />
                        <div className="verticalLine"></div>
                        <Image src={'/home/images/Trade/windows.svg'} alt="windows-image" width={70} height={90} className="icon-tint" />
                        <div className="verticalLine"></div>
                        <Image src={'/home/images/Trade/android.svg'} alt="android-image" width={61} height={90} className="icon-tint" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade;
