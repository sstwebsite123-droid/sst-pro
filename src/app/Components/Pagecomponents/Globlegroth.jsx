import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import globlegrothcard from "../../../../public/images/globlegrothcard.webp";
import Image from "next/image";
import Arrowbtn from "../Uiux/Arrowbtn";
const Globlegroth = ({title,description,right_description,videoSrc}) => {
  return (
    <div className="pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <Title
              title={title }
              color={"text-white"}
            />
          </div>
          <div>
            <Description
              description={description }
              color={"text-white"}
              align={"lg:text-end"}
            />
          </div>
        </div>

        <div className="pt-12 lg:pt-18 md:px-12 xl:px-16 2xl:px-20">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-[45%] xl:w-[55%]">
               <video
              autoPlay
              loop
              muted
              playsInline
              className="  w-full h-full object-cover -z-5  rounded-4xl border border-b-blue-500   "
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            </div>
            <div className="lg:w-[55%] xl:w-[45%] hidden lg:block">
              <div className="max-w-[644px] m-auto relative">
                <Image
                  src={globlegrothcard}
                  alt="globlegrothcard"
                  width={1000}
                  height={500}
                  className=""
                />
                <div className="absolute top-6 2xl:top-12 w-full h-full px-6 2xl:px-12">
                  <Description
                    description={right_description}
                    border={false}
                    justify_start={true}
                    items_start={true}
                    align={"text-start"}
                    color={"text-white"}
                  />
                </div>
                <div className="absolute right-0 bottom-0">
                  <Arrowbtn
                    width_height={"w-[60px] 2xl:w-[80px] h-[60px] 2xl:h-[80px]"}
                  />
                </div>
              </div>
            </div>
            <div className="relative block lg:hidden">
              <div className=" rounded-4xl pt-6 pb-2 shadow-[_-3px_-3px_3px_#fff]">
                <div className=" w-full h-full px-6 2xl:px-12">
                  <Description
                    description={right_description}
                    border={false} 
                    justify_start={true}
                    items_start={true}
                    align={"text-start"}
                    color={"text-white"}
                  />
                </div>
                <div className="absolute right-0 bottom-0">
                  <Arrowbtn
                    width_height={"w-[40px] md:w-[60px] 2xl:w-[80px] w-[40px] md:w-[60px] 2xl:h-[80px]"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Globlegroth;
