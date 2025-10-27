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
            <div className="bg-gray-800/50 rounded-xl p-3 mb-4 max-h-70 overflow-y-auto">
              <p className="text-gray-300 text-xs leading-relaxed mb-3">
                Welcome to SST Pro. These Terms of Service ("Terms") govern your access to and use of our website www.sst.pro (the "Website") and any related services, platforms, or content (collectively referred to as the "Services").
              </p>
              <p className="text-gray-300 text-xs leading-relaxed mb-4">
                By using our Website or Services, you agree to comply with and be bound by these Terms, along with our Privacy Policy, Cookie Policy, and KYC Policy. If you do not agree to these Terms, please do not use our Website or Services.
              </p>

              {/* Complete Terms Content */}
              <div className="space-y-4">
                {/* Section 1 */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">1</span>
                    Acceptance of Terms
                  </h4>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                    By accessing or using SST Pro's Website or Services, you confirm that you:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 text-xs space-y-1 ml-4">
                    <li>Are at least 18 years old or the legal age in your jurisdiction;</li>
                    <li>Have the authority to enter into a binding agreement;</li>
                    <li>Are using the Services for lawful purposes only.</li>
                  </ul>
                  <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                    If you do not meet these requirements, you must not access or use SST Pro.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">2</span>
                    Changes to Terms, Plans, and Returns
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
                    <li>SST Pro reserves the right to revise, modify, or update these Terms, our pricing plans, and any aspect of our Services at any time without prior notice.</li>
                    <li>We also reserve the right to change returns, refunds, or profit distributions for any reason.</li>
                    <li>Continued use of our Website or Services after any changes means you accept and agree to those updates.</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">3</span>
                    Use of Website and Services
                  </h4>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                    You may use the SST Pro Website and Services solely for lawful and legitimate purposes. You agree not to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
                    <li>Use the Website for any unlawful, abusive, or fraudulent activity.</li>
                    <li>Distribute spam, malicious software, or harmful content.</li>
                    <li>Post or share offensive, defamatory, or misleading materials.</li>
                    <li>Copy, modify, or reproduce any part of our Website or content without written consent.</li>
                    <li>Interfere with the proper functioning of the Website or attempt unauthorized access to any part of our system.</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">4</span>
                    Intellectual Property Rights
                  </h4>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                    All content, designs, text, graphics, software, databases, trademarks, and materials available on the SST Pro Website are owned by or licensed to SST Pro Ltd, registered in Colorado, United States of America, and the United Kingdom under the Companies Act 2006.
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    You may not reproduce, distribute, or create derivative works from any part of the Website without prior written permission.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">5</span>
                    Account Registration and Security
                  </h4>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                    To access certain features or Services, you may be required to register an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 text-xs space-y-1 mb-2">
                    <li>Provide accurate and current information;</li>
                    <li>Maintain the confidentiality of your login credentials; and</li>
                    <li>Accept full responsibility for all activities that occur under your account.</li>
                  </ul>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    SST Pro reserves the right to suspend or terminate any account found in violation of these Terms.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">6</span>
                    Content and Liability Disclaimer
                  </h4>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                    The information provided on SST Pro's Website and Services is for general informational purposes only. While we strive for accuracy, we do not guarantee that any content is complete, reliable, or up to date.
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    We do not provide financial, investment, or legal advice. Any reliance on our content is strictly at your own risk. SST Pro shall not be liable for any loss or damage arising from your use of or reliance on our Services.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">7</span>
                    Returns, Refunds, and Plan Modifications
                  </h4>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                    SST Pro offers flexible investment and service plans. However:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
                    <li>All plans, returns, and offers are subject to change without notice.</li>
                    <li>Returns or profits are not guaranteed and depend on market conditions and service performance.</li>
                    <li>Refunds or cancellations may be considered only under valid conditions and after review by our team.</li>
                    <li>SST Pro reserves the right to reject refund requests if they conflict with our policies or legal obligations.</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">8</span>
                    Privacy and Data Use
                  </h4>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                    By using our Services, you agree that SST Pro may collect, use, and process your personal data in accordance with our Privacy Policy.
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Your information may be used for identity verification (KYC), service optimization, and communication purposes. We take your privacy seriously and maintain reasonable measures to protect your data.
                  </p>
                </div>

                {/* Section 9 */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">9</span>
                    Prohibited Content
                  </h4>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                    You agree not to post, upload, or distribute content that:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 text-xs space-y-1 mb-2">
                    <li>Contains hate speech, violence, or discrimination;</li>
                    <li>Infringes on copyrights or trademarks;</li>
                    <li>Contains unlawful or pornographic material;</li>
                    <li>Violates another person's privacy or confidentiality.</li>
                  </ul>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Any violation may result in immediate account suspension or legal action.
                  </p>
                </div>

                {/* Section 11 */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">11</span>
                    Disclaimer of Warranties
                  </h4>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                    SST Pro services are provided on an "as-is" and "as-available" basis. We do not guarantee uninterrupted service, error-free functionality, or that our Website will be free from viruses or harmful code.
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    You are responsible for implementing appropriate security measures to protect your devices and data.
                  </p>
                </div>

                {/* Section 12 */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">12</span>
                    Limitation of Liability
                  </h4>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                    To the fullest extent permitted by law, SST Pro, its directors, employees, and affiliates shall not be held liable for any:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 text-xs space-y-1 mb-2">
                    <li>Indirect, incidental, or consequential damages;</li>
                    <li>Loss of data, revenue, or profits; or</li>
                    <li>Service interruptions or technical errors.</li>
                  </ul>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Your sole remedy for dissatisfaction with the Website or Services is to discontinue use.
                  </p>
                </div>

                {/* Section 13 */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">13</span>
                    Termination
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    SST Pro may suspend or terminate your access to the Website or Services at any time, without prior notice, if we believe you have violated these Terms or engaged in any activity that may harm our operations or reputation.
                  </p>
                </div>

                {/* Section 14 */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">14</span>
                    Governing Law
                  </h4>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                    These Terms are governed by and construed in accordance with the laws of the State of Colorado, United States of America, and applicable regulations of the United Kingdom.
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Colorado or London, as applicable.
                  </p>
                </div>
              </div>
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
