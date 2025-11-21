"use client";
import React from "react";
import Image from "next/image";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import MainContactFormDark from "./MainContactFormDark";
import contactus from "../../../../public/images/contact-us.webp";

const tradingBadges = [
  "/images/candle.png",
  "/images/linechart.png",
  "/images/bitcoin.jpg",
  "/images/usd.jpg",
  "/images/forex.png",
  "/images/stocks.png",
  "/images/secure.jpeg",
];

const ConatctusForm = () => {
  return (
    <section className="inn_container pt-24 2xl:pt-32">
      {/* heading */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <Title
            title={'Contact <span class="gradient_text"> Us </span>'}
            color={"text-white"}
          />
        </div>
        <div>
          <Description
            description={"Reach out and we’ll get in touch within 24 hours."}
            color={"text-white"}
            align={"lg:text-end"}
          />
        </div>
      </div>

      {/* card wrapper */}
      <div className="mt-10 p-4 gradient_border rounded-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-12">
          <Image
            src={contactus}
            alt=""
            width={1000}
            height={500}
            className="w-full h-full object-cover rounded-2xl "
          />
          {/* <div className="relative rounded-[40px] bg-white/5 border border-white/10 overflow-hidden min-h-[520px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="ring-1 ring-white/20 rounded-full w-[420px] h-[420px]" />
                <div className="ring-1 ring-white/15 rounded-full w-[320px] h-[320px] absolute inset-0 m-auto" />
                <div className="ring-1 ring-white/10 rounded-full w-[220px] h-[220px] absolute inset-0 m-auto" />
                <div className="ring-1 ring-white/10 rounded-full w-[120px] h-[120px] absolute inset-0 m-auto" />
                <div className="absolute inset-0 m-auto w-[110px] h-[110px] rounded-full blur-3xl bg-gradient-to-br from-cyan-400/25 to-fuchsia-400/25" />
              </div>
            </div>

            <div className="absolute inset-0">
              {[
                { top: "14%", left: "18%" },
                { top: "8%", right: "26%" },
                { top: "42%", left: "8%" },
                { top: "52%", right: "18%" },
                { bottom: "16%", left: "26%" },
                { bottom: "12%", right: "28%" },
                { top: "32%", right: "6%" },
              ].map((pos, i) => (
                <div
                  key={i}
                  style={pos}
                  className="absolute w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/30 bg-white/10 backdrop-blur"
                >
                  <Image
                    src={tradingBadges[i % tradingBadges.length]}
                    alt={`trading-${i}`}
                    width={68}
                    height={88}
                    className="object-contain w-full h-full p-1.5"
                  />
                </div>
              ))}
            </div>

            <div className="absolute bottom-6 left-6 space-y-2 text-white/80 text-sm">
              <p className="font-medium">@UntitledUI</p>
              <p className="font-medium">@UntitledUI</p>
              <p className="font-medium">@UntitledUI</p>
              <p className="font-medium">@UntitledUI</p>
            </div>
          </div> */}

          <div className="relative rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8 2xl:p-10">
            <div className="pointer-events-none absolute inset-2 rounded-[32px] border border-white/10" />
            <div className="pointer-events-none absolute -top-10 -left-10 w-48 h-48 rounded-full blur-3xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/10" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 w-56 h-56 rounded-full blur-3xl bg-gradient-to-tr from-fuchsia-500/15 to-purple-500/10" />

            {/* <h3 className="text-3xl font-semibold text-white relative z-[1]">
              Contact us
            </h3> */}
            {/* <Description
            description={"Reach out and we’ll get in touch within 24 hours."}
            color={"text-white"}
            align={"lg:text-end"}
          /> */}
            <p className="text-white/70 mt-1 relative z-[1]">
              Reach out and we’ll get in touch within 24 hours.
            </p>

            <div className="relative z-[1] mt-6">
              <MainContactFormDark
                fields={[
                  {
                    name: "firstName",
                    label: "First name*",
                    type: "text",
                    col: 1,
                    placeholder: "First name",
                  },
                  {
                    name: "lastName",
                    label: "Last name*",
                    type: "text",
                    col: 1,
                    placeholder: "Last name",
                  },
                  {
                    name: "email",
                    label: "Email*",
                    type: "email",
                    col: 2,
                    placeholder: "Email address",
                  },
                  {
                    name: "message",
                    label: "Message*",
                    type: "textarea",
                    col: 2,
                    placeholder: "Leave us a message...",
                  },
                ]}
                thankYouRoute="/"
                submitUrl="/api/send-email"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ConatctusForm;
