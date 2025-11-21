import React from 'react'
import Image from 'next/image'
import globalreach from '../../../public/images/globalreach.webp'
import hotellocation from '../../../public/images/hotellocation.webp'
import hotel2 from '../../../public/images/hotel2.webp'
import portfoliohotel from '../../../public/images/portfoliohotel.webp'
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
                                Expanding Hospitality with Innovation and Global Reach
                            </h1>
                            <p className="text-lg md:text-xl max-w-lg text-gray-200">
                                At SST Pro, we recognize hospitality as a strong and growing segment within real estate, offering both long-term value and steady income. Our Hotel Chains project provides investors with smart, secure, and transparent access to high-potential hotel investment opportunities.</p>
                        </div>
                        <div className="md:w-1/2 relative h-64 md:h-96">
                            <Image
                                src={globalreach} // replace with your hotel hero image
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
                        title={'The Hospitality Market: A Real Estate Investors View'}
                        description={
                            "The hotel industry is rapidly transforming through new travel trends, technology, and stronger guest expectations. With rising transactions and growing demand from leisure, business, and 'bleisure' travel, hotel investments offer strong long-term opportunities."
                        }
                        videoSrc='/video/graphvideo.mp4'
                        right_description={
                            "The global hotel industry is undergoing major transformation driven by evolving travel trends and new technologies.This shift is creating strong opportunities for real estate investors.Transaction volumes are expected to rise in 2025 and beyond.Growth is fueled by increasing leisure, business, and emerging"
                        }
                    />

                    {/* Strategic Investments in High-Potential Locations */}
                    <section className="py-20 bg-gray-900 relative">
                        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 flex flex-col justify-center">
                                <h2 className="text-4xl font-bold mb-6 text-green-400">Unlocking Value in Hotel Real Estate'</h2>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    SST Pro provides multiple hotel-sector investment options tailored to different goals and risk levels.
                                    • Hotel REITs: A diversified, liquid way to earn dividends and long-term growth.
                                    • Direct Property Investment: Ideal for high-net-worth investors seeking control and higher returns.
                                    • Hotel Brand Franchising: Partnering with top hotel brands to build long-term, stable wealth.
                                </p>
                            </div>
                            <div className="md:col-span-1 relative rounded-3xl overflow-hidden shadow-2xl h-96">
                                <Image
                                    src={hotellocation} // replace with relevant image
                                    alt="Hotel Location"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute  rounded-3xl"></div>
                            </div>
                        </div>
                    </section>

                    {/* Technology-Driven Guest Experience */}
                    <section className="py-20 bg-gray-800 relative overflow-hidden">
                        <div className="container mx-auto px-6 relative z-10">
                            <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">
                                Your Partner in Hospitality Investment
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform -translate-y-6">
                                    <p className="text-gray-300">With SST Pro, you have a partner who understands the nuances of the hotel investment market. </p>
                                </div>
                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl">
                                    <p className="text-gray-300">Our team of real estate experts conducts rigorous due diligence on every investment opportunity, ensuring that it meets our strict criteria for financial performance and long-term value.</p>
                                </div>
                                <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl transform translate-y-6">
                                    <p className="text-gray-300">We provide our clients with the data and analysis they need to make informed decisions, and our secure platform makes it easy to track the performance of your investments.</p>
                                </div>
                            </div>
                        </div>
                    </section>



                </section>

                {/* Footer */}
            </main>

        </div>
    )
}

export default page
