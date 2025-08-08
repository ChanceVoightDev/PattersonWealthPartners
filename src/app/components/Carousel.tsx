"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { Quote } from "lucide-react";

type Testimonial = {
  name: string;
  company: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mark H",
    company: "HUF",
    quote:
      "The financial advice and support I received have been invaluable. They have a deep understanding of my needs and have helped me navigate complex financial decisions with ease.",
    image:
      "/testimonial-images/portrait-of-young-african-american-man-at-home-in-2025-03-25-02-04-52-utc.jpg",
  },
  {
    name: "Asha R",
    company: "Northbridge",
    quote:
      "Clear, practical guidance that helped us move quickly with confidence. Exactly what we needed.",
    image:
      "/testimonial-images/portrait-of-asian-business-woman-with-thumbs-up-li-2024-10-22-11-00-10-utc.jpg",
  },
  {
    name: "Daniel P",
    company: "Harbour Co.",
    quote:
      "Responsive, thoughtful and results-driven. Their advice saved us time and money.",
    image:
      "/testimonial-images/portrait-of-a-happy-senior-man-smiling-against-bei-2025-03-13-00-42-43-utc.jpg",
  },
];

export default function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="relative section container">
      <p className="tagline text-center">Testimonials</p>
      <h2 className="header text-center">Those who trust us</h2>

      <div className="relative mt-12">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
          plugins={[
            Autoplay({
              delay: 5500,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center md:max-w-xl lg:max-w-3xl xl:max-w-5xl mx-auto">
                  {/* Image */}
                  <div className="flex justify-center">
                    <div className="relative w-[640px] max-w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={t.image}
                        alt={`${t.name} portrait`}
                        fill
                        priority={i === 0}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* Quote */}
                  <Card className="relative md:static border-0 shadow-none text-left">
                    <CardContent className="relative md:static p-0 flex flex-col gap-5">
                      <Quote className="w-10 h-10 text-primary" />
                      <p className="lg:text-2xl leading-snug">{t.quote}</p>
                      <p className="text-sm font-medium text-muted-foreground">
                        {t.name} • {t.company}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Prev/Next (shadcn-provided) */}
          <CarouselPrevious className="right-14 md:left-1 bg-background/80 backdrop-blur" />
          <CarouselNext className="right-1  bg-background/80 backdrop-blur" />
        </Carousel>
      </div>

      {/* Dots */}
      <div className="mt-10 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={[
              "h-2.5 w-2.5 rounded-full transition-opacity",
              i === current
                ? "bg-foreground"
                : "bg-muted-foreground/30 hover:opacity-80",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  );
}
