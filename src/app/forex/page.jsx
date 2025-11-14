import React from "react";
import Faqs from "../Components/Pagecomponents/Faqs";
import Dynamicbanner from "../Components/Pagecomponents/Dynamicbanner";
import Monthlyreturn from "../Components/Pagecomponents/Monthlyreturn";
import Globlegroth from "../Components/Pagecomponents/Globlegroth";
import Investementhighlights from "../Components/Pagecomponents/Investementhighlights";
import Workcard from "../Components/Pagecomponents/Workcard";
import Riskmanagement from "../Components/Pagecomponents/Riskmanagement";
import Forexbitcoin from "../../../public/images/forexbitcoin.webp"
import monthlygraph from "../../../public/images/monthlygraph.webp";
import forexgloblegraph from "../../../public/images/forexgloblegraph.webp";
import investworkimg1 from "../../../public/images/investworkimg1.webp";
import investworkimg2 from "../../../public/images/investworkimg2.webp";
import investworkimg3 from "../../../public/images/investworkimg3.webp";
import forexbg from "../../../public/images/forexbg.webp";
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
const cards = [
  {
    icon: investworkimg1,
    title: "Professionally Managed Investment Pool",
    desc:
      "We’re structured as an SST Pro Forex program, where your funds are added to a professionally managed investment pool. Our models are backed by research and data."
  },
  {
    icon: investworkimg2,
    title: "Advanced Market Monitoring and Strategy",
    desc:
      "Our systems analyze global currency markets 24/7, guiding dynamic diversification with risk-managed decision-making."
  },
  {
    icon: investworkimg3,
    title: "Monthly Profit Distribution",
    desc:
      "Investors receive monthly profit distributions, driven by our core values of consistency, risk control, and transparency."
  }
];
const page = () => {
  return (
    <div>
      <Dynamicbanner
        banner_title={"Forex Trading Investment <br/> with SST Pro"}
        bannerimg={forexbg}
      />
      <Monthlyreturn
        title={
          'Monthly returns between <br/><span class="gradient_text">10% and 12%</span>'
        }
        description={
          "Stay ahead with real-time market insights and <br/> trending stocks curated for you."
        }
        left_banner={Forexbitcoin}
        right_banner={monthlygraph}
        monthly_revenu="$254.70"
        monthly_increase="+1.43%"
        card_description={
          'At SST Pro Ltd, we make Forex investing simple, smart, and sustainable. Offering investors in the <br/> USA and the United Kingdom the opportunity to earn consistent monthly returns from the <br/> world’s largest financial market.'
        }
      />
      <Globlegroth
        title={
          'Your Gateway to <br/><span class="gradient_text">Global Forex Growth</span>'
        }
        description={
          "With over 1,500+ active investors and a proven 98% client satisfaction rate, SST Pro has successfully managed millions in assets."
        }
        videoSrc='/video/graphvideo.mp4'
        right_description={
          "The Foreign Exchange (Forex) market processes more than $7 trillion in daily transactions, making it the most liquid and dynamic market in the world. At SST Pro, we transform this volatility into opportunity. Through data-backed strategies, algorithmic models, and professional fund management, we offer our investors monthly returns between 10% and 12% securely and transparently."
        }
      />
      <Investementhighlights
        title={
          '<span class="gradient_text">SST Pro Forex </span><br/> Investment Highlights'
        }
        description={
          "Check out our achievements to trust our expertise proven performance, reliable growth, transparent management."
        }
        cardtitle1="10%-12%"
        carddes1={"Average Monthly Return"}
        cardtitle2={"1 Month"}
        carddes2={"Minimum Investment Tenure"}
        cardtitle3={"Markets Covered"}
        carddes3={"USD, GBP, EUR, JPY & more"}
        cardtitle4={"Eligible Investors"}
        carddes4={"Individual & Institutional Investors"}
        cardtitle5={"Global Operational Presence"}
        carddes5={"United States & United Kingdom"}
      />
      <Workcard
        title={
          'How Forex Investment <br/>Works with <span class="gradient_text">SST Pro?</span>'
        }
        description={
          "Check how your trading with us works — from account setup to managed strategies, we handle everything to ensure consistent, secure Forex growth."
        }
        cardata={cards}
      />
      <Riskmanagement
        title={
          'Our <span class="gradient_text">Risk Management <br/> Philosophy</span>'
        }
        description={
          "Effective risk management is essential to minimize losses early, protect investments, and ensure consistent, sustainable trading growth."
        }
        card1description={'While Forex markets offer significant potential, they also carry risk. That’s why at SST Pro, we employ advanced risk control systems, trade caps, and capital protection strategies.'}
        card2description={'Every decision is guided by data, experience, and discipline ensuring your investment remains secure even in volatile conditions.'}
      />
      <Faqs faqData={faqData} />
    </div>
  );
};

export default page;
