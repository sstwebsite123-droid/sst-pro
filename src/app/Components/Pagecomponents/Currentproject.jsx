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
                'Current <span class="gradient_text"> Working  <br/> Projects </span> '
              }
              color={"text-white"}
            />
          </div>
          <div>
            <Description
              description={
                "Manage your current projects seamlessly, track updates, <br/> and optimize workflows for better productivity."
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
