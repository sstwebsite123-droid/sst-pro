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
    question: "What is SST Pro?",
    answer:
      "SST Pro is a global investment platform offering smart, secure, and fast trading options in Forex and real estate to help users achieve financial growth."
  },
  {
    question: "Are my funds safe?",
    answer:
      "Yes, your funds are completely safe with SST Pro. We use advanced encryption, regulated accounts, and strict compliance standards to ensure maximum financial security."
  },
  {
    question: "What services do you offer?",
    answer:
      "SST Pro offers trading in Forex, real estate investments, and global financial markets, along with market analysis, portfolio management, and secure client account handling."
  },
  {
    question: "How do I open an account?",
    answer:
      "Opening an account is simple. Register online, verify your details, choose your investment type, and start trading instantly through our secure SST Pro platform."
  },
  {
    question: "Is SST Pro beginner-friendly?",
    answer:
      "Absolutely! SST Pro is designed for all experience levels. Our intuitive dashboard, learning resources, and customer support make trading easy for beginners and professionals alike."
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
