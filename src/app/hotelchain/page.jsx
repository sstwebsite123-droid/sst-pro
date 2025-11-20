import React from 'react'
import Image from 'next/image'
import hotel1 from '../../../public/images/hotel1.webp'
import hotellocation from '../../../public/images/hotellocation.webp'
import hotel2 from '../../../public/images/hotel2.webp'
import portfoliohotel from '../../../public/images/portfoliohotel.webp'
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
                                Hotel Chains – Expanding Hospitality With Innovation and Global Excellence
                            </h1>
                            <p className="text-lg md:text-xl max-w-lg text-gray-200">
                                The hospitality sector is undergoing a revolution driven by digital transformation, experiential travel, and sustainable operations. As global tourism rebounds and business travel expands, investing in premium hotel chains presents an exceptional opportunity for long-term revenue generation. SST Pro is strategically focused on developing hotel projects that elevate guest experiences through innovation, luxury, and global-level service.
                            </p>
                        </div>
                        <div className="md:w-1/2 relative h-64 md:h-96">
                            <Image
                                src={hotel1} // replace with your hotel hero image
                                width={1000}
                                height={500}
                                className='rounded-[50px]'
                            />
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="container mx-auto px-6 py-16 space-y-16">

                    {/* The New Era of Hospitality */}
                    <Globlegroth
                        title={'The New Era of Hospitality'}
                        description={
                            "Travelers today expect more than just accommodation—they want connected, personalized, and immersive experiences. Modern hotels must combine comfort, smart technology, sustainability, and world-class service. SST Pro identifies high-growth tourism hubs and urban centers where hotel demand consistently outpaces supply, making these locations prime territories for premium hospitality investments."
                        }
                        videoSrc='/video/hotelvideo.mp4'
                        right_description={
                            "Modern travelers expect personalized and immersive experiences, combining comfort, smart technology, and sustainability. SST Pro focuses on locations where hotel demand consistently outpaces supply, making these areas ideal for premium hospitality investments."
                        }
                    />

                    {/* Strategic Investments in High-Potential Locations */}
                    <section className="py-20 bg-gray-900 relative">
                        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 flex flex-col justify-center">
                                <h2 className="text-4xl font-bold mb-6 text-green-400">Strategic Investments in High-Potential Locations</h2>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    Our hotel development strategy focuses on destinations that attract corporate travelers, families, international tourists, and long-stay guests. From business districts to beachfront resorts, SST Pro selects locations with long-term demand visibility, ensuring continuous occupancy trends and consistent revenue flow for investors.
                                </p>
                            </div>
                            <div className="md:col-span-1 relative rounded-3xl overflow-hidden shadow-2xl h-96">
                                <Image
                                    src={hotellocation} // replace with relevant image
                                    alt="Hotel Location"
                                    fill
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
                            </div>
                        </div>
                    </section>

                    {/* Technology-Driven Guest Experience */}
                    <section className="py-20 bg-gray-800 relative overflow-hidden">
                        <div className="container mx-auto px-6 relative z-10">
                            <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">
                                Technology-Driven Guest Experience
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform -translate-y-6">
                                    <p className="text-gray-300">Smart check-in systems</p>
                                </div>
                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl">
                                    <p className="text-gray-300">AI-powered concierge services & Automated room controls</p>
                                </div>
                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform translate-y-6">
                                    <p className="text-gray-300">Data-driven guest personalization improving satisfaction and operational efficiency</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sustainable and Eco-Friendly Hospitality */}
                    <section className="relative py-20 bg-gradient-to-tr from-gray-900 via-gray-800 to-black">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-4xl font-bold mb-8 text-yellow-400">Sustainable and Eco-Friendly Hospitality</h2>
                            <p className="text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
                                SST Pro prioritizes green building standards, renewable energy use, and minimal-waste operations. Modern travelers prefer sustainable hotels, and our commitment to eco-friendly investments enhances long-term brand value, operational savings, and environmental performance.
                            </p>
                            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl max-w-4xl mx-auto">
                                <Image
                                    src={hotel2} // replace with relevant eco-friendly hotel image
                                    alt="Sustainable Hotel"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
                            </div>
                        </div>
                    </section>

                    {/* Diverse Hospitality Portfolio */}
                    <section className="py-20 bg-black">
                        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src={portfoliohotel} // replace with portfolio image
                                    alt="Diverse Hotels"
                                    fill
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
                            </div>
                            <div className="text-left space-y-6">
                                <h2 className="text-4xl font-bold text-green-400">Diverse Hospitality Portfolio</h2>
                                <p className="text-gray-300 text-lg">
                                    We aim to build a multi-category portfolio including luxury business hotels, leisure and wellness resorts, boutique urban hotels, and long-stay apartment hotels. This diversification strengthens investor returns and reduces seasonal impact.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Global Vision for Hospitality Investment */}
                    <section className="py-20 bg-gray-900">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-4xl font-bold text-purple-400 mb-6">A Global Vision for Hospitality Investment</h2>
                            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                                With tourism demand rising globally, SST Pro's hotel chain investments promise robust revenue, long-term scalability, and international growth opportunities. Our strategy blends innovation, sustainability, and luxury—making our hospitality projects a cornerstone for investors seeking profitable and future-ready ventures.
                            </p>
                        </div>
                    </section>

                </section>

                {/* Footer */}
            </main>

        </div>
    )
}

export default page
