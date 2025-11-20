import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Image from "next/image";
import gradientbgcard from "../../../../public/images/gradientbgcard.webp";
import GalaxyAnimation from "./GalaxyAnimation";

const Workcard = ({ title, description, cardata }) => {
  return (
    <div className="pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          <div>
            <Title title={title} color={"text-white"} />
          </div>
          <div>
            <Description
              description={description}
              color={"text-white"}
              align={"lg:text-end"}
            />
          </div>
        </div>
        <div className="pt-12 lg:pt-18">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 xl:gap-8">
            {cardata.map((data, index) =>
              <div
                key={index}
                className="gradient_border px-[30px] 2xl:px-[60px] pt-[30px] rounded-[40px]"
              >
                <div className="relative top-[30px]">
                  <p className="text-2xl md:text-[30px] gradient_text pb-2">
                    {data.title}
                  </p>
                  <span className="">
                    <Description
                      description={data.desc}
                      border={false}
                      justify_start={true}
                      align={"text-start"}
                      color={"text-white"}
                      items_start={true}
                    />
                  </span>
                </div>
                <div className="relative">
                  <Image
                    src={gradientbgcard}
                    alt=""
                    width={1000}
                    height={500}
                    className=""
                  />

                  <div className="absolute top-0 w-full h-full flex group w-fit overflow-hidden">
                    <Image
                      src={data.icon}
                      alt="investworkimg1"
                      width={5000}
                      height={500}
                      className="max-w-[150px] xl:max-w-[180px] 2xl:max-w-[250px] m-auto max-h-[140px] xl:max-h-[170px] 2xl:max-h-[220px] object-contain transition-all duration-500 ease-out 
           group-hover:-translate-y-5"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div />
        </div>
      </div>
      <div className="px-[3%]">
        {/* <GalaxyAnimation /> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" w-full h-full object-cover -z-10 brightness-[0.7]"
        >
          <source src="/video/galaxywave.mp4" type="video/mp4" />
        </video>

      </div>
    </div>
  );
};

export default Workcard;
