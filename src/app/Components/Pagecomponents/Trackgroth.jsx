import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import cardbanner3 from "../../../../public/images/trackcard3.webp";
import cardbanner4 from "../../../../public/images/trackcard4.webp";
import cardbanner5 from "../../../../public/images/trackcard5.webp";
import cardbanner6 from "../../../../public/images/trackcard6.webp";
import cardbanner7 from "../../../../public/images/trackcard7.webp";
import cardbanner8 from "../../../../public/images/trackcard8.webp";
import cardbanner9 from "../../../../public/images/trackcard9.webp";
import cardbanner10 from "../../../../public/images/trackcard10.webp";
import Image from "next/image";
import Arrowbtn from "../Uiux/Arrowbtn";
const industries = [
  // {
  //   image: cardbanner3,
  //   title: "Mining",
  //   description:
  //     "Harness opportunities in natural resources <br/> and global demand.",
  //   cardvalue1: "$700B+",
  //   cardvaluetype1: "Industry",
  //   cardvalue2: "5",
  //   cardvaluetype2: "Top Commodities",
  //   cardvalue3: "6%",
  //   cardvaluetype3: "Annual Growth"
  // },
  {
    image: cardbanner4,
    title: "Sugar Plant",
    description:
      "Fueling industries with quality and <br/> sustainable production.",
    cardvalue1: "$55B+",
    cardvaluetype1: "Global Market",
    cardvalue2: "4%",
    cardvaluetype2: "Annual Growth",
    cardvalue3: "180M",
    cardvaluetype3: "Produced Yearly"
  },
  {
    image: cardbanner5,
    title: "Hotel Chains",
    description:
      "Expanding hospitality with innovation <br/> and global reach.",
    cardvalue1: "$400B+",
    cardvaluetype1: "Industry",
    cardvalue2: "70%",
    cardvaluetype2: "Avg Occupancy",
    cardvalue3: "12%",
    cardvaluetype3: "Yearly Revenue Rise"
  },
  // {
  //   image: cardbanner6,
  //   title: "Bio Chemical",
  //   description:
  //     "Advancing industries with eco-friendly <br/> chemical solutions.",
  //   cardvalue1: "$820B+",
  //   cardvaluetype1: "Market",
  //   cardvalue2: "9%",
  //   cardvaluetype2: "CAGR",
  //   cardvalue3: "60%",
  //   cardvaluetype3: "Eco-based Demand"
  // },
  {
    image: cardbanner7,
    title: "Oil & Energy",
    description:
      "Powering economies through reliable <br/> energy investments.",
    cardvalue1: "$6T+",
    cardvaluetype1: "Global Market",
    cardvalue2: "5%",
    cardvaluetype2: "Yearly Growth",
    cardvalue3: "30%",
    cardvaluetype3: "Renewable Shift"
  },


    {
    image: cardbanner8,
    title: "Agriculture",
    description:
      "Sustaining the world with smart and <br/> efficient farming.",
    cardvalue1: "$3.5T+",
    cardvaluetype1: "Industry",
    cardvalue2: "4.5%",
    cardvaluetype2: "Annual Growth",
    cardvalue3: "25%",
    cardvaluetype3: "Tech-Integrated Farms",
  },
  {
    image: cardbanner9,
    title: "Transportation & Logistics",
    description:
      "Connecting global trade with <br/> efficiency and speed.",
    cardvalue1: "$9T+",
    cardvaluetype1: "Industry",
    cardvalue2: "6%",
    cardvaluetype2: "Growth Rate",
    cardvalue3: "80%",
    cardvaluetype3: "Digitalized Operations",
  },
  {
    image: cardbanner10,
    title: "Technology & AI",
    description:
      "Driving innovation with data, <br/> automation, and intelligence.",
    cardvalue1: "$1.2T+",
    cardvaluetype1: "Market",
    cardvalue2: "15%",
    cardvaluetype2: "CAGR",
    cardvalue3: "65%",
    cardvaluetype3: "Adoption Rate",
  },
];

const Trackgroth = () => {
  return (
    <div>
      <div className="inn_container pt-12 md:pt-18 lg:pt-24  2xl:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div   >
            <Title
              title={
                'Future <span class="gradient_text"> Projects <br/> Pipeline </span> '
              }
              color={"text-white"}
            />
          </div>
          <div   >
            <Description
              description={
                "Monitor your expenses, track profits, and make <br/> informed investment decisions."
              }
              color={"text-white"}
              align={"lg:text-end"}
            />
          </div>
        </div>
        <div className="pt-18">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-12 ">
            {industries.map((data, index) =>
              <div className="p-4 gradient_border group rounded-[50px] cursor-pointer hover:shadow-[-4px_4px_4px_#ffffff99] hover:scale-[1.02] transition-all duration-700" key={index}>
                <div className="relative max-w-[510px] m-auto">
                  <Image
                    src={data.image}
                    alt="banner"
                    width={1000}
                    height={500}
                    className=""
                  />
                  <Arrowbtn width_height={"w-[50px] md:w-[65px] 2xl:w-[80px] h-[50px] md:h-[65px] 2xl:h-[80px]"} />
                </div>
                <div className="max-w-[510px] m-auto pt-8">
                  <h4 className="text-2xl lg:text-[30px] gradient_text w-max">
                    {data.title}
                  </h4>
                  <p
                    className="sub_description text-white pt-3 min-h-[66px]"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                  {/* <div className="pt-10 flex gap-8">
                    <div >
                      <p className="w-max text-[21px] gradient_text font_light">
                        {data.cardvalue1}
                      </p>
                      <p className="text-white font_light">
                        {data.cardvaluetype1}
                      </p>
                    </div>
                    <div>
                      <p className="w-max text-[21px] gradient_text font_light">
                        {data.cardvalue2}
                      </p>
                      <p className="text-white font_light">
                        {data.cardvaluetype2}
                      </p>
                    </div>
                    <div>
                      <p className="w-max text-[21px] gradient_text font_light">
                        {data.cardvalue3}
                      </p>
                      <p className="text-white font_light">
                        {data.cardvaluetype3}
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trackgroth;
