import React, { useEffect, useRef, useState } from "react";
import { FaUsers, FaSmile, FaChartBar } from "react-icons/fa";
import Image from "next/image";

import investor from "../../../../public/FooterImg/investors.webp";
import management from "../../../../public/FooterImg/management.webp";
import satisfication from "../../../../public/FooterImg/satisfication.webp";
import average from "../../../../public/FooterImg/average.webp";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";

const statsData = [
  {
    value: "50K+",
    label: "Active Investors",
    subtext: "+28% this year",
    icon: <FaUsers className="text-3xl text-[#B5D9D7]" />,
    bg: investor,
    hoverColor: "from-blue-500/30 to-transparent",
  },
  {
    value: "$2.5B",
    label: "Assets Under Management",
    subtext: "+42% growth",
    icon: <span className="text-4xl text-[#B5D9D7]">$</span>,
    bg: management,
    hoverColor: "from-blue-500/30 to-transparent",
  },
  {
    value: "94%",
    label: "Client Satisfaction",
    subtext: "Industry leading",
    icon: <FaSmile className="text-3xl text-[#B5D9D7]" />,
    bg: satisfication,
    hoverColor: "from-blue-500/30 to-transparent",
  },
  {
    value: "15.8%",
    label: "Average Annual Return",
    subtext: "Last 3 years",
    icon: <FaChartBar className="text-3xl text-[#B5D9D7]" />,
    bg: average,
    hoverColor: "from-teal-500/30 to-transparent",
  },
];

const bottomStats = [
  {
    target: 200,
    label: "Investment Opportunities",
    suffix: "+",
    decimals: 0,
  },
  {
    target: 24,
    label: "Market Monitoring",
    suffix: "/7",
    decimals: 0,
  },
  {
    target: 99.9,
    label: "Platform Uptime",
    suffix: "%",
    decimals: 1,
  },
];

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export default function StatsSection() {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(bottomStats.map(() => 0));

  useEffect(() => {
    const node = containerRef.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.disconnect();
            setHasAnimated(true);

            const duration = 3500;
            const start = performance.now();

            const animate = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = easeOutCubic(progress);

              setCounts(
                bottomStats.map((stat) => {
                  const value = stat.target * eased;
                  return stat.decimals > 0
                    ? parseFloat(value.toFixed(stat.decimals))
                    : value;
                })
              );

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCounts(bottomStats.map((stat) => stat.target));
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={containerRef}
      className="inn_container bg-black text-white py-16 px-4 sm:px-6"
    >
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div>
            <Title
              title={
                ' Real Insights, <span class="gradient_text">Real Results</span> '
              }
              color={"text-white"}
            />
          </div>
          <div>
            <Description
              description={
                "Data-driven performance metrics that showcase our commitment to excellence"
              }
              color={"text-white"}
              align={"text-left lg:text-end"}
            />
          </div>
        </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="relative rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] overflow-hidden group bg-[#111] border border-gray-800 hover:border-blue-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] transition-all duration-500 min-h-[220px] sm:min-h-[260px] lg:min-h-[304px]"
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
              className={`absolute inset-0 bg-linear-to-r ${stat.hoverColor} opacity-0 group-hover:opacity-100 transition-all duration-500`}
            ></div>

            {/* Inner Shadow Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div className="mb-3 text-3xl sm:text-4xl">{stat.icon}</div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1 gradient_text">
                {stat.value}
              </h3>
              <p className="text-gray-200 text-lg md:text-xl mb-1">{stat.label}</p>
              <p className="text-green-400 text-base md:text-lg">{stat.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-3 m-auto shadow-[inset_0px_0px_20px_20px_#4aa1ff54] py-6 md:py-[24px] xl:py-[32px] px-6 md:px-[50px] 2xl:px-[60px] rounded-3xl cursor-pointer w-full text-center">
        {bottomStats.map((stat, index) => {
          const currentValue = counts[index];
          const displayValue = stat.decimals > 0
            ? currentValue.toFixed(stat.decimals)
            : Math.round(currentValue);

          return (
            <div key={stat.label} className="space-y-1">
              <p className="text-4xl md:text-5xl xl:text-6xl font-semibold gradient_text">
                {`${displayValue}${stat.suffix}`}
              </p>
              <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
