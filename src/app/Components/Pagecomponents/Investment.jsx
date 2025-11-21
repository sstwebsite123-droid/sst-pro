import React from "react";
import investmentbanner from "../../../../public/images/investmentbanner.webp";
import investperson from "../../../../public/images/investperson.webp";
import investlightanimation from "../../../../public/images/investlightanimation.webp";
import Image from "next/image";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Button from "../Uiux/Button";
import Link from "next/link";
const Investment = () => {
  return (
    <div className=" pt-12 pb-0 md:pb-auto md:py-24 xl:py-32 overflow-hidden">
      <div className="inn_container relative hidden md:block">
        <div className="pt-12 md:pt-18 lg:pt-24">
          <Image
            src={investmentbanner}
            alt=""
            width={5000}
            height={500}
            className="w-full h-[250px] lg:h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-[8%]">
          <Image
            src={investperson}
            alt=""
            width={1000}
            height={500}
            className="max-w-[300px] lg:max-w-[420px] xl:max-w-[520px] 2xl:max-w-[520px]"
          />
        </div>
        {/* <div className="absolute bottom-[-22%] left-[5%]">
          <Image
            src={investlightanimation}
            alt=""
            width={2000}
            height={500}
            className="max-w-[330px] lg:max-w-[420px] xl:max-w-[520px] 2xl:max-w-[660px]"
          />
        </div> */}
        <div className="absolute bottom-0 h-full max-h-[483px] w-full grid grid-cols-2">
          <div />
          <div className="flex items-center relative left-[-20%] lg:left-[-5%] 2xl:left-0">
            <div className="pt-20 xl:pt-12 2xl:pt-0">
              <Title
                title={"Start Your Investment <br/> Journey Today"}
                color={"text-black"}
                font_medium={true}
                border={false}
              />
              <Description
                description={
                  "Sign up, request a demo, or explore our training resources."
                }
                color={"text-black"}
                align={"text-start"}
                items_start={true}
                border={false}
              />
              <div className="flex gap-5 justify-center lg:justify-start lg:pt-5 xl:pt-8">
                <Link href={"https://clients.sst.pro/register"}>
                  <Button
                    btn_name={"Create Account"}
                    btn_background={"bg-[#63818D]"}
                    color={"text-white"}
                    shadow={true}
                  />
                </Link>
                <Link href={"/contact-us"}>
                  <Button
                    btn_name={"Request Demo"}
                    btn_background={"bg-secondary"}
                    color={"text-black"}
                    btn_border={"border-secondary"}
                  />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inn_container block md:hidden">
        <div className="flex items-center px-[10px] py-[20px] gradient_bg 2xl:left-0 rounded-3xl  ">
          <div className="xl:pt-12 2xl:pt-0">
            <Title
              title={"Start Your Investment <br/> Journey Today"}
              color={"text-black"}
              font_medium={true}
              border={false}
            />
            <Description
              description={
                "Sign up, request a demo, or explore our training resources."
              }
              color={"text-black"}
              align={"text-start"}
              items_start={true}
              border={false}
            />
            <div className="flex flex-wrap items-center gap-5 justify-center lg:justify-start lg:pt-5 xl:pt-8">
              <Link href={"https://clients.sst.pro/register"}>
                <Button
                  btn_name={"Create Account"}
                  btn_background={"bg-[#63818D]"}
                  color={"text-white"}
                  shadow={true}
                />
              </Link>
              <Link href={"/contact-us"}>
                <Button
                  btn_name={"Request Demo"}
                  btn_background={"bg-secondary"}
                  color={"text-black"}
                  btn_border={"border-secondary"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
