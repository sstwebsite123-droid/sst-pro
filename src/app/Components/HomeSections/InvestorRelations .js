import React from "react";
import {
  FiFileText,
  FiTrendingUp,
  FiShield,
  FiPieChart,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const InvestorRelations = () => {
  return (
    <div className="inn_container min-h-screen bg-black text-white px-6 md:px-16 py-12 flex flex-col lg:flex-row justify-between">
      {/* Left Section */}
      <div className="flex-1 space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold">
            <span className="text-gray-300">Investor</span>{" "}
            <span className="text-sky-400">Relations</span>
          </h1>
          <p className="text-gray-400 mt-3 max-w-md">
            Transparent communication and comprehensive resources for our
            stakeholders
          </p>
        </div>

        {/* Investor Resources */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Investor Resources</h2>
          <div className="space-y-4">
            {[
              {
                title: "Annual Reports",
                desc: "Comprehensive financial statements and performance analysis",
                icon: <FiFileText className="text-sky-400 text-2xl" />,
              },
              {
                title: "Quarterly Updates",
                desc: "Regular insights into our growth and strategic direction",
                icon: <FiTrendingUp className="text-sky-400 text-2xl" />,
              },
              {
                title: "Compliance Documents",
                desc: "Full regulatory disclosures and audit reports",
                icon: <FiShield className="text-sky-400 text-2xl" />,
              },
              {
                title: "Investment Overview",
                desc: "Detailed breakdown of our investment strategies",
                icon: <FiPieChart className="text-sky-400 text-2xl" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 hover:border-sky-400 transition"
              >
                <div className="mr-4 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 mt-16 lg:mt-0 lg:ml-20 space-y-10">
        {/* Assets Box */}
        <div className="self-start bg-gray-900 border border-sky-500 px-6 py-3 rounded-xl inline-block text-center">
          <h3 className="text-2xl font-semibold text-sky-400">$2.5B</h3>
          <p className="text-xs text-gray-400">Assets Under Management</p>
        </div>

        {/* Performance Highlights */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Performance Highlights
          </h2>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 space-y-3">
            {[
              { label: "Revenue Growth (YoY)", value: "+42%" },
              { label: "Client Retention Rate", value: "96%" },
              { label: "Market Share Growth", value: "+18%" },
              { label: "Operating Margin", value: "28%" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between border-b border-gray-700 pb-2 last:border-none"
              >
                <span>{item.label}</span>
                <span className="text-green-400">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-sky-600 rounded-xl p-6 space-y-3">
          <h3 className="font-semibold text-lg">Investor Relations Contact</h3>
          <div className="text-gray-400 text-sm space-y-2">
            <p className="flex items-center gap-2">
              <FiMail className="text-sky-400" /> investors@sst.pro
            </p>
            <p className="flex items-center gap-2">
              <FiPhone className="text-sky-400" /> +1 (555) 123-4567
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin className="text-sky-400" /> 123 Financial District, NY
              10004
            </p>
          </div>

          <button className="mt-4 w-full bg-gradient-to-r from-sky-400 to-blue-600 text-black font-semibold py-2 rounded-full hover:opacity-90 transition">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestorRelations;
