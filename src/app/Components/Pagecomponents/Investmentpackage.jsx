import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import galaxeybg from '../../../../public/images/galaxeybg.webp'

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
        badge: "MOST POPULAR",
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
        buttonText: "Select Premium",
        bg: "from-[#C6E5E2] to-[#B1D6D4]",
    },
];

const PackageCard = ({ pkg }) => {
    return (
        <div>

            <div className="relative max-w-sm w-full">

                {/* Badge for second card */}
                {pkg.badge && (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#C6E5E2] px-6 py-1 rounded-full font-semibold text-sm">
                        {pkg.badge}
                    </div>
                )}

                {/* Card */}
                <div
                    className={`rounded-3xl p-4 bg-gradient-to-b ${pkg.bg} shadow-xl flex flex-col justify-center items-center text-start`}
                >
                    {/* Title */}
                    <h2 className="text-2xl font-semibold text-black mb-2 w-full">
                        {pkg.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-700 mb-6">{pkg.description}</p>

                    {/* Black Price Box */}
                    <div className="bg-black text-white p-6 rounded-2xl mb-6">
                        <div className="flex items-baseline space-x-2 mb-4">
                            <span className="text-5xl font-bold text-[#7EC6FF]">
                                {pkg.price}
                            </span>
                            <span className="text-md opacity-80">/ Investment</span>
                        </div>

                        {/* Features */}
                        <ul className="space-y-3">
                            {pkg.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-[#7EC6FF] text-lg font-bold">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Button */}
                    <button
                        className={` absolute w-[50%] -bottom-[19px]  py-3 rounded-full font-semibold text-black bg-[#C6E5E2] hover:bg-[#b2d4d1] transition`}
                    >
                        {pkg.buttonText}
                    </button>
                </div>
            </div>

        </div>
    );
};

const InvestmentPackages = () => {
    return (
        <div
            className=" max-h-screen bg-cover bg-center px-6 lg:px-16 py-20 mb-[10%]"
            style={{
                backgroundImage: "url('/images/galaxeybg.webp')",
            }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div>
                    <Title
                        title="What We Offer"
                        color={" gradient_text"}
                    />
                </div>
                <div>
                    <Description
                        description="Explore powerful tools, expert insights, and innovative features designed to elevate your trading experience with SST Pro."
                        color="text-white"
                        align="lg:text-end"
                    />
                </div>
            </div>
            {/* Cards */}
            <div className="flex justify-center flex-wrap gap-10 mt-[4%]">
                {packages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </div>
    )
};

export default InvestmentPackages;
