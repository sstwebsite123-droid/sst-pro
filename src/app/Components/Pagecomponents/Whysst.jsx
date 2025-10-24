import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Sstslider from "./Sstslider";
import sstslider1 from "../../../../public/images/sstslider2.webp";
import sstslider2 from "../../../../public/images/sstslider1.webp";

//Slider icons
import currencycheck from "../../../../public/icons/currencycheck.svg";
import shield from "../../../../public/icons/shield.svg";
const data = [
  {
    id: 1,
    image: sstslider1,
    icon: shield,
    title: "Trusted Expertise",
    description: "Experienced market analysts guiding every decision.",
    link: ""
  },
  {
    id: 2,
    image: sstslider2,
    icon: currencycheck,
    title: "Fund Safety",
    description: "Your investments, securely protected.",
    link: ""
  },
  {
    id: 3,
    image: sstslider1,
    icon: shield,
    title: "Trusted Expertise",
    description: "Experienced market analysts guiding every decision.",
    link: ""
  },
  {
    id: 4,
    image: sstslider2,
    icon: currencycheck,
    title: "Fund Safety",
    description: "Your investments, securely protected.",
    link: ""
  }
];
const Whysst = () => {
  return (
    <div>
      <div className="inn_container pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div   >
            <Title
              title={'<span class="gradient_text">Why SST Pro?</span> '}
              color={"text-white"}
            />
          </div>
          <div   >
            <Description
              description={
                "Two years of excellence, transparent strategies, <br/> and client-focused solutions."
              }
              color={"text-white"}
              align={"lg:text-end"}
            />
          </div>
        </div>
        <div className="pt-18">
          <Sstslider sliderdata={data} />
        </div>
      </div>
    </div>
  );
};

export default Whysst;
