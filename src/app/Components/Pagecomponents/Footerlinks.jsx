import Link from 'next/link'
import React from 'react'

const Fotterlinks = ({title,linklist,border}) => {
  return (
    <div className={`w-[85%] md:w-max md:m-auto  ${border ? 'border-none' : '' } `}>
      <p className='text-base md:text-xl 2xl:text-2xl font-semibold w-max gradient_text'>
       {title}
      </p> 
      <ul className='font_secondary pt-4 lg:pt-6 flex flex-col gap-4 2xl:gap-6'>
        {
          linklist.map((data,index)=>(
            <Link href={data.pagelink} key={index}>
              <li className='text-[14px] md:text-[15px] 2xl:text-xl font_light font-light relative hover:after:bg-[var(--secondary)] hover:before:bg-[var(--secondary)] text-white w-max move_horizontal hover:text-[var(--secondary)] transition-all duration-300'>{data.pagename}</li>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

export default Fotterlinks
