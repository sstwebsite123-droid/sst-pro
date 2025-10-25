"use client";
import React, { useState } from "react";
import btnarrow from "../../../../public/icons/arrow.svg";
import whitearrow from "../../../../public/icons/whitearrow.svg";
import Image from "next/image";
const Button = ({
  color,
  btn_background,
  btn_name,
  btn_border,
  shadow,
  icon,
  border_bottom
}) => {
  const [liquidcClass, setLiquidClass] = useState(false);
  console.log(liquidcClass);

  return (
    <div
      className="relative overflow-hidden rounded-[50px] cus_btn transition-all duration-500 z-[3]"
      onMouseEnter={() => setLiquidClass(true)}
      onMouseLeave={() => setLiquidClass(false)}
    >
      <button
        className={`text-[15px] md:text-base lg:text-xl xl:text-[23px] px-[20px] lg:px-[24px] 2xl:px-[28px] py-[5px] lg:py-[7px] 2xl:py-[12px] relative z-[2] rounded-[50px] transition-all duration-500 overflow-hidden  border-2 md:border-[3px] cursor-pointer   ${border_bottom} flex items-center gap-2 ${btn_border
          ? btn_border
          : "border-primary"} ${liquidcClass
          ? "text-white "
          : `${color}  ${btn_border} ${btn_background}`}  ${shadow
          ? "shadow-[1px_3px_0px_#3A3A3A]"
          : ""}`}
      >
        {btn_name}
        {icon
          ? <div>
              <Image
                src={liquidcClass ? whitearrow : btnarrow}
                alt="arrow"
                width={1000}
                height={500}
                className="max-w-[20px] lg:max-w-[24px]  transition-all duration-500 "
              />
            </div>
          : null}
      </button>
      {liquidcClass ? <div className="liquid" /> : null}
    </div>
  );
};

export default Button;
