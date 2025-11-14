import React from 'react'
import Award1 from '../../../../public/images/Award1.webp'
import Year24 from '../../../../public/images/Year24.webp'
import Year23 from '../../../../public/images/Year23.webp'
import blurbg from '../../../../public/images/blurbg.webp'
import Award2 from '../../../../public/images/Award2.webp'
import Award3 from '../../../../public/images/Award3.webp'
import Award4 from '../../../../public/images/Award4.webp'

import Image from 'next/image'
import Title from '../Uiux/Title'
import Description from '../Uiux/Description'


const Award_card = [
    {
        id: 1,
        img: Award1,
        Awardtitle: "Best Investment Platform",
        Awarddes: "Global Finance Awards",
        Awardbg: blurbg,
        year: Year24
    },
    {
        id: 2,
        img: Award2,
        Awardtitle: "Best Investment Platform",
        Awarddes: "Global Finance Awards",
        Awardbg: blurbg,
        year: Year24
    },
    {
        id: 3,
        img: Award3,
        Awardtitle: "Best Investment Platform",
        Awarddes: "Global Finance Awards",
        Awardbg: blurbg,
        year: Year23
    },
    {
        id: 4,
        img: Award4,
        Awardtitle: "Best Investment Platform",
        Awarddes: "Global Finance Awards",
        Awardbg: blurbg,
        year: Year23
    }
]

const Awardndreco = () => {
    return (
        <div className='custom_container bg-[#0E1F30] rounded-[50px] mt-[7%] ' >
            <div className='grid grid-cols-1 md:grid-cols-1 title_grid p-[5%]'>
                <div>
                    <Title title={'Awards & Recognition'} color={'gradient_text'} />
                </div>

                {/* <div className='flex justify-end text-end '>
                    <Description description={'Recognized globally for excellence in financial <br /> services and innovation'} color={'text-white'} textalign={'text-end'} />
                </div> */}
                <div className='flex justify-end items-end'>
                    <Description description={'Established 2 years ago, SST Pro has been dedicated to helping <br /> clients achieve smarter growth and financial freedom.'} color={'text-white'} textalign={'text-end'} />
                </div>
            </div>
            <div className="awardcard  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-[8%] gap-[11rem] lg:gap-[10px] 2xl:gap-[10px]  mt-[17%] md:m-auto 2xl:mt-0 ">
                {
                    Award_card.map((data, index) => (
                        <div key={index} className="card-container  ">


                            <div className="relative  text-center font-sans text-white">


                                <div className={`top-medal absolute flex justify-center items-center bottom-[33%] `}>
                                    <Image
                                        src={data.img}
                                        alt="Top Medal"
                                        width={1000}
                                        height={500}
                                        className=""
                                    />
                                </div>

                                {/* Background */}
                                <Image
                                    src={data.Awardbg}
                                    alt="Background"
                                    width={1000}
                                    height={500}
                                    className="w-full"
                                    priority
                                />


                                <div className="bootom-ribbon absolute flex justify-center items-center bottom-[-30px] w-full">
                                    {/* Bottom (ribbon/date) */}
                                    <Image
                                        src={data.year}
                                        alt="Bottom Ribbon"
                                        width={1000}
                                        height={500}
                                        className="ribbon  max-w-[218px] m-auto flex justify-center items-center "
                                    />

                                </div>

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
