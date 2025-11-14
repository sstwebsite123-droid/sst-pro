import React from "react";
import { FaTrophy, FaMedal } from "react-icons/fa";
import { LuAward } from "react-icons/lu";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";

import investment from "../../../../public/FooterImg/investment.webp";
import Financial from "../../../../public/FooterImg/Financial.webp";
import Trading from "../../../../public/FooterImg/Trading.webp";
import Choice from "../../../../public/FooterImg/Choice.webp";

const awards = [
  {
    id: 1,
    title: "Best Investment Platform 2024",
    subtitle: "Global Finance Awards",
    year: "2024",
    icon: <FaTrophy className="text-2xl" />,
    img: investment,
  },
  {
    id: 2,
    title: "Excellence in Financial Innovation",
    subtitle: "FinTech Excellence Awards",
    year: "2024",
    icon: <LuAward className="text-2xl" />,
    img: Financial,
  },
  {
    id: 3,
    title: "Top Rated Trading Platform",
    subtitle: "Investment Weekly",
    year: "2023",
    icon: <AiOutlineStar className="text-2xl" />,
    img: Trading,
  },
  {
    id: 4,
    title: "Customer Choice Award",
    subtitle: "Trading Community",
    year: "2023",
    icon: <FaMedal className="text-2xl" />,
    img: Choice,
  },
];

const AwardsSection = () => {
  return (
    <section className="inn_container relative bg-[#05080e] text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Title */}
      <div className='grid grid-cols-1 md:grid-cols-2 title_grid p-[5%]'>
        <div>
          <Title title={'Awards & Recognition sdfsdf'} color={'gradient_text'} />
        </div>

        <div className='flex justify-end text-end '>
          <Description description={'Recognized globally for excellence in financial <br /> services and innovation'} color={'text-white'} textalign={'text-end'} />
        </div>
      </div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {awards.map((award) => (
          <div
            key={award.id}
            className="relative bg-gradient-to-b from-[#0f1318] to-[#0a0e12] rounded-[2rem] border border-gray-700 overflow-hidden group transition-all duration-500 hover:border-blue-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.9)]"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden rounded-t-[2rem]">
              <Image
                src={award.img}
                alt={award.title}
                width={500}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center text-center p-6 space-y-3 relative z-10">
              <div className="bg-gradient-to-b from-blue-500 to-blue-700 p-3 rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                {award.icon}
              </div>
              <h3 className="text-[18px] gradient_text pb-2 w-max m-auto">{award.title}</h3>
              <p className="text-gray-400 text-sm">{award.subtitle}</p>
              <p className="gradient_text font-medium">{award.year}</p>
            </div>

            {/* Smooth Rounded Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[2rem] bg-gradient-to-b from-transparent via-blue-500/10 to-blue-500/20 blur-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
