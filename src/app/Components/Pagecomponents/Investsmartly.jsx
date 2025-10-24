import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Image from "next/image";
import investsmartly from "../../../../public/images/Investsmartly.webp";
const Investsmartly = () => {
  return (
    <div>
      <div className="inn_container pt-12 md:pt-18 lg:pt-24  2xl:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <Title
              title={
                'Learn to <span class="gradient_text"> Invest <br /> Smartly</span> '
              }
              color={"text-white"}
            />
          </div>
          <div>
            <Description
              description={
                "We guide you through financial literacy, investing <br/> strategies, and market insights."
              }
              color={"text-white"}
              align={"lg:text-end"}
            />
          </div>
        </div>
        <div className="pt-18 relative hidden lg:block">
          <Image
            src={investsmartly}
            alt=""
            width={3000}
            height={500}
            className="max-w-[550px] 2xl:max-w-[675px] m-auto"
          />
          <div
            className="text-end absolute top-[5%] left-[20%] fade_up invest_card1"
            data-aos="fade-up"
          >
            <p className="text-[22px] xl:text-[25px] text-primary pb-3">
              Portfolio Building Tips
            </p>
            <span className="sub_description text-ternary ">
              Create a balanced portfolio tailored specifically <br /> to your
              long-term financial goals.
            </span>
          </div>
          <div
            className="text-end absolute bottom-[28%] left-[8%] invest_card2"
            data-aos="fade-up"
          >
            <p className="text-[22px] xl:text-[25px] text-primary pb-3">
              Step-by-Step Investment Tutorials
            </p>
            <span className="sub_description text-ternary ">
              Learn the basics through interactive lessons <br /> and
              easy-to-follow guides for beginners.
            </span>
          </div>
          <div
            className="text-start absolute bottom-[25%] right-[17%] invest_card3"
            data-aos="fade-up"
          >
            <p className="text-[22px] xl:text-[25px] text-primary pb-3">
              Risk Management Guidance
            </p>
            <span className="sub_description text-ternary ">
              Understand how to protect your capital <br /> and make informed
              decisions to <br /> minimize exposure.
            </span>
          </div>
        </div>
        <div className="pt-12 block lg:hidden">
          <div className="flex flex-col gap-6">
            <div className="text-center  fade_up invest_card1">
              <p className="text-xl md:text-[22px] xl:text-[25px] text-primary pb-3">
                Portfolio Building Tips
              </p>
              <span className="sub_description text-white ">
                Create a balanced portfolio tailored specifically <br /> to your
                long-term financial goals.
              </span>
            </div>
            <div className="text-center  invest_card2">
              <p className="text-xl md:text-[22px] xl:text-[25px] text-primary pb-3">
                Step-by-Step Investment Tutorials
              </p>
              <span className="sub_description text-white ">
                Learn the basics through interactive lessons <br /> and
                easy-to-follow guides for beginners.
              </span>
            </div>
            <div className="text-center  invest_card3">
              <p className="text-xl md:text-[22px] xl:text-[25px] text-primary pb-3">
                Risk Management Guidance
              </p>
              <span className="sub_description text-white ">
                Understand how to protect your capital <br /> and make informed
                decisions to <br /> minimize exposure.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investsmartly;
