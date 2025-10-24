"use client";
import Image from 'next/image'
import React from 'react'
import Bannerposter from ".././../../../public/banners/Banner.webp";
import bannersignleft from "../../../../public/images/bannersignleft.webp";
import Description from "../Uiux/Description";
import Button from "../Uiux/Button";

const Contactusbanner = () => {
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
          <div className="absolute top-[40%] left-0 w-full">
            <div className="relative">
              <div>
                <h1
                  className="text-[60px] xl:text-[75px] 2xl:text-[95px] text-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span
                    className="gradient_text"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {" "}Contact{" "}
                  </span>{" "}
                  <span
                    className="gradient_text"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    {" "}Us
                  </span><br/>
                </h1>
                <Description
                  description={
                    "Let us know  how can we help  We re here to assist you. Whether you have questions, <br/> need support, or want to learn more about our services, <br/> feel free to reach out"
                    
                  }
                  color={"text-[#D0D0D0]"}
                  align={"text-center"}
                  items_start={true}
                  border={false}
                />

                <div className="flex items-start justify-center">
                  <div className="flex justify-center gap-6 pt-6">
                    <div data-aos="fade-up" data-aos-duration="1400">
                      <Button
                        btn_name={"Conatct Us"}
                        btn_background={"bg-transparent"}
                        shadow={true}
                        color={"text-white"}
                        border_bottom={"border-b-0"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[55%] left-[13%]">
                {/* <Image
                  src={bannerdollar}
                  alt="$"
                  width={2000}
                  height={500}
                  className="max-w-[180px] xl:max-w-[250px] 2xl:max-w-[330px] flip_loop"
                /> */}
              </div>
              <div className="absolute top-[56%] right-[7%]">
                {/* <div className="relative">
                  <Image
                    src={bannerpersentgrafh}
                    alt="$"
                    width={5000}
                    height={500}
                    className="max-w-[180px] xl:max-w-[275px] 2xl:max-w-[366px]"
                  />
                  <p className="absolute w-full text-center bottom-[-10px] text-[24px] 2xl:text-[28px] text-white">
                    Secure ROI
                  </p>
                </div> */}
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
                  className="max-w-[80px] xl:max-w-[130px] 2xl:max-w-[170px]"
                />
              </div>
              <div
                className="absolute right-0 top-[-15%]"
                data-aos="fade-down"
                data-aos-duration="1600"
              >
                {/* <Image
                  src={bannersignright}
                  alt="#"
                  width={2000}
                  height={500}
                  className="max-w-[80px] xl:max-w-[130px] 2xl:max-w-[170px]"
                /> */}
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-0 ps-6"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            {/* <Image
              src={bannergraph}
              alt="bannergraph"
              width={5000}
              height={500}
              className="w-full"
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactusbanner