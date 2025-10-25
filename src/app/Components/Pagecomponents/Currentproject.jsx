import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Currentprojectslider from "./Currentprojectslider";

const Currentproject = () => {
  return (
    <div>
      <div className="inn_container pt-12 md:pt-18 lg:pt-24  2xl:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <Title
              title={
                'Core <span class="gradient_text"> Investment <br/> Markets </span> '
              }
              color={"text-white"}
            />
          </div>
          <div>
            <Description
              description={
                "SST Pro specializes in Forex and Real Estate trading, offering investors <br/> lucrative opportunities through diversified and strategic investment portfolios."
              }
              color={"text-white"}
              align={"lg:text-end"}
            />
          </div>
        </div>
        <div className="pt-18">
          <Currentprojectslider />
        </div>
      </div>
    </div>
  );
};

export default Currentproject;
