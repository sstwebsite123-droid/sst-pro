import React from "react";
import Image from "next/image";
import { FiCalendar, FiClock, FiUser } from "react-icons/fi";
import investmentImg from "../../../../public/images/investment.webp";
import marketImg from "../../../../public/images/market.webp";
import technologyImg from "../../../../public/images/technology.webp";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Button from "../Uiux/Button";

const insights = [
  {
    category: "Investment Tips",
    badgeColor: "bg-sky-500/10 text-sky-200 border border-sky-400/20",
    title: "5 Investment Strategies for 2025",
    description:
      "Discover the top investment approaches that are shaping the financial landscape this year.",
    author: "Michael Anderson",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    image: investmentImg,
    imageAlt: "Investor reviewing financial data on a tablet",
  },
  {
    category: "Market Analysis",
    badgeColor: "bg-amber-500/10 text-amber-200 border border-amber-400/20",
    title: "Understanding Market Volatility",
    description:
      "Learn how to navigate uncertain markets and protect your portfolio during turbulent times.",
    author: "Sarah Chen",
    date: "Jan 10, 2025",
    readTime: "7 min read",
    image: marketImg,
    imageAlt: "Representation of market volatility with bitcoin coin",
  },
  {
    category: "Technology",
    badgeColor: "bg-indigo-500/10 text-indigo-200 border border-indigo-400/20",
    title: "The Future of AI in Finance",
    description:
      "Exploring how artificial intelligence is revolutionizing investment decision-making.",
    author: "David Martinez",
    date: "Jan 5, 2025",
    readTime: "6 min read",
    image: technologyImg,
    imageAlt: "Laptop screen showing AI-driven financial dashboard",
  },
];

const LatestInsightsSection = () => {
  return (
    <section className="mt-16 space-y-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <Title
            title={'Latest <span class="gradient_text">Insights</span> '}
            color={"text-white"}
          />
        </div>
        <div>
          <Description
            description={
              "Expert analysis, market trends, and investment strategies from our team"
            }
            color={"text-white"}
            align={"text-left lg:text-end"}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {insights.map((item) => (
          <article
            key={item.title}
            className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-white/5 bg-[linear-gradient(150deg,rgba(12,23,41,0.9),rgba(5,14,28,0.92))] shadow-[0_18px_50px_rgba(6,12,25,0.45)] transition hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_25px_60px_rgba(6,12,25,0.6)]"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 360px"
                className="object-cover transition duration-500 group-hover:scale-105"
                priority={false}
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-1 text-xs font-medium backdrop-blur">
                <span className={`rounded-2xl px-3 py-1 text-black`}>{item.category}</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold gradient_text transition group-hover:gradient_text">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </div>

              <div className="mt-auto space-y-4 text-sm text-white/60">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <FiUser className="text-base text-blue-500" />
                    {item.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="text-base text-blue-500" />
                    {item.date}
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-white">
                  <FiClock className="text-base" />
                  {item.readTime}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-[48px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_55%)] p-px">
        <div className="rounded-[48px] bg-[linear-gradient(180deg,rgba(10,20,38,0.96),rgba(4,9,19,0.95))] px-6 text-white shadow-[inset_0px_0px_20px_20px_#4aa1ff54] sm:px-12 lg:px-20 py-20">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-3xl font-semibold md:text-5xl gradient_text">
              Subscribe to Our Newsletter
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-white/70 md:text-base">
              Get weekly insights, market updates, and exclusive investment tips delivered to your inbox.
            </p>
            <form className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 sm:max-w-sm"
              />
              {/* <button
                type="button"
                className="rounded-full bg-linear-to-r from-sky-500 via-blue-500 to-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.45)] transition hover:shadow-[0_18px_40px_rgba(59,130,246,0.6)]"
              >
                Subscribe
              </button> */}
              <div className="flex justify-center">
              <Button
                btn_name={"Subscribe"}
                btn_background={"bg-linear-to-r from-sky-500 via-blue-500 to-indigo-500"}
                btn_border={"border-sky-400/40"}
                color={"text-white"}
                icon={true}
              />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsSection;

