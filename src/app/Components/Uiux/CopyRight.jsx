import React from 'react'
import Link from 'next/link'

const CopyRight = () => {
  return (
    <div className="relative">
    {/* Dark blue background with diagonal stripes */}
    <div 
      className="relative overflow-hidden"
    >
      {/* Content container */}
      <div className="relative z-10 px-6 py-12 md:px-12 lg:px-24">
        {/* Separator line */}
        <div className=" border-t-[1px] py-2 border-solid border-[#ffffff57]"></div>
        
        {/* Copyright line */}
        <p className="text-white text-lg md:text-xl font-medium mb-6 gradient_text">
          Copyright © 2025 SST Pro Ltd
        </p>
        
        {/* Legal content */}
        <div className="space-y-4 text-white text-sm md:text-base leading-relaxed">
          <p>
            All investment products and services accessible through the website <Link href="https://www.sst.pro/" target="_blank" className="text-blue-400 hover:text-blue-300 underline">https://www.sst.pro/</Link> are provided by <strong className="gradient_text">SST Pro Ltd</strong>, a corporation registered under the laws of the State of Colorado, United States of America, and in the United Kingdom under the Companies Act 2006 of England and Wales.
          </p>
          
          <p>
            <strong className="gradient_text">SST Pro Ltd</strong>, duly certified by the Secretary of State of Colorado under Entity Identification Number <strong className="gradient_text">20258098855</strong> and Confirmation Number <strong className="gradient_text">17752920</strong>, operates in full compliance with applicable United States financial regulations and reporting standards.
          </p>
          
          <p>
            <strong className="gradient_text">SST Pro Ltd</strong>, incorporated under the Companies Act 2006 in England and Wales (Company Number: <strong className="gradient_text">16774240</strong>), is registered as a Private Limited Company.
          </p>
          
          <p>
            <strong className="gradient_text">SST Pro Ltd</strong> adheres to strict AML (Anti-Money Laundering) and KYC (Know Your Customer) guidelines, ensuring transparency, integrity, and investor protection across all transactions.
          </p>
          
          <p>
            <strong className="gradient_text">SST Pro Ltd</strong> does not offer investment or financial services to residents of certain jurisdictions, including, but not limited to: Cuba, North Korea, Syria, Sudan, Zimbabwe, Israel, the Islamic Republic of Iran, Myanmar, Libya, Mali, Nicaragua, and the Central African Republic.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CopyRight