import React from "react";
import Riskmanagementbanner from "../../../../public/images/Riskmanagement.webp";
import Riskmanagementbannerph from "../../../../public/images/Riskmanagementph.webp";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Image from "next/image";
const Riskmanagement = ({
  title,
  description,
  card1description,
  card2description
}) => {
  return (
    <div className="pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
      <div className="inn_container">
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
        <div className="pt-12 lg:pt-18">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#0B1827] border-2 border-[#2962FF] max-w-[600px] px-[30px] lg:px-[50px] py-[24px] rounded-4xl">
              <Description
                description={card1description}
                border={false}
                justify_start={true}
                align={"text-start"}
                color={"text-white"}
                items_start={true}
              />
            </div>
            <div className="bg-[#0B1827] border-2 border-[#2962FF] max-w-[600px] px-[30px] lg:px-[50px] py-[24px] rounded-4xl ml-auto">
              <Description
                description={card2description}
                border={false}
                justify_start={true}
                align={"text-start"}
                color={"text-white"}
                items_start={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:top-[-100px]">
        <Image
          src={Riskmanagementbanner}
          alt="Riskmanagementbanner"
          width={3000}
          height={500}
          className="w-full hidden lg:block"
        />
        <Image
          src={Riskmanagementbannerph}
          alt="Riskmanagementbanner"
          width={3000}
          height={500}
          className="w-full block lg:hidden"
        />
      </div>
    </div>
  );
};

export default Riskmanagement;
