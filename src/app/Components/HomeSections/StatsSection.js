import React from "react";
import { FaUsers, FaChartLine, FaSmile, FaChartBar } from "react-icons/fa";
import Image from "next/image";

import investor from "../../../../public/FooterImg/investors.webp";
import management from "../../../../public/FooterImg/management.webp";
import satisfication from "../../../../public/FooterImg/satisfication.webp";
import average from "../../../../public/FooterImg/average.webp";

const statsData = [
  {
    value: "50K+",
    label: "Active Investors",
    subtext: "+28% this year",
    icon: <FaUsers className="text-3xl text-green-400" />,
    bg: investor,
    hoverColor: "from-green-500/30 to-transparent",
  },
  {
    value: "$2.5B",
    label: "Assets Under Management",
    subtext: "+42% growth",
    icon: <FaChartLine className="text-3xl text-blue-400" />,
    bg: management,
    hoverColor: "from-blue-500/30 to-transparent",
  },
  {
    value: "94%",
    label: "Client Satisfaction",
    subtext: "Industry leading",
    icon: <FaSmile className="text-3xl text-emerald-400" />,
    bg: satisfication,
    hoverColor: "from-emerald-500/30 to-transparent",
  },
  {
    value: "15.8%",
    label: "Average Annual Return",
    subtext: "Last 3 years",
    icon: <FaChartBar className="text-3xl text-teal-400" />,
    bg: average,
    hoverColor: "from-teal-500/30 to-transparent",
  },
];

export default function StatsSection() {
  return (
    <section className="inn_container bg-black text-white py-20 px-6 lg:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          <span className="text-blue-400">Real</span> Insights,{" "}
          <span className="text-blue-200">Real</span> Results
        </h2>
        <div className="w-24 h-[2px] bg-gray-700 mx-auto mb-4"></div>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Data-driven performance metrics that showcase our commitment to
          excellence
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden group bg-[#111] border border-gray-800 hover:border-blue-600/40 transition-all duration-500"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={stat.bg}
                alt={stat.label}
                fill
                sizes="100%"
                className="object-cover object-center duration-500"
              />
            </div>

            {/* Hover Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${stat.hoverColor} opacity-0 group-hover:opacity-100 transition-all duration-500`}
            ></div>

            {/* Inner Shadow Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div className="mb-3">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-200 text-sm mb-1">{stat.label}</p>
              <p className="text-green-400 text-xs">{stat.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-2xl py-8 px-6 text-center shadow-[0_0_25px_#0d1b2a]">
        <div>
          <p className="text-3xl font-semibold text-blue-300">200+</p>
          <p className="text-gray-300 text-sm">Investment Opportunities</p>
        </div>
        <div>
          <p className="text-3xl font-semibold text-blue-300">24/7</p>
          <p className="text-gray-300 text-sm">Market Monitoring</p>
        </div>
        <div>
          <p className="text-3xl font-semibold text-blue-300">99.9%</p>
          <p className="text-gray-300 text-sm">Platform Uptime</p>
        </div>
      </div>
    </section>
  );
}
