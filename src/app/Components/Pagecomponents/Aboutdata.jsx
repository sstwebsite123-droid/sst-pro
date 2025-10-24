"use client";
import React from "react";
import Image from "next/image";
import Title from "../Uiux/Title";
import icoInnovation from ".././../../../public/icons/bulb.svg";
import icoSecurity from ".././../../../public/icons/lock.svg";
import icoGrowth from ".././../../../public/icons/graph.svg";
import icoTransparency from ".././../../../public/icons/neweye.svg";
import icoPartnership from ".././../../../public/icons/newsecurity.svg";
import innerbulb from ".././../../../public/icons/Vectorinner.svg";
import InnerLock from ".././../../../public/icons/lockinner.svg";
import InnerGrowth from ".././../../../public/icons/graphinner.svg";
import InnerTrans from ".././../../../public/icons/neweyeinner.svg";
import InnerPartnership from ".././../../../public/icons/newsecuritinner.svg";
import Description from "../Uiux/Description";

const missionCards = [
  {
    icon: icoInnovation,
    innerIcon: innerbulb,
    title: "Innovation",
    desc: "Driving returns with cutting-edge strategies."
  },
  {
    icon: icoSecurity,
    innerIcon: InnerLock,
    title: "Security",
    desc: "Robust risk management and compliance."
  },
  {
    icon: icoGrowth,
    innerIcon: InnerGrowth,
    title: "Growth",
    desc: "Sustainable and measurable financial gains."
  },
  {
    icon: icoTransparency,
    innerIcon: InnerTrans,
    title: "Transparency",
    desc: "Complete clarity in all operations."
  },
  {
    icon: icoPartnership,
    innerIcon: InnerPartnership,
    title: "Partnership",
    desc: "Building trust and shared success with every client."
  }
];

const Aboutdata = () => {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      />

      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-6">
          <div className="lg:col-span-8 text-center lg:text-left">
            <Title
              title={'Our <span class="gradient_text">Mission</span>'}
              color={"text-white"}
            />
          </div>

          {/* Right description -> center on mobile, right on lg */}
          <div className="lg:col-span-4">
            <Description
              description="Empowering investors through secure and profitable global opportunities."
              color="text-white/70"
              align="text-center lg:text-end"
              border={true}
              items_start={false}
            />
          </div>
        </div>
        <div className="pt-8 lg:w-[60%]">
          <Description
            description={`At SST Pro, we combine innovation, technology, and professional
              insight to deliver measurable returns. Our goal is to provide
              every investor with sustainable growth backed by strong risk
              management and complete transparency.`}
            border={false}
            justify_start={true}
            align={"text-center lg:text-start"}
            color={"text-white"}
            items_start={true}
          />
        </div>

        <div className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {missionCards.map((data, index) =>
              <div
                key={index}
                className={`mission-card delay-${index + 1} p-8 shadow-[inset_0px_1px_20px_20px_#4aa1ff45] rounded-[40px]`}
              >
                <div className="bg-secondary flex justify-center items-center w-[44px] md:w-[50px] xl:w-[66px] h-[44px] md:h-[50px] xl:h-[66px] rounded-[50%]">
                  <Image
                    src={data.innerIcon}
                    alt="icon"
                    width={1000}
                    height={500}
                    className="icon-animate max-w-[42px] max-h-[42px] object-contain"
                  />
                </div>
                <div className=" max-w-[220px] pt-5">
                  <p className="text-2xl 2xl:text-[30px] gradient_text pb-2 w-max">
                    {data.title}
                  </p>
                  <span className="sub_description text-white">
                    {data.desc}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Aboutdata;
