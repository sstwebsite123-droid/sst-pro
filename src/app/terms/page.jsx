"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const TermsAndConditions = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if terms are already accepted
    const accepted = localStorage.getItem('termsAccepted');
    if (accepted === 'true') {
      router.push('/');
      return;
    }

    // Show animations
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setShowContent(true), 500);
  }, [router]);

  const handleAccept = () => {
    localStorage.setItem('termsAccepted', 'true');
    setIsAccepted(true);
    
    // Animate out then redirect
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  const handleReject = () => {
    setShowRejectModal(true);
  };

  const closeRejectModal = () => {
    setShowRejectModal(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/realstatevideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="z-10 min-h-screen flex items-start justify-center p-4 pt-30">
        <div className={`max-w-4xl w-full transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Header */}
          <div className="text-center mb-8">
            <div className={`transition-all duration-1000 delay-200 ${
              showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text gradient_text">
                SST PRO
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Terms of Service & Website Use
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Terms Content */}
          <div className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 delay-400 max-h-[70vh] overflow-y-auto ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                GENERAL TERMS OF SERVICE AND WEBSITE USE
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Welcome to SST Pro. These Terms of Service ("Terms") govern your access to and use of our website www.sst.pro (the "Website") and any related services, platforms, or content (collectively referred to as the "Services").
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                By using our Website or Services, you agree to comply with and be bound by these Terms, along with our Privacy Policy, Cookie Policy, and KYC Policy. If you do not agree to these Terms, please do not use our Website or Services.
              </p>

              {/* Complete Terms Content */}
              <div className="space-y-6 mb-8">
                {/* Section 1 */}
                <div className="bg-gray-50 rounded-xl p-2 md:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">1</span>
                    Acceptance of Terms
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    By accessing or using SST Pro's Website or Services, you confirm that you:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Are at least 18 years old or the legal age in your jurisdiction;</li>
                    <li>Have the authority to enter into a binding agreement;</li>
                    <li>Are using the Services for lawful purposes only.</li>
                  </ul>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    If you do not meet these requirements, you must not access or use SST Pro.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="bg-gray-50 rounded-xl p-2 md:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">2</span>
                    Changes to Terms, Plans, and Returns
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>SST Pro reserves the right to revise, modify, or update these Terms, our pricing plans, and any aspect of our Services at any time without prior notice.</li>
                    <li>We also reserve the right to change returns, refunds, or profit distributions for any reason.</li>
                    <li>Continued use of our Website or Services after any changes means you accept and agree to those updates.</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="bg-gray-50 rounded-xl p-2 md:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">3</span>
                    Use of Website and Services
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    You may use the SST Pro Website and Services solely for lawful and legitimate purposes. You agree not to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Use the Website for any unlawful, abusive, or fraudulent activity.</li>
                    <li>Distribute spam, malicious software, or harmful content.</li>
                    <li>Post or share offensive, defamatory, or misleading materials.</li>
                    <li>Copy, modify, or reproduce any part of our Website or content without written consent.</li>
                    <li>Interfere with the proper functioning of the Website or attempt unauthorized access to any part of our system.</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div className="bg-gray-50 rounded-xl p-2 md:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">4</span>
                    Intellectual Property Rights
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    All content, designs, text, graphics, software, databases, trademarks, and materials available on the SST Pro Website are owned by or licensed to SST Pro Ltd, registered in Colorado, United States of America, and the United Kingdom under the Companies Act 2006.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You may not reproduce, distribute, or create derivative works from any part of the Website without prior written permission.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="bg-gray-50 rounded-xl p-2 md:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">5</span>
                    Account Registration and Security
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    To access certain features or Services, you may be required to register an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>Provide accurate and current information;</li>
                    <li>Maintain the confidentiality of your login credentials; and</li>
                    <li>Accept full responsibility for all activities that occur under your account.</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    SST Pro reserves the right to suspend or terminate any account found in violation of these Terms.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="bg-gray-50 rounded-xl p-2 md:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">6</span>
                    Content and Liability Disclaimer
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The information provided on SST Pro's Website and Services is for general informational purposes only. While we strive for accuracy, we do not guarantee that any content is complete, reliable, or up to date.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We do not provide financial, investment, or legal advice. Any reliance on our content is strictly at your own risk. SST Pro shall not be liable for any loss or damage arising from your use of or reliance on our Services.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="bg-gray-50 rounded-xl p-2 md:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">7</span>
                    Returns, Refunds, and Plan Modifications
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    SST Pro offers flexible investment and service plans. However:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>All plans, returns, and offers are subject to change without notice.</li>
                    <li>Returns or profits are not guaranteed and depend on market conditions and service performance.</li>
                    <li>Refunds or cancellations may be considered only under valid conditions and after review by our team.</li>
                    <li>SST Pro reserves the right to reject refund requests if they conflict with our policies or legal obligations.</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div className="bg-gray-50 rounded-xl p-2 md:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">8</span>
                    Privacy and Data Use
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    By using our Services, you agree that SST Pro may collect, use, and process your personal data in accordance with our Privacy Policy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be used for identity verification (KYC), service optimization, and communication purposes. We take your privacy seriously and maintain reasonable measures to protect your data.
                  </p>
                </div>

                {/* Section 9 */}
                <div className="bg-gray-50 rounded-xl p-2 md:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">9</span>
                    Prohibited Content
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    You agree not to post, upload, or distribute content that:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>Contains hate speech, violence, or discrimination;</li>
                    <li>Infringes on copyrights or trademarks;</li>
                    <li>Contains unlawful or pornographic material;</li>
                    <li>Violates another person's privacy or confidentiality.</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Any violation may result in immediate account suspension or legal action.
                  </p>
                </div>

                {/* Section 11 */}
                <div className="bg-gray-50 rounded-xl p-2 md:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">11</span>
                    Disclaimer of Warranties
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    SST Pro services are provided on an "as-is" and "as-available" basis. We do not guarantee uninterrupted service, error-free functionality, or that our Website will be free from viruses or harmful code.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You are responsible for implementing appropriate security measures to protect your devices and data.
                  </p>
                </div>

                {/* Section 12 */}
                <div className="bg-gray-50 rounded-xl p-2 md:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">12</span>
                    Limitation of Liability
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    To the fullest extent permitted by law, SST Pro, its directors, employees, and affiliates shall not be held liable for any:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>Indirect, incidental, or consequential damages;</li>
                    <li>Loss of data, revenue, or profits; or</li>
                    <li>Service interruptions or technical errors.</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Your sole remedy for dissatisfaction with the Website or Services is to discontinue use.
                  </p>
                </div>

                {/* Section 13 */}
                <div className="bg-gray-50 rounded-xl p-2 md:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">13</span>
                    Termination
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    SST Pro may suspend or terminate your access to the Website or Services at any time, without prior notice, if we believe you have violated these Terms or engaged in any activity that may harm our operations or reputation.
                  </p>
                </div>

                {/* Section 14 */}
                <div className="bg-gray-50 rounded-xl p-2 md:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">14</span>
                    Governing Law
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    These Terms are governed by and construed in accordance with the laws of the State of Colorado, United States of America, and applicable regulations of the United Kingdom.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Colorado or London, as applicable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
       

          {/* Footer */}
          <div className={`text-center mt-6 transition-all duration-1000 delay-800 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-white/80 text-sm">
              By continuing, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-indigo-400/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-blue-400/30 rounded-full animate-bounce" style={{animationDelay: '4s'}}></div>

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button
              onClick={closeRejectModal}
              className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="text-center">
              {/* Warning Icon */}
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Terms Not Accepted
              </h3>

              {/* Message */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                You must accept our Terms of Service to access SST Pro services. Without accepting these terms, we cannot provide you with our investment and trading services.
              </p>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-800 mb-3">
                  <strong>Need help?</strong> Contact our support team if you have questions about our terms and conditions.
                </p>
                <div className="flex items-center justify-center">
                  <a 
                    href="tel:+41447078383"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="font-semibold">+41 44 707 8383</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsAndConditions;
