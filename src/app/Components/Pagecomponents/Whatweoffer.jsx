import React from 'react'
import Title from '../Uiux/Title'
import Description from '../Uiux/Description'
import Image from "next/image";
import servicecardicon1 from "../../../../public/images/servicecardicon1.webp"
import servicedolloricon from "../../../../public/images/servicedolloricon.webp"
import servicegraphupicon from "../../../../public/images/servicegraphupicon.webp"

const cardsData = [
    {
        id: 1,
        title: "Live Trading Management",
        description:
            "Your funds are handled by a professional trading team that executes real market trades on your behalf.",
        points: [
            "Real-time access to your account.",
            "Daily profit generation through verified trades.",
            "Consistent and sustainable returns.",
            "No bots, no speculation — only strategic trading.",
        ],
        cardicon: servicecardicon1,    // ← FIXED
    },
    {
        id: 1,
        title: "Profit on Investment (POI)",
        description:
            "With SST Pro, your money works for you every single day.",
        points: [
            "Earn daily returns directly from active trading.",
            "Compounded monthly profits for growth.",
            "Flexible plans from small starts.",
            "Real profits — no fake promises.",
        ],
        cardicon: servicedolloricon,    // ← FIXED
    },
    {
        id: 1,
        title: "Performance Income",
        description:
            "In addition to trading profits, SST Pro rewards performance and community growth.",
        points: [
            "Level Income: Earn from your network.",
            "Rank Income: Get milestone bonuses.",
            "Gifts & Bonanzas: Win exclusive rewards.",
        ],
        cardicon: servicegraphupicon,    // ← FIXED
    },

];

const Whatweoffer = () => {
    return (
        <div className='mt-[10%] mb-[10%]'>
            <div className="inn_container ">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
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
                {/* Render Cards Here */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 mb-30">
                    {cardsData.map((card) => (

                        <div
                            key={card.id}
                            className="max-w-sm w-full 2xl:max-w-[563px]  mx-auto bg-[#031425] rounded-[40px] p-8 border shadow-lg"
                        >
                            {/* Icon */}
                            <div className="w-20 h-20 mb-6 flex items-center justify-center bg-white rounded-full">
                                <Image
                                    src={card.cardicon}
                                    alt="Service Icon"
                                    width={1000}
                                    height={500}
                                    className="w-16 h-16 object-contain "
                                />
                            </div>

                            {/* Title */}
                            <h2 className=" gradient_text text-5xl font-semibold text-white mb-4 leading-tight">
                                {card.title}
                            </h2>

                            {/* Description */}
                            <p className="text-base text-gray-300 mb-6">{card.description}</p>

                            {/* Bullet Points */}
                            <ul className="text-lg text-gray-200 space-y-3">
                                {card.points.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-blue-400 font-bold">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    ))}

                </div>

            </div>


        </div>
    )
}

export default Whatweoffer
