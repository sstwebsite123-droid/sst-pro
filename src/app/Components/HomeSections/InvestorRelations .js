import React from "react";
import { FiFileText, FiTrendingUp, FiShield, FiPieChart } from "react-icons/fi";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import graph from "../../../../public/images/graph.webp";
import Image from "next/image";
import LatestInsightsSection from "./LatestInsightsSection";
const InvestorRelations = () => {
  return (
    <div className="inn_container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <Title
            title={'Investor <span class="gradient_text">Relations</span> '}
            color={"text-white"}
          />
        </div>
        <div>
          <Description
            description={
              "Transparent communication and comprehensive resources for our stakeholders"
            }
            color={"text-white"}
            align={"text-left lg:text-end"}
          />
        </div>
      </div>
      <section className="relative overflow-hidden rounded-[36px] bg-[#0E1F30] text-white shadow-[0_20px_60px_rgba(2,6,13,0.75)] my-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,150,243,0.12),transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-[radial-gradient(120%_80%_at_50%_120%,rgba(19,93,193,0.35),rgba(6,12,25,0.6)_60%,transparent_75%)]" />

        <div className="relative z-10 flex flex-col gap-12 px-6 py-10 md:px-12 lg:flex-row lg:gap-16 lg:py-20">
          {/* Left Section */}
          <div className="flex-1 space-y-10">
            <div>
              <div className="mt-2 space-y-5">
                {[
                  {
                    title: "Annual Reports",
                    desc: "Comprehensive financial statements and performance analysis",
                    icon: <FiFileText className="text-2xl text-sky-200" />,
                  },
                  {
                    title: "Quarterly Updates",
                    desc: "Regular insights into our growth and strategic direction",
                    icon: <FiTrendingUp className="text-2xl text-sky-200" />,
                  },
                  {
                    title: "Compliance Documents",
                    desc: "Full regulatory disclosures and audit reports",
                    icon: <FiShield className="text-2xl text-sky-200" />,
                  },
                  {
                    title: "Investment Overview",
                    desc: "Detailed breakdown of our investment strategies",
                    icon: <FiPieChart className="text-2xl text-sky-200" />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-3xl border border-white/5  px-5 py-4 shadow-[0_12px_35px_rgba(4,10,24,0.65)] backdrop-blur-sm transition hover:border-sky-500/70"
                  >
                    <div className="flex h-12 lg:w-12 w-26  items-center justify-center border border-sky-400/40 bg-sky-400/10 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[18px] text-white">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-[0.2em] text-white">
                  Performance Overview
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Total AUM",
                    value: "$1.25M",
                    subtitle: "+8.5% vs. last period",
                    accent: "gradient_text",
                    border: "border-sky-500/40",
                    valueClass: "text-4xl",
                    iconTint: "bg-sky-500/30",
                    icon: <FiPieChart className="text-lg text-sky-100/80" />,
                  },
                  {
                    title: "YTD Growth",
                    value: "+18.4%",
                    subtitle: "Exceeding benchmark by 2.1%",
                    accent: "gradient_text",
                    border: "border-emerald-400/30",
                    iconTint: "bg-emerald-400/20",
                    icon: (
                      <FiTrendingUp className="text-lg text-emerald-100/80" />
                    ),
                  },
                  {
                    title: "New Clients",
                    value: "45",
                    subtitle: "Goal: 50 Clients",
                    accent: "gradient_text",
                    border: "border-sky-400/30",
                    iconTint: "bg-sky-400/20",
                    icon: <FiFileText className="text-lg text-sky-100/80" />,
                  },
                  {
                    title: "Risk Score (0-5)",
                    value: "3.1",
                    subtitle: "Target Range: 2.5 - 3.5",
                    accent: "gradient_text",
                    border: "border-sky-400/30",
                    iconTint: "bg-sky-400/20",
                    icon: <FiShield className="text-lg text-sky-100/80" />,
                  },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className={`group relative overflow-hidden rounded-[28px] border ${card.border} bg-[radial-gradient(circle_at_top,rgba(15,76,129,0.35),rgba(5,14,30,0.88))] p-6 shadow-[0_18px_45px_rgba(6,12,25,0.55)] backdrop-blur`}
                  >
                    <span
                      className={`absolute -right-6 -top-6 h-20 w-20 rounded-full ${card.iconTint}`}
                    />
                    <span className="absolute -right-1 -top-1 flex h-12 w-12 items-center justify-center">
                      {card.icon}
                    </span>
                    <p className="text-[15px] uppercase  text-white">
                      {card.title}
                    </p>
                    <p
                      className={`relative mt-5 font-semibold ${card.accent} ${
                        card.valueClass || "text-3xl"
                      }`}
                    >
                      {card.value}
                    </p>
                    <p className="relative mt-2 text-white">
                      {card.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <Image
            src={graph}
            alt="graph"
            width={3000}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </section>
      <LatestInsightsSection />
    </div>
  );
};

export default InvestorRelations;
