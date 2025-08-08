"use client";

import React, { useEffect, useState } from "react";
import TypewriterText from "./TypewriterText";
import Image from "next/image";

import Image_1 from "../../../public/hero-images/material-design-background-2024-09-20-17-05-30-utc.jpg";
import Image_2 from "../../../public/hero-images/woman-undergo-an-interview-with-a-man-2025-06-03-19-55-24-utc.jpg";
import Image_3 from "../../../public/hero-images/friendly-meeting-with-colleagues-discussing-work-o-2025-04-04-23-56-09-utc.jpg";
import Image_4 from "../../../public/hero-images/white-collar-workers-are-working-at-skyscraper-2025-05-20-01-34-51-utc.jpg";
import Image_5 from "../../../public/hero-images/businesswoman-and-man-at-meeting-in-office-2025-04-03-16-27-17-utc.jpg";
import { Button } from "./ui/button";

const backgroundImages = [
  Image_1,
  Image_2,
  Image_3,
  Image_4,
  Image_5,
  // Add more image paths as needed
];

const FADE_DURATION = 2000; // ms
const DISPLAY_DURATION = 6000; // ms

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgroundImages.length);
    }, DISPLAY_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-svh flex items-end py-40 relative overflow-hidden mb-9 lg:mb-18">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full z-0">
        {backgroundImages.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt=""
            fill
            priority
            className={`transition-opacity object-cover brightness-75 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: 0, transitionDuration: `${FADE_DURATION}ms` }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="container space-y-8 max-w-5xl relative z-10">
        <h1 className="text-xl lg:text-5xl font-medium text-white leading-tight font-sans">
          Unlock your financial potential with
          <span className="block bg-white bg-clip-text text-transparent">
            <TypewriterText
              words={[
                "expert guidance",
                "strategic insights",
                "personalised advice",
                "cutting-edge technology",
                "comprehensive planning",
              ]}
              speed={100}
              delay={1000}
              pauseBetweenWords={1500}
              className="font-bold"
            />
          </span>
        </h1>
        <p className="text-white leading-relaxed">
          Comprehensive financial consulting services tailored to your needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">Schedule a free consultation</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
