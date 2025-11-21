import React from "react";
import Faqs from "../Components/Pagecomponents/Faqs";
import Dynamicbanner from "../Components/Pagecomponents/Dynamicbanner";
import Monthlyreturn from "../Components/Pagecomponents/Monthlyreturn";
import Globlegroth from "../Components/Pagecomponents/Globlegroth";
import Investementhighlights from "../Components/Pagecomponents/Investementhighlights";
import Workcard from "../Components/Pagecomponents/Workcard";
import Riskmanagement from "../Components/Pagecomponents/Riskmanagement";
import realestateleft from "../../../public/images/realestateleft.webp";
import realestategraph from "../../../public/images/realestategraph.webp";
import realestateglobleposter from "../../../public/images/realestateglobleposter.webp";
import investworkimg1 from "../../../public/images/investworkimg1.webp";
import investworkimg2 from "../../../public/images/investworkimg2.webp";
import investworkimg3 from "../../../public/images/investworkimg3.webp";
import sleekglass from '../../../public/images/sleekglass.webp'
const faqData = [

  {
    question: "What returns can I expect from SST Pro’s real estate investment program?",
    answer:
      "SST Pro offers investors 20%–30% annual return potential, generated through expert property selection, market analysis, and strategically managed real estate trading opportunities."
  },
  {
    question: "Is real estate investment with SST Pro secure?",
    answer:
      "Yes. SST Pro uses strict risk-management practices, diversified property portfolios, detailed due diligence, and long-term valuation strategies to ensure safe, stable, and transparent real estate investments."
  },
  {
    question: "How does SST Pro manage investor funds in real estate trading?",
    answer:
      "The minimum duration for SST Pro’s real estate investment program is 1 year, allowing enough time for strategic property growth and secure annual profit distribution."
  },
  {
    question: "Who can invest in SST Pro’s real estate program?",
    answer:
      "Both individual and institutional investors from eligible regions can participate, accessing professionally managed real estate opportunities in the USA and United Kingdom."
  },
  {
    question: "Is SST Pro legally registered and regulated for real estate investments?",
    answer:
      "Yes. SST Pro Ltd is a certified Colorado-registered corporation (Entity ID: 20258098855) and a licensed UK investment company, adhering to strict AML and KYC regulations."
  }
];
const cards = [
  {
    icon: investworkimg1,
    title: "Professionally Managed Investment Pool",
    desc:
      "When you invest in SST Pro’s Real Estate program, your funds are added to a professionally managed property investment pool. Our team of experienced analysts and real estate traders carefully selects properties with strong growth and rental potential."
  },
  {
    icon: investworkimg2,
    title: "Market Monitoring and Strategy",
    desc:
      "Our experts conduct thorough research and due diligence on market trends, property valuations, and emerging locations. Using data-backed insights and multi-asset diversification, we maximize returns while effectively managing risks."
  },
  {
    icon: investworkimg3,
    title: "Annual Profit Distribution",
    desc:
      "Investors receive annual profit distributions, allowing them to track performance and reinvest for compounded wealth. At SST Pro, transparency, consistency, and investor confidence remain at the heart of everything we do."
  }
];
const page = () => {
  return (
    <div>
      <Dynamicbanner
        banner_title={"Real Estate Trading <br/> Investment with SST Pro"}
        bannerimg={sleekglass}
      />
      <Monthlyreturn
        title={
          'Annual returns up to <br/><span class="gradient_text">20%-30%</span>'
        }
        description={
          "SST Pro Ltd guides clients in real estate investing with smart strategies, clear operations, and reliable support, helping them grow their portfolio while managing risks effectively"
        }
        left_banner={realestateleft}
        right_banner={realestategraph}
        monthly_revenu="$554.70"
        monthly_increase="+1.63%"
        card_description={
          "At SST Pro Ltd, we make real estate investing simple, smart, and rewarding. Offering investors in the USA and the United Kingdom the opportunity to earn consistent annual returns from carefully selected real estate projects."
        }
      />
      <Globlegroth
        title={
          'Your Gateway to Profitable <br/><span class="gradient_text">Real Estate Trading</span>'
        }
        description={
          "Investing in real estate requires knowledge, strategy, and trusted guidance. SST Pro provides all three for confident, rewarding investments."
        }
        videoSrc='/video/realstatevideo.mp4'
        right_description={`The real estate market is one of the most stable and lucrative asset classes, offering opportunities across residential, commercial, and mixed-use properties. <br/>
        At SST Pro, we transform market insights into profitable ventures. Through expert analysis, strategic property selection, and professional fund management, we offer investors annual returns  delivered securely and transparently.
        `}
      />
      <Investementhighlights
        title={
          '<span class="gradient_text">SST Pro Real Estate </span><br/> Investment Highlights'
        }
        description={
          "Explore our track record in real estate investing proven performance, consistent growth, and transparent property management you can trust."
        }
        cardtitle1="20%-30%"
        carddes1={"Annual Return Potential"}
        cardtitle2={"1 Year"}
        carddes2={"Minimum Investment Tenure"}
        cardtitle3={"Markets Covered"}
        carddes3={"Residential, Commercial & Mixed-Use Properties"}
        cardtitle4={"Eligible Investors"}
        carddes4={"Individual & Institutional Investors"}
        cardtitle5={"Global Operational Presence"}
        carddes5={"United States & United Kingdom"}
      />
      <Workcard
        title={
          'How <span class="gradient_text">Real Estate Investment</span> Works with SST Pro?'
        }
        description={
          "Discover how real estate investment works with SST Pro, turning market insights into strategic, profitable, and secure opportunities."
        }
        cardata={cards}
      />
      <Riskmanagement
        title={
          'Our  <span class="gradient_text">Risk Management <br/> Philosophy</span>'
        }
        description={
          "Investing in real estate can be highly rewarding, but it requires careful planning, expert guidance, and strategic decision-making to achieve consistent, secure, and profitable growth."
        }
        card1description={
          "While real estate offers strong growth potential, market fluctuations and property risks exist. SST Pro employs rigorous property evaluation, diversified portfolios, and capital protection strategies to ensure investment security"
        }
        card2description={
          "Every decision is made with data, expertise, and discipline, leveraging deep market research, emerging trends, and long-term value strategies to maximize returns while safeguarding client"
        }
      />
      <Faqs faqData={faqData} />
    </div>
  );
};

export default page;
