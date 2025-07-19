"use client";
import { useState, useEffect } from "react";
import Gallery from "@/components/Gallery";

export default function Home() {
  const [videoAvailable, setVideoAvailable] = useState(true);

  useEffect(() => {
    fetch("/videos/tour.mp4", { method: "HEAD" })
      .then((res) => {
        if (!res.ok) setVideoAvailable(false);
      })
      .catch(() => setVideoAvailable(false));
  }, []);

  return (
    <>
      {videoAvailable ? (
        <div className="relative w-screen h-screen overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="relative w-screen h-screen flex justify-center items-center bg-gray-800 text-white text-2xl">
          Image / Video Goes Here
        </div>
      )}

      <div id="gallery" className="flex flex-row bg-gray-100 min-h-screen w-screen pt-20">
        <div className="basis-1/3 flex flex-col items-center">
          
          <h1 className="text-black text-3xl font-bold mb-4">Amenities</h1>
          
          <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-[80%]">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Amenities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Quartz Countertops & Stainless Steel Appliances</li>
              <li>In-Unit Washer & Dryer</li>
              <li>Walk-In Closets</li>
              <li>Smart Home Features (Keyless Entry, Thermostat)</li>
              <li>Resort-Style Swimming Pool</li>
              <li>24-Hour Fitness Center with Yoga Studio</li>
              <li>Private Balconies or Patios</li>
              <li>Co-Working Lounge & Private Offices</li>
              <li>Pet-Friendly Community with Dog Park</li>
              <li>Private offices for rent</li>
              <li>Outdoor Kitchen & Fire Pit Lounge</li>
              <li>Package Lockers with 24/7 Access</li>
              <li>High-Speed Fiber Internet Available</li>
              <li>Resident Events & Community Socials</li>
            </ul>
          </div>

        </div>

        <div className="basis-2/3 flex flex-col items-center">
          <Gallery />
        </div>
      </div>
    </>
  );
}
