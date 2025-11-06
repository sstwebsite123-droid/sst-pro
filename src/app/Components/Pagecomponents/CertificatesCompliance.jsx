"use client"
import React, { useState } from "react";

const CertificatesCompliance = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "US Regulatory Compliance",
      description: "Authorized operations in United States",
      image: "/certificate/certificate1.png",
      alt: "US Compliance Certificate"
    },
    {
      id: 2,
      title: "UK Regulatory Compliance", 
      description: "Authorized operations in United Kingdom",
      image: "/certificate/certificate2.JPG",
      alt: "UK Compliance Certificate"
    }
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <section className="py-8 lg:py-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Certificates & Regulatory Compliance
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Our Global Certifications
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              SST Pro Ltd operates with full legal authorization in both the United States and the United Kingdom, maintaining strict adherence to international financial and compliance standards.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {certificates.map((certificate) => (
              <div 
                key={certificate.id}
                className="group cursor-pointer"
                onClick={() => openModal(certificate)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  {/* Certificate Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={certificate.image}
                      alt={certificate.alt}
                      className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Certificate Info */}
                  <div className="p-6">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {certificate.title}
                    </h4>
                    <p className="text-gray-600 text-lg">
                      {certificate.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 font-semibold">
                      <span>Click to view full certificate</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Certificate Viewing */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Certificate Image */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src={selectedCertificate.image}
                alt={selectedCertificate.alt}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              
              {/* Certificate Info */}
              <div className="p-6 bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedCertificate.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {selectedCertificate.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatesCompliance;

