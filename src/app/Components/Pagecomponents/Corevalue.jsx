import React from "react";
import Image from "next/image";
import handshake from "../../../../public/icons/handshake.svg";

const values = [
  {
    title: "Integrity",
    description:
      "We believe in honesty, transparency, and ethical practices in every decision.",
    desktopPosition:
      "md:absolute md:top-[5%] md:left-[6%] md:max-w-[500px] md:-rotate-[2deg]",
  },
  {
    title: "Client-Centricity",
    description: "Every solution is built around our clients goals and needs.",
    desktopPosition:
      "md:absolute md:top-[2%] md:right-[7%] md:max-w-[500px] md:rotate-[-3deg]",
  },
  {
    title: "Innovation",
    description:
      "We leverage data, technology, and AI to stay ahead of market trends.",
    desktopPosition:
      "md:absolute md:bottom-[8%] md:right-[6%] md:max-w-[500px] md:-rotate-[2deg]",
  },
  {
    title: "Growth Mindset",
    description:
      "We focus on creating long-term value for our clients and stakeholders.",
    desktopPosition:
      "md:absolute md:bottom-[8%] md:left-[6%] md:max-w-[500px] md:rotate-[-2deg]",
  },
];

const Card = ({ title, description, className }) => {
  return (
    <div className={`relative w-full md:w-auto ${className ?? ""}`.trim()}>
      <div className="absolute inset-0 translate-x-[14px] translate-y-[14px] rounded-[26px] bg-linear-to-br from-[#4aa1ff] to-[#2d74ff] opacity-80"></div>
      <div className="relative rounded-[26px] bg-white/95 px-6 py-6 shadow-[0_35px_70px_0_rgba(4,22,53,0.45)]">
        <p className="text-[22px] font-semibold text-[#0c1f3a] md:text-[24px]">
          {title}
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-[#374b6a]">
          {description}
        </p>
      </div>
    </div>
  );
};

const Corevalue = () => {
  return (
    <div className="inn_container" style={{marginTop: "2rem"}}>
      <div className="relative mx-auto flex flex-col gap-8 rounded-[32px] bg-[url('/images/corevalue.webp')] bg-cover bg-center px-6 py-12 md:px-16 md:py-20">
        {/* <div className="flex items-center justify-center">
            <div className="flex items-center gap-3 rounded-full border border-[#1f4073]/40 bg-[#0a1b33] px-8 py-3">
              <Image
                src={handshake}
                alt="Handshake"
                width={44}
                height={44}
                className="h-11 w-11"
              />
              <p className="text-[22px] font-semibold tracking-[0.2em] md:text-[28px]">
                CORE VALUES
              </p>
            </div>
          </div> */}

        <div className="relative flex w-full justify-center">
          <div className="relative hidden h-[520px] w-full md:flex md:items-center md:justify-center">
            <div className="absolute inset-0 -z-10 rounded-[38px] bg-[radial-gradient(circle_at_center,rgba(74,161,255,0.08)_0%,rgba(7,20,39,0.05)_60%,transparent_100%)]"></div>

            <div className="block md:hidden absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-[260px] w-[260px] items-center justify-center rounded-full bg-[#0b1e36]/80 shadow-[0_30px_60px_rgba(5,16,36,0.6)]">
                <div className="absolute -inset-10 rounded-full border border-dashed border-[#4aa1ff]/40"></div>
                <div className="absolute -inset-20 rounded-full border border-dashed border-[#4aa1ff]/20"></div>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                    <Image src={handshake} alt="Handshake" width={48} height={48} className="h-12 w-12" />
                  </div>
                  <p className="text-[13px] tracking-[0.4em] text-[#6b8fbf]">CORE</p>
                  <p className="text-[26px] font-semibold text-white md:text-[30px]">VALUES</p>
                </div>
              </div>
            </div>

            {values.map((value) => (
              <Card
                key={value.title}
                title={value.title}
                description={value.description}
                className={`${value.desktopPosition}`}
              />
            ))}
          </div>

          <div className="flex w-full flex-col gap-6 md:hidden">
            {values.map((value) => (
              <Card
                key={value.title}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corevalue;
