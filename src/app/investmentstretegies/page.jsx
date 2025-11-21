"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function page() {

    const sections = [
        {
            title: "Why Diversification Matters",
            tag: "Diversification",
            img: "/images/whydiversification.webp",
            text: "In 2026, global markets are more unpredictable than ever. Economic shifts, inflation, and global events create volatility across industries. Diversifying across Forex and Real Estate helps protect your capital from sudden downturns, reduces overall risk, and allows your portfolio to perform well in different market conditions. This combination gives investors both fast growth opportunities and long-term financial security.",
        },
        {
            title: "Forex Trading",
            tag: "Forex",
            img: "/images/forex-trading.webp", // ✅ Public folder image path
            text: "Forex is the world’s largest and most liquid financial market, running 24/7 with trillions of dollars traded daily. Price movements occur constantly, providing daily opportunities to profit. SST Pro's expert traders monitor global news, economic reports, and technical patterns to execute high-potential trades for investors. This allows individuals to earn consistently without needing to understand complex trading strategies.",
        },
        {
            title: "Real Estate",
            tag: "Real Estate",
            img: "/images/realstate1.webp",
            text: "Real estate remains one of the most stable and proven wealth-building assets. Property values typically appreciate over time and offer steady rental income. Even during uncertain times, real estate markets recover faster than many other sectors. SST Pro carefully selects high-performing property projects with strong demand, ensuring investors benefit from capital appreciation, occupancy stability, and predictable long-term returns.",
        },
        {
            title: "SST Pro Advantage",
            tag: "SST Pro",
            img: "/images/keyimg.webp",
            text: "SST Pro’s strategy blends the fast-paced earning potential of Forex with the stability of long-term real estate investments. Their expert team studies market trends, volatility patterns, and global economic movements to allocate funds intelligently. This balanced approach produces consistent monthly returns backed by property assets while maximizing growth through active Forex trading.",
        },
        {
            title: "Risk Management",
            tag: "Risk",
            img: "/images/risk-management1.webp",
            text: "Diversified investments automatically reduce risk, but SST Pro strengthens this further with advanced risk-management strategies. If one market slows, the other compensates. SST Pro uses smart capital allocation, continuous monitoring, protective trading techniques, and strict risk controls to safeguard investor funds. This ensures stability even during market uncertainty.",
        },
        {
            title: "Why 2026",
            tag: "2026",
            img: "/images/financialbusinessinvestment.webp",
            text: "Economic shifts, inflation, and new financial technologies make 2026 one of the most important years for strategic investing. Forex volatility is creating strong income potential, while real estate continues to grow in high-demand regions. Diversifying now positions investors for consistent long-term growth and protects them against future market uncertainty.",
        },
        {
            title: "For Beginners",
            tag: "Beginners",
            img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&w=800&q=80",
            text: "Many believe diversification is only for experienced investors, but beginners actually benefit the most. By investing in multiple markets, they reduce risk while learning how different assets behave. SST Pro simplifies everything with guided plans, expert portfolio management, educational support, and transparent performance tracking—making wealth-building easy and stress-free for newcomers.",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">

            {/* HERO SECTION */}
            <div className="relative  py-24 lg:py-34 flex items-center justify-center overflow-hidden">
                <motion.img
                    initial={{ scale: 1.4 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3 }}
                    src="/images/back-baner1.webp"
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.30]"
                />

                <div className="relative text-center px-5 max-w-3xl pt-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-[32px] gradient_text sm:text-[45px]  lg:text-[55px] 2xl:text-[70px]   text-center leading-snug md:px-16 lg:px-12 xl:px-0 aos-init aos-animate"
                    >
                        Smart Diversified Investing for 2026
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="mt-4 text-lg text-gray-300"
                    >
                        A powerful combination of Forex & Real Estate managed by SST Pro.
                    </motion.p>
                </div>
            </div>

            {/* MOBILE SLIDER */}
            <div className="md:hidden mt-10 px-4">
                <Swiper spaceBetween={20} slidesPerView={1}>
                    {sections.map((sec, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-gray-900 p-5 rounded-xl shadow-lg">
                                <img src={sec.img} className="rounded-xl mb-3" />
                                <span className="text-green-400 text-sm font-semibold">{sec.tag}</span>
                                <h2 className="text-2xl font-bold mt-1">{sec.title}</h2>
                                <p className="mt-2 text-gray-400">{sec.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="relative">
                        {/* ↓↓↓ Arrows placed BELOW the slider ↓↓↓ */}
                        <div className="flex relative justify-between items-center mb-[13%] px-2">
                            <button className="swiper-button-prev bg-gray-800 text-white px-4 py-2 rounded-lg">
                                ◀
                            </button>

                            <button className="swiper-button-next bg-gray-800 text-white px-4 py-2 rounded-lg">
                                ▶
                            </button>
                        </div>
                    </div>
                </Swiper>
            </div>

            {/* DESKTOP SECTIONS */}
            <div className="hidden md:block max-w-7xl mx-auto py-20 px-6 space-y-20">
                {sections.map((sec, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "flex-row-reverse" : ""}`}
                    >
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            src={sec.img}
                            className="rounded-xl shadow-xl"
                        />

                        <div className="space-y-3">
                            <span className="bg-green-600 text-white px-3 py-1 text-sm rounded-md">
                                {sec.tag}
                            </span>
                            <h2 className="text-3xl font-bold">{sec.title}</h2>
                            <p className="text-gray-400">{sec.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
