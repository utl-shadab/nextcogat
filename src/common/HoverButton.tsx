"use client";

interface HoverButtonProps {
  text: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({ text }) => {
  return (
    <button
      className="px-10 py-3 bg-[#E3F2FD] text-black rounded-full shadow-md text-lg font-normal 
                 transition-colors duration-300 ease-in-out 
                 border border-[#0479D052] 
                 hover:bg-[#0073B7] hover:text-white hover:border-[#0073B7]
                 focus:outline-none focus:ring-2 focus:ring-[#0073B7] focus:ring-offset-2
                 sm:px-36 sm:py-5 sm:text-xl" 
    >
      {text}
    </button>
  );
};

export default HoverButton;