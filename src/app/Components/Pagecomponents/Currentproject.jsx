import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Currentprojectslider from "./Currentprojectslider";
import currencycheck from "../../../../public/icons/currencycheck.svg";
import cardbanner1 from "../../../../public/images/trackcard1.webp";
import cardbanner2 from "../../../../public/images/trackcard2.webp";
import Arrowbtn from "../Uiux/Arrowbtn";
import Link from "next/link";
import Image from "next/image";
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
          {/* <Currentprojectslider /> */}

          <div>
            <div className="flex flex-wrap gap-6 2xl:gap-12 justify-center">
              {industries.map((data, index) =>
                <Link key={index} href={data.route}>
                  <div className="p-4 gradient_border group rounded-[50px] hover:shadow-[-4px_4px_4px_#ffffff99] hover:scale-[1.02] transition-all duration-700 relative overflow-hidden magnetic max-w-[450px] xl:max-w-[520px] 2xl:max-w-[550px] m-auto">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#001D3C] group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating Particle */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary/40 rounded-full" />
                    {/* <div className="absolute w-[60px] md:w-[64px] h-[60px] md:h-[64px] flex items-center justify-center bg-[var(--secondary)] group-hover:bg-[var(--primary)] rounded-[50%] transition-all duration-500 z-[2]">
                      <Image
                        src={data.icon}
                        alt="icon"
                        width={1000}
                        height={500}
                        className="max-w-[24px] md:max-w-[34px]"
                      />
                    </div> */}
                    <div className="relative max-w-[510px] m-auto cursor-ripple">
                      <div>
                        <Image
                          src={data.image}
                          alt="banner"
                          width={1000}
                          height={500}
                          className="md:rounded-lg min-h-[299px] md:min-h-auto object-cover rounded-[35px]"
                        />
                      </div>

                      <div>
                        <Arrowbtn
                          width_height={
                            "w-[50px] md:w-[65px] 2xl:w-[72px] h-[50px] md:h-[65px] 2xl:h-[72px]"
                          }
                        />
                      </div>
                    </div>

                    <div className="max-w-[510px] m-auto pt-8 relative z-10">
                      <h4 className="text-2xl lg:text-[30px] gradient_text w-max">
                        {data.title}
                      </h4>

                      <p
                        className="sub_description text-white pt-3 min-h-[66px]"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                      />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currentproject;
