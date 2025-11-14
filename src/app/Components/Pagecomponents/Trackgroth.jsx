"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import cardbanner3 from "../../../../public/images/trackcard3.webp";
import cardbanner4 from "../../../../public/images/trackcard4.webp";
import cardbanner5 from "../../../../public/images/trackcard5.webp";
import cardbanner6 from "../../../../public/images/trackcard6.webp";
import cardbanner7 from "../../../../public/images/trackcard7.webp";
import cardbanner8 from "../../../../public/images/trackcard8.webp";
import cardbanner9 from "../../../../public/images/trackcard9.webp";
import cardbanner10 from "../../../../public/images/trackcard10.webp";
import ForexTrading from "../../../../public/images/ForexTrading.webp";
import RealEstate from "../../../../public/images/RealEstate.webp";
import Mining from "../../../../public/images/Mining.webp";
import SugarPlant from "../../../../public/images/SugarPlant.webp";
import HotelChains from "../../../../public/images/HotelChains.webp";
import OilEnergy from "../../../../public/images/OilEnergy.webp";
import Agriculture from "../../../../public/images/Agriculture.webp";
import Transportation from "../../../../public/images/Transportation.webp";
import Technologys from "../../../../public/images/Technologys.webp";


import Image from "next/image";
import Arrowbtn from "../Uiux/Arrowbtn";
const industries = [
  // {
  //   image: cardbanner3,
  //   title: "Mining",
  //   description:
  //     "Harness opportunities in natural resources <br/> and global demand.",
  //   cardvalue1: "$700B+",
  //   cardvaluetype1: "Industry",
  //   cardvalue2: "5",
  //   cardvaluetype2: "Top Commodities",
  //   cardvalue3: "6%",
  //   cardvaluetype3: "Annual Growth"
  // },
  {
    image: ForexTrading,
    title: "Forex Trading",
    description:
      "Navigate global currencies with precision and smart strategies.",
    cardvalue1: "$55B+",
    cardvaluetype1: "Global Market",
    cardvalue2: "4%",
    cardvaluetype2: "Annual Growth",
    cardvalue3: "180M",
    cardvaluetype3: "Produced Yearly"
  },
  {
    image: RealEstate,
    title: "Real Estate",
    description:
      "Invest in properties that build long-term value and stability.",
    cardvalue1: "$55B+",
    cardvaluetype1: "Global Market",
    cardvalue2: "4%",
    cardvaluetype2: "Annual Growth",
    cardvalue3: "180M",
    cardvaluetype3: "Produced Yearly"
  },
  {
    image: Mining,
    title: "Mining",
    description:
      "Harness opportunities in natural resources and global demand.",
    cardvalue1: "$55B+",
    cardvaluetype1: "Global Market",
    cardvalue2: "4%",
    cardvaluetype2: "Annual Growth",
    cardvalue3: "180M",
    cardvaluetype3: "Produced Yearly"
  },
  {
    image: SugarPlant,
    title: "Sugar Plant",
    description:
      "Fueling industries with quality and <br/> sustainable production.",
    cardvalue1: "$55B+",
    cardvaluetype1: "Global Market",
    cardvalue2: "4%",
    cardvaluetype2: "Annual Growth",
    cardvalue3: "180M",
    cardvaluetype3: "Produced Yearly"
  },
  {
    image: HotelChains,
    title: "Hotel Chains",
    description:
      "Expanding hospitality with innovation <br/> and global reach.",
    cardvalue1: "$400B+",
    cardvaluetype1: "Industry",
    cardvalue2: "70%",
    cardvaluetype2: "Avg Occupancy",
    cardvalue3: "12%",
    cardvaluetype3: "Yearly Revenue Rise"
  },
  // {
  //   image: cardbanner6,
  //   title: "Bio Chemical",
  //   description:
  //     "Advancing industries with eco-friendly <br/> chemical solutions.",
  //   cardvalue1: "$820B+",
  //   cardvaluetype1: "Market",
  //   cardvalue2: "9%",
  //   cardvaluetype2: "CAGR",
  //   cardvalue3: "60%",
  //   cardvaluetype3: "Eco-based Demand"
  // },
  {
    image: OilEnergy,
    title: "Oil & Energy",
    description:
      "Powering economies through reliable <br/> energy investments.",
    cardvalue1: "$6T+",
    cardvaluetype1: "Global Market",
    cardvalue2: "5%",
    cardvaluetype2: "Yearly Growth",
    cardvalue3: "30%",
    cardvaluetype3: "Renewable Shift"
  },


  {
    image: Agriculture,
    title: "Agriculture",
    description:
      "Sustaining the world with smart and <br/> efficient farming.",
    cardvalue1: "$3.5T+",
    cardvaluetype1: "Industry",
    cardvalue2: "4.5%",
    cardvaluetype2: "Annual Growth",
    cardvalue3: "25%",
    cardvaluetype3: "Tech-Integrated Farms",
  },
  {
    image: Transportation,
    title: "Transportation & Logistics",
    description:
      "Connecting global trade with <br/> efficiency and speed.",
    cardvalue1: "$9T+",
    cardvaluetype1: "Industry",
    cardvalue2: "6%",
    cardvaluetype2: "Growth Rate",
    cardvalue3: "80%",
    cardvaluetype3: "Digitalized Operations",
  },
  {
    image: Technologys,
    title: "Technology & AI",
    description:
      "Driving innovation with data, <br/> automation, and intelligence.",
    cardvalue1: "$1.2T+",
    cardvaluetype1: "Market",
    cardvalue2: "15%",
    cardvaluetype2: "CAGR",
    cardvalue3: "65%",
    cardvaluetype3: "Adoption Rate",
  },
];

const Trackgroth = () => {
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
                'Future Projects <br /> Pipeline '
              }
              color={"gradient_text"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Description
              description={
                "We continuously explore promising markets that align with global financial trends. Our upcoming investment ventures will focus on high-growth industries designed to maximize returns and strengthen our investment portfolio."
              }
              color={"text-white"}
              align={"lg:text-end"}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="pt-18"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-12">
            {industries.map((data, index) =>
              <motion.div
                key={index}
                className="p-4 gradient_border group rounded-[50px] cursor-pointer hover:shadow-[-4px_4px_4px_#ffffff99] hover:scale-[1.02] transition-all duration-700 relative overflow-hidden magnetic"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#001D3C] group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Floating particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-primary/40 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                <motion.div
                  className="relative max-w-[510px] m-auto cursor-ripple"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  >
                    <Image
                      src={data.image}
                      alt="banner"
                      width={1000}
                      height={500}
                      className="rounded-lg"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Arrowbtn width_height={"w-[50px] md:w-[65px] 2xl:w-[80px] h-[50px] md:h-[65px] 2xl:h-[80px]"} />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="max-w-[510px] m-auto pt-8 relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                >
                  <motion.h4
                    className="text-2xl lg:text-[30px] gradient_text w-max"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {data.title}
                  </motion.h4>

                  <motion.p
                    className="sub_description text-white pt-3 min-h-[66px]"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Trackgroth;
