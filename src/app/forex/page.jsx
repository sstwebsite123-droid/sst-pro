import React from "react";
import Faqs from "../Components/Pagecomponents/Faqs";
import Dynamicbanner from "../Components/Pagecomponents/Dynamicbanner";
import Monthlyreturn from "../Components/Pagecomponents/Monthlyreturn";
import Globlegroth from "../Components/Pagecomponents/Globlegroth";
import Investementhighlights from "../Components/Pagecomponents/Investementhighlights";
import Workcard from "../Components/Pagecomponents/Workcard";
import Riskmanagement from "../Components/Pagecomponents/Riskmanagement";
import Forexbitcoin from "../../../public/images/forexbitcoin.webp";
import monthlygraph from "../../../public/images/monthlygraph.webp";
import forexgloblegraph from "../../../public/images/forexgloblegraph.webp";
import investworkimg1 from "../../../public/images/investworkimg1.webp";
import investworkimg2 from "../../../public/images/investworkimg2.webp";
import investworkimg3 from "../../../public/images/investworkimg3.webp";
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
          "Investing in real estate can be highly rewarding, but it requires careful planning, expert guidance, and strategic decision-making to achieve consistent, secure, and profitable growth."
        }
        card1description={'While real estate offers strong growth potential, market fluctuations and property risks exist. SST Pro employs rigorous property evaluation, diversified portfolios, and capital protection strategies to ensure investment security. '}
        card2description={'Every decision is made with data, expertise, and discipline, leveraging deep market research, emerging trends, and long-term value strategies to maximize returns while safeguarding client investments in every property transaction.'}
      />
      <Faqs faqData={faqData} />
    </div>
  );
};

export default page;
