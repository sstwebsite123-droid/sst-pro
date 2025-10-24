import React from "react";
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
    question: "What is SST?",
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
    question: "Is SST beginner-friendly?",
    answer:
      "Register online, verify your details, and start trading in minutes."
  }
];

function Homewrap() {
  return (
    <div className="bg-black">
      <div className="hidden md:block">
        <Banner />
      </div>
      <div className="block md:hidden">
        <Bannermobile />
      </div>

      <Topstock />
      <Currentproject />
      <Trackgroth />
      <Investsmartly />
      <Whysst />
      <Aboutsst />
      <Corevalue />
      <Faqs faqData={faqData} />
    </div>
  );
}

export default Homewrap;
