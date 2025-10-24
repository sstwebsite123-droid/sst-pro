"use client";
import Image from "next/image";
import React from "react";
import Bannerposter from ".././../../../public/banners/Banner.webp";
import bannersignleft from "../../../../public/images/bannersignleft.webp";
import Description from "../Uiux/Description";
import Button from "../Uiux/Button";

const AboutUsBanner = () => {
  return (
    <div>
      <div className="banner_container">
        {/* Banner container with responsive height */}
        <div className="relative pt-[30px] xl:pt-[26px] 2xl:pt-4">
          <Image
            src={Bannerposter}
            alt=""
            width={10000}
            height={500}
            className="w-full "
          />

          {/* Content inside banner */}
          <div className="absolute top-[40%] left-0 w-full px-4 sm:px-6">
            <div className="relative">
              <div>
                <h1
                  className="text-[32px] sm:text-[45px] md:text-[60px] xl:text-[75px] 2xl:text-[95px] text-center leading-snug"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span className="gradient_text" data-aos="fade-up" data-aos-duration="1000"> About </span>
                  <span className="gradient_text" data-aos="fade-up" data-aos-duration="1200"> SST </span>
                  <span className="gradient_text" data-aos="fade-up" data-aos-duration="1200"> Pro </span>
                </h1>

                {/* Buttons block */}
                <div className="flex items-center justify-center">
                  <div className="flex flex-wrap sm:flex-nowrap justify-center gap-4 sm:gap-6 pt-6">
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
                </div>
              </div>

              {/* Placeholder divs (unchanged) */}
              <div className="absolute top-[55%] left-[13%]"></div>
              <div className="absolute top-[56%] right-[7%]"></div>
              <div className="absolute top-[-2%]" data-aos="fade-up" data-aos-duration="1600"></div>
              <div className="absolute right-0 top-[-15%]" data-aos="fade-down" data-aos-duration="1600"></div>
            </div>
          </div>

          {/* Bottom placeholder */}
          <div className="absolute bottom-0 ps-6" data-aos="fade-up" data-aos-duration="1600"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
