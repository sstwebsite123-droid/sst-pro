"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Bannerposter from ".././../../../public/banners/Banner.webp";
import bannerdollar from "../../../../public/images/bannerdollar.webp";
import bannerpersentgrafh from "../../../../public/images/bannerpersentgrafh.webp";
import bannergraph from "../../../../public/images/bannergraph.webp";
import InteractiveGraph from "./InteractiveGraph";
import AnimatedSpeedMeter from "./AnimatedSpeedMeter";
import bannersignleft from "../../../../public/images/bannersignleft.webp";
import bannersignright from "../../../../public/images/bannersignright.webp";
import bluewavelight from "../../../../public/images/bluewavelight.webp";
import Tenpersent from "../../../../public/images/Tenpersent.webp";
import wave from "../../../../public/images/wave.webp";
import Image from "next/image";
import Description from "../Uiux/Description";
import Button from "../Uiux/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Buttondev from "../Uiux/Buttondev";
const Banner = () => {


  return (
    // <motion.div
    //   ref={containerRef}
    //   style={{ y, scale, opacity }}
    //   className="relative overflow-hidden"
    // >
    //   <div className="banner_container">
    //     <div className="relative pt-[30px] xl:pt-[26px] 2xl:pt-4 top-[30px]">
    //       {/* Animated background elements */}
    //       <motion.div
    //         className="absolute inset-0 pointer-events-none"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ duration: 2 }}
    //       >
    //         <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
    //         <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-xl animate-pulse"></div>
    //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-2xl animate-pulse"></div>
    //       </motion.div>

    //       <motion.div
    //         initial={{ scale: 0.8, opacity: 0 }}
    //         animate={{ scale: 1, opacity: 1 }}
    //         transition={{ duration: 1.5, ease: "easeOut" }}
    //       >
    //         <Image
    //           src={Bannerposter}
    //           alt=""
    //           width={10000}
    //           height={500}
    //           className="w-full"
    //         />
    //       </motion.div>

    //       <div className="absolute top-[20%] left-0 w-full">
    //         <div className="relative">
    //           <motion.div
    //             initial={{ opacity: 0, y: 100 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             transition={{ duration: 1.2, ease: "easeOut" }}
    //           >
    //             <motion.h1
    //               className="text-[50px] leading-[normal] lg:text-[60px] xl:text-[75px] 2xl:text-[95px] text-center px-40 lg:px-0 cursor-glow"
    //               initial={{ opacity: 0, y: 50 }}
    //               animate={{ opacity: 1, y: 0 }}
    //               transition={{ duration: 1.5, ease: "easeOut" }}
    //             >
    //               <motion.span
    //                 className="gradient_text cursor-magic"
    //                 initial={{ opacity: 0, x: -50 }}
    //                 animate={{ opacity: 1, x: 0 }}
    //                 transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    //                 whileHover={{ scale: 1.05 }}
    //               >
    //                 {" "}Secure.{" "}
    //               </motion.span>{" "}
    //               <motion.span
    //                 className="gradient_text cursor-fire"
    //                 initial={{ opacity: 0, x: -50 }}
    //                 animate={{ opacity: 1, x: 0 }}
    //                 transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
    //                 whileHover={{ scale: 1.05 }}
    //               >
    //                 {" "}Smart.
    //               </motion.span>
    //               <motion.span
    //                 className="transparent_text cursor-ice"
    //                 initial={{ opacity: 0, x: -50 }}
    //                 animate={{ opacity: 1, x: 0 }}
    //                 transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
    //                 whileHover={{ scale: 1.05 }}
    //               >
    //                 {" "}Transparent
    //               </motion.span>
    //             </motion.h1>
    //             <motion.div 
    //               className="main_banne_des"
    //               initial={{ opacity: 0, y: 30 }}
    //               animate={{ opacity: 1, y: 0 }}
    //               transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
    //             >
    //                <Description
    //               description={
    //                 "Where Trust Meets Technology — Powering the Next Generation <br/> of Trading and Investment."
    //               }
    //               color={"text-[#D0D0D0]"}
    //               align={"text-center px-40 lg:px-0"}
    //               items_start={true}
    //               border={false}
    //             />
    //             </motion.div>

    //             <motion.div 
    //               className="flex items-start justify-center"
    //               initial={{ opacity: 0, y: 50 }}
    //               animate={{ opacity: 1, y: 0 }}
    //               transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
    //             >
    //               <div className="flex justify-center gap-6 lg:pt-6">
    //                 <motion.div
    //                   className="cursor-glow"
    //                   whileHover={{ scale: 1.05, y: -2 }}
    //                   whileTap={{ scale: 0.95 }}
    //                   transition={{ duration: 0.2 }}
    //                 >
    //                    <Link href={"https://clients.sst.pro/register"}>
    //                   <Button
    //                     btn_name={"Get Started"}
    //                     btn_background={"bg-transparent"}
    //                     shadow={true}
    //                     color={"text-white"}
    //                     border_bottom={"border-b-0"}
    //                   />
    //                   </Link>
    //                 </motion.div>
    //                 <motion.div
    //                   className="cursor-fire"
    //                   whileHover={{ scale: 1.05, y: -2 }}
    //                   whileTap={{ scale: 0.95 }}
    //                   transition={{ duration: 0.2 }}
    //                 >
    //                   <Button
    //                     btn_name={"Request Demo"}
    //                     btn_background={"gradient_bg"}
    //                     btn_border={"border-secondary"}
    //                     color={"text-black "}
    //                     icon={true}
    //                   />
    //                 </motion.div>
    //               </div>
    //             </motion.div>
    //           </motion.div>
    //           <motion.div 
    //             className="absolute top-[38%] lg:top-[55%] left-[7%] lg:left-[13%] cursor-magic"
    //             initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
    //             animate={{ opacity: 1, scale: 1, rotate: 0 }}
    //             transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
    //             whileHover={{ scale: 1.1, rotate: 5 }}
    //           >
    //             <motion.div 
    //               className="animate-spin" 
    //               style={{animationDuration: '2s', animationIterationCount: '1', animationTimingFunction: 'ease-in-out'}}
    //               animate={{ rotate: [0, 360] }}
    //               // transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    //             >
    //               <Image
    //                 src={bannerdollar}
    //                 alt="$"
    //                 width={2000}
    //                 height={500}
    //                 className="max-w-[130px] lg:max-w-[180px] xl:max-w-[250px] 2xl:max-w-[330px]"
    //               />
    //             </motion.div>
    //           </motion.div>

    //           <motion.div 
    //             className="absolute top-[35%] lg:top-[56%] right-[4%] lg:right-[7%] cursor-ice"
    //             initial={{ opacity: 0, scale: 0.8, x: 50 }}
    //             animate={{ opacity: 1, scale: 1, x: 0 }}
    //             transition={{ duration: 1.5, delay: 1.7, ease: "easeOut" }}
    //             whileHover={{ scale: 1.05 }}
    //           >
    //             <AnimatedSpeedMeter />
    //           </motion.div>

    //           <motion.div
    //             className="absolute top-[-2%]"
    //             initial={{ opacity: 0, y: -50, rotate: -45 }}
    //             animate={{ opacity: 1, y: 0, rotate: 0 }}
    //             transition={{ duration: 1.8, delay: 1.9, ease: "easeOut" }}
    //             whileHover={{ scale: 1.1, rotate: 5 }}
    //           >
    //             <Image
    //               src={bannersignleft}
    //               alt="#"
    //               width={2000}
    //               height={500}
    //               className="max-w-[60px] lg:max-w-[80px] xl:max-w-[130px] 2xl:max-w-[170px]"
    //             />
    //           </motion.div>

    //           <motion.div
    //             className="absolute right-0 top-[-15%]"
    //             initial={{ opacity: 0, y: -50, rotate: 45 }}
    //             animate={{ opacity: 1, y: 0, rotate: 0 }}
    //             transition={{ duration: 1.8, delay: 2.1, ease: "easeOut" }}
    //             whileHover={{ scale: 1.1, rotate: -5 }}
    //           >
    //             <Image
    //               src={bannersignright}
    //               alt="#"
    //               width={2000}
    //               height={500}
    //               className="max-w-[60px] lg:max-w-[80px] xl:max-w-[130px] 2xl:max-w-[170px]"
    //             />
    //           </motion.div>
    //         </div>
    //       </div>
    //       <motion.div
    //         className="absolute bottom-0 ps-6 w-full"
    //         initial={{ opacity: 0, y: 100 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 2, delay: 2.3, ease: "easeOut" }}
    //       >
    //         <InteractiveGraph />
    //       </motion.div>
    //     </div>
    //   </div>
    // </motion.div>
    <div>
      <div className='bg-cover bg-center' style={{ backgroundImage: `url(${bluewavelight.src})` }}   >
        <div className="banner-tit-des-btn flex flex-col justify-center items-center text-center w-full px-4 md:pt-[12%] pt-[30%] gap-[10px] lg:gap-[5px] 2xl:gap-[20px]">
          <div className="title  flex text-[18px]  md:text-[45px]   2xl:text-[95px] lg:text-[45px] max-w-[1372px] font-medium m-auto ">
            <p className=' bg-[linear-gradient(90deg,rgba(74,161,255,1)_0%,rgba(181,217,215,1)_35%,rgba(74,161,255,1)_100%)] bg-clip-text text-transparent'>Secure. Smart.</p>
            <p className='font-bold text-transparent stroke-text'>Transparent.</p>
          </div>
          <div className="des max-w-[805px] m-auto text-[10px] md:text-[13px] 2xl:text-[25px] lg:text-[15px] text-[#D0D0D0]  2xl:leading-[35px]">
            <span>Where Trust Meets Technology — Powering the Next Generation of Trading and Investment.</span>
          </div>
          <div className="banner-btn w-full">
            <Buttondev
              text="Request Demo"
              bgColor="bg-gradient-to-r from-blue-400 via-teal-200 to-blue-400"
              textColor="text-black"
              className='w-full max-w-[176px] 2xl:max-w-[476px] lg:max-w-[276px] md:max-w-[276px] m-auto' />
          </div>

        </div>
        <div className="invest-tenpersent gap-[15%] mt-[10%] px-[3%] md:px-[6%] grid grid-cols-2 ">
          <div className="relative w-max m-auto md:mt-[18%] h-max rounded-2xl bg-gradient-to-br from-[#0f172a]/80 to-[#1e293b]/60 backdrop-blur-md border border-white/10 p-5 text-white shadow-lg">
            <p className=" text-xs md:text-sm text-gray-300">Investment results</p>

            <div className="flex items-center gap-2 mt-2">
              <h2 className=" text-xs 2xl:text-3xl md:text-2xl font-semibold">$25,901</h2>

              <span className="flex items-center gap-1 text-green-400 bg-[#00000080] px-2 py-1 rounded-full text-xs">
                ▲ 8.10%
              </span>
            </div>
          </div>
          <div className="Tenpersent">
            <Image
              src={Tenpersent}
              alt='Tenpersent'
              width={1000}
              height={500}
              className=' max-w-[150px] 2xl:max-w-[348px]  md:max-w-[280px] m-auto ' />
          </div>
        </div>

        <div className="graphimg flex items-end w-full mt-[3%] ">
          <div className="img flex-1 relative">
            <Image
              src={wave}
              alt="wave chart"
              width={1000}
              height={500}
              className=" w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
