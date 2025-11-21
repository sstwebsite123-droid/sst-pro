import React from 'react'
// import Arrowicon from './Arrowicon'
import Image from 'next/image'
import arrowicon from '../../../../public/images/arrow-up-right.webp'

const Buttondev = ({
  text = 'Request Demo',
  bgColor = 'text-white',
  textColor = "text-black",
  className = "btn-left",
}) => {
  return (
    <div>
      <button className={`rounded-full px-5 py-1 text-[14px] 2xl:text-[23px] md:text-[18px] m-auto flex justify-between items-center   ${bgColor}  ${textColor}  ${className} `}>{text}


        <Image
          src={arrowicon}
          alt="arowicon"
          width={1000}
          height={500}
          className=' max-w-[21px] 2xl:max-w-[46px]  md:max-w-[31px] bg-[#000]  color-white rounded-[50%] flex justify-center items-center ' /></button>

    </div>
  )
}

export default Buttondev
