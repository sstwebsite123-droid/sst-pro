import React from 'react'
import Image from 'next/image'
import logistics1 from '../../../public/images/logistics1.webp'
import logistictransport from '../../../public/images/logistictransport.webp'
import Globlegroth from '../Components/Pagecomponents/Globlegroth'

const page = () => {
    return (
        <div>
            <main className="bg-black text-gray-100">

                {/* Hero Section */}
                <section className="relative bg-gray-900 text-white  mt-[100px]  md:mt-[150px]">
                    <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Connecting Global Trade with Efficiency and Speed
                            </h1>
                            <p className="text-lg md:text-xl max-w-lg text-gray-200">
                                In our interconnected world, transportation and logistics form the backbone of the global economy. At SST Pro, we see this sector as a dynamic, opportunity-rich landscape for investment and trading. Our Transportation & Logistics project gives clients strategic access to trends shaping the future of global trade.
                            </p>
                        </div>
                        <div className="md:w-1/2 relative h-64 md:h-96 object-cover">
                            <Image
                                src={logistics1}
                                width={1000}
                                height={500}
                                className='rounded-[50px]  object-cover h-full'
                            />
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="container mx-auto px-6 md:py-16 space-y-16">

                    {/* Logistics Market */}
                    <Globlegroth
                        title={'The Logistics Market: An Investor’s Roadmap'}
                        description={
                            "Transportation and logistics are evolving rapidly, driven by e-commerce growth, digital transformation, and infrastructure modernization. Investors can access a sector poised for long-term growth and innovation in 2025 and beyond."
                        }
                        videoSrc='/video/graphvideo.mp4'
                        right_description={
                            "From AI and IoT integration to upgraded ports, airports, and roads, logistics presents strategic opportunities for investors seeking exposure to efficient, technology-driven supply chains and resilient global trade."
                        }
                    />

                    {/* Logistics Key Drivers */}
                    <section className="py-20 bg-gray-900 relative">
                        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 flex flex-col justify-center">
                                <h2 className="text-4xl font-bold mb-6 text-green-400">
                                    Key Drivers of Opportunity in Transportation & Logistics
                                </h2>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    • <strong>E-commerce Boom:</strong> Rising online retail demand drives warehousing, last-mile delivery, and reverse logistics needs.<br />
                                    • <strong>Digital Transformation:</strong> AI, IoT, and blockchain revolutionize supply chain efficiency and transparency.<br />
                                    • <strong>Infrastructure Modernization:</strong> Investments in ports, airports, roads, and railways create opportunities for logistics and infrastructure funds.<br />
                                </p>
                            </div>

                            <div className="md:col-span-1 relative rounded-3xl overflow-hidden shadow-2xl h-96">
                                <Image
                                    src={logistictransport}
                                    alt="Logistics Market"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute  rounded-3xl"></div>
                            </div>
                        </div>
                    </section>

                    {/* Logistics Investment Opportunities */}
                    <section className="py-20 bg-gray-800 relative overflow-hidden">
                        <div className="container mx-auto px-6 relative z-10">
                            <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">
                                Investment Opportunities in the Transportation & Logistics Sector
                            </h2>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform -translate-y-6">
                                    <p className="text-gray-300">
                                        • <strong>Logistics Stocks:</strong> Invest in leading publicly traded logistics companies, from global shipping giants to specialized last-mile delivery providers.
                                    </p>
                                </div>

                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl">
                                    <p className="text-gray-300">
                                        • <strong>Infrastructure Funds:</strong> Gain exposure to transportation infrastructure assets, including roads, ports, and railways, through specialized funds.
                                    </p>
                                </div>

                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform translate-y-6">
                                    <p className="text-gray-300">
                                        • <strong>Private Equity:</strong> For qualified investors, access private equity opportunities in logistics with potential for high returns.
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
