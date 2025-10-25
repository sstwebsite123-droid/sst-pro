"use client";
import React, { useEffect, useRef, useState } from "react";

const MapSection = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [buildingsEnabled, setBuildingsEnabled] = useState(false);

  const GOOGLE_MAPS_APIKEY = "AIzaSyBXNyT9zcGdvhAUCUEYTm6e_qPw26AOPgI";

  // Correct coordinates for 131 Finsbury Pavement
  const OFFICE_COORDS = { lat: 51.520505, lng: -0.087076 };

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_APIKEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      const mapOptions = {
        center: OFFICE_COORDS,
        zoom: 19,
        mapTypeId: "hybrid",
        tilt: 45,
        heading: 0,
        gestureHandling: "greedy",
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: true,
      };

      const mapInstance = new window.google.maps.Map(mapRef.current, mapOptions);
      setMap(mapInstance);

      // ✅ Smaller, clean marker
      const marker = new window.google.maps.Marker({
        position: OFFICE_COORDS,
        map: mapInstance,
        title: "SST Pro Office - 131 Finsbury Pavement",
        icon: {
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
              <svg width="40" height="55" viewBox="0 0 40 55" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C8 0 0 8 0 20c0 15 20 35 20 35s20-20 20-35C40 8 32 0 20 0z" fill="#FF0000" stroke="#FFFFFF" stroke-width="2"/>
                <circle cx="20" cy="20" r="6" fill="#FFFFFF"/>
                <text x="20" y="23" text-anchor="middle" fill="#FF0000" font-size="8" font-weight="bold">SST Pro</text>
              </svg>
            `),
          scaledSize: new window.google.maps.Size(40, 55),
          anchor: new window.google.maps.Point(20, 55),
        },
        animation: window.google.maps.Animation.DROP,
        zIndex: 1000,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="color:#000;padding:6px;">
            <h3 style="margin:0 0 3px 0;color:#3B82F6;">SST Pro Office</h3>
            <p style="margin:0;font-size:12px;">131 Finsbury Pavement, London EC2A 1NT, UK</p>
            <a href="https://maps.app.goo.gl/UAKiY6MTEzaZLU8R6" target="_blank" style="color:#3B82F6;text-decoration:none;font-size:11px;">Open in Google Maps</a>
          </div>
        `,
      });

      marker.addListener("click", () => infoWindow.open(mapInstance, marker));

      // ✅ Smaller circle highlight
      new window.google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.1,
        map: mapInstance,
        center: OFFICE_COORDS,
        radius: 20, // was 35 — smaller now
      });

      // ✅ Compact label
      new window.google.maps.Marker({
        position: { lat: 51.52052, lng: -0.08703 },
        map: mapInstance,
        icon: {
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
              <svg width="130" height="35" viewBox="0 0 130 35" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="130" height="35" fill="rgba(0,0,0,0.7)" stroke="#FF0000" stroke-width="1.5" rx="5"/>
                <text x="65" y="15" text-anchor="middle" fill="#FFFFFF" font-size="11" font-weight="bold">SST Pro OFFICE</text>
                <text x="65" y="28" text-anchor="middle" fill="#FF5555" font-size="9">131 Finsbury Pavement</text>
              </svg>
            `),
          scaledSize: new window.google.maps.Size(130, 35),
          anchor: new window.google.maps.Point(65, 35),
        },
        zIndex: 999,
        optimized: false,
      });

      mapInstance.panTo(OFFICE_COORDS);
    };

    loadGoogleMaps();
  }, []);

  return (
    <div className="py-16 2xl:py-24">
      <div className="inn_container">
        <div className="text-center mb-12">
          <p className="text-white/70 text-lg">
            Visit our office location and get directions
          </p>
          <p className="text-white/70 text-lg gradient_text">
            131 Finsbury Pavement, London EC2A 1NT, UK
          </p>
        </div>

        <div className="relative">
          <div
            ref={mapRef}
            className="w-full h-[400px] 2xl:h-[500px] rounded-2xl overflow-hidden border border-white/20"
            style={{ minHeight: "400px" }}
          >
            {/* Loading placeholder */}
            <div className="w-full h-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-white/70">Loading map...</p>
              </div>
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute top-4 left-4 bg-blue-600 backdrop-blur-sm rounded-lg p-2 border-2 border-white shadow-lg">
            <p className="text-white text-sm mt-1 font-medium">
              131 Finsbury Pavement, London EC2A 1NT, UK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
