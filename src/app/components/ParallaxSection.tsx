"use client";

/* eslint-disable @next/next/no-img-element */
import { Button, ButtonProps } from "./ui/button";
import clsx from "clsx";
import React from "react";
import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import IMAGE_1 from "../../../public/parallax-images/business-meeting-and-teamwork-by-business-people-i-2025-03-15-06-45-19-utc.jpg";
import IMAGE_2 from "../../../public/parallax-images/business-people-planning-strategy-2025-03-13-04-57-19-utc.jpg";
import IMAGE_3 from "../../../public/parallax-images/three-business-people-in-light-office-2025-04-04-12-41-31-utc.jpg";
import Slash from "./ui/Slash";
import ScrollParallax from "./ScrollParallax";

type ImageProps = {
  src: string | StaticImageData;
  alt?: string;
};

type Anchor = {
  url: string;
  number: string;
  title: string;
};

type Feature = {
  anchor: Anchor;
  tagline: string;
  heading: string;
  description: string;
  bgColor: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

type Props = {
  features: Feature[];
};

export type ParallaxSectionProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ParallaxSection = (props: ParallaxSectionProps) => {
  const { features } = {
    ...ParallaxSectionDefaults,
    ...props,
  };
  return (
    <section className="section max-w-7xl mx-auto space-y-4 md:space-y-10">
      <div className="container">
        <p className="tagline">Services</p>
        <div className="flex flex-col md:flex-row md:items-end gap-6">
          <h2 className="header">To meet your needs</h2>
          <Slash color="lightGray" className="hidden md:block" />
          <span>CFO, Tax, Payroll, Accounting and Bookkeeping Services</span>
        </div>
      </div>

      <div className="sticky top-0">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="relative -top-32 h-0" />
            <div
              className={clsx(
                "sticky lg:pb-0",
                { "top-7 mb-32": index === 0 },
                { "top-28 -mt-16 mb-16": index === 1 },
                { "top-49 ": index === 2 }
              )}
            >
              <FeatureCard {...feature} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

const FeatureCard = (feature: Feature) => {
  return (
    <section
      style={{ backgroundColor: feature.bgColor }}
      className="font-sans bg-[#e8e9db] pb-16 h-[95vh]"
    >
      <p className="text-center font-sans py-8">
        {feature.anchor.number} {feature.anchor.title}
      </p>
      <div className="relative container flex h-full gap-10 items-center">
        {/* Left: Content */}
        <div className="relative sm:overflow-hidden sm:py-10">
          <ScrollParallax>
            <h2 className="header-bold-large text-primary/80 sm:w-[70%]">
              {feature.heading}
            </h2>
          </ScrollParallax>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 sm:w-[80%]">
            <div className="bg-white px-6 py-6 lg:py-12 border border-stone-50">
              <div className="mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 17h2v-7H3v7zm4 0h2V3H7v14zm4 0h2v-4h-2v4zm4 0h2v-9h-2v9z" />
                </svg>
              </div>
              <h3 className="font-sans text-lg font-semibold mb-2">random</h3>
              <p className="text-sm text-gray-600">
                Tailored investment strategies to help clients grow their wealth
                and achieve their financial goals.
              </p>
            </div>
            <div className="bg-white p-6 border border-stone-50">
              <div className="mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 19H5V6H4v13a1 1 0 001 1h14v-1zM7 10h2v5H7v-5zm4 0h2v5h-2v-5zm4 0h2v5h-2v-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Retirement planning
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive retirement plans designed to secure a comfortable
                and worry-free future.
              </p>
            </div>
            <div className="bg-white p-6 border border-stone-50">
              <div className="mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 10c0-4.418-3.582-8-8-8S2 5.582 2 10s3.582 8 8 8 8-3.582 8-8zm-8 6a6 6 0 100-12 6 6 0 000 12z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Education planning</h3>
              <p className="text-sm text-gray-600">
                Guidance on saving and investing for educational expenses, such
                as college tuition.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden sm:block absolute w-[350px] h-[450px] top-0 right-0">
            <div className="absolute inset-0 clip-polygon overflow-hidden">
              <Image
                src={feature.image.src}
                alt={feature.image.alt || "Financial planner"}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <style jsx>{`
            .clip-polygon {
              clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%);
            }

            @media (max-width: 450px) {
              .clip-polygon {
                clip-path: none;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export const ParallaxSectionDefaults: Props = {
  features: [
    {
      anchor: {
        url: "#",
        number: "01",
        title: "Feature one",
      },
      tagline: "Tagline",
      heading: "Financial planning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "default",
          size: "default",
          iconRight: <ChevronRight />,
        },
      ],
      image: {
        src: IMAGE_1,
        alt: "Relume placeholder image 1",
      },
      bgColor: "#e4e8ec",
    },
    {
      anchor: {
        url: "#",
        number: "02",
        title: "Feature two",
      },
      tagline: "Tagline",
      heading: "Wealth Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "default",
          size: "default",
          iconRight: <ChevronRight />,
        },
      ],
      image: {
        src: IMAGE_2,
        alt: "Relume placeholder image 2",
      },
      bgColor: "#d6dde2",
    },
    {
      anchor: {
        url: "#",
        number: "03",
        title: "Feature three",
      },
      tagline: "Tagline",
      heading: "Tax & Estate planning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "default",
          size: "default",
          iconRight: <ChevronRight />,
        },
      ],
      image: {
        src: IMAGE_3,
        alt: "Relume placeholder image 3",
      },
      bgColor: "#c8d0d6",
    },
  ],
};
