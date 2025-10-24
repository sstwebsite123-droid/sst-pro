"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Title = ({ title, color, font_medium, border }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);
  return (
    <div data-aos="fade-up">
      <h2
        className={`main_title ${font_medium
          ? ""
          : "font_light"} ${border === false ? '' : 'pb-4'}  relative ${color}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {border === false
        ? null
        : <div
            className="border-b-2 hidden lg:block mt-[-8px] border-[#FFFFFF80]"
            style={{ width: "170px" }}
          />}
    </div>
  );
};

export default Title;
