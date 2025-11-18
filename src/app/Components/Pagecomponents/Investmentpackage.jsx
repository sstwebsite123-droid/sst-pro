import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import galaxeybg from '../../../../public/images/galaxeybg.webp'
import Link from "next/link";
const packages = [
    {
        id: 1,
        title: "Basic Package",
        description: "Perfect for beginners – low entry, steady returns.",
        price: "$100",
        features: [
            "Low entry point",
            "Daily Profit eligibility",
            "Compounding Rate",
        ],
        buttonText: "Select Basic",
        bg: "from-[#C6E5E2] to-[#B1D6D4]",
    },
    {
        id: 2,
        title: "Standard Package",
        description:
            "Designed for consistent investors with moderate capital.",
        price: "$700",
        features: [
            "Consistent capital growth",
            "Enhanced security features",
            "Higher compounding rate",
            "Eligibility for Rewards",
        ],
        buttonText: "Select Standard",
        // badge: "MOST POPULAR",
        bg: "from-[#5AA9FA] to-[#2D8CF4]",
    },
    {
        id: 3,
        title: "Premium Package",
        description: "Maximum profitability for serious traders.",
        price: "$7,500",
        features: [
            "Maximum profitability",
            "Priority support access",
            "Gifts & Bonanzas eligibility",
        ],
        // buttonText: "Select Premium",
        bg: "from-[#C6E5E2] to-[#B1D6D4]",
    },
];

const PackageCard = ({ pkg }) => {
    return (
        <div>

            <div className="relative w-full">
                {/* {pkg.badge && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#C6E5E2] px-3  md:px-4 py-3 rounded-full text-[12px] sm:text-[18px] md:text-[20px]">
                        {pkg.badge}
                    </div>
                )} */}
                <div
                    className={`w-full  max-w-[451px]  mx-auto rounded-3xl p-4 sm:p-6 md:p-8 
    bg-gradient-to-b ${pkg.bg} shadow-xl flex flex-col justify-center items-center`}
                >


                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-2 w-full">
                        {pkg.title}
                    </h2>


                    <p
                        className={`mb-4 sm:mb-6 text-sm sm:text-base md:text-lg 
      ${pkg.id === 2 ? 'text-white' : 'text-black'}`}
                    >
                        {pkg.description}
                    </p>


                    <div className="w-full bg-black text-white p-4 sm:p-6 rounded-2xl">
                        <div className="flex items-baseline space-x-2 mb-4">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7EC6FF]">
                                {pkg.price}
                            </span>
                            <span className="text-lg sm:text-xl md:text-2xl opacity-80">
                                / Investment
                            </span>
                        </div>


                        <ul className="space-y-3">
                            {pkg.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                                    <span className="text-[#7EC6FF] text-xl sm:text-2xl font-bold">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* <Link href={"/#"}>
                        <button
                            className={`
        absolute left-1/2 -translate-x-1/2 w-[70%] sm:w-[60%] md:w-[50%]
        -bottom-[18px] sm:-bottom-[20px] md:-bottom-[22px]
        py-2 sm:py-3 text-base sm:text-lg md:text-[22px] rounded-full transition
        ${pkg.id === 2 ? 'bg-[#499EFB] text-white' : 'bg-[#C6E5E2] hover:bg-[#b2d4d1]'}
      `}
                        >
                            {pkg.buttonText}
                        </button>
                    </Link> */}
                </div>
            </div>



        </div>
    );
};

const InvestmentPackages = () => {
    return (
        <div
            className="  bg-cover bg-center px-6 lg:px-16 py-20 mb-[10%]"
            style={{
                backgroundImage: "url('/images/galaxeybg.webp')",
            }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div>
                    <Title
                        title="Investment Packages"
                        color={" gradient_text"}
                    />
                </div>
                <div>
                    <Description
                        description="Pick the package that fits your goals and start growing your wealth with flexible, tailored options for every investor."
                        color="text-white"
                        align="lg:text-end"
                    />
                </div>
            </div>
            {/* Cards */}
            <div className="grid grid-cols-1 2xl:grid-cols-3 justify-center items-center    gap-12 md:gap-[4rem] mt-[4%]">
                {packages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </div>
    )
};

export default InvestmentPackages;
