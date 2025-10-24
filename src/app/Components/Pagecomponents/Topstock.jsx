import React from "react";
import Title from "../Uiux/Title";
import Marquee from "react-fast-marquee";
import Description from "../Uiux/Description";
import gain from "../../../../public/icons/gain.svg";
import loss from "../../../../public/icons/loss.svg";
import Image from "next/image";
import Button from "../Uiux/Button";
const stockCards = [
  {
    cardsub_name: "EXXON MOBIL CORP.",
    name: "XOM",
    price: "$142.08",
    gainloss: -1.81,
    volumn: "Vol: 7.4M"
  },
  {
    cardsub_name: "APPLE INC.",
    name: "APPL",
    price: "$156.50",
    gainloss: +1.43,
    volumn: "Vol: 10.4M"
  },
  {
    cardsub_name: "NVIDIA CORP.",
    name: "NVDA",
    price: "$367.43",
    gainloss: -0.19,
    volumn: "Vol: 43.3M"
  },
  {
    cardsub_name: "EXXON MOBIL CORP.",
    name: "XOM",
    price: "$142.08",
    gainloss: -1.81,
    volumn: "Vol: 7.4M"
  },
  {
    cardsub_name: "APPLE INC.",
    name: "APPL",
    price: "$156.50",
    gainloss: +1.43,
    volumn: "Vol: 10.4M"
  },
  {
    cardsub_name: "NVIDIA CORP.",
    name: "NVDA",
    price: "$367.43",
    gainloss: -0.19,
    volumn: "Vol: 43.3M"
  }
];

function Topstock() {
  return (
    <div className="pt-12 md:pt-18 lg:pt-24  2xl:pt-32">
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div   >
            <Title
              title={
                'Explore <span class="gradient_text"> Top  Stocks <br/> & Market </span> Opportunities'
              }
              color={"text-white"}
            />
          </div>
          <div   >
            <Description
              description={
                "Stay ahead with real-time market insights and <br /> trending stocks curated for you."
              }
              color={"text-white"}
              align={"lg:text-end"}
            />
          </div>
        </div>
      </div>
      <div className="pt-18 cursor-pointer">
        <Marquee pauseOnHover={true}>
          {stockCards.map((data, index) =>
            <div key={index} className="mx-3 py-6">
              <div className="min-w-[350px] md:min-w-[415px] w-full border-2 border-[#b5d9d774] p-[35px] 2xl:p-[40px] bg-cover bg-no-repeat bg-[radial-gradient(circle,rgba(11,13,15,1)_0%,rgba(35,36,37,1)_100%)] rounded-[45px] transition-all duration-500 hover:scale-[1.03] hover:shadow-[-1px_0px_20px_7px_#ffffff63]">
                <p className="text-[#898989] textxl">
                  {data.cardsub_name}
                </p>
                <p
                  className={`text-[24px] lg:text-[32px] 2xl:text-[40px] font-semibold ${data.gainloss < 0
                    ? "text-[#DC3545]"
                    : "text-[#28A745]"}`}
                >
                  {data.name}
                </p>
                <p className="text-white text-[32px] lg:text-[40px] 2x:text-[50px] pb-2 lg:pb-4 border-b-[2px] border-[#FFFFFF33] font-bold">
                  {" "}{data.price}{" "}
                </p>
                <div className="pt-3 flex justify-between">
                  <span
                    className={` text-base xl:text-xl flex items-center gap-2 ${data.gainloss <
                    0
                      ? "text-[#DC3545]"
                      : "text-[#28A745]"}`}
                  >
                    {data.gainloss < 0
                      ? <Image
                          src={loss}
                          alt="icon"
                          width={1000}
                          height={500}
                          className="max-w-[33px]"
                        />
                      : <Image
                          src={gain}
                          alt="icon"
                          width={1000}
                          height={500}
                          className="max-w-[33px]"
                        />}
                    {data.gainloss}%
                  </span>
                  <span className="text-[#898989] text-base xl:text-xl">
                    {data.volumn}
                  </span>
                </div>
              </div>
            </div>
          )}
        </Marquee>
      </div>
      <div className="inn_container pt-12">
        <div className=" flex justify-center md:justify-end">
          <Button btn_name=" View All Stocks" color="text-black" btn_background="bg-primary" />
        </div>
      </div>
    </div>
  );
}

export default Topstock;
