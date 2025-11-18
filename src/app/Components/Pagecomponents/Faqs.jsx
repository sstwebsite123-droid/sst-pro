'use client'
import React, { useState } from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import plus from "../../../../public/icons/faqplus.svg"
import Image from "next/image";
const Faqs = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAnswer = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      <div className="inn_container pt-12 md:pt-18 lg:pt-24  2xl:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div   >
            <Title
              title={
                ' Frequently <span class="gradient_text">Asked <br/> Questions</span> '
              }
              color={"text-white"}
            />
          </div>
          <div   >
            <Description
              description={
                "Get quick answers to the most common <br /> questions about SST Pro."
              }
              color={"text-white"}
              align={"lg:text-end"}
            />
          </div>
        </div>
        <div className="pt-18 max-w-7xl m-auto">
          <div className="flex flex-col gap-4 md:gap-5 font_secondary">
            {faqData.map((faq, index) =>
              <div
                key={index}
                className="bg-[#0B1827] px-6 2xl:px-8 py-3 2xl:py-4  rounded-[10px] md:rounded-[20px]  shadow-[0px_-1px_0px_#2962ff9e] transition-all duration-500 ease-in-out"
              >
                <div
                  onClick={() => toggleAnswer(index)}
                  className={`font_light cursor-pointer text-primary text-[17px] md:text-xl 2xl:text-[25px] flex justify-between items-center transition-all duration-500   ease-in-out`}
                >
                  {index + 1}. {faq.question}
                  <span
                    className={`ml-2 transform   transition-all duration-500 ease-in-out ${activeIndex ===
                      index
                      ? "rotate-135"
                      : "rotate-0"}`}
                  >
                    <Image
                      src={plus}
                      alt="#"
                      width={1000}
                      height={500}
                      className="max-w-[18px] md:max-w-6"
                    />
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out`}
                  style={{
                    maxHeight: activeIndex === index ? "200px" : "0px"
                  }}
                >
                  <div className=" text-white font_light text-[14px] md:text-base 2xl:text-xl font-light py-2 ps-[2%] text-start">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
