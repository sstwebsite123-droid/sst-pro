"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Banner from "./Banner";
import Topstock from "./Topstock";
import Currentproject from "./Currentproject";
import Trackgroth from "./Trackgroth";
import Investsmartly from "./Investsmartly";
import Whysst from "./Whysst";
import Aboutsst from "./Aboutsst";
import Corevalue from "./Corevalue";
import Faqs from "./Faqs";
import Bannermobile from "../Uiux/Bannermobile";
const faqData = [
  {
    question: "What is SST Pro?",
    answer:
      "Register online, verify your details, and start trading in minutes."
  },
  {
    question: "Are my funds safe?",
    answer:
      "Register online, verify your details, and start trading in minutes."
  },
  {
    question: "What services do you offer?",
    answer:
      "Register online, verify your details, and start trading in minutes."
  },
  {
    question: "How do I open an account?",
    answer:
      "Register online, verify your details, and start trading in minutes."
  },
  {
    question: "Is SST Pro beginner-friendly?",
    answer:
      "Register online, verify your details, and start trading in minutes."
  }
];

function Homewrap() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  // Refs for each section
  const bannerRef = useRef(null);
  const topstockRef = useRef(null);
  const currentprojectRef = useRef(null);
  const trackgrothRef = useRef(null);
  const investsmartlyRef = useRef(null);
  const whysstRef = useRef(null);
  const aboutsstRef = useRef(null);
  const corevalueRef = useRef(null);
  const faqsRef = useRef(null);

  // Check if sections are in view (optimized for performance)
  const bannerInView = useInView(bannerRef, { once: true, margin: "-50px" });
  const topstockInView = useInView(topstockRef, { once: true, margin: "-50px" });
  const currentprojectInView = useInView(currentprojectRef, { once: true, margin: "-50px" });
  const trackgrothInView = useInView(trackgrothRef, { once: true, margin: "-50px" });
  const investsmartlyInView = useInView(investsmartlyRef, { once: true, margin: "-50px" });
  const whysstInView = useInView(whysstRef, { once: true, margin: "-50px" });
  const aboutsstInView = useInView(aboutsstRef, { once: true, margin: "-50px" });
  const corevalueInView = useInView(corevalueRef, { once: true, margin: "-50px" });
  const faqsInView = useInView(faqsRef, { once: true, margin: "-50px" });

  return (
    <motion.div 
      className="bg-black relative"
      style={{ opacity }}
    >
      {/* Animated background gradient */}
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
      </motion.div>

      {/* Floating geometric shapes - removed to eliminate boxes and circles */}

      {/* Banner Section */}
      <motion.div
        ref={bannerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="hidden md:block">
          <Banner />
        </div>
        <div className="block md:hidden">
          <Bannermobile />
        </div>
      </motion.div>

      {/* Topstock Section */}
      <motion.div
        ref={topstockRef}
        initial={{ opacity: 0, y: 100 }}
        animate={topstockInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <Topstock />
      </motion.div>

      {/* Currentproject Section */}
      <motion.div
        ref={currentprojectRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={currentprojectInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <Currentproject />
      </motion.div>

      {/* Trackgroth Section */}
      <motion.div
        ref={trackgrothRef}
        initial={{ opacity: 0, x: -100 }}
        animate={trackgrothInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
      >
        <Trackgroth />
      </motion.div>

      {/* Investsmartly Section */}
      <motion.div
        ref={investsmartlyRef}
        initial={{ opacity: 0, y: 150 }}
        animate={investsmartlyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.5 }}
      >
        <Investsmartly />
      </motion.div>

      {/* Whysst Section */}
      <motion.div
        ref={whysstRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={whysstInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.6 }}
      >
        <Whysst />
      </motion.div>

      {/* Aboutsst Section */}
      <motion.div
        ref={aboutsstRef}
        initial={{ opacity: 0, x: 100 }}
        animate={aboutsstInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
      >
        <Aboutsst />
      </motion.div>

      {/* Corevalue Section */}
      <motion.div
        ref={corevalueRef}
        initial={{ opacity: 0, y: 200 }}
        animate={corevalueInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.8 }}
      >
        <Corevalue />
      </motion.div>

      {/* Faqs Section */}
      <motion.div
        ref={faqsRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={faqsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
      >
        <Faqs faqData={faqData} />
      </motion.div>
    </motion.div>
  );
}

export default Homewrap;
