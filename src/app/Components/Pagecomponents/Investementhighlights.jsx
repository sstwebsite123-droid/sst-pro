import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import investmenthighlights from "../../../../public/images/investmenthighlights.webp";
import investmenthighlightsph from "../../../../public/images/investmenthighlightsph.webp";
import Image from "next/image";
import Investementdetailcard from "./Investementdetailcard";
import investdollar from "../../../../public/icons/investdollar.svg";
import investcoinbag from "../../../../public/icons/investcoinbag.svg";
import investgroup from "../../../../public/icons/investgroup.svg";
import investgraph from "../../../../public/icons/investgraph.svg";
import investgloble from "../../../../public/icons/investgloble.svg";

const Investementhighlights = ({
  title,
  description,
  cardtitle1,
  cardtitle2,
  cardtitle3,
  cardtitle4,
  cardtitle5,
  carddes1,
  carddes2,
  carddes3,
  carddes4,
  carddes5,
}) => {
  return (
    <div className="relative py-12 md:py-18 lg:py-24 2xl:py-32 overflow-hidden">


      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-[0.7]"
      >
        <source src="/video/nightsky.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className="inn_container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          <div>
            <Title title={title} color={"text-white"} />
          </div>
          <div>
            <Description
              description={description}
              color={"text-white"}
              align={"lg:text-end"}
            />
          </div>
        </div>

        <div className="pt-12 lg:pt-18 lg:pb-[70px]">
          {/* 🔸 Desktop View */}
          <div className="max-w-[1340px] xl:max-w-[1220px] 2xl:max-w-[1340px] m-auto relative hidden lg:block">
            <div className="max-w-[80%] m-auto">
              <Image
                src={investmenthighlights}
                alt="investmenthighlights"
                width={2500}
                height={500}
                className=""
              />
            </div>

            <div className="absolute top-[18%] left-[-3%]">
              <Investementdetailcard
                icon={investdollar}
                cardtitle={cardtitle1}
                carddescription={carddes1}
              />
            </div>

            <div className="absolute top-[18%] right-[-3%]">
              <Investementdetailcard
                icon={investcoinbag}
                cardtitle={cardtitle2}
                carddescription={carddes2}
              />
            </div>

            <div className="absolute bottom-[26%] left-[5%]">
              <Investementdetailcard
                icon={investgraph}
                cardtitle={cardtitle3}
                carddescription={carddes3}
              />
            </div>

            <div className="absolute bottom-[26%] right-[5%]">
              <Investementdetailcard
                icon={investgroup}
                cardtitle={cardtitle4}
                carddescription={carddes4}
              />
            </div>

            <div className="relative w-max m-auto top-[70px]">
              <Investementdetailcard
                icon={investgloble}
                cardtitle={cardtitle5}
                carddescription={carddes5}
              />
            </div>
          </div>

          {/* 🔸 Mobile View */}
          <div className="block lg:hidden">
            <div className="w-[80%] m-auto">
              <Image
                src={investmenthighlightsph}
                alt="investmenthighlightsph"
                width={1000}
                height={500}
                className=""
              />
            </div>

            <div className="flex flex-wrap justify-center gap-y-12 pt-10">
              <div className="flex justify-center w-full md:w-[50%]">
                <Investementdetailcard
                  icon={investdollar}
                  cardtitle={cardtitle1}
                  carddescription={carddes1}
                />
              </div>
              <div className="flex justify-center w-full md:w-[50%]">
                <Investementdetailcard
                  icon={investcoinbag}
                  cardtitle={cardtitle2}
                  carddescription={carddes2}
                />
              </div>
              <div className="flex justify-center w-full md:w-[50%]">
                <Investementdetailcard
                  icon={investgraph}
                  cardtitle={cardtitle3}
                  carddescription={carddes3}
                />
              </div>
              <div className="flex justify-center w-full md:w-[50%]">
                <Investementdetailcard
                  icon={investgroup}
                  cardtitle={cardtitle4}
                  carddescription={carddes4}
                />
              </div>
              <div className="flex justify-center w-full md:w-[50%]">
                <Investementdetailcard
                  icon={investgloble}
                  cardtitle={cardtitle5}
                  carddescription={carddes5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investementhighlights;
