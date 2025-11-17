import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Image from "next/image";
import missionblack from "../../../../public/icons/earthicon.svg";
import visionblack from "../../../../public/icons/securityicon.svg";
import Button from "../Uiux/Button";
import aboutsst from "../../../../public/images/aboutsst.webp";

const Aboutsstpro = () => {
  return (
    <div className=" pt-12 md:pt-18 lg:pt-24  2xl:pt-32">
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <Title
              title={
                'Trusted Growth for <span class="gradient_text"> <br /> Global Investors'
              }
              color={"text-white"}
            />
          </div>
          <div>
            <Description
              description={
                "Established 2 years ago, SST Pro has been dedicated to helping  <br/> clients achieve smarter growth and financial freedom."
              }
              color={"text-white"}
              align={"lg:text-end"}
            />
          </div>
        </div>
      </div>
      <div className="pt-18">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
          <div className="flex  flex-col items-start">
            <div className="w-full">
              <div className="bg-secondary max-w-[650px] lg:max-w-[700px] xl:max-w-4xl flex flex-col md:flex-row justify-center xl:justify-start 2xl:justify-center  items-center py-4 xl:py-8">
                <div className=" md:ps-6 xl:ps-3 2xl:ps-0 md:pe-12 h-full">
                  <Image
                    src={missionblack}
                    alt="icon"
                    width={1000}
                    height={500}
                    className="max-w-[45px] lg:max-w-[55px]"
                  />
                </div>
                <div className="md:ps-12 text-center md:text-start px-3 md:px-0 md:border-s-[3px] border-dashed border-primary">
                  {/* <p className="text-[26px] md:text-[30px] text-black md:pb-2">
                    
                  </p> */}
                  <span className="sub_description text-black">
                    With operations in the USA and the United Kingdom, we help <br /> investors achieve consistent, secure, and sustainable financial <br />growth through data-driven strategies.
                  </span>
                </div>
              </div>
              <div className="bg-primary max-w-[650px] lg:max-w-[700px] xl:max-w-4xl flex flex-col md:flex-row justify-center xl:justify-start 2xl:justify-center items-center py-4 xl:py-8">
                <div className="md:ps-6 xl:ps-3 2xl:ps-0  md:pe-12 xl:max-w-[103px]  h-full">
                  <Image
                    src={visionblack}
                    alt="icon"
                    width={1000}
                    height={500}
                    className="max-w-[58px] lg:max-w-[68px]"
                  />
                </div>
                <div className="md:ps-12 text-center md:text-start px-3 md:px-0 md:border-s-[3px] border-dashed border-secondary">
                  {/* <p className="text-[26px] md:text-[30px] text-black md:pb-2">
                    Vision
                  </p> */}
                  <span className="sub_description text-black">
                    SST Pro Ltd is officially registered under the laws of Colorado and <br /> certified by the Secretary of State of Colorado, maintaining full <br />compliance and good standing.
                  </span>
                </div>
              </div>
            </div>
            <div className="md:ps-[8%] pt-8">
              <Description
                description={`SST Pro is also a UK-registered and regulated company since 2025, <br/> ensuring transparency, compliance, and investor  <br/> protection across every operation.`}
                border={false}
                justify_start={true}
                align={"text-center md:text-start"}
                color={"text-white"}
                items_start={true}
              />
              <div className="w-max m-auto md:m-[unset]">
                <Button
                  btn_name={"Join as an Investor"}
                  border_bottom={false}
                  btn_background={"bg-primary"}
                  btn_border={false}
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className=" w-full h-full object-cover -z-10 brightness-[0.7] scale-[1.1]"
            >
              <source src="/video/earthvideo.mp4" type="video/mp4" />
            </video>
            <div className="absolute w-max flex items-center gap-2 md:gap-4 bg-[#000000E5] ps-6 2xl:ps-12 pe-2 2xl:pe-4 py-1 2xl:py-2 rounded-[40px] border-[1px] border-[#FFFFFF4D] top-[30%] right-[4%] ">
              <p className="text-[14px] md:text-xl 2xl:text-[25px] text-white">
                {" "}Entity ID{" "}
              </p>
              <div className="text-[14px] md:text-base xl:text-xl 2xl:text-[25px] bg-primary px-4 md:px-5 py-1.5 md:py-2 rounded-[40px]">
                20258098855
              </div>
            </div>
            <div className="absolute w-max flex items-center gap-2 md:gap-4 bg-[#000000E5] ps-6 2xl:ps-12 pe-2 2xl:pe-4 py-1 2xl:py-2 rounded-[40px] border-[1px] border-[#FFFFFF4D] bottom-[20%] left-[2%] md:left-[-4%] ">
              <p className="text-[14px] md:text-xl 2xl:text-[25px] text-white">
                {" "}Confirmation Number
              </p>
              <div className="text-[14px] md:text-xl 2xl:text-[25px] bg-primary px-4 md:px-5 py-1.5 md:py-2 rounded-[40px]">
                17752920
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsstpro;
