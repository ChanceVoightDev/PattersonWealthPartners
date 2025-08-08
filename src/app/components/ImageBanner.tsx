import Image from "next/image";
import React from "react";
import { Button, ButtonProps } from "./ui/button";

type ImageBannerProps = {
  tagline?: string;
  title: string[];
  src: string;
  alt: string;
  buttons?: ButtonProps[];
};

const ImageBanner = ({
  tagline,
  title,
  src,
  alt,
  buttons,
}: ImageBannerProps) => {
  return (
    <section className="relative section">
      <div className="relative flex items-end py-10 lg:py-10 h-[25vh] md:h-[75vh] max-h-[950px] min-h-fit">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="-z-10 object-cover lg:object-left-top"
        />
        <div className="container">
          {tagline && <p className="tagline text-white">{tagline}</p>}
          {title.map((line, idx) => (
            <h2 key={idx} className="oversized-header">
              {line}
            </h2>
          ))}

          {buttons && (
            <div className="flex flex-row gap-5 mt-5 flex-wrap">
              {buttons.map((button, idx) => (
                <Button
                  key={idx}
                  size={button.size}
                  variant={button.variant}
                  className={button.className}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;
