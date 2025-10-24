import React from "react";
import mobilebannerm from "../../../../public/banners/mobilebanner.webp";
import Image from "next/image";
import Description from "./Description";
import Button from "./Button";
import bannerdollar from "../../../../public/images/bannerdollar.webp";
import bannerpersentgrafh from "../../../../public/images/bannerpersentgrafh.webp";
import phonebannergraph from "../../../../public/images/phonebannergraph.webp";
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
            <div className="">
              <Image
                src={bannerdollar}
                alt="$"
                width={2000}
                height={500}
                className="max-w-[130px]  flip_loop m-auto"
              />
            </div>
            <div className="">
              <div className="relative">
                <Image
                  src={bannerpersentgrafh}
                  alt="$"
                  width={5000}
                  height={500}
                  className="max-w-[140px] m-auto"
                />
                <p className="absolute w-full text-center bottom-[-10px] text-[14px] lg:text-xl xl:text-[24px] 2xl:text-[28px] text-white">
                  Secure ROI
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 absolute bottom-0">
          <Image
            src={phonebannergraph}
            alt="banner"
            width={1000}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Bannermobile;
