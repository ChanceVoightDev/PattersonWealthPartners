"use client";

import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

import Logo from "../../../public/logos/patterson-wealth-logo-white.png";
import Slash from "./ui/slash";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Set background based on scroll position
      setIsScrolled(currentScrollY > 50);
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b-[0.025rem]",
        isScrolled
          ? "bg-dark shadow-md border-gray-500"
          : "bg-transparent border-gray-300/50",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isMobileMenuOpen ? "bg-dark" : ""
      )}
    >
      <div className="container max-w-7xl mx-auto py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="relative aspect-[4] bg-none h-7 lg:h-10 mr-10">
            <Image
              src={Logo}
              alt="Patterson Wealth Partners Logo"
              fill
              sizes="100px"
              className="object-cover"
            />
          </div>
          <div className="font-sans hidden md:flex items-center space-x-8">
            <>
              {["Home", "About", "Services"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={cn(
                    "transition-colors duration-300 text-white hover:text-light hover-underline",
                    isScrolled ? "underline-secondary" : "underline-light"
                  )}
                >
                  {item}
                </a>
              ))}
              <Slash color="#fff" />

              <a
                href="tel:0800002738"
                className={cn(
                  "text-sm text-white hover:text-light hover-underline",
                  isScrolled ? "underline-secondary" : "underline-light"
                )}
              >
                0800 00 27 38
              </a>

              <Button
                size="lg"
                className={cn(
                  "text-white bg-transparent border-1 pointer",
                  isScrolled ? "hover:brightness-[130%]" : "hover:bg-dark/50"
                )}
              >
                Contact us
              </Button>
            </>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={cn(
                "transition-colors duration-300 z-50 relative text-white"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 top-full transition-all duration-300 ease-in-out bg-dark h-svh border-t-[1px] border-gray-500/30",
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="container py-8 space-y-4">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block py-2 transition-colors duration-300 text-white hover:text-slate-900"
                )}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
