import React from "react";
// import fotterbackground from "../../../../public/banners/fotterbackground.webp";
// import fottercardph from "../../../../public/images/fottercardph.webp";
import logo from "../../../../public/images/Logo.webp";
import Image from "next/image";
import facebookicon from "../../../../public/icons/facebook.svg";
import Instaicon from "../../../../public/icons/Insta.svg";
import x from "../../../../public/icons/X.svg";
import Link from "next/link";
// import Worldbroker from "../Pagecomponents/Worldbroker";
import Fotterlinks from "../Pagecomponents/Footerlinks";
import Investment from "../Pagecomponents/Investment";
import CopyRight from "./CopyRight";
import SmarterGrowth from "../HomeSections/SmarterGrowth";
import AwardsSection from "../HomeSections/AwardsSection";
import StatsSection from "../HomeSections/StatsSection";
import InvestorRelations from "../HomeSections/InvestorRelations ";
const footerdata = {
  linkingdata: [
    {
      title: "Products & Solutions",
      pagelinks: [
        // { pagelink: "/", pagename: "About us" },
        { pagelink: "/", pagename: "Strategy Workshops" },
        { pagelink: "/", pagename: "AI Analysis Tools Us" },
        { pagelink: "/", pagename: "Personal Mentorship" },
        { pagelink: "/", pagename: "Portfolio Review" },
      ],
    },
    {
      title: "Resources",
      pagelinks: [
        { pagelink: "/", pagename: "Training Modules" },
        { pagelink: "/", pagename: "Market Insights" },
        { pagelink: "/terms", pagename: "Terms & Conditions" },
      ],
    },
    {
      title: "Contact",
      pagelinks: [
        { pagelink: "mailto:info@sst.pro", pagename: "info@sst.pro" },
        { pagelink: "tel:+41447078383", pagename: "+41 (447) 07-8383" },
      ],
    },
  ],
  social_links: [
    {
      alt: "Facebook",
      pagelink: "",
      icon: facebookicon,
    },
    {
      alt: "Instagram",
      pagelink: "",
      icon: Instaicon,
    },
    {
      alt: "You Tube",
      pagelink: "",
      icon: x,
    },
  ],
};
const Footer = () => {
  return (
    <div>
      <Investment />
      <SmarterGrowth/>
      <AwardsSection/>
      <StatsSection/>
      <InvestorRelations/>
      <div className=" pt-12 ">
        <div className="bg-cover bg-no-repeat">
          <div className="inn_container pt-8 md:pt-18 px-24  shadow-[inset_0px_20px_20px_-20px_#0074f2] rounded-tl-[70px] md:rounded-tl-[110px]  lg:rounded-tl-[150px]   rounded-tr-[70px]  md:rounded-tr-[110px] lg:rounded-tr-[150px]">
            <div className="px-[1.5%] 2xl:px-[3%]">
              <div className="hidden md:grid grid-cols-[3fr_4fr_4fr_4fr] lg:grid-cols-4">
                <div>
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="Logo"
                      width={1000}
                      height={500}
                      className=" max-w-[55px] lg:max-w-[74px] xl:max-w-[84px]"
                    />
                  </Link>
                  <p className="lg:text-lg xl:text-xl text-white pt-4" style={{fontSize: '14px'}}>
                    SST Pro is a trusted investment platform specializing in
                    Forex and Real Estate trading, offering investors secure,
                    diversified, and profitable opportunities for sustainable
                    financial growth.
                  </p>
                </div>
                {footerdata.linkingdata.map((data, index) => (
                  <div
                    className={`${
                      index === 2
                        ? null
                        : "border-r-[3px] border-dashed border-[#72727250]"
                    }`}
                    key={index}
                  >
                    <Fotterlinks title={data.title} linklist={data.pagelinks} />
                  </div>
                ))}
              </div>

              <div className="flex md:hidden flex-col-reverse">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 py-6">
                  {footerdata.linkingdata.slice(0, 1).map((data, index) => (
                    <div
                      className={`${
                        index === 2
                          ? null
                          : "border-r-[3px] w-full border-dashed"
                      }`}
                      key={index}
                    >
                      <Fotterlinks
                        title={data.title}
                        linklist={data.pagelinks}
                        border={true}
                      />
                    </div>
                  ))}
                  <div className="flex items-start flex-col gap-4">
                    {footerdata.linkingdata.slice(1, 3).map((data, index) => (
                      <div
                        className={`${
                          index === 2
                            ? null
                            : "border-r-[3px] w-full border-dashed"
                        }`}
                        key={index}
                      >
                        <Fotterlinks
                          title={data.title}
                          linklist={data.pagelinks}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center py-6">
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="Logo"
                      width={1000}
                      height={500}
                      className="max-w-[70px]"
                    />
                  </Link>
                </div>
              </div>
              <CopyRight />
              <div className="pt-6 lg:pt-6">
                <div className="border-t py-6 border-solid border-[#ffffff57] font_secondary flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row items-center lg:justify-between">
                  <div className="flex flex-col lg:flex-row items-center gap-1.5 lg:gap-5">
                    <p className="text-[14px] 2xl:text-base font-light text-[#AAAAAA] font_light">
                      © 2025 SST Pro. All rights reserved.{" "}
                      <span className="gradient_text"> SST Pro </span>
                    </p>
                  </div>

                  <div className="flex gap-2">
                    {footerdata.social_links.map((data, index) => (
                      <Link href={data.pagelink} target="_blank" key={index}>
                        <div className="w-[33px] h-[33px] flex rounded-[50%] items-center justify-center bg-primary">
                          <Image
                            src={data.icon}
                            alt={data.icon}
                            width={1000}
                            height={500}
                            className="w-[18px]"
                          />
                        </div>
                      </Link>
                    ))}
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

export default Footer;
