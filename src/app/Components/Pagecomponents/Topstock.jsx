"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Title from "../Uiux/Title";
import Marquee from "react-fast-marquee";
import Description from "../Uiux/Description";
import gain from "../../../../public/icons/gain.svg";
import loss from "../../../../public/icons/loss.svg";
import Image from "next/image";
import Button from "../Uiux/Button";
import leftArrow from '../../../../public/images/leftArrow.webp'
import Rightarrow from '../../../../public/Images/Rightarrow.webp'
const stockCards = [
  {
    cardsub_name: "EXXON MOBIL CORP.",
    name: "XOM",
    price: "$142.08",
    gainloss: -1.81,
    volumn: "Vol: 7.4M"
  },
  {
    cardsub_name: "APPLE INC.",
    name: "APPL",
    price: "$156.50",
    gainloss: +1.43,
    volumn: "Vol: 10.4M"
  },
  {
    cardsub_name: "NVIDIA CORP.",
    name: "NVDA",
    price: "$367.43",
    gainloss: -0.19,
    volumn: "Vol: 43.3M"
  },
  {
    cardsub_name: "EXXON MOBIL CORP.",
    name: "XOM",
    price: "$142.08",
    gainloss: -1.81,
    volumn: "Vol: 7.4M"
  },
  {
    cardsub_name: "APPLE INC.",
    name: "APPL",
    price: "$156.50",
    gainloss: +1.43,
    volumn: "Vol: 10.4M"
  },
  {
    cardsub_name: "NVIDIA CORP.",
    name: "NVDA",
    price: "$367.43",
    gainloss: -0.19,
    volumn: "Vol: 43.3M"
  }
];

function Topstock() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={containerRef}
      className="pt-12 md:pt-18 lg:pt-24  2xl:pt-32 bg-[#0E1F30] rounded-[50px] pb-12"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="inn_container">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Title
              title={
                'Explore <span class="gradient_text"> Top  Stocks <br/> & Market </span> Opportunities'
              }
              color={"text-white"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Description
              description={
                "Stay ahead with real-time market insights and <br /> trending stocks curated for you."
              }
              color={"text-white"}
              align={"lg:text-end"}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="pt-18"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Marquee pauseOnHover={true} speed={30}>
          {stockCards.map((data, index) => (
            <div
              key={index}
              className="mx-3 py-6 group"
            >
              <div className="min-w-[350px] md:min-w-[415px] w-full border-2 border-[#b5d9d774] p-8 bg-[#00000666] rounded-[45px] relative overflow-hidden transition-all duration-300 hover:scale-105 hover:border-[#b5d9d7] hover:shadow-[0_0_30px_rgba(181,217,215,0.3)]">

                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-[#898989] text-lg mb-2">
                    {data.cardsub_name}
                  </p>

                  <p className={`text-2xl lg:text-3xl font-semibold mb-3 ${data.gainloss < 0 ? "text-[#DC3545]" : "text-[#28A745]"}`}>
                    {data.name}
                  </p>

                  <p className="text-white text-3xl lg:text-4xl pb-4 border-b-2 border-[#FFFFFF33] font-bold">
                    {data.price}
                  </p>

                  <div className="pt-3 flex justify-between items-center">
                    <span className={`text-lg flex items-center gap-2 ${data.gainloss < 0 ? "text-[#DC3545]" : "text-[#28A745]"}`}>
                      <Image
                        src={data.gainloss < 0 ? loss : gain}
                        alt="icon"
                        width={33}
                        height={33}
                        className="transition-transform duration-200 group-hover:scale-110"
                      />
                      {data.gainloss}%
                    </span>
                    <span className="text-[#898989] text-lg">
                      {data.volumn}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </motion.div>

      <motion.div
        className="inn_container pt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="arrow-btns flex justify-between gap-[30px] ">

          <div className="stockbtns">
            <button className=''>
              <Image
                src={leftArrow}
                alt='leftArrow'
                width={1000}
                height={500}
                className=' max-w-[51px] bg-[#D9D9D926] rounded-full' />
            </button>
            <button className=''>
              <Image
                src={Rightarrow}
                alt='Rightarrow'
                width={1000}
                height={500}
                className=' max-w-[51px] bg-[#D9D9D926] rounded-full' />
            </button>
          </div>
          <div className=" flex justify-center md:justify-end">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button btn_name=" View All Stocks" color="text-black" btn_background="bg-primary" />
            </motion.div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}

export default Topstock;
