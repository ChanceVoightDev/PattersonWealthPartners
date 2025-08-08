import Link from "next/link";
import React from "react";

const UNORDERED_LIST_ONE = [
  {
    title: "Financial Services",
    href: "#",
  },
  {
    title: "Financial Institutions",
    href: "#",
  },
  {
    title: "Healthcare & Pharmaceuticals",
    href: "#",
  },
  {
    title: "Education",
    href: "#",
  },
  {
    title: "Medical Devices & Technology",
    href: "#",
  },
];

const UNORDERED_LIST_TWO = [
  {
    title: "Retail & E-commerce",
    href: "#",
  },
  {
    title: "Energy and Utilities",
    href: "#",
  },
  {
    title: "Hospitality and Tourism",
    href: "#",
  },
  {
    title: "Automotive & Transportation",
    href: "#",
  },
];

const Industries = () => {
  return (
    <section className="section container grid grid-cols-1 md:grid-cols-3 md:gap-10">
      <h2 className="tagline !mb-4">Industries</h2>

      <ul className="space-y-3">
        {UNORDERED_LIST_ONE.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.href}
              className="hover-underline underline-secondary"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="space-y-3">
        {UNORDERED_LIST_TWO.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.href}
              className="hover-underline underline-secondary"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Industries;
