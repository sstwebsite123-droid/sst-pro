"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Image from "next/image";
import investsmartly from "../../../../public/images/Investsmartly.webp";
const Investsmartly = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="inn_container pt-12 md:pt-18 lg:pt-24  2xl:pt-32">
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
                'Learn to <span class="gradient_text"> Invest <br /> Smartly</span> '
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
                "We guide you through financial literacy, investing <br/> strategies, and market insights."
              }
              color={"text-white"}
              align={"lg:text-end"}
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="pt-18 relative hidden lg:block"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <Image
              src={investsmartly}
              alt=""
              width={3000}
              height={500}
              className="max-w-[550px] 2xl:max-w-[675px] m-auto"
            />
          </motion.div>
          
          <motion.div
            className="text-end absolute top-[5%] left-[20%] fade_up invest_card1"
            initial={{ opacity: 0, x: -100, y: -50 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -100, y: -50 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileHover={{ scale: 1.05, x: 10 }}
          >
            <motion.p 
              className="text-[22px] xl:text-[25px] text-primary pb-3"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio Building Tips
            </motion.p>
            <motion.span 
              className="sub_description text-ternary"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Create a balanced portfolio tailored specifically <br /> to your
              long-term financial goals.
            </motion.span>
          </motion.div>
          
          <motion.div
            className="text-end absolute bottom-[28%] left-[8%] invest_card2"
            initial={{ opacity: 0, x: -100, y: 50 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -100, y: 50 }}
            transition={{ duration: 1, delay: 1.4 }}
            whileHover={{ scale: 1.05, x: 10 }}
          >
            <motion.p 
              className="text-[22px] xl:text-[25px] text-primary pb-3"
              whileHover={{ scale: 1.05 }}
            >
              Step-by-Step Investment Tutorials
            </motion.p>
            <motion.span 
              className="sub_description text-ternary"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Learn the basics through interactive lessons <br /> and
              easy-to-follow guides for beginners.
            </motion.span>
          </motion.div>
          
          <motion.div
            className="text-start absolute bottom-[25%] right-[17%] invest_card3"
            initial={{ opacity: 0, x: 100, y: 50 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 100, y: 50 }}
            transition={{ duration: 1, delay: 1.6 }}
            whileHover={{ scale: 1.05, x: -10 }}
          >
            <motion.p 
              className="text-[22px] xl:text-[25px] text-primary pb-3"
              whileHover={{ scale: 1.05 }}
            >
              Risk Management Guidance
            </motion.p>
            <motion.span 
              className="sub_description text-ternary"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              Understand how to protect your capital <br /> and make informed
              decisions to <br /> minimize exposure.
            </motion.span>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="pt-12 block lg:hidden"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <div className="flex flex-col gap-6">
            <motion.div 
              className="text-center fade_up invest_card1"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.p 
                className="text-xl md:text-[22px] xl:text-[25px] text-primary pb-3"
                whileHover={{ scale: 1.05 }}
              >
                Portfolio Building Tips
              </motion.p>
              <span className="sub_description text-white">
                Create a balanced portfolio tailored specifically <br /> to your
                long-term financial goals.
              </span>
            </motion.div>
            
            <motion.div 
              className="text-center invest_card2"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.p 
                className="text-xl md:text-[22px] xl:text-[25px] text-primary pb-3"
                whileHover={{ scale: 1.05 }}
              >
                Step-by-Step Investment Tutorials
              </motion.p>
              <span className="sub_description text-white">
                Learn the basics through interactive lessons <br /> and
                easy-to-follow guides for beginners.
              </span>
            </motion.div>
            
            <motion.div 
              className="text-center invest_card3"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.p 
                className="text-xl md:text-[22px] xl:text-[25px] text-primary pb-3"
                whileHover={{ scale: 1.05 }}
              >
                Risk Management Guidance
              </motion.p>
              <span className="sub_description text-white">
                Understand how to protect your capital <br /> and make informed
                decisions to <br /> minimize exposure.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Investsmartly;
