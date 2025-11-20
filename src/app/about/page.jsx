import React from "react";
import Faqs from "../Components/Pagecomponents/Faqs";
import Corevalue from "../Components/Pagecomponents/Corevalue";
import Aboutsstpro from "../Components/Pagecomponents/Aboutsstpro";
import Aboutdata from "../Components/Pagecomponents/Aboutdata";
import AboutChoose from "../Components/Pagecomponents/AboutChoose";
import Dynamicbanner from "../Components/Pagecomponents/Dynamicbanner";
import Vision from "../Components/Pagecomponents/Vision";
import CEOMessage from "../Components/Pagecomponents/CEOMessage";
import CertificatesCompliance from "../Components/Pagecomponents/CertificatesCompliance";
import Aboutbgbanner from '../../../public/images/Aboutbgbanner.webp'
const faqData = [
  {
    question: "What does SST Pro Ltd do?",
    answer:
      "SST Pro Ltd is a licensed global investment company offering secure, diversified opportunities in Forex, Real Estate, and other profitable markets across the USA and UK."
  },
  {
    question: "Is SST Pro legally registered and regulated?",
    answer:
      "Yes, SST Pro is officially registered under Colorado law with valid certification and is also licensed in the UK, ensuring compliance, transparency, and strong investor protection"
  },
  {
    question: "How does SST Pro ensure investor safety?",
    answer:
      "We use strict risk-management practices, transparent reporting, regulated operations, and data-driven strategies to safeguard investor funds while maintaining stable, sustainable financial growth."
  },
  {
    question: "What makes SST Pro a reliable investment partner?",
    answer:
      "Our regulated status, expert analysts, diversified portfolio options, integrity-based approach, and consistent performance make SST Pro a dependable and trusted global investment partner."
  },
  {
    question: "Who can invest with SST Pro?",
    answer:
      "Both individuals and institutions can invest with SST Pro. We offer customized investment plans designed to match different financial goals and suitable risk levels."
  },
  {
    question: "What markets does SST Pro focus on?",
    answer:
      "We specialize in Forex, Real Estate, and selective high-performing global sectors, helping investors achieve long-term, stable returns through diversified, expertly managed investment strategies."
  }
];
const page = () => {
  return (
    <div>
      <Dynamicbanner banner_title={"About SST Pro"} bannerimg={Aboutbgbanner} />
      <Aboutsstpro />
      <Aboutdata />
      <Vision />
      <CEOMessage />
      <AboutChoose />
      <CertificatesCompliance />
      <Corevalue />
      <Faqs faqData={faqData} />
    </div>
  );
};

export default page;
