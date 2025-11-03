import React from "react";

const SmarterGrowth = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="inn_container bg-gradient-to-b from-[#0a1118] to-[#0d1b26] text-white py-12 px-6 md:px-16 lg:px-24 rounded-t-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-12">
        
        {/* Left Section */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold">
            <span className="text-blue-400">Smarter Growth.</span> Financial Freedom.
          </h2>
        </div>

        {/* Middle Columns */}
        <div className="flex flex-col sm:flex-row md:w-2/3 justify-between space-y-8 sm:space-y-0 sm:space-x-10">
          {/* Column 1 */}
          <div className="space-y-3">
            <p className="hover:text-blue-400 cursor-pointer">Strategy Workshops</p>
            <p className="hover:text-blue-400 cursor-pointer">AI Analysis Tools Us</p>
            <p className="hover:text-blue-400 cursor-pointer">Personal Mentorship</p>
            <p className="hover:text-blue-400 cursor-pointer">Portfolio Review</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px bg-gray-700"></div>

          {/* Column 2 */}
          <div className="space-y-3">
            <p className="hover:text-blue-400 cursor-pointer">Training Modules</p>
            <p className="hover:text-blue-400 cursor-pointer">Market Insights</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px bg-gray-700"></div>

          {/* Column 3 */}
          <div className="space-y-3">
            <p>info@sst.pro</p>
            <p>(555) 123-4567</p>
          </div>
        </div>
      </div>

      {/* Line Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© {currentYear} SST Pro. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SmarterGrowth;
