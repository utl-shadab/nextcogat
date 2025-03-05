
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
  subtitleColor = "text-[#03014C]",
  description,
  descriptionColor = "text-[#03014C]",
  tags,
}) => {
  return (
    <div className="text-center px-4 w-full">
      {/* Title */}
      <h2 className={`text-2xl md:text-3xl  font-poppins font-medium ${titleColor}`}>{title}</h2>

      {/* Optional Description */}
      <p className={`mt-4 font-semibold text-lg  text-[#03014C] ${subtitleColor}`}>{subtitle}</p>
      {description && <p className={`mt-4 text-[#03014C] text-lg font-medium ${descriptionColor}`}>{description}</p>}

      {/* Subtitle */}


      {/* Tags Section */}
      <div className="flex flex-wrap justify-between gap-2 mt-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`flex items-center gap-2 border px-6 py-2 rounded-full transition-all duration-300 
              ${tag.textColor || "text-black"} 
              ${tag.borderColor || "border-blue-500"} 
              ${tag.bgColor || "bg-[#E8F6FF]"} 
              ${tag.hoverBgColor || "hover:bg-blue-100"}`}
          >
            {/* <span>{tag.emoji || "😟"}</span> {tag.text} */}
            <span>{tag.emoji || <img src={'/cogatImage/happy-face.svg'} width={48} height={48} />}</span> {tag.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UpperSection;
