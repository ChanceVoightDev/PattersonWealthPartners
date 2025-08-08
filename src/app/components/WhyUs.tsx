import Image from "next/image";
import React from "react";

import Graphic from "../../../public/graphics/isometric-businessman-with-all-time-high-graph-on-smartphone.png";
import { Button } from "./ui/button";

type WhyUsProps = {
  title: string;
  paragraphs: string[];
};

const WhyUs = ({ title, paragraphs }: WhyUsProps) => {
  return (
    <section className="section container">
      <div className="relative flex flex-col lg:flex-row gap-10">
        <div className="relative space-y-4">
          <h2 className="header mb-10 w-full lg:w-[90%] xl:w-[75%]">{title}</h2>

          <div className="space-y-4 lg:w-[40%]">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <Button variant="link" size="none" className="text-dark">
            About us
          </Button>

          <div className="relative lg:absolute h-[300px] sm:h-[600px] xl:h-[700px] w-full sm:w-[350px] xl:w-[450px] md:-top-10 lg:top-20 xl:top-0 lg:right-[8%] xl:right-10">
            <Image
              src={Graphic}
              alt="Graphic"
              fill
              sizes="300px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative md:absolute lg:relative md:left-[55%] lg:left-0  md:top-80 lg:top-10">
          <div className="space-y-2 pb-10 border-b-1 border-gray-200 lg:pl-15">
            <h2 className="header">10</h2>
            <h3 className="font-sans whitespace-nowrap">YEARS OF EXPERIENCE</h3>
            <p className="text-gray-400 text-sm">
              A decade of proven financial expertise.
            </p>
          </div>

          <div className="space-y-2 py-10 lg:pr-15">
            <h2 className="header">110</h2>
            <h3 className="font-sans whitespace-nowrap">CUSTOMERS</h3>
            <p className="text-gray-400 text-sm">
              Serving a thriving community of satisfied customers.
            </p>
          </div>

          <div className="space-y-2 py-10 border-t-1 border-gray-200 lg:-ml-15 lg:pr-15">
            <h2 className="header">20+</h2>
            <h3 className="font-sans whitespace-nowrap">CUSTOMERS</h3>
            <p className="text-gray-400 text-sm">
              Serving a thriving community of satisfied customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
