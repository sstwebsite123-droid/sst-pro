import React from "react";

const CEOMessage = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Message from the CEO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Mr. Luke Nathan Ross Alder
              </h3>
              <p className="text-blue-600 font-medium">Chief Executive Officer</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6 text-lg md:text-xl">
                At SST Pro, our mission has always been to empower investors through trust, transparency, and innovation. As CEO, I believe that financial growth should be both accessible and secure, built on data, technology, and ethical business values.
              </p>
              
              <p className="text-lg md:text-xl">
                Since our establishment, SST Pro has focused on creating global investment opportunities that prioritize long-term stability over short-term gains. Every strategy we design, every partnership we build, and every innovation we implement is driven by one goal to help investors achieve smarter, safer, and sustainable growth.
              </p>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <p className="font-semibold text-gray-900">Luke Nathan Ross Alder</p>
                  <p className="text-sm text-gray-600">CEO, SST Pro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
