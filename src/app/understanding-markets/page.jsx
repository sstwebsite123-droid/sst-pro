"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function page() {

    const sections = [
        {
            title: "The Power of Compounding",
            tag: "Compounding",
            img: "/images/cointree.webp",
            text: "Compounding allows your money to grow exponentially by earning returns on both your initial investment and the profits generated over time. SST Pro’s daily trading profits make compounding incredibly effective, helping investors multiply their capital steadily. Even small investments can become significant amounts when compounded consistently.",
        },
        {
            title: "Daily Profits Accelerate Growth",
            tag: "Daily Profits",
            img: "/images/businessgrowth.webp",
            text: "The frequency of earnings plays a major role in how quickly wealth grows. Daily profits multiply faster than monthly or yearly returns because more cycles of reinvestment take place. SST Pro’s Forex trading strategies capture opportunities every day, ensuring investors benefit from continuous growth.",
        },
        {
            title: "Consistent Returns for Investors",
            tag: "Consistency",
            img: "/images/grothup1.webp",
            text: "SST Pro uses advanced market analysis, smart risk controls, and experienced traders to produce steady daily profits. Investors do not need any trading expertise — the SST Pro team manages the entire process while you enjoy the results, ensuring consistent returns even in changing market conditions.",
        },
        {
            title: "Small Investments Grow Significantly",
            tag: "Growth",
            img: "/images/invest-groth1.webp",
            text: "You don’t need a large initial investment to benefit from compounding. Even modest amounts can grow into significant wealth when daily profits are reinvested. SST Pro’s system allows investors to watch their capital multiply steadily month after month.",
        },
        {
            title: "Reinvesting Profits for Faster Wealth",
            tag: "Reinvestment",
            img: "/images/img4.webp",
            text: "Reinvesting your daily profits is essential for maximizing compounding. Each reinvested amount increases the base capital, generating higher earnings the next day. SST Pro automates this process, creating a snowball effect that accelerates wealth growth.",
        },
        {
            title: "Compounding Works During Market Fluctuations",
            tag: "Stability",
            img: "/images/Market Fluctuations.webp",
            text: "Market volatility is natural, but compounding remains effective even during fluctuations. SST Pro applies smart risk-management strategies to maintain stable performance, ensuring consistent daily returns and steady compounding momentum over time.",
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">

            {/* HERO SECTION */}
            <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <motion.img
                    initial={{ scale: 1.4 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3 }}
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1600&q=80"
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.25]"
                />

                <div className="relative z-10 text-center px-5 max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        Harness the Power of Compounding with SST Pro
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="mt-4 text-xl text-gray-300"
                    >
                        Daily profits, smart reinvestment, and consistent growth — your path to long-term wealth.
                    </motion.p>
                </div>
            </div>

            {/* MOBILE SLIDER */}
            <div className="md:hidden mt-10 px-4">
                <Swiper spaceBetween={20} slidesPerView={1}>
                    {sections.map((sec, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-gray-800 p-5 rounded-xl shadow-lg">
                                <img src={sec.img} className="rounded-xl mb-3" />
                                <span className="text-green-400 text-sm font-semibold">{sec.tag}</span>
                                <h2 className="text-2xl font-bold mt-1">{sec.title}</h2>
                                <p className="mt-2 text-gray-300">{sec.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
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
                        className={` gap-12 items-center ${i % 2 === 0 ? "flex flex-col md:flex-row" : "flex flex-col md:flex-row-reverse"}`}
                    >
                        <div className="w-auto md:w-[50%]">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src={sec.img}
                                className="rounded-xl shadow-xl"
                            />
                        </div>

                        <div className="space-y-3 w-auto md:w-[50%]">
                            <span className="bg-green-600 text-white px-3 py-1 text-sm rounded-md">
                                {sec.tag}
                            </span>
                            <h2 className="text-3xl font-bold">{sec.title}</h2>
                            <p className="text-gray-300">{sec.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
