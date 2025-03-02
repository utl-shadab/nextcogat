import React from "react";

interface TagItem {
  text: string;
  emoji?: string;
  textColor?: string;
  borderColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
}

interface UpperSectionProps {
  title: string;
  titleColor?: string;
  subtitle: string;
  subtitleColor?: string;
  description?: string;
  descriptionColor?: string;
  tags: TagItem[];
}

const UpperSection: React.FC<UpperSectionProps> = ({
  title,
  titleColor = "text-blue-600",
  subtitle,
  subtitleColor = "text-gray-900",
  description,
  descriptionColor = "text-gray-700",
  tags,
}) => {
  return (
    <div className="text-center px-4 w-full">
      {/* Title */}
      <h2 className={`text-2xl md:text-3xl font-medium ${titleColor}`}>{title}</h2>

      {/* Subtitle */}
      <p className={`mt-2 font-semibold ${subtitleColor}`}>{subtitle}</p>

      {/* Optional Description */}
      {description && <p className={`mt-2 ${descriptionColor}`}>{description}</p>}

      {/* Tags Section */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`flex items-center gap-2 border px-6 py-3 rounded-full transition-all duration-300 
              ${tag.textColor || "text-black"} 
              ${tag.borderColor || "border-blue-500"} 
              ${tag.bgColor || "bg-[#E8F6FF]"} 
              ${tag.hoverBgColor || "hover:bg-blue-100"}`}
          >
            <span>{tag.emoji || "😟"}</span> {tag.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UpperSection;
