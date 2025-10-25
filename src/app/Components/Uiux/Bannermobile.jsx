import React from "react";
import mobilebannerm from "../../../../public/banners/mobilebanner.webp";
import Image from "next/image";
import Description from "./Description";
import Button from "./Button";
import bannerdollar from "../../../../public/images/bannerdollar.webp";
import bannerpersentgrafh from "../../../../public/images/bannerpersentgrafh.webp";
import phonebannergraph from "../../../../public/images/phonebannergraph.webp";
import InteractiveGraph from "../Pagecomponents/InteractiveGraph";
import AnimatedSpeedMeter from "../Pagecomponents/AnimatedSpeedMeter";
const Bannermobile = () => {
  return (
    <div className="banner_container">
      <div className="pt-4 relative">
        <Image
          src={mobilebannerm}
          alt="banner"
          width={1500}
          height={500}
          className="w-full"
        />
        <div className="absolute top-0 h-full w-full pt-[30%]">
          <h1 className="flex flex-col items-center text-[43px]">
            <p className="gradient_text w-max leading-[normal] font-extrabold">
              Secure.
            </p>
            <br />
            <p className="gradient_text w-max leading-[normal] font-extrabold">
              Smart.
            </p>
            <br />
            <p className="transparent_text w-max leading-[normal] ">
              Transparent
            </p>
          </h1>
          <div className="pt-3">
            <Description
              description={
                "Where Trust Meets Technology — Powering the Next Generation <br/> of Trading and Investment."
              }
              color={"text-[#D0D0D0]"}
              align={"text-center px-4 "}
              items_start={true}
              border={false}
            />
          </div>
          <div className="flex justify-center gap-6 lg:pt-6">
            <div data-aos="fade-up" data-aos-duration="1400">
              <Button
                btn_name={"Get Started"}
                btn_background={"bg-transparent"}
                shadow={true}
                color={"text-white"}
                border_bottom={"border-b-0"}
              />
            </div>
            <div data-aos="fade-up" data-aos-duration="1600">
              <Button
                btn_name={"Request Demo"}
                btn_background={"gradient_bg"}
                btn_border={"border-secondary"}
                color={"text-black "}
                icon={true}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 pt-8">
            <div className="animate-spin" style={{animationDuration: '2s', animationIterationCount: '1', animationTimingFunction: 'ease-in-out'}}>
              <Image
                src={bannerdollar}
                alt="$"
                width={2000}
                height={500}
                className="max-w-[130px] m-auto"
              />
            </div>
            <div className="">
              <div className="relative">
              <AnimatedSpeedMeter />
              </div>
            </div>
          </div>
        </div>
       <div
            className="absolute bottom-0 ps-6 w-full"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <InteractiveGraph />
          </div>
      </div>
    </div>
  );
};

export default Bannermobile;
