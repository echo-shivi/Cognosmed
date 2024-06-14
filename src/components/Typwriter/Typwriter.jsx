// Typewriter.js

import React, { useState, useEffect } from "react";
import classNames from "classnames";

const Typewriter = () => {
  const texts = [
    "Bihar's First ",
    "NABL Accredited",
    "Research & Testing Lab ",
    "for Ayurveda & food products",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (currentIndex < texts[textIndex].length) {
          setCurrentText(
            (prevText) => prevText + texts[textIndex][currentIndex]
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentText("");
            setCurrentIndex(0);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 1000); // Delay before starting the next cycle
        }
      }
    }, 200); // Typing speed (adjust as needed)

    return () => clearInterval(interval);
  }, [texts, textIndex, currentIndex, isTyping]);

  return (
    <div className=" mt-0 flex items-center justify-center h-[1200] bg-white mb-0">
      <div className="text-blue-500 text-4xl font-bold">
        {currentText}
        <span className={classNames({ "opacity-1": !isTyping })}>|</span>
      </div>
    </div>
  );
};

export default Typewriter;
