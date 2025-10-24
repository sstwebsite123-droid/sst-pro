import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import aboutsst from "../../../../public/images/aboutsst.webp";
import missionblack from "../../../../public/icons/missionblack.svg";
import visionblack from "../../../../public/icons/visionblack.svg";
import Image from "next/image";
const Aboutsst = () => {
  return (
    <div className=" pt-12 md:pt-18 lg:pt-24  2xl:pt-32">
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div   >
            <Title
              title={'<span class="gradient_text">About SST Pro</span> '}
              color={"text-white"}
            />
          </div>
          <div   >
            <Description
              description={
                "Established 2 years ago, SST Pro has been dedicated to helping <br/> clients achieve smarter growth and financial freedom."
              }
              color={"text-white"}
              align={"lg:text-end"}
            />
          </div>
        </div>
      </div>
      <div className="pt-18">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div className="flex items-center">
            <div className="w-full">
              <div className="bg-secondary max-w-5xl flex flex-col md:flex-row justify-center items-center py-4 xl:py-8">
                <div className="md:ps-6 xl:ps-0 md:pe-12 h-full">
                  <Image
                    src={missionblack}
                    alt="icon"
                    width={1000}
                    height={500}
                    className="max-w-[45px] lg:max-w-[55px]"
                  />
                </div>
                <div className="md:ps-12 text-center md:text-start px-3 md:px-0 md:border-s-[3px] border-dashed border-primary">
                  <p className="text-[26px] md:text-[30px] text-black md:pb-2">Mission</p>
                  <span className="sub_description text-black">
                    To simplify investing and empower individuals and businesses
                    with intelligent <br /> financial solutions that drive
                    sustainable growth.
                  </span>
                </div>
              </div>
              <div className="bg-primary max-w-[650px] lg:max-w-[700px] xl:max-w-4xl flex flex-col md:flex-row justify-center items-center py-4 xl:py-8">
                <div className="md:ps-6 xl:ps-0 md:pe-12 xl:max-w-[103px]  h-full">
                  <Image
                    src={visionblack}
                    alt="icon"
                    width={1000}
                    height={500}
                    className="max-w-[58px] lg:max-w-[68px]"
                  />
                </div>
                <div className="md:ps-12 text-center md:text-start px-3 md:px-0 md:border-s-[3px] border-dashed border-secondary">
                  <p className="text-[26px] md:text-[30px] text-black md:pb-2">Vision</p>
                  <span className="sub_description text-black">
                    To become a globally trusted financial partner recognized
                    for <br />
                    innovation, transparency, and client success.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image src={aboutsst} alt="" width={1000} height={500} className=" max-w-[250px] lg:max-w-[320px] xl:max-w-[450px] 2xl:max-w-[540px] m-auto md:m-[unset] md:mr-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsst;
