import React from 'react'
import Image from 'next/image'
import logistictransport from '../../../public/images/logistictransport.webp'
import logistics22 from '../../../public/images/logistics22.webp'

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
                                Connecting Global Trade with Efficiency and Speed
                            </h1>
                            <p className="text-lg md:text-xl max-w-lg text-gray-200">
                                In our interconnected world, the transportation and logistics sector is the backbone of the global economy. At SST Pro, we see this vital industry not just as a network of roads, ports, and warehouses, but as a dynamic and opportunity-rich landscape for investment and trading. Our Transportation & Logistics project is designed to give our clients a strategic entry point into this sector, enabling them to capitalize on the trends that are shaping the future of global trade.
                            </p>
                        </div>
                        <div className="md:w-1/2 relative h-64 md:h-96">
                            <Image
                                src={logistictransport}
                                width={1000}
                                height={500}
                                className='rounded-[50px]'
                            />
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="container mx-auto px-6 py-16 space-y-16">

                    {/* The Logistics Market */}
                    <Globlegroth
                        title={'The Logistics Market: An Investor’s Roadmap'}
                        description={
                            "The transportation and logistics industry is at a critical juncture. The rapid growth of e-commerce, along with the global demand for more resilient and efficient supply chains, is driving a wave of investment and innovation. The sector is expected to experience continued growth in M&A activity in 2025, propelled by digital technologies and an increasing need for sophisticated logistics solutions."
                        }
                        videoSrc='/video/graphvideo.mp4'
                        right_description={
                            "From advanced warehousing to upgraded infrastructure across ports, airports, and highways, logistics is emerging as a strategic sector for investors. As businesses adopt AI, automation, and IoT-driven systems, logistics companies that are prepared for this shift offer far-reaching investment potential."
                        }
                    />

                    {/* Strategic Investment Insights */}
                    <section className="py-20 bg-gray-900 relative">
                        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 flex flex-col justify-center">
                                <h2 className="text-4xl font-bold mb-6 text-green-400">
                                    Key Drivers of Opportunity in Transportation & Logistics
                                </h2>

                                <p className="text-gray-300 leading-relaxed text-lg">

                                    <strong>E-commerce Boom:</strong>
                                    The exponential growth of online retail is creating unprecedented demand for warehousing, last-mile delivery, and reverse logistics services.<br /><br />

                                    <strong>Digital Transformation:</strong>
                                    AI, IoT, and blockchain are revolutionizing supply chain management — increasing transparency, speed, and efficiency.<br /><br />

                                    <strong>Infrastructure Modernization:</strong>
                                    Governments and private sector organizations are investing heavily in upgrading transportation infrastructure including ports, airports, railways, and highways.<br /><br />

                                    <strong>SST Pro’s Strategic Approach:</strong><br />
                                    • We identify logistics companies positioned to benefit from the e-commerce boom.<br />
                                    • We invest in tech-driven logistics companies leading digital transformation.<br />
                                    • We provide access to infrastructure funds involved in large-scale modernization projects.<br />

                                </p>
                            </div>

                            <div className="md:col-span-1 relative rounded-3xl overflow-hidden shadow-2xl h-96">
                                <Image
                                    src={logistics22}
                                    alt="Logistics Market"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Investment Tools Section */}
                    <section className="py-20 bg-gray-800 relative overflow-hidden">
                        <div className="container mx-auto px-6 relative z-10">
                            <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">
                                Investment Opportunities in the Transportation & Logistics Sector
                            </h2>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform -translate-y-6">
                                    <p className="text-gray-300">
                                        • <strong>Logistics Stocks:</strong>
                                        Invest in a curated selection of publicly traded logistics companies, from global shipping giants to specialized last-mile delivery providers.
                                    </p>
                                </div>

                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl">
                                    <p className="text-gray-300">
                                        • <strong>Infrastructure Funds:</strong>
                                        Gain exposure to diversified transportation infrastructure assets, including roads, ports, and rail systems.
                                    </p>
                                </div>

                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform translate-y-6">
                                    <p className="text-gray-300">
                                        • <strong>Private Equity:</strong>
                                        For qualified investors, we offer access to private equity opportunities in the logistics sector, providing the potential for high long-term returns.
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
