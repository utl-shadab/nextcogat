import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface EquationItem {
  text: string;
  icon?: "up" | "down";
  isBox?: boolean;
  bgColor?: string;
  equal?: boolean;
  padding?: string;
  fontSize?: string;
}

interface EquationSectionProps {
  items: EquationItem[];
  description?: string;
}

const EquationSection: React.FC<EquationSectionProps> = ({ items, description }) => {
  return (
    <div className="flex flex-col items-center mt-10 p-6 bg-gray-50 w-full rounded-xl">
      {description && <p className="text-center text-gray-900 font-semibold text-lg">{description}</p>}
      <div className="mt-6 flex-wrap flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <EquationCard {...item} />
            {item.equal && <span className="text-3xl font-bold">=</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// Reusable Equation Card Component
const EquationCard: React.FC<EquationItem> = ({ text, icon, isBox, bgColor, padding, fontSize }) => {
  const IconComponent =
    icon === "up" ? (
      <ArrowUp className="text-4xl  text-[#0CE70C]" />
    ) : icon === "down" ? (
      <ArrowDown className="text-4xl text-red-500" />
    ) : null;

  return (
    <div className="flex flex-col items-center text-center">
      {/* Box/Circle for Icon */}
      <div
        className={`flex items-center justify-center ${isBox
          ? `${bgColor || "bg-blue-600"} ${padding || "p-4"} w-20 h-20 md:w-24 md:h-24 text-white rounded-xl relative`
          : "w-20 h-20 md:w-24 md:h-24 border border-blue-500 bg-white rounded-full"
          }`}
      >
        {isBox ? (
          <p className={`${fontSize || "text-sm"} text-white leading-tight`}>
            {text.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        ) : (
          IconComponent
        )}
      </div>

      {/* Text Below Box When isBox is False */}
      {!isBox && (
        <p className={`${fontSize || "text-sm"} tracking-tight leading-none mt-2`}>
          {text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      )}
    </div>
  );
};

export default EquationSection;
