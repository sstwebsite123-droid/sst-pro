"use client";
import React, { useState, useEffect } from 'react';

const TermsPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if terms are already accepted
    const termsAccepted = localStorage.getItem('termsAccepteds');
    
    if (termsAccepted !== 'true') {
      // Show popup after a short delay
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('termsAccepteds', 'true');
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleReject = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
    
    // Show popup again after 5 seconds
    setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 5000);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Popup */}
      <div className={`fixed bottom-4 right-4 z-50 transform transition-all duration-500 ease-out ${
        isAnimating ? 'translate-y-0 scale-100' : 'translate-y-full scale-95'
      }`}>
        <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-96 max-w-[90vw]">
          {/* Header */}
          <div className="px-4 pt-4 pb-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Terms & Conditions</h3>
                  <p className="text-xs text-gray-400">SST Pro</p>
                </div>
              </div>
              
              {/* Close button */}
              <button
                onClick={handleReject}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 pb-4">
            <div className="bg-gray-800/50 rounded-xl p-3 mb-4">
              <p className="text-gray-300 text-xs leading-relaxed mb-3">
                Welcome to SST Pro. These Terms of Service ("Terms") govern your access to and use of our website www.sst.pro (the "Website") and any related services, platforms, or content (collectively referred to as the "Services").
              </p>
              <p className="text-gray-300 text-xs leading-relaxed">
                By using our Website or Services, you agree to comply with and be bound by these Terms, along with our Privacy Policy, Cookie Policy, and KYC Policy. If you do not agree to these Terms, please do not use our Website or Services.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={handleAccept}
                className="w-full bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Accept Terms & Continue</span>
              </button>

              <button
                onClick={handleReject}
                className="w-full bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>Reject & Close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPopup;
