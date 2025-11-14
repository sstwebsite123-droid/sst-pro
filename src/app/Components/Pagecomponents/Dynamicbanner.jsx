import React from "react";
import dynamicbanner from "../../../../public/banners/dynamicbanner.webp";
import dynamicbannerph from "../../../../public/banners/dynamicbannerph.webp";
import Button from "../Uiux/Button";
import Image from "next/image";

const Dynamicbanner = ({ banner_title, bannerimg }) => {
  return (
    <div>
      <div className="banner_container">
        <div className="relative pt-3 md:pt-[30px] xl:pt-[26px] 2xl:pt-4">
          <Image
            src={bannerimg}
            alt=""
            width={10000}
            height={500}
            className="w-full h-full object-cover hidden md:block"
          />
          <Image
            src={bannerimg}
            alt=""
            width={10000}
            height={500}
            className="w-full h-full object-cover block md:hidden min-h-[356px]"
          />
          <div className="absolute top-[32%] left-0 w-full px-4 sm:px-6">
            <div className="relative">
              <div>
                <h1
                  className="text-[32px] gradient_text sm:text-[45px] lg:text-[60px] xl:text-[70px] 2xl:text-[95px] text-center leading-snug md:px-16 lg:px-12 xl:px-0"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  dangerouslySetInnerHTML={{ __html: banner_title }}
                />

                <div className="flex items-center justify-center">
                  <div className="flex flex-wrap sm:flex-nowrap justify-center gap-4 sm:gap-6 pt-6">
                    <div data-aos="fade-up" data-aos-duration="1400">
                      <Button
                        btn_name={"Get Started"}
                        btn_background={"bg-transparent"}
                        shadow={true}
                        color={"text-white"}
                        border_bottom={"border-b-0"}
                      />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1600">
                      <Button
                        btn_name={"Request Demo"}
                        btn_background={"gradient_bg"}
                        btn_border={"border-secondary"}
                        color={"text-black "}
                        icon={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamicbanner;
