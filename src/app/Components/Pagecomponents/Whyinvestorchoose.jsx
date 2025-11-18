import React from 'react'
import Title from '../Uiux/Title'
import Description from '../Uiux/Description'
// import centerlogoimg from "../../../../public/images/centerlogoimg.webp"

const Whyinvestorchoose = () => {
    return (

        <div className='bg-[#071a2e] pt-[50px] rounded-[50px]'>

            <div className='inn_container '>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
                    <div>
                        <Title
                            title="Why Investors Choose SST Pro"
                            color={" gradient_text"}
                        />
                    </div>
                    <div>
                        <Description
                            description="Trust, transparency, and honesty drive everything we do."
                            color="text-white"
                            align="lg:text-end"
                        />
                    </div>
                </div>
                {/* <div className="min-h-screen bg-[#071a2e] flex items-center justify-center px-4 relative">

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <img
                            src="/images/Sstcenter.webp"
                            alt="center-graphic"
                            className="w-full lg:block hidden 2xl:max-w-[680px] lg:max-w-[480px]"
                        />
                    </div>

        
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 w-full max-w-7xl pt-20">

           
                        <div className="flex flex-col gap-10">
                            <div className="relative right-[39%] top-[-12%] bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[inset_0_0_30px_rgba(0,120,255,0.2)]">
                                <h2 className="text-[#94C8FF] text-2xl font-semibold">Top-Level Security</h2>
                                <p className="text-gray-300 mt-2">Your funds and data stay fully protected.</p>
                            </div>
                            <div className="relative right-[50%] top-[-15%] bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[inset_0_0_30px_rgba(0,120,255,0.2)]">
                                <h2 className="text-[#94C8FF] text-2xl font-semibold">Scalable Growth</h2>
                                <p className="text-gray-300 mt-2">Grow with daily profits and bonuses.</p>
                            </div>
                            <div className="relative right-[38%] top-[-17%] bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[inset_0_0_30px_rgba(0,120,255,0.2)]">
                                <h2 className="text-[#94C8FF] text-2xl font-semibold">Smart Technology</h2>
                                <p className="text-gray-300 mt-2">Smart automation, real results.</p>
                            </div>
                        </div>

            
                        <div className="flex flex-col gap-10">
                            <div className="relative left-[39%] top-[-12%] bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[inset_0_0_30px_rgba(0,120,255,0.2)]">
                                <h2 className="text-[#94C8FF] text-2xl font-semibold">Real Trades. Real Profits.</h2>
                                <p className="text-gray-300 mt-2">Profits from genuine live market trades.</p>
                            </div>
                            <div className="relative left-[50%] top-[-15%] bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[inset_0_0_30px_rgba(0,120,255,0.2)]">
                                <h2 className="text-[#94C8FF] text-2xl font-semibold">Expert Team</h2>
                                <p className="text-gray-300 mt-2">Run by verified, experienced traders.</p>
                            </div>
                            <div className="relative left-[38%] top-[-17%] bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[inset_0_0_30px_rgba(0,120,255,0.2)]">
                                <h2 className="text-[#94C8FF] text-2xl font-semibold">Transparency</h2>
                                <p className="text-gray-300 mt-2">No hidden fees, just clear reports.</p>
                            </div>
                        </div>

                    </div>
                </div> */}


                <div className="  flex items-center justify-center px-4 pb-[30px] relative">

                    {/* CENTER IMAGE */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <img
                            src="/images/Sstcenter.webp"
                            alt="center-graphic"
                            className="w-full lg:block hidden 2xl:max-w-[680px] lg:max-w-[480px]"
                        />
                    </div>

                    {/* CARDS GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 w-full max-w-7xl pt-20">

                        {/* LEFT CARDS */}
                        <div className="flex flex-col sm:items-start gap-10">

                            <div className="w-full lg:max-w-[230px] xl:max-w-[447px]  2xl:max-w-[547px] relative lg:right-[-10%] 2xl:right-[29%] xl:right-[-1%] lg:top-[-5%] xl:top-[-3%] 2xl:top-[-12%]
                             bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[inset_0_0_30px_rgba(0,120,255,0.2)]">
                                <h2 className="text-[#94C8FF] lg:text-[14px] 2xl:text-2xl font-semibold">Top-Level Security</h2>
                                <p className="text-gray-300 mt-2">Your funds and data stay fully protected.</p>
                            </div>

                            <div className="w-full lg:max-w-[230px] xl:max-w-[447px]  2xl:max-w-[547px] relative lg:right-[1%] 2xl:right-[41%] lg:top-[-11%] 2xl:top-[-15%] bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[inset_0_0_30px_rgba(0,120,255,0.2)]">
                                <h2 className="text-[#94C8FF] lg:text-[14px]  2xl:text-2xl font-semibold">Scalable Growth</h2>
                                <p className="text-gray-300 mt-2">Grow with daily profits and bonuses.</p>
                            </div>

                            <div className=" w-full lg:max-w-[230px] xl:max-w-[447px]  2xl:max-w-[547px] relative xl:right-[-1%] lg:right-[-11%] 2xl:right-[29%] lg:top-[-18%] 2xl:top-[-17%] bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[inset_0_0_30px_rgba(0,120,255,0.2)]">
                                <h2 className="text-[#94C8FF] lg:text-[14px]  2xl:text-2xl font-semibold">Smart Technology</h2>
                                <p className="text-gray-300 mt-2">Smart automation, real results.</p>
                            </div>

                        </div>

                        {/* RIGHT CARDS */}
                        <div className="flex flex-col gap-10  sm:items-end">

                            <div className=" w-full lg:max-w-[230px] xl:max-w-[447px] 2xl:max-w-[547px] relative lg:left-[-10%] 2xl:left-[29%] lg:top-[-6%] 2xl:top-[-12%]  xl:left-[-1%] xl:top-[-3%]bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[inset_0_0_30px_rgba(0,120,255,0.2)]">
                                <h2 className="text-[#94C8FF] lg:text-[14px] 2xl:text-2xl font-semibold">Real Trades. Real Profits.</h2>
                                <p className="text-gray-300 mt-2">Profits from genuine live market trades.</p>
                            </div>

                            <div className=" w-full lg:max-w-[230px] xl:max-w-[447px] 2xl:max-w-[547px] relative lg:left-[1%] 2xl:left-[40%] lg:top-[-12%] 2xl:top-[-15%] bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[inset_0_0_30px_rgba(0,120,255,0.2)]">
                                <h2 className="text-[#94C8FF] lg:text-[14px] 2xl:text-2xl font-semibold">Expert Team</h2>
                                <p className="text-gray-300 mt-2">Run by verified, experienced traders.</p>
                            </div>

                            <div className=" w-full lg:max-w-[230px] xl:max-w-[447px] 2xl:max-w-[547px] relative xl:left-[-1%] lg:left-[-10%] 2xl:left-[29%] lg:top-[-19%] 2xl:top-[-17%] bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[inset_0_0_30px_rgba(0,120,255,0.2)]">
                                <h2 className="text-[#94C8FF] lg:text-[14px] 2xl:text-2xl font-semibold">Transparency</h2>
                                <p className="text-gray-300 mt-2">No hidden fees, just clear reports.</p>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Whyinvestorchoose
