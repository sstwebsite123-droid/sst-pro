import React from "react";
import Dynamicbanner from "../Components/Pagecomponents/Dynamicbanner";
import Aboutbgbanner from "../../../public/images/Aboutbgbanner.webp";
import Whatweoffer from "../Components/Pagecomponents/Whatweoffer";
import Investmentpackage from "../Components/Pagecomponents/Investmentpackage";
import Faqs from "../Components/Pagecomponents/Faqs";
import Corevalue from "../Components/Pagecomponents/Corevalue";
import Whyinvestorchoose from "../Components/Pagecomponents/Whyinvestorchoose";
import servicesbanner from "../../../public/images/servicesbanner.webp";

const faqData = [
  {
    question: "What makes SST Pro a trusted investment platform?",
    answer:
      "SST Pro combines secure systems, expert traders, smart technology, and transparent operations to provide stable returns, real market-backed profits, and long-term value for all investors."
  },
  {
    question: "How does SST Pro generate daily trading profits?",
    answer:
      "Daily profits come from verified live market trades executed by professional traders, ensuring real performance without bots, speculation, or fake promises—just strategic trading focused on consistent growth."
  },
  {
    question: "Who can join and invest with SST Pro?",
    answer:
      "Anyone above 18, seeking secure financial growth through Forex or real estate, can join SST Pro and choose a suitable investment package for their goals."
  },
  {
    question: "Are my funds and personal data protected with SST Pro?",
    answer:
      "Yes, SST Pro uses advanced security, encryption, AML, and KYC compliance to fully protect investor funds, identities, and transactions with industry-standard safeguards."
  },
  {
    question: "What returns can I expect from SST Pro investment plans?",
    answer:
      "Returns vary by market conditions and selected plans. SST Pro offers daily profits, monthly compounding, and multiple earning opportunities, but no guaranteed fixed returns."
  },
  {
    question: "Does SST Pro offer support for new or beginner investors?",
    answer:
      "Yes, beginners receive complete guidance, mentorship, training resources, and support to understand trading, choose plans, and confidently begin their investment journey with SST Pro."
  }
];

const page = () => {
  return (
    <div>
      <Dynamicbanner
        banner_title={"Next-Level Trading <br /> Services"}
        bannerimg={servicesbanner}
      />
      <Whatweoffer />
      <Investmentpackage />
      <Whyinvestorchoose />
      <Corevalue />
      <Faqs faqData={faqData} />
    </div>
  );
};
export default page;
