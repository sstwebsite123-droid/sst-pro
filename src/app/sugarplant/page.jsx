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
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Sugar Plant Investments – Building a Future of Sustainable, High-Value Production
                            </h1>
                            <p className="text-lg md:text-xl max-w-lg text-gray-200">
                                At SST Pro, we create modern, eco-efficient sugar production facilities delivering consistent output, premium quality, and exceptional returns for investors.
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
                        title={
                            'The Expanding Global Demand for Sugar</span>'
                        }
                        description={
                            "Sugar is a vital, high-demand commodity driving food, industry, and sustainable energy markets globally."
                        }
                        videoSrc='/video/graphvideo.mp4'
                        right_description={
                            "Sugar is not limited to household consumption. It is a cornerstone ingredient across FMCG, industrial processing, and even sustainable energy projects. With population growth, rising packaged-food demand, and expanding pharmaceutical needs, sugar continues to hold its place as a reliable global commodity. Investors gain the advantage of entering a market driven by necessity rather than trend."
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
                                    Sugar Plant Investments – Building a Future of Sustainable, High-Value Production
                                </h1>
                                <p className="mt-6 text-gray-300 text-xl max-w-2xl mx-auto drop-shadow-md">
                                    At SST Pro, we create modern, eco-efficient sugar production facilities delivering consistent output, premium quality, and exceptional returns for investors.
                                </p>
                            </div>
                        </section>

                        {/* Global Demand - Card Style */}
                        <section className="py-20 bg-gray-900 relative">
                            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 flex flex-col justify-center">
                                    <h2 className="text-4xl font-bold mb-6 text-green-400">The Expanding Global Demand for Sugar</h2>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        Sugar is not limited to household consumption. It is a cornerstone ingredient across FMCG, industrial processing, and sustainable energy projects. With population growth, rising packaged-food demand, and expanding pharmaceutical needs, sugar continues to hold its place as a reliable global commodity. Investors gain the advantage of entering a market driven by necessity rather than trend.
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
                                    Why Modern Sugar Plants Are High-Value Investments
                                </h2>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform -translate-y-6">
                                        <p className="text-gray-300">
                                            Traditional sugar mills face challenges in efficiency, energy usage, and waste management.
                                        </p>
                                    </div>
                                    <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl">
                                        <p className="text-gray-300">
                                            SST Pro aims to build next-generation sugar plants with automation, optimized extraction, and smart production systems.
                                        </p>
                                    </div>
                                    <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform translate-y-6">
                                        <p className="text-gray-300">
                                            These advancements ensure higher productivity, reduced wastage, and cost-effective output—benefiting investors with improved yield and competitiveness.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Sustainable Energy - Full-width Split Background */}
                        <section className="relative py-20 bg-gradient-to-tr from-gray-900 via-gray-800 to-black">
                            <div className="container mx-auto px-6 text-center">
                                <h2 className="text-4xl font-bold mb-8 text-yellow-400">Sustainable and Green Energy Integration</h2>
                                <p className="text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
                                    One major advantage in sugar production is the ability to utilize by-products such as bagasse for clean energy. Our planned projects integrate biomass-based power generation to achieve energy neutrality or surplus energy for sale.
                                </p>
                                <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl max-w-4xl mx-auto">
                                    <Image
                                        src={greenEnergy}
                                        alt="Renewable Energy in Sugar Plant"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
                                </div>
                            </div>
                        </section>

                        {/* Supporting Farmers - Grid Overlay Design */}
                        <section className="py-20 bg-black">
                            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={sugarcanefiels}
                                        alt="Sugar Plant"
                                        fill
                                        className="object-cover opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
                                </div>
                                <div className="text-left space-y-6">
                                    <h2 className="text-4xl font-bold text-green-400">Supporting Farmers and Agricultural Economies</h2>
                                    <p className="text-gray-300 text-lg">
                                        SST Pro’s sugar investments extend beyond industrial production. We work closely with farming communities, offering training, modern irrigation methods, and fair pricing models. This ensures a stable supply chain while uplifting agricultural regions and supporting thousands of livelihoods.
                                    </p>
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
