import React from "react";
import Faqs from "../Components/Pagecomponents/Faqs";
import Corevalue from "../Components/Pagecomponents/Corevalue";
import Aboutsstpro from "../Components/Pagecomponents/Aboutsstpro";
import Aboutdata from "../Components/Pagecomponents/Aboutdata";
import AboutChoose from "../Components/Pagecomponents/AboutChoose";
import Dynamicbanner from "../Components/Pagecomponents/Dynamicbanner";
import Vision from "../Components/Pagecomponents/Vision";
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
const page = () => {
  return (
    <div>
      <Dynamicbanner banner_title={"About SST Pro"} />
      <Aboutsstpro />
      <Aboutdata />
      <Vision />
      <AboutChoose />
      <Corevalue />
      <Faqs faqData={faqData} />
    </div>
  );
};

export default page;
