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
      className="pt-12 md:pt-18 lg:pt-24  2xl:pt-32"
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
        className="pt-18 cursor-pointer"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <Marquee pauseOnHover={true} speed={30}>
          {stockCards.map((data, index) =>
            <motion.div 
              key={index} 
              className="mx-3 py-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="min-w-[350px] md:min-w-[415px] w-full border-2 border-[#b5d9d774] p-[35px] 2xl:p-[40px] bg-cover bg-no-repeat bg-[radial-gradient(circle,rgba(11,13,15,1)_0%,rgba(35,36,37,1)_100%)] rounded-[45px] transition-all duration-500 hover:scale-[1.03] hover:shadow-[-1px_0px_20px_7px_#ffffff63] relative overflow-hidden group magnetic"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(181, 217, 215, 0.3)",
                  borderColor: "#b5d9d7"
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Floating particles effect */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
                
                <motion.p 
                  className="text-[#898989] textxl relative z-10"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                >
                  {data.cardsub_name}
                </motion.p>
                
                <motion.p
                  className={`text-[24px] lg:text-[32px] 2xl:text-[40px] font-semibold relative z-10 ${data.gainloss < 0
                    ? "text-[#DC3545]"
                    : "text-[#28A745]"}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {data.name}
                </motion.p>
                
                <motion.p 
                  className="text-white text-[32px] lg:text-[40px] 2x:text-[50px] pb-2 lg:pb-4 border-b-[2px] border-[#FFFFFF33] font-bold relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                >
                  {" "}{data.price}{" "}
                </motion.p>
                
                <motion.div 
                  className="pt-3 flex justify-between relative z-10"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
                >
                  <motion.span
                    className={` text-base xl:text-xl flex items-center gap-2 ${data.gainloss <
                    0
                      ? "text-[#DC3545]"
                      : "text-[#28A745]"}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: data.gainloss < 0 ? [0, -10, 0] : [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 1,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      {data.gainloss < 0
                        ? <Image
                            src={loss}
                            alt="icon"
                            width={1000}
                            height={500}
                            className="max-w-[33px]"
                          />
                        : <Image
                            src={gain}
                            alt="icon"
                            width={1000}
                            height={500}
                            className="max-w-[33px]"
                          />}
                    </motion.div>
                    {data.gainloss}%
                  </motion.span>
                  <span className="text-[#898989] text-base xl:text-xl">
                    {data.volumn}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </Marquee>
      </motion.div>
      
      <motion.div 
        className="inn_container pt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className=" flex justify-center md:justify-end">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button btn_name=" View All Stocks" color="text-black" btn_background="bg-primary" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Topstock;
