import React from 'react'
import Image from 'next/image'
import WindAndSolarPower from '../../../public/images/WindAndSolarPower.webp'
import oil22 from '../../../public/images/oil22.webp'
import Globlegroth from '../Components/Pagecomponents/Globlegroth'

const page = () => {
    return (
        <div>
            <main className="bg-black text-gray-100">

                {/* Hero Section with Image */}
                <section className="relative bg-gray-900 text-white  mt-[150px]">
                    <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Powering Economies Through Reliable Energy Investments
                            </h1>
                            <p className="text-lg md:text-xl max-w-lg text-gray-200">
                                At SST Pro, we recognize the indispensable role of the energy sector in the global economy. As a fundamental driver of industrial growth and modern life, the oil and gas market offers significant opportunities for astute investors and traders. Our Oil & Energy project is engineered to provide our clients with strategic access to this vital sector, leveraging our expertise in commodity trading to navigate its complexities and unlock its potential for financial growth.
                            </p>
                        </div>

                        <div className="md:w-1/2 relative h-64 md:h-96">
                            <Image
                                src={WindAndSolarPower}
                                width={1000}
                                height={500}
                                className="rounded-[50px]"
                            />
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="container mx-auto px-6 py-16 space-y-16">

                    {/* The Energy Market */}
                    <Globlegroth
                        title={'The Energy Market: A Strategic Investor’s Outlook'}
                        description={
                            "The global energy market is evolving rapidly, with major opportunities emerging across traditional and renewable sectors. With global energy investment projected to reach USD 3.3 trillion in 2025, investors can benefit from a landscape rich in volatility, growth, and long-term potential."
                        }
                        videoSrc="/video/graphvideo.mp4"
                        right_description={
                            "The energy sector continues to transform as new technologies rise and demand grows across developing economies. From oil and gas to clean energy expansion, this environment presents strong opportunities for traders seeking diversification and long-term gains."
                        }
                    />

                    {/* Strategic Investment Insights */}
                    <section className="py-20 bg-gray-900 relative">
                        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 flex flex-col justify-center">
                                <h2 className="text-4xl font-bold mb-6 text-green-400">
                                    Key Drivers of Opportunity in the Energy Market
                                </h2>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    • <strong>Global Demand Growth:</strong> Rising energy needs worldwide create long-term stability in oil and natural gas markets.<br />
                                    • <strong>Geopolitical Factors:</strong> Global events and regional conflicts drive price movements, opening short-term trading opportunities.<br />
                                    • <strong>Energy Transition:</strong> Massive capital is shifting into clean energy, LNG, solar, and wind—broadening investment potential.<br />
                                </p>
                            </div>

                            <div className="md:col-span-1 relative rounded-3xl overflow-hidden shadow-2xl h-96">
                                <Image
                                    src={oil22}
                                    alt="Energy Market"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute rounded-3xl"></div>
                            </div>
                        </div>
                    </section>

                    {/* Investment Tools Section */}
                    <section className="py-20 bg-gray-800 relative overflow-hidden">
                        <div className="container mx-auto px-6 relative z-10">
                            <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">
                                Investment Instruments for the Energy Sector
                            </h2>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform -translate-y-6">
                                    <p className="text-gray-300">
                                        • <strong>Energy Stocks:</strong> Invest directly in top-performing oil, gas, and renewable companies with strong production output and dividend potential.
                                    </p>
                                </div>

                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl">
                                    <p className="text-gray-300">
                                        • <strong>Commodity Futures:</strong> For experienced traders seeking to capitalize on short-term market volatility through oil and natural gas futures.
                                    </p>
                                </div>

                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform translate-y-6">
                                    <p className="text-gray-300">
                                        • <strong>Energy ETFs:</strong> Gain diversified exposure to the full energy ecosystem—from traditional oil & gas to emerging renewables.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    )
}

export default page
