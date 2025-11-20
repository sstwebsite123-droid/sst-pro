import Image from 'next/image'
import React from 'react'
import Sugarimg1 from "../../../public/images/Sugarimg1.webp"
import Globlegroth from '../Components/Pagecomponents/Globlegroth'
import indusrty1 from '../../../public/images/indusrty1.webp'
import sugarbanner from '../../../public/images/sugarbanner.webp'
import sugarcanefiels from '../../../public/images/sugarcanefiels.webp'
import greenEnergy from '../../../public/images/greenEnergy.webp'
import sugar3 from '../../../public/images/sugar3.webp'

import Dynamicbanner from '../Components/Pagecomponents/Dynamicbanner'


const Sugarplant = () => {
    return (
        <>

            <main className="bg-black text-gray-100">
                {/* <Dynamicbanner banner_title={"About SST Pro"} bannerimg={Sugarimg1} /> */}
                {/* Hero Section with Image */}
                <section className="relative bg-gray-900 text-white mt-[120px]">
                    <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                Fueling Industries with Quality and Sustainable Production
                            </h1>
                            <p className="text-lg md:text-xl max-w-lg text-gray-200">
                                At SST Pro, we see the global sugar industry as a powerful investment opportunity within the commodities market. Our Sugar Plant project enables investors to tap into this essential and rapidly evolving sector with strong long-term potential.
                            </p>
                        </div>
                        <div className="md:w-1/2 relative h-64 md:h-96">
                            <Image
                                src={Sugarimg1}
                                width={1000}
                                height={500}
                                className='rounded-[50px]'
                            />
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="container mx-auto px-6 py-16 space-y-16">
                    {/* Global Demand */}

                    <Globlegroth
                        title={'The Global Sugar Market: A Traders Perspective</span>'

                        }
                        description={
                            "Sugar is a vital, high-demand commodity driving food, industry, and sustainable energy markets globally."
                        }
                        videoSrc='/video/graphvideo.mp4'
                        right_description={
                            "The sugar market is highly dynamic, shaped by weather, policies, and evolving consumer demand. While this creates volatility, it also offers strong opportunities for informed investors. With the global industrial sugar market expected to grow from USD 46.47 billion in 2025 to USD 71.17 billion by 2034 at a 4.85% CAGR, the long-term potential of this sector remains strong"
                        } />

                    <main className="bg-black text-gray-100">

                        {/* Hero Section - Full Background Image */}
                        <section className="relative h-screen flex items-center justify-center bg-black">
                            <Image
                                src={sugarcanefiels}
                                alt="Sugar Plant"
                                fill
                                className="object-cover opacity-60"
                            />
                            <div className="absolute text-center px-6">
                                <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                                    Investment Avenues in the Sugar Sector
                                </h1>
                                <p className="mt-6 text-gray-300 text-xl max-w-2xl mx-auto drop-shadow-md">
                                    SST Pro provides a comprehensive platform for investors to access the sugar market. Our offerings are designed to cater to a range of risk appetites and investment horizons:


                                </p>
                            </div>
                        </section>

                        {/* Global Demand - Card Style */}
                        <section className="py-20 bg-gray-900 relative">
                            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 flex flex-col justify-center">
                                    <h2 className="text-4xl font-bold mb-6 text-green-400">Sustainable and Ethical Investing</h2>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        "Aligned with our commitment to responsible investing, the Sugar Plant project focuses on sustainability and ethical production. We prioritize companies using innovative, eco-friendly technologies and improving labor standards. By investing in sustainable sugar, clients gain strong financial returns while supporting a more equitable and environmentally responsible global food system."
                                    </p>
                                </div>
                                <div className="md:col-span-1 relative rounded-3xl overflow-hidden shadow-2xl h-96">
                                    <Image
                                        src={sugar3}
                                        alt="Sugar Plant"
                                        fill
                                        className="object-cover opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
                                </div>
                            </div>
                        </section>

                        {/* High-Value Investments - Overlapping Cards */}
                        <section className="py-20 bg-gray-800 relative overflow-hidden">
                            <div className="container mx-auto px-6 relative z-10">
                                <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">
                                    Your Partner in Commodity Trading
                                </h2>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform -translate-y-6">
                                        <p className="text-gray-300">
                                            SST Pro is your trusted partner for navigating the complexities of the sugar market
                                        </p>
                                    </div>
                                    <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl">
                                        <p className="text-gray-300">
                                            Our team of experienced market analysts provides the insights and guidance you need to make informed investment decisions.
                                        </p>
                                    </div>
                                    <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform translate-y-6">
                                        <p className="text-gray-300">
                                            With our secure and transparent trading platform, you can confidently explore the sweet opportunities that the sugar market has to offer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>



                    </main>



                </section>

                {/* Footer */}
            </main>

        </>
    )
}

export default Sugarplant
