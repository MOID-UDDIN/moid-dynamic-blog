"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="relative bg-gradient-to-l from-blue-600 to-blue-900 py-20 font-sans">
        <div className="absolute inset-0">
          <Image
            src="/bg-image.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={75}
            className="opacity-40"
          />
        </div>

        <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 lg:px-16 z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 hover:text-blue-200 hover:underline transition-all duration-300">
            My Blog Website
          </h1>
          <div></div>
        </div>
      </div>
    </div>
  );
}
