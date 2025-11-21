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
import arrowDown from "../../../../public/images/dropdown.webp"; // ⭐ NEW ICON

// Updated Nav Links
const headerlinks = [
  { id: 1, pagename: "Home", pagelink: "/" },
  { id: 2, pagename: "About", pagelink: "/about" },
  { id: 3, pagename: "Services", pagelink: "/service" },

  {
    id: 4,
    pagename: "Markets",
    dropdown: [
      { name: "Forex", link: "/forex" },
      { name: "Real-Estate", link: "/real-estate" },

    ]
  },

  {
    id: 5,
    pagename: "UpComing Projects",
    dropdown: [
      { name: "Sugar Plant", link: "/sugarplant" },
      { name: "Hotel Chains", link: "/hotelchain" },
      { name: "Oil & Energy", link: "/oilandenergy" },
      { name: "Agriculture", link: "/Agriculture" },
      { name: "Transportation & Logistics", link: "/transportationlogistics" },
      { name: "Technology & AI", link: "/technology" },
    ]
  },

  { id: 6, pagename: "Contact", pagelink: "/contact-us" }
];

const Header = () => {
  const currentpath = usePathname();
  const [Menu, setMenu] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  return (
    <div className="relative">
      <div className="px-[3%]">
        <div
          className="max-w-[1800px] cus_header w-[95%] m-auto flex justify-between items-center bg-cover px-[20px] py-1 md:px-[35px] md:py-[13px] rounded-[60px] bg-no-repeat"
          style={{ backgroundImage: `url(${Headerbg.src})` }}
        >
          {/* Mobile Menu Icon */}
          <div className="block md:hidden min-w-[62px]" onClick={() => setMenu(!Menu)}>
            <Image src={Menu ? cross : menu} alt="menu icon" className="max-w-[38px] z-[3] relative" />
          </div>

          {/* Logo */}
          <div className="2xl:min-w-[185px]">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                className="max-w-[62px] md:max-w-[40px] xl:max-w-[50px] 2xl:max-w-[62px] animate-spin"
                style={{ animationDuration: "2s", animationIterationCount: "1" }}
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex justify-center">
            {headerlinks.map((data, index) => (
              <div key={index} className="relative group border-r-2 border-[#4AA1FF4D] cursor-pointer py-1 xl:py-2">

                {/* Normal Link */}
                {!data.dropdown ? (
                  <Link href={data.pagelink}>
                    <span
                      className={`relative z-[2] text-base xl:text-xl  font_light px-3 xl:px-5 ${currentpath === data.pagelink ? "text-secondary font-semibold" : "text-white font-medium"
                        }`}
                    >
                      {data.pagename}
                    </span>
                    {currentpath === data.pagelink
                      ? null
                      : <span className="bg-secondary border-b-4 border-black rounded-[20px]  my-auto h-[90%] left-0 absolute top-[5%] scale-0 translate-y-[50px] transition-all duration-500 w-full z-[1] group-hover:scale-100 group-hover:translate-y-0" />}
                  </Link>
                ) : (
                  <>
                    {/* Dropdown Button + Arrow */}
                    <div className="flex items-center gap-2 px-3 xl:px-5 text-white group-hover:text-secondary">
                      <span className="text-base xl:text-xl  font_light relative z-[2] ">{data.pagename}</span>
                      <Image
                        src={arrowDown}
                        alt="arrow"
                        className="w-[30px] transition-all duration-300 group-hover:rotate-180"
                      />
                    </div>

                    {/* Dropdown Box */}
                    <div className="absolute left-0 top-[100%] bg-[#132941] text-white shadow-md rounded-lg min-w-[180px] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
                      {data.dropdown.map((item, idx) => (
                        <Link key={idx} href={item.link}>
                          <div className={` px-4 py-2 hover:bg-secondar hover:text-[#4aa1ff] ${currentpath === item.link ? 'text-[#4aa1ff]' : 'text-white'}`}>{item.name}</div>
                        </Link>
                      ))}
                    </div>
                    {currentpath === data.pagelink
                      ? null
                      : <span className="bg-secondary border-b-4 border-black rounded-[20px]  my-auto h-[90%] left-0 absolute top-[5%] scale-0 translate-y-[50px] transition-all duration-500 w-full z-[1] group-hover:scale-100 group-hover:translate-y-0" />}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Signup Button */}
          <div className="hidden md:flex items-center gap-4 lg:gap-0">
            <Link href="https://clients.sst.pro/register">
              <Button btn_name="Sign Up" btn_background="gradient_bg" color="text-black" icon />
            </Link>

            <div className="block lg:hidden" onClick={() => setMenu(!Menu)}>
              <Image src={Menu ? cross : menu} alt="menu icon" className="max-w-[30px]" />
            </div>
          </div>

          {/* Mobile Call Icon */}
          <div className="block md:hidden min-w-[62px]">
            <Link href="tel:+41447078383">
              <Image src={callicon} alt="callicon" className="max-w-[48px] ml-auto" />
            </Link>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`fixed z-[2] h-[120vh] bg-[#132941] ${Menu ? "top-[-20px] left-0" : "top-[-2000px] left-[-2000px]"} w-full transition-all duration-500`}
          >
            <div className="flex flex-col w-[72%] m-auto pt-[110px]">

              {headerlinks.map((data, index) => (
                <div key={index} className="mt-3 text-white">

                  {/* No Dropdown */}
                  {!data.dropdown ? (
                    <Link href={data.pagelink} onClick={() => setMenu(false)}>
                      <span className="text-lg">{data.pagename}</span>
                    </Link>
                  ) : (
                    <>
                      {/* Dropdown Header */}
                      <div
                        className="flex items-center justify-between w-full"
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === data.id ? null : data.id)}
                      >
                        <span className="text-lg">{data.pagename}</span>

                        {/* Rotating Mobile Arrow */}
                        <Image
                          src={arrowDown}
                          alt="arrow"
                          className={`w-[16px] transition-all duration-300 ${openMobileDropdown === data.id ? "rotate-180" : "rotate-0"
                            }`}
                        />
                      </div>

                      {/* Mobile Dropdown List */}
                      {openMobileDropdown === data.id && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {data.dropdown.map((item, idx) => (
                            <Link key={idx} href={item.link} onClick={() => setMenu(false)}>
                              <span className="text-base text-white">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              <div className="mt-5 block md:hidden">
                <Link href="https://clients.sst.pro/register">
                  <Button btn_name="Sign Up" btn_background="gradient_bg" color="text-black" icon />
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




// "use client";
// import React, { useState } from "react";
// import Logo from "../../../../public/images/Logo.webp";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "./Button";
// import { usePathname } from "next/navigation";
// import Headerbg from "../../../../public/banners/Headerbg.webp";
// import menu from "../../../../public/icons/menu.svg";
// import cross from "../../../../public/icons/cross.svg";
// import callicon from "../../../../public/icons/callicon.svg";
// const headerlinks = [
//   {
//     id: 1,
//     pagename: "Home",
//     pagelink: "/"
//   },
//   {
//     id: 2,
//     pagename: "About",
//     pagelink: "/about"
//   },
//   {
//     id: 3,
//     pagename: "Services",
//     pagelink: "/service"
//   },
//   {
//     id: 4,
//     pagename: "Markets",
//     pagelink: "#"
//   },
//   // {
//   //   id: 5,
//   //   pagename: "Security",
//   //   pagelink: "#"
//   // },
//   {
//     id: 6,
//     pagename: "Contact",
//     pagelink: "/contact-us"
//   }
// ];

// const Header = () => {
//   const currentpath = usePathname();
//   const [Menu, setMenu] = useState(false);
//   console.log("dfsvg", Menu);

//   return (
//     <div className="relative">
//       <div className="px-[3%]">
//         <div
//           className="max-w-[1600px]   cus_header w-[88%] m-auto flex justify-between items-center bg-cover px-[20px] py-1 md:px-[35px] md:py-[13px] rounded-[60px] bg-no-repeat"
//           style={{ backgroundImage: `url(${Headerbg.src})` }}
//         >
//           <div className="block md:hidden  min-w-[62px]" onClick={() => setMenu(!Menu)}>
//             <Image
//               src={Menu ? cross : menu}
//               alt="menu icon"
//               width={1000}
//               height={500}
//               className={`max-w-[38px] z-[3] relative`}
//             />
//           </div>
//           <div className="2xl:min-w-[185px]">
//             <Link href="/">
//               <Image
//                 src={Logo}
//                 alt="Logo"
//                 width={1000}
//                 height={500}
//                 className="max-w-[62px] md:max-w-[40px] xl:max-w-[50px] 2xl:max-w-[62px] animate-spin"
//                 style={{ animationDuration: '2s', animationIterationCount: '1', animationTimingFunction: 'ease-in-out' }}
//               />
//             </Link>
//           </div>
//           <div className=" hidden lg:flex justify-center">
//             {headerlinks.map((data, index) =>
//               <div
//                 key={index}
//                 className="border-r-2 border-[#4AA1FF4D]  cursor-pointer group py-1 xl:py-2 relative z-[2]"
//               >
//                 <Link href={data.pagelink}>
//                   <span
//                     className={` text-base xl:text-xl 2xl:text-[22px] relative z-[2] font_light px-3 xl:px-5 ${currentpath ===
//                       data.pagelink
//                       ? "text-secondary font-semibold"
//                       : "text-white font-medium"}`}
//                   >
//                     {data.pagename}
//                   </span>
//                   {currentpath === data.pagelink
//                     ? null
//                     : <span className="bg-secondary border-b-4 border-black rounded-[20px]  my-auto h-[90%] left-0 absolute top-[5%] scale-0 translate-y-[50px] transition-all duration-500 w-full z-[1] group-hover:scale-100 group-hover:translate-y-0" />}
//                 </Link>
//               </div>
//             )}
//           </div>
//           <div className="hidden md:flex items-center gap-4 lg:gap-0">
//             <div className="relative z-[2]">
//               <Link href={"https://clients.sst.pro/register"}>
//                 <Button
//                   btn_name={"Sign Up"}
//                   btn_background={"gradient_bg"}
//                   btn_border={"border-transparent"}
//                   color={"text-black"}
//                   icon={true}
//                 />
//               </Link>
//             </div>
//             <div className="block lg:hidden" onClick={() => setMenu(!Menu)}>
//               <Image
//                 src={Menu ? cross : menu}
//                 alt="menu icon"
//                 width={1000}
//                 height={500}
//                 className="max-w-[30px] z-[3] relative"
//               />
//             </div>
//           </div>
//           <div className="block md:hidden min-w-[62px]">
//             <Link href="tel:+41447078383">
//               <Image
//                 src={callicon}
//                 alt="callicon"
//                 width={1000}
//                 height={500}
//                 className="max-w-[48px] ml-auto"
//               />
//             </Link>
//           </div>

//           <div
//             className={`fixed z-[2] h-[120vh] bg-[#132941]  ${Menu
//               ? "top-[-20px] left-0"
//               : "top-[-2000px] left-[-2000px]"} w-full  transition-all duration-500`}
//           >
//             <div className="relative flex flex-col w-[72%] m-auto justify-around items-start pt-[110px] py-1 font_secondary">
//               {headerlinks.map((data, index) =>
//                 <div className="mt-2" key={index} onClick={() => setMenu(false)}>
//                   <Link href={data.pagelink}>
//                     <span className="text-lg text-white font_light">
//                       {data.pagename}
//                     </span>
//                   </Link>
//                 </div>
//               )}
//               <div className="mt-5 block md:hidden" onClick={() => setMenu(false)}>
//                 <Link href={"https://clients.sst.pro/register"}>
//                   <Button
//                     btn_name={"Sign Up"}
//                     btn_background={"gradient_bg"}
//                     btn_border={"border-transparent"}
//                     color={"text-black"}
//                     icon={true}
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


