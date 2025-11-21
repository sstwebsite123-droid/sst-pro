import React from 'react'
import Image from 'next/image'
import logistics1 from '../../../public/images/logistics1.webp'
import logistics2 from '../../../public/images/logistics2.webp'
import Globlegroth from '../Components/Pagecomponents/Globlegroth'

const page = () => {
    return (
        <div>
            <main className="bg-black text-gray-100">

                {/* Hero Section */}
                <section className="relative bg-gray-900 text-white mt-[120px]">
                    <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Connecting Global Trade with Efficiency and Speed
                            </h1>
                            <p className="text-lg md:text-xl max-w-lg text-gray-200">
                                In our interconnected world, transportation and logistics form the backbone of the global economy. At SST Pro, we see this sector as a dynamic, opportunity-rich landscape for investment and trading. Our Transportation & Logistics project gives clients strategic access to trends shaping the future of global trade.
                            </p>
                        </div>
                        <div className="md:w-1/2 relative h-64 md:h-96">
                            <Image
                                src={logistics1}
                                width={1000}
                                height={500}
                                className='rounded-[50px]'
                            />
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="container mx-auto px-6 py-16 space-y-16">

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

                    {/* Technology & AI Section */}
                    <section className="py-20 bg-gray-900 relative">
                        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 flex flex-col justify-center">
                                <h2 className="text-4xl font-bold mb-6 text-green-400">
                                    Driving Innovation with Data, Automation, and Intelligence
                                </h2>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    At SST Pro, we recognize that technology and artificial intelligence are not just transforming industries—they are creating entirely new investment paradigms. The rapid advancement of AI, machine learning, and data analytics is reshaping the global economy, and the companies at the forefront of this revolution represent some of the most compelling investment opportunities of our time.<br /><br />

                                    <strong>The Tech Market: An Investor’s Frontier</strong><br />
                                    The technology sector, particularly AI, is experiencing unprecedented growth. Generative AI alone attracted $33.9 billion in global private investment in 2024, representing an 18.7% increase from the previous year. This surge in capital fuels innovations from advanced machine learning algorithms to autonomous systems and intelligent automation.<br /><br />

                                    <strong>Key Trends & SST Pro's Strategic Approach</strong><br />
                                    • <strong>AI Adoption Surge:</strong> Companies integrating AI into operations create massive market opportunities. We invest in leading AI companies, from tech giants to promising startups.<br />
                                    • <strong>Data Infrastructure Boom:</strong> Exponential growth in data drives demand for data centers, cloud computing, and storage solutions. Our portfolio includes companies building this infrastructure.<br />
                                    • <strong>Automation and Productivity:</strong> AI-driven automation transforms industries, boosting productivity. We focus on companies leveraging AI for competitive advantage and sustainable growth.<br /><br />

                                    <strong>Investment Pathways</strong><br />
                                    • <strong>Tech Stocks:</strong> Equity in leading technology companies, from mega-cap tech stocks to innovative mid- and small-cap AI companies.<br />
                                    • <strong>Tech-Focused ETFs:</strong> Diversified exposure through ETFs focused on AI, cloud computing, and cybersecurity.<br />
                                    • <strong>Venture Capital:</strong> Access early-stage AI companies for qualified investors, providing potential for high returns.<br /><br />

                                    <strong>Your Partner in the Digital Age</strong><br />
                                    SST Pro provides expertise and insights to navigate this fast-moving sector. Our team tracks trends and developments, ensuring you can confidently invest in the intelligence revolution.
                                </p>
                            </div>

                            <div className="md:col-span-1 relative rounded-3xl overflow-hidden shadow-2xl h-96">
                                <Image
                                    src={logistics1} // Replace with a relevant tech image if desired
                                    alt="Technology & AI Market"
                                    fill
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
                            </div>
                        </div>
                    </section>

                </section>

            </main>
        </div>
    )
}

export default page
