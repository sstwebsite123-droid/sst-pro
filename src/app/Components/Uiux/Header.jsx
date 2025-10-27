"use client";
import React, { useState } from "react";
import Logo from "../../../../public/images/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Headerbg from "../../../../public/banners/Headerbg.webp";
import menu from "../../../../public/icons/menu.svg";
import cross from "../../../../public/icons/cross.svg";
import callicon from "../../../../public/icons/callicon.svg";
const headerlinks = [
  {
    id: 1,
    pagename: "Home",
    pagelink: "/"
  },
  {
    id: 2,
    pagename: "About",
    pagelink: "/about"
  },
  {
    id: 3,
    pagename: "Services",
    pagelink: "#"
  },
  {
    id: 4,
    pagename: "Markets",
    pagelink: "#"
  },
  {
    id: 5,
    pagename: "Security",
    pagelink: "#"
  },
  {
    id: 6,
    pagename: "Contact",
    pagelink: "/contact-us"
  }
];

const Header = () => {
  const currentpath = usePathname();
  const [Menu, setMenu] = useState(false);
  console.log("dfsvg", Menu);

  return (
    <div className="relative">
      <div className="px-[3%]">
        <div
          className="max-w-[1600px]   cus_header w-[88%] m-auto flex justify-between items-center bg-cover px-[20px] py-1 md:px-[35px] md:py-[13px] rounded-[60px] bg-no-repeat"
          style={{ backgroundImage: `url(${Headerbg.src})` }}
        >
          <div className="block md:hidden  min-w-[62px]" onClick={() => setMenu(!Menu)}>
            <Image
              src={Menu ? cross : menu}
              alt="menu icon"
              width={1000}
              height={500}
              className={`max-w-[38px] z-[3] relative`}
            />
          </div>
          <div className="2xl:min-w-[185px]">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={1000}
                height={500}
                className="max-w-[62px] md:max-w-[40px] xl:max-w-[50px] 2xl:max-w-[62px] animate-spin"
                style={{animationDuration: '2s', animationIterationCount: '1', animationTimingFunction: 'ease-in-out'}}
              />
            </Link>
          </div>
          <div className=" hidden lg:flex justify-center">
            {headerlinks.map((data, index) =>
              <div
                key={index}
                className="border-r-2 border-[#4AA1FF4D]  cursor-pointer group py-1 xl:py-2 relative z-[2]"
              >
                <Link href={data.pagelink}>
                  <span
                    className={` text-base xl:text-xl 2xl:text-[22px] relative z-[2] font_light px-3 xl:px-5 ${currentpath ===
                    data.pagelink
                      ? "text-secondary font-semibold"
                      : "text-white font-medium"}`}
                  >
                    {data.pagename}
                  </span>
                  {currentpath === data.pagelink
                    ? null
                    : <span className="bg-secondary border-b-4 border-black rounded-[20px]  my-auto h-[90%] left-0 absolute top-[5%] scale-0 translate-y-[50px] transition-all duration-500 w-full z-[1] group-hover:scale-100 group-hover:translate-y-0" />}
                </Link>
              </div>
            )}
          </div>
          <div className="hidden md:flex items-center gap-4 lg:gap-0">
            <div className="relative z-[2]">
              <Link href={"https://clients.sst.pro/register"}>
                <Button
                  btn_name={"Sign Up"}
                  btn_background={"gradient_bg"}
                  btn_border={"border-transparent"}
                  color={"text-black"}
                  icon={true}
                />
              </Link>
            </div>
            <div className="block lg:hidden" onClick={() => setMenu(!Menu)}>
              <Image
                src={Menu ? cross : menu}
                alt="menu icon"
                width={1000}
                height={500}
                className="max-w-[30px] z-[3] relative"
              />
            </div>
          </div>
          <div className="block md:hidden min-w-[62px]">
            <Link href="tel:+41447078383">
              <Image
                src={callicon}
                alt="callicon"
                width={1000}
                height={500}
                className="max-w-[48px] ml-auto"
              />
            </Link>
          </div>

          <div
            className={`fixed z-[2] h-[120vh] bg-[#132941]  ${Menu
              ? "top-[-20px] left-0"
              : "top-[-2000px] left-[-2000px]"} w-full  transition-all duration-500`}
          >
            <div className="relative flex flex-col w-[72%] m-auto justify-around items-start pt-[110px] py-1 font_secondary">
              {headerlinks.map((data, index) =>
                <div className="mt-2" key={index} onClick={() => setMenu(false)}>
                  <Link href={data.pagelink}>
                    <span className="text-lg text-white font_light">
                      {data.pagename}
                    </span>
                  </Link>
                </div>
              )}
              <div className="mt-5 block md:hidden" onClick={() => setMenu(false)}>
                <Link href={"https://clients.sst.pro/register"}>
                  <Button
                    btn_name={"Sign Up"}
                    btn_background={"gradient_bg"}
                    btn_border={"border-transparent"}
                    color={"text-black"}
                    icon={true}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
