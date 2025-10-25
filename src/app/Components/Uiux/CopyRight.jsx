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
            All investment products and services accessible through the website <Link href="https://www.sstpro.com" target="_blank" className="text-blue-400 hover:text-blue-300 underline">www.sstpro.com</Link> are provided by <strong className="gradient_text">SST Pro Ltd</strong>, a corporation registered under the law of Colorado, USA, with its principal office located in Denver, Colorado.
          </p>
          
          <p>
            <strong className="gradient_text">SST Pro Ltd</strong>, duly certified by the Secretary of State of Colorado, operates in full compliance with applicable US financial regulations and reporting standards.
          </p>
          
          <p>
            Entity Identification Number: <strong className="gradient_text">20258098855</strong><br />
            Confirmation Number: <strong className="gradient_text">17752920</strong>
          </p>
          
          <p>
            <strong className="gradient_text">SST Pro Ltd</strong> is also a UK-registered investment company, authorized to conduct international investment operations in the United Kingdom and the United States.
          </p>
          
          <p>
            <strong className="gradient_text">SST Pro Ltd</strong> adheres to strict AML (Anti-Money Laundering) and KYC (Know Your Customer) guidelines, ensuring transparency, integrity, and investor protection across all transactions.
          </p>
          
          <p>
            <strong>Disclaimer:</strong> <strong className="gradient_text">SST Pro Ltd</strong> does not offer investment or financial services to residents of jurisdictions where such activities are restricted or prohibited by law, including but not limited to: North Korea, Cuba, Syria Iran, Myanmar, Zimbabwe, Israel, the Islamic Republic of Iran, Libya, Mali, Nicaragua, Central African Republic, and other sanctioned regions.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CopyRight