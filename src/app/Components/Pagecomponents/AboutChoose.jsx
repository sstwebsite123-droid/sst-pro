"use client";
import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Button from "../Uiux/Button";
import cardPng from ".././../../../public/images/card.webp";
import icReg from ".././../../../public/icons/licenece.svg";
import icMulti from ".././../../../public/icons/market.svg";
import icUp from ".././../../../public/icons/return.svg";
import icGlobe from ".././../../../public/icons/global.svg";
import Card from "./Card";

const items = [
  {
    icon: icReg,
    title: "Licensed &\nRegulated",
    desc: "Certified by the Colorado\nSecretary of State.",
    rotate: "-rotate-3"
  },
  {
    icon: icMulti,
    title: "Multi-Market\nExpertise",
    desc: "Forex, Real Estate, and\nmore.",
    rotate: "rotate-1"
  },
  {
    icon: icUp,
    title: "Consistent\nReturns",
    desc: "Data-driven, steady\nperformance.",
    rotate: "-rotate-2"
  },
  {
    icon: icGlobe,
    title: "Global\nPresence",
    desc: "Active in the USA and\nUK markets.",
    rotate: "rotate-2"
  }
];

const AboutChoose = () => {
  return (
    <section className="relative pt-14 md:pt-20 pb-20 bg-[#070A12] overflow-hidden">
      <div
        className="absolute inset-x-0 top-24 h-[520px] opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "center"
        }}
      />

      <div className="inn_container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-6">
          <div className="lg:col-span-8">
            <Title
              title={'Why Choose <span class="gradient_text">SST Pro?</span>'}
              color="text-white"
            />
            <div className="mt-3 h-[2px] w-24 bg-white/15 rounded-full" />
          </div>
          <div className="lg:col-span-4">
            <Description
              description="The smarter, safer, and more transparent way to invest."
              color="text-white"
              align="lg:text-end"
            />
          </div>
        </div>
        <div className="pt-12 lg:pt-18 max-w-[1440px] m-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  place-items-center">
          <Card
            img={cardPng}
            icon={icReg}
            title="Licensed & <br/> Regulated"
            desc="Certified by the Colorado Secretary of State."
            angle={-5}
            className="lg:translate-y-10 xl:translate-y-12"
          />

          <Card
            img={cardPng}
            icon={icMulti}
            title="Multi-Market <br/> Expertise"
            desc="Forex, Real Estate, and more."
            angle={-3}
            className="lg:-translate-y-6 xl:-translate-y-8"
          />

          <Card
            img={cardPng}
            icon={icUp}
            title="Consistent  <br/> Returns"
            desc="Data-driven, steady performance."
            angle={-4}
            className="lg:-translate-y-14 xl:-translate-y-16"
          />

          <Card
            img={cardPng}
            icon={icGlobe}
            title="Global <br/> Presence"
            desc="Active in the USA and UK markets."
            angle={-3}
            className="lg:translate-y-4 xl:translate-y-6"
          />
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            btn_name="Join as an Investor"
            btn_background="bg-[#CFE8E6]"
            color="text-black"
          />
        </div>
      </div>
    </section>
  );
};
export default AboutChoose;
