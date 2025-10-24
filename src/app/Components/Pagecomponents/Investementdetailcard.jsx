import React from "react";
import Investementhighlightscard from "../../../../public/images/Investementhighlightscard.webp";
import Image from "next/image";
const Investementdetailcard = ({ icon, cardtitle, carddescription }) => {
  return (
    <div className="max-w-[320px] 2xl:max-w-[350px] relative">
      <Image
        src={Investementhighlightscard}
        alt="Investementhighlightscard"
        width={1000}
        height={500}
        className=""
      />
      <div className="absolute w-full top-[-12%]">
        <Image
          src={icon}
          alt="icon"
          width={1000}
          height={500}
          className="max-w-[90px] 2xl:max-w-[110px] m-auto"
        />
      </div>
      <div className="absolute w-full bottom-[22%] px-4 lg:px-0">
        <p className="text-[20px] md:text-[22px] lg:text-[25px] text-primary text-center">
          {cardtitle}
        </p>
        <p className="text-[16px] md:text-[17px] text-ternary text-center">
          {carddescription}
        </p>
      </div>
    </div>
  );
};

export default Investementdetailcard;
