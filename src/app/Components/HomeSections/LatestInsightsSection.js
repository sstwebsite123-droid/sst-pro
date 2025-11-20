"use client";
import React, { useState } from "react";
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
  // -------- Subscribe States ----------
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // success or error message

  // --------- Subscribe Handler ----------
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const req = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: subscriberEmail }),
      });

      const res = await req.json();

      if (req.ok) {
        setMessage({
          type: "success",
          text: "You're successfully subscribed! 🎉",
        });
        setSubscriberEmail("");
      } else {
        setMessage({
          type: "error",
          text: res.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Server error. Please try again later.",
      });
    }

    setLoading(false);
  };

  return (
    <section className="mt-16 space-y-14">
      {/* Title & Sub-text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <Title
          title={'Latest <span class="gradient_text">Insights</span>'}
          color={"text-white"}
        />
        <Description
          description="Expert analysis, market trends, and investment strategies from our team"
          color="text-white"
          align="text-left lg:text-end"
        />
      </div>

      {/* Cards Section */}
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
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white text-black px-4 py-1 rounded-full text-xs font-medium">
                {item.category}
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="text-lg font-semibold gradient_text">
                {item.title}
              </h3>
              <p className="text-sm text-white/70">{item.description}</p>

              <div className="mt-auto text-sm text-white/60 space-y-2">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <FiUser className="text-blue-500" />
                    {item.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiCalendar className="text-blue-500" />
                    {item.date}
                  </span>
                </div>

                <span className="flex items-center gap-2 text-white">
                  <FiClock />
                  {item.readTime}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Subscribe Box */}
      <div className="mt-10 rounded-[48px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_55%)] p-px">
        <div className="rounded-[48px] bg-[linear-gradient(180deg,rgba(10,20,38,0.96),rgba(4,9,19,0.95))] px-6 sm:px-12 lg:px-20 py-20 text-white">
          <div className="text-center flex flex-col items-center">
            <h3 className="text-3xl md:text-5xl font-semibold gradient_text">
              Subscribe to Our Newsletter
            </h3>

            <p className="mt-3 max-w-2xl text-sm md:text-base text-white/70">
              Get weekly insights, market updates, and exclusive investment tips
              delivered to your inbox.
            </p>

            {/* SUBSCRIBE FORM */}
            <form
              className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:justify-center"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white placeholder:text-white/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/50 focus:outline-none sm:max-w-sm"
                required
              />

              <div className="flex justify-center">
                <Button
                  btn_name={loading ? "Subscribing..." : "Subscribe"}
                  btn_background="bg-linear-to-r from-sky-500 via-blue-500 to-indigo-500"
                  btn_border="border-sky-400/40"
                  color="text-white"
                  icon={false}
                  type="submit"
                />
              </div>
            </form>

            {/* Message UI */}
            {message && (
              <p
                className={`mt-4 text-sm ${
                  message.type === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {message.text}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsSection;
