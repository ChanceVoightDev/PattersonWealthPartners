import { Check, TicketIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const VALUES = [
  {
    title: "Integrity",
    paragraph:
      "Uphold high ethical standards and act with honesty, transparency, and professionalism in all your interactions.",
  },
  {
    title: "Trust and Confidentiality",
    paragraph:
      "Understand the importance of trust and confidentiality in your client relationships.",
  },
  {
    title: "Objectivity",
    paragraph:
      "Provide unbiased advice that is based on thorough analysis, research, and a comprehensive understanding of your clients' financial situations.",
  },
  {
    title: "Expertise",
    paragraph:
      "Stay up-to-date with industry trends, regulations, and best practices to offer informed advice to your clients.",
  },
  {
    title: "Long-Term Relationships",
    paragraph:
      "Build long-term relationships with your clients based on trust, open communication, and mutual respect.",
  },
  {
    title: "Accountability",
    paragraph:
      "Monitor progress, review strategies, and make adjustments as needed to help clients stay on track towards their financial goals.",
  },
];

const Values = () => {
  return (
    <section className="section xl:container flex flex-col xl:flex-row max-w-[100rem] mx-auto">
      <div className="relative aspect-video xl:basis-[50%] xl:aspect-square min-h-full">
        <Image
          src="/business-team-having-meeting-sitting-around-table-2024-10-19-01-57-11-utc.jpg"
          alt="Meeting"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container bg-light p-10 xl:basis-[50%]">
        <h2 className="header mb-10">
          Guided by integrity, trust, and client-centricity, our values drive
          everything we do.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {VALUES.map((value, idx) => (
            <div key={idx} className="space-y-2">
              <Check className="size-6 text-secondary" />
              <p className="subheader">{value.title}</p>
              <p>{value.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
