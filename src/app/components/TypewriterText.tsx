"use client";

import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  words: string[];
  speed?: number;
  delay?: number;
  pauseBetweenWords?: number;
  className?: string;
}

const TypewriterText = ({
  words,
  speed = 150,
  delay = 500,
  pauseBetweenWords = 2000,
  className = "",
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (!isDeleting && currentIndex < currentWord.length) {
          // Typing forward
          setDisplayedText(currentWord.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else if (!isDeleting && currentIndex === currentWord.length) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), pauseBetweenWords);
        } else if (isDeleting && currentIndex > 0) {
          // Deleting backward
          setDisplayedText(currentWord.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else if (isDeleting && currentIndex === 0) {
          // Move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      currentIndex === 0 && !isDeleting ? delay : isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timer);
  }, [
    currentIndex,
    currentWord,
    speed,
    delay,
    pauseBetweenWords,
    isDeleting,
    words.length,
  ]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`inline-block w-0.5 h-[1em] bg-current ml-1 ${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      />
    </span>
  );
};

export default TypewriterText;
