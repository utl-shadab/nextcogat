"use client";

import React from "react";

interface SectionProps {
  id: string;
  title: string;
  text: string;
  text2: string;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
}

const WhyUse = ({ sections = [] }: { sections?: SectionProps[] }) => {
  const bgColors: Record<string, string> = {
    schools: "bg-[#F4F1EA]",
    administration: "bg-[#D5E6EB]",
    benefits: "bg-[#E8F6FF]",
    Giftedness: "bg-[#F4F1EA]",
    giftchild: "bg-[#E8F6FF]",
  };

  return (
    <div className="whyuse-section">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`py-10 ${bgColors[section.id] || "whyuse-bg-light"} ${
            index === 2 ? "third-bg" : ""
          }`}
          id={section.id}
        >
          <div
            className={`flex flex-col md:flex-row max-w-8xl py-3 px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28 ${
              section.reverse ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Image Section */}
            <div className="w-full md:w-2/5 text-center">
              <img
                src={section.imgSrc}
                alt={section.imgAlt}
                width={500}
                height={400}
                className="mx-auto"
              />
            </div>

            {/* Text Content Section */}
            <div className="w-full md:w-3/5 text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {section.title}
              </h2>
              <p className="text-gray-700 text-lg mt-4">{section.text}</p>
              <p className="text-gray-700 text-lg mt-4">{section.text2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUse;
