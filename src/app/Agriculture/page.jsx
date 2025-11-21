import React from 'react'
import Image from 'next/image'
import agri1 from '../../../public/images/agri1.webp'
import agri3 from '../../../public/images/agri3.webp'
import oil22 from '../../../public/images/oil22.webp'
import Globlegroth from '../Components/Pagecomponents/Globlegroth'

const page = () => {
    return (
        <div>
            <main className="bg-black text-gray-100">

                {/* Hero Section with Image */}
                <section className="relative bg-gray-900 text-white mt-[120px]">
                    <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Sustaining the World with Smart and Efficient Farming
                            </h1>
                            <p className="text-lg md:text-xl max-w-lg text-gray-200">
                                At SST Pro, we view agriculture as a vital global industry filled with powerful investment
                                and trading opportunities. As global food demand rises, our Agriculture project helps investors
                                cultivate long-term wealth through sustainable farming, advanced AgTech, and future-focused
                                food production systems.
                            </p>
                        </div>

                        <div className="md:w-1/2 relative h-64 md:h-96">
                            <Image
                                src={agri1}
                                width={1000}
                                height={500}
                                className="rounded-[50px]"
                            />
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="container mx-auto px-6 py-16 space-y-16">

                    {/* The Agriculture Market */}
                    <Globlegroth
                        title={'The Agricultural Market: An Investor’s Harvest'}
                        description={
                            "Agriculture is experiencing a technological revolution as smart farming, automation, and precision agriculture reshape the industry. With climate-smart agriculture expected to grow significantly, investors have major opportunities to support efficient, sustainable, and profitable food production systems."
                        }
                        videoSrc="/video/graphvideo.mp4"
                        right_description={
                            "From precision technology to sustainability-driven farming, agriculture is becoming one of the fastest-advancing global industries. This shift creates strong, long-term opportunities for investors seeking stable growth and exposure to essential global commodities."
                        }
                    />

                    {/* Strategic Investment Insights */}
                    <section className="py-20 bg-gray-900 relative">
                        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 flex flex-col justify-center">
                                <h2 className="text-4xl font-bold mb-6 text-green-400">
                                    Key Trends Shaping the Agriculture Market
                                </h2>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    • <strong>Precision Agriculture:</strong> Technologies like drones, soil sensors, and GPS-driven machinery are boosting efficiency and yield.<br />
                                    • <strong>Sustainable Farming:</strong> Demand for organic and eco-friendly produce creates new premium investment ecosystems.<br />
                                    • <strong>Global Food Demand:</strong> A growing population continues to raise long-term demand for staple commodities worldwide.<br />
                                </p>
                            </div>

                            <div className="md:col-span-1 relative rounded-3xl overflow-hidden shadow-2xl h-96">
                                <Image
                                    src={agri3}
                                    alt="Agriculture Market"
                                    fill
                                    className="object-cover "
                                />
                                <div className="absolute  rounded-3xl"></div>
                            </div>
                        </div>
                    </section>

                    {/* Investment Tools Section */}
                    <section className="py-20 bg-gray-800 relative overflow-hidden">
                        <div className="container mx-auto px-6 relative z-10">
                            <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">
                                Investment Opportunities in the Agriculture Sector
                            </h2>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform -translate-y-6">
                                    <p className="text-gray-300">
                                        • <strong>Commodity Trading:</strong> Trade major agricultural commodities like wheat, corn, and soybeans with expert market insights.
                                    </p>
                                </div>

                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl">
                                    <p className="text-gray-300">
                                        • <strong>AgTech Stocks:</strong> Invest in innovative companies leading the future of farming through automation, biotech, and software solutions.
                                    </p>
                                </div>

                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform translate-y-6">
                                    <p className="text-gray-300">
                                        • <strong>Sustainable Agriculture Funds:</strong> Grow your portfolio while supporting environmentally friendly and ethical food production.
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
