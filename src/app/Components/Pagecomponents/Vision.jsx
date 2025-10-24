import React from "react";
import visionImg from "../../../../public/images/eyebg.webp";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Image from "next/image";

const Vision = () => {
  return (
    <div className="relative overflow-hidden pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-6">
          <div className="lg:col-span-8 text-center lg:text-left">
            <Title
              title={'Our <span class="gradient_text">Vision</span>'}
              color={"text-white"}
            />
          </div>

          <div className="lg:col-span-4">
            <Description
              description="Building a bridge between financial ambition and <br>lasting achievement"
              color="text-white/70"
              align="text-center lg:text-end"
              border={true}
              items_start={false}
            />
          </div>
        </div>
      </div>

      <div className=" mt-14 md:mt-18">
        <div className="mt-8 relative h-[320px] md:h-[380px] lg:h-[440px] overflow-hidden rounded-[26px] border border-white/12">
          <Image
            src={visionImg}
            alt="Vision"
            fill
            priority
            className="object-cover object-right"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10cc] to-transparent" />
          <div className="inn_container relative z-[1] h-full flex items-center">
            <div className=" lg:max-w-[50%]">
              <Description
                description={`We aim to become a globally recognized investment leader — known for reliability, growth, and ethical excellence. SST Pro makes professional investment opportunities accessible worldwide, helping investors turn ambition into achievement.`}
                border={false}
                justify_start={true}
                align={"text-center lg:text-start"}
                color={"text-white"}
                // items_start={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
