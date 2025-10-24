"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import btnarrow from "../../../../public/icons/btnarrow.svg";
import Arrowbtn from "../Uiux/Arrowbtn";



const Sstslider = ({ sliderdata }) => {
  const [slideitem, setSlideItem] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setSlideItem(1);
      else setSlideItem(2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="max-w-[1490px] m-auto">

      
      <Swiper
        loop
        // autoplay={{ delay: 2000 }}
        speed={1000}
        slidesPerView={slideitem}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="lg:h-[425px] xl:h-[475px]"
      >
        {sliderdata.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative group max-w-[95%] xl:max-w-[580px] 2xl:max-w-[700px] m-auto hover:shadow-[-4px_4px_4px_#ffffff99] hover:scale-[1.02] transition-all duration-700 rounded-4xl">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={1000}
                  height={500}
                  className="max-w-[95%] xl:max-w-[580px] 2xl:max-w-[700px] m-auto"
                />
                <div className="absolute top-0  w-full h-full flex items-center z-[1] ">
                  <div className="flex flex-col justify-between h-[90%] w-full  max-w-[85%] xl:max-w-[540px] 2xl:max-w-[650px] m-auto">
                    <div className="w-[40px] md:w-[64px] h-[40px] md:h-[64px] flex items-center justify-center group-hover:bg-[var(--primary)] bg-[var(--secondary)] rounded-[50%]">
                      <Image
                        src={data.icon}
                        alt="icon"
                        width={1000}
                        height={500}
                        className="max-w-[24px] md:max-w-[34px]"
                      />
                    </div>
                    <div className="max-w-[85%] xl:max-w-[unset]">
                      <p className="text-[22px] md:text-[25px] gradient_text md:pb-2">
                        {data.title}
                      </p>
                      <span className="sub_description text-white ">
                        {data.description}
                      </span>
                    </div>
                  </div>
                </div>
                <Arrowbtn width_height={" w-[45px] md:w-[90px] lg:w-[55px] xl:w-[75px] h-[45px] md:h-[90px] lg:h-[55px] xl:h-[75px] "} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Sstslider;
