"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Function to track scroll progress
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(progress);

    setIsVisible(scrollTop > 200);
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 rounded-md right-6 z-50">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="relative w-9 h-9 rounded-sm p-2 flex items-center justify-center bg-[#3a4f66] text-white shadow-lg cursor-pointer hover:bg-[#3a4f66] transition-all"
        >
          {/* Square Progress Indicator */}
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Square */}
            <rect
              x="5"
              y="5"
              width="90"
              height="90"
              stroke="white"
              radius={2}
              strokeWidth="0"
              fill="none"
            />
            {/* Progress Square */}
            <rect
              x="5"
              y="5"
              width="90"
              height="90"
              stroke="#FFFFFF"
              strokeWidth="5"
              fill="none"
              strokeDasharray="360"
              strokeDashoffset={`${360 - (scrollPercentage * 3.6)}`}
              style={{
                transition: "stroke-dashoffset 0.3s ease",
              }}
            />
          </svg>

          {/* Chevron Up Icon */}
          <ChevronUp className="w-6 h-6 absolute text-white" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
