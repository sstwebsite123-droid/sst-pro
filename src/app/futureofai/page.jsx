"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function page() {

    const sections = [
        {
            title: "How Professional Trading Management Helps Investors",
            tag: "Pro Trading",
            img: "/images/profecional-trading.webp",
            text: "For everyday investors who want to grow their wealth but lack the time, knowledge, or confidence to trade independently, professional trading management has become a powerful solution. Platforms like SST Pro help individuals earn consistent profits with expert guidance.",
        },
        {
            title: "Why Most Investors Struggle on Their Own",
            tag: "Challenges",
            img: "/images/invester-strgl1.webp",
            text: "Trading profitably requires deep market understanding, emotional discipline, and quick decisions based on data. Many new investors realize how complex trading is. Without expert strategies and risk controls, losses happen easily. Professional management avoids common mistakes and provides proven methods for success.",
        },
        {
            title: "Simplifying Investing with Experts",
            tag: "Ease",
            img: "/images/simply-investing.webp",
            text: "Professional trading teams research trends, analyze charts, monitor global events, and execute trades at the right time. SST Pro offers ease and reliability, allowing investors to focus on their lives while their portfolios grow steadily.",
        },
        {
            title: "Expertise Drives Consistent Daily Returns",
            tag: "Expertise",
            img: "/images/Expertise Drives Consistent Daily Returns.webp",
            text: "Expert traders use years of experience, technical indicators, and risk management strategies to make smarter decisions. SST Pro’s team identifies profitable opportunities, resulting in consistent daily profits that independent traders rarely achieve alone.",
        },
        {
            title: "Risk Management Ensures Sustainable Profits",
            tag: "Risk",
            img: "/images/risk-management1.webp",
            text: "Consistent profit doesn’t mean taking large risks. SST Pro applies strict risk controls like limited exposure, stop-loss systems, and diversified entry strategies. Investors enjoy stability even during unpredictable market conditions, building long-term success through responsible trading.",
        },
        {
            title: "Transparency Builds Trust",
            tag: "Transparency",
            img: "/images/build-trust1.webp",
            text: "Professional trading management focuses on clear operations, real performance, and open communication. Investors can track returns, understand strategies, and rely on a system designed to protect them. Trust is essential for long-term financial growth.",
        },
        {
            title: "Ideal for Busy Individuals",
            tag: "Busy Investors",
            img: "/images/busy-individual1.webp",
            text: "Busy professionals, business owners, parents, and students often want to invest but cannot dedicate hours to learning trading. SST Pro’s professional management offers a hands-off solution where experts trade on behalf of the investor.",
        },
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
                        className="text-[32px] gradient_text sm:text-[45px] lg:text-[60px] xl:text-[70px]  text-center leading-snug md:px-16 lg:px-12 xl:px-0 aos-init aos-animate"
                    >
                        Grow Wealth Confidently with Professional Trading
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="mt-4 text-lg text-gray-300"
                    >
                        Expert-managed strategies, consistent daily profits, and smart risk control.
                    </motion.p>
                </div>
            </div>

            {/* MOBILE SLIDER */}
            {/* <div className="md:hidden mt-10 px-4">
                <Swiper spaceBetween={20} slidesPerView={1}>
                    {sections.map((sec, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-black p-5 rounded-xl shadow-lg">
                                <img src={sec.img} className="rounded-xl mb-3" />
                                <span className="text-green-400 text-sm font-semibold">{sec.tag}</span>
                                <h2 className="text-2xl font-bold mt-1">{sec.title}</h2>
                                <p className="mt-2 text-gray-300">{sec.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div> */}

            <div className="md:hidden mt-10 px-4">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                >
                    {sections.map((sec, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-black p-5 rounded-xl shadow-lg">
                                <img src={sec.img} className="rounded-xl mb-3" />
                                <span className="text-green-400 text-sm font-semibold">
                                    {sec.tag}
                                </span>
                                <h2 className="text-2xl font-bold mt-1">{sec.title}</h2>
                                <p className="mt-2 text-gray-300">{sec.text}</p>
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
