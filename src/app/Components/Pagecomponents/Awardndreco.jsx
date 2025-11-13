import React from 'react'
import Award1 from '../../../../public/images/Award1.webp'
import Year24 from '../../../../public/images/Year24.webp'
import Year23 from '../../../../public/images/Year23.webp'
import Awardcardbg from '../../../../public/Images/Awardcardbg.webp'
import Image from 'next/image'
import Title from '../Uiux/Title'
import Description from '../Uiux/Description'


const Award_card = [
    {
        id: 1,
        img: Award1,
        Awardtitle: "Best Investment Platform",
        Awarddes: "Global Finance Awards",
        Awardbg: Awardcardbg,
        year: Year24
    },
    {
        id: 2,
        img: Award1,
        Awardtitle: "Best Investment Platform",
        Awarddes: "Global Finance Awards",
        Awardbg: Awardcardbg,
        year: Year24
    },
    {
        id: 3,
        img: Award1,
        Awardtitle: "Best Investment Platform",
        Awarddes: "Global Finance Awards",
        Awardbg: Awardcardbg,
        year: Year23
    },
    {
        id: 4,
        img: Award1,
        Awardtitle: "Best Investment Platform",
        Awarddes: "Global Finance Awards",
        Awardbg: Awardcardbg,
        year: Year23
    }
]

const Awardndreco = () => {
    return (
        <div className='custom_container bg-[#0E1F30] rounded-[50px] mt-[7%] ' >
            <div className='grid grid-cols-2 title_grid p-[5%]'>
                <div>
                    <Title title={'Awards & Recognition'} color={'gradient_text'} />
                </div>

                <div className='flex justify-end items-center'>
                    <Description description={'Recognized globally for excellence in financial <br services and innovation'} color={'text-white'} textalign={'text-end'} />
                </div>
            </div>
            <div className="awardcard  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-[8%] gap-[120px] lg:gap-[10px] 2xl:gap-[10px]  mt-[35%] md:m-auto 2xl:mt-0 ">
                {
                    Award_card.map((data, index) => (
                        <div key={index} className="card-container  ">


                            <div className="relative  text-center font-sans text-white">
                                {/* Top (medal) */}
                                <Image
                                    src={data.img}
                                    alt="Top Medal"
                                    width={1000}
                                    height={500}
                                    className=" absolute bottom-[45%] 2xl:bottom-[40%] left-[0px] 2xl:left-[0%]     "
                                />
                                {/* Background */}
                                <Image
                                    src={data.Awardbg}
                                    alt="Background"
                                    width={1000}
                                    height={500}
                                    className="w-full"
                                    priority
                                />



                                {/* Bottom (ribbon/date) */}
                                <Image
                                    src={data.year}
                                    alt="Bottom Ribbon"
                                    width={1000}
                                    height={500}
                                    className=" relative  bottom-[27px] left-[18%] 2xl:left-[34%] max-w-[180px] md:max-w-[120px] 2xl:max-w-[160px] 2xl:bottom-[25px] "
                                />

                                {/* Text Overlay */}
                                <div className="absolute w-full  top-[50%]    ">
                                    <h2 className="2xl:text-[30px] font-semibold">{data.Awardtitle}</h2>
                                    <p className="text-gray-300 w-max m-auto  bg-[#0000001C] text-sm mt-1">{data.Awarddes}</p>

                                </div>
                            </div>

                        </div>
                    ))


                }
            </div>

        </div>
    )
}

export default Awardndreco
