"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(progress);
    
    // Show button only after scrolling 200px
    setIsVisible(scrollTop > 200);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="relative w-14 h-14 flex items-center justify-center bg-[#E43F5A] text-white rounded-full shadow-lg cursor-pointer hover:bg-[#c1141d] transition-all"
        >
          {/* SVG Circle Progress Bar */}
          <svg className="absolute w-full h-full" viewBox="0 0 36 36">
            <circle
              className="text-blue-950"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
            />
            <circle
              className="text-white"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
              strokeDasharray="100"
              strokeDashoffset={`${100 - scrollPercentage}`}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />
          </svg>

          {/* Up Arrow Icon */}
          <ArrowUp className="w-6 h-6 absolute text-white" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
