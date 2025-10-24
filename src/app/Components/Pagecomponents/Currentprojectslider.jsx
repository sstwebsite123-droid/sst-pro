"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import currencycheck from "../../../../public/icons/currencycheck.svg";
import cardbanner1 from "../../../../public/images/trackcard1.webp";
import cardbanner2 from "../../../../public/images/trackcard2.webp";
import Arrowbtn from "../Uiux/Arrowbtn";
import { useRouter } from "next/navigation";
import Link from "next/link";

const industries = [
  {
    image: cardbanner1,
    title: "Forex Trading",
    description:
      "Navigate global currencies with <br/> precision and smart strategies.",
    icon: currencycheck,
    route: "/forex"
  },
  {
    image: cardbanner2,
    title: "Real Estate",
    description:
      "Invest in properties that build long-term  <br/> value and stability.",
    icon: currencycheck,
    route: "/real-estate"
  }
];
const Currentprojectslider = () => {
  const [slideitem, setSlideItem] = useState(2);
  const router = useRouter();
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
        // autoplay={{ delay: 3000 }}
        speed={1500}
        slidesPerView={slideitem}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {industries.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href={data.route}>
                <div className="relative max-w-[95%] xl:max-w-[580px] 2xl:max-w-[700px] m-auto group cursor-pointer hover:shadow-[-4px_4px_4px_#ffffff99] hover:scale-[1.02] transition-all duration-700 rounded-4xl">
                  <Image
                    src={data.image}
                    alt={data.title}
                    width={1000}
                    height={500}
                    className="max-w-[95%] xl:max-w-[580px] 2xl:max-w-[700px] m-auto brightness-[0.5] relative z-[1]"
                  />
                  <div className="absolute top-0  w-full h-full flex items-center z-[2]">
                    <div className="flex flex-col justify-between h-[90%] w-full max-w-[85%] xl:max-w-[540px] 2xl:max-w-[650px] m-auto">
                      <div className="w-[40px] md:w-[64px] h-[40px] md:h-[64px] flex items-center justify-center bg-[var(--secondary)] group-hover:bg-[var(--primary)] rounded-[50%] transition-all duration-500">
                        <Image
                          src={data.icon}
                          alt="icon"
                          width={1000}
                          height={500}
                          className="max-w-[24px] md:max-w-[34px]"
                        />
                      </div>
                      <div className="max-w-[85%] xl:max-w-[unset]">
                        <p className="text-[22px] lg:text-[25px] gradient_text pb-2">
                          {data.title}
                        </p>
                        <span
                          className="sub_description text-white "
                          dangerouslySetInnerHTML={{ __html: data.description }}
                        />
                      </div>
                    </div>
                  </div>
                  <Arrowbtn
                    width_height={"w-[50px] md:w-[75px] h-[50px] md:h-[75px]"}
                  />
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Currentprojectslider;
