import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import outerbanner from "../../../../public/images/Monthlyreturn.webp";
import Image from "next/image";
import bluearrowicon from "../../../../public/icons/bluearrowicon.svg";
import Arrowbtn from "../Uiux/Arrowbtn";
const Monthlyreturn = ({
  left_banner,
  right_banner,
  monthly_revenu,
  monthly_increase,
  card_description,
  title,
  description,
}) => {
  return (
    <div className="pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
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
          <div className="relative">
            <Image
              src={outerbanner}
              alt=""
              width={3000}
              height={500}
              className="w-full hidden lg:block"
            />
            <div className="absolute h-full w-full hidden lg:flex items-center px-10 top-0 lg:top-6 xl:top-0">
              <div className="hidden lg:grid grid-cols-[2fr_5fr] gap-8">
                <div>
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover -z-5  rounded-4xl border border-b-blue-500   ">
                    <source src="/video/stcokprofit.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="border-2 border-white rounded-[40px] relative">
                    <Image
                      src={right_banner}
                      alt="monthlygraph"
                      width={2000}
                      height={500}
                      className="rounded-[44px]"
                    />
                    <div className="absolute top-6 w-full flex justify-between px-8">
                      <div className="">
                        <p className="sub_description text-secondary">
                          Your Profit
                        </p>
                        <h4 className="text-[28px] lg:text-[32px] xl:text-[42px] 2xl:text-[50px] font-bold text-white">
                          {monthly_revenu}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2">
                        <Image
                          src={bluearrowicon}
                          alt="bluearrowicon"
                          width={1000}
                          height={500}
                          className="max-w-[40px]"
                        />
                        <span className="text-2xl text-secondary">+1.43%</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-8">
                    <Description
                      description={card_description}
                      border={false}
                      items_start={true}
                      color={"text-white"}
                      align="text-start"
                      justify_start={true}
                      animation={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:hidden grid-cols-1 gap-4">
              <div>
              <video autoPlay loop muted playsInline className="w-full h-full object-cover -z-5  rounded-4xl border border-b-blue-500   ">
                    <source src="/video/stcokprofit.mp4" type="video/mp4" />
                  </video>
              </div>
              <div className="flex flex-col justify-center">
                <div className="border-2 border-white rounded-[40px] relative">
                  <Image
                    src={right_banner}
                    alt="monthlygraph"
                    width={2000}
                    height={500}
                    className="rounded-[44px] min-h-[150px] md:min-h-[unset]"
                  />
                  <div className="absolute top-6 w-full flex justify-between px-8">
                    <div className="">
                      <p className="sub_description text-secondary">
                        Your Profit
                      </p>
                      <h4 className="text-[28px] lg:text-[32px] xl:text-[42px] 2xl:text-[50px] font-bold text-white">
                        {monthly_revenu}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2">
                      <Image
                        src={bluearrowicon}
                        alt="bluearrowicon"
                        width={1000}
                        height={500}
                        className="max-w-[40px]"
                      />
                      <span className="text-2xl text-secondary">
                        {monthly_increase}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-4xl pt-6 pb-2 px-5 shadow-[_-3px_-3px_3px_#fff] mt-5">
                  <Description
                    description={card_description}
                    border={false}
                    items_start={true}
                    color={"text-white"}
                    align="text-start"
                    justify_start={true}
                    animation={false}
                  />
                </div>
              </div>
            </div>
            <div className="absolute right-0 bottom-0">
              <Arrowbtn
                width_height={
                  "w-[40px] md:w-[60px] 2xl:w-[80px] w-[40px] md:w-[60px] 2xl:h-[80px]"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monthlyreturn;
