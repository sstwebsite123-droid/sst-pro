"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Description = ({
  description,
  color,
  align,
  items_start,
  border,
  justify_start,
  animation
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);
  return (
    <div
      className={`flex flex-col ${justify_start == true ? 'items-center md:items-start' : 'items-center'}  justify-center ${items_start ? " " : "lg:items-end"} `}
     
      data-aos={animation === false ? '' : 'fade-up'}
    >
      <p
        className={` ${color} text-center ${align} main_description pb-4 font_light`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {border === false
        ? null
        : <div
            className="border-b-2 mt-[-8px] border-[#FFFFFF80]"
            style={{ width: "170px" }}
          />}
    </div>
  );
};

export default Description;

