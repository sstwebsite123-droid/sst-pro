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
    question: "What is SST Pro Ltd?",
    answer:
      "SST Pro is a global investment platform offering smart, secure, and fast trading options in Forex and real estate to help users achieve financial growth."
  },
  {
    question: "Is SST Pro officially registered and regulated?",
    answer:
      "Yes, your funds are completely safe with SST Pro. We use advanced encryption, regulated accounts, and strict compliance standards to ensure maximum financial security."
  },
  {
    question: "What makes SST Pro different from other investment companies?",
    answer:
      "SST Pro offers trading in Forex, real estate investments, and global financial markets, along with market analysis, portfolio management, and secure client account handling."
  },
  {
    question: "Who can invest with SST Pro?",
    answer:
      "Opening an account is simple. Register online, verify your details, choose your investment type, and start trading instantly through our secure SST Pro platform."
  },
  {
    question: "What markets does SST Pro operate in?",
    answer:
      "Absolutely! SST Pro is designed for all experience levels. Our intuitive dashboard, learning resources, and customer support make trading easy for beginners and professionals alike."
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
