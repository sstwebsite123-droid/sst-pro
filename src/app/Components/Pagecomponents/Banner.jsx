"use client";
import React, { useEffect } from "react";
import Bannerposter from ".././../../../public/banners/Banner.webp";
import bannerdollar from "../../../../public/images/bannerdollar.webp";
import bannerpersentgrafh from "../../../../public/images/bannerpersentgrafh.webp";
import bannergraph from "../../../../public/images/bannergraph.webp";
import bannersignleft from "../../../../public/images/bannersignleft.webp";
import bannersignright from "../../../../public/images/bannersignright.webp";
import Image from "next/image";
import Description from "../Uiux/Description";
import Button from "../Uiux/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="banner_container ">
        <div className="relative pt-[30px] xl:pt-[26px] 2xl:pt-4">
          <Image
            src={Bannerposter}
            alt=""
            width={10000}
            height={500}
            className="w-full"
          />
          <div className="absolute top-[20%] left-0 w-full">
            <div className="relative">
              <div>
                <h1
                  className="text-[50px] leading-[normal] lg:text-[60px] xl:text-[75px] 2xl:text-[95px] text-center px-40 lg:px-0"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span
                    className="gradient_text"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {" "}Secure.{" "}
                  </span>{" "}
                  <span
                    className="gradient_text"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    {" "}Smart.
                  </span>
                  <span
                    className="transparent_text"
                    data-aos="fade-up"
                    data-aos-duration="1400"
                  >
                    {" "}Transparent
                  </span>
                </h1>
                <div className="main_banne_des">
                   <Description
                  description={
                    "Where Trust Meets Technology — Powering the Next Generation <br/> of Trading and Investment."
                  }
                  color={"text-[#D0D0D0]"}
                  align={"text-center px-40 lg:px-0"}
                  items_start={true}
                  border={false}
                />
                </div>

                <div className="flex items-start justify-center">
                  <div className="flex justify-center gap-6 lg:pt-6">
                    <div data-aos="fade-up" data-aos-duration="1400">
                       <Link href={"https://clients.sst.pro/register"}>
                      <Button
                        btn_name={"Get Started"}
                        btn_background={"bg-transparent"}
                        shadow={true}
                        color={"text-white"}
                        border_bottom={"border-b-0"}
                      />
                      </Link>
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
                </div>
              </div>
              <div className="absolute top-[38%] lg:top-[55%] left-[7%] lg:left-[13%]">
                <Image
                  src={bannerdollar}
                  alt="$"
                  width={2000}
                  height={500}
                  className="max-w-[130px] lg:max-w-[180px] xl:max-w-[250px] 2xl:max-w-[330px] flip_loop"
                />
              </div>
              <div className="absolute top-[35%] lg:top-[56%] right-[4%] lg:right-[7%]">
                <div className="relative">
                  <Image
                    src={bannerpersentgrafh}
                    alt="$"
                    width={5000}
                    height={500}
                    className="max-w-[140px] lg:max-w-[180px] xl:max-w-[275px] 2xl:max-w-[366px]"
                  />
                  <p className="absolute w-full text-center bottom-[-10px] text-[14px] lg:text-xl xl:text-[24px] 2xl:text-[28px] text-white">
                    Secure ROI
                  </p>
                </div>
              </div>
              <div
                className="absolute top-[-2%]"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <Image
                  src={bannersignleft}
                  alt="#"
                  width={2000}
                  height={500}
                  className="max-w-[60px] lg:max-w-[80px] xl:max-w-[130px] 2xl:max-w-[170px]"
                />
              </div>
              <div
                className="absolute right-0 top-[-15%]"
                data-aos="fade-down"
                data-aos-duration="1600"
              >
                <Image
                  src={bannersignright}
                  alt="#"
                  width={2000}
                  height={500}
                  className="max-w-[60px] lg:max-w-[80px] xl:max-w-[130px] 2xl:max-w-[170px]"
                />
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-0 ps-6"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <Image
              src={bannergraph}
              alt="bannergraph"
              width={5000}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
