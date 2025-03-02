import React, { useState } from "react";
import { PlayCircle } from "lucide-react";
import VideoModal from "../components/VideoModal"; 

const assistanceData = [
  {
    title: "AI Generated Detailed Explanations",
    description: "Step-by-step/detailed explanations of answers to practice questions",
    icon: "/cogatImage/ico_AI-Generated_DetailedExplanations.png",
  },
  {
    title: "Video Lessons",
    description: "Videos help with demonstrating complex concepts",
    icon: "/cogatImage/ico_VideoLessons.png",
    video: true,
  },
  {
    title: "AI Assistance",
    description: "Interactive AI assistant guides your child during practice without giving away the answer",
    icon: "/cogatImage/ico_AI_Assistance.png",
  },
];

const AssistanceSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="w-full px-4 md:px-10 lg:px-16 py-10">
      {/* Heading */}
      <h2 className="text-center text-xl md:text-2xl font-semibold text-[#E4434B] mb-6">
        Assistance for your child's learning journey
      </h2>

      {/* Assistance Cards */}
      <div className="flex flex-col gap-4">
        {assistanceData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 md:p-5 lg:p-6 bg-[#FFF5F5] border border-[#F8D7DA] rounded-full shadow-sm"
          >
            {/* Left Side (Icon + Title) */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative flex items-center justify-center w-13 h-13 md:w-20 md:h-20 p-3 bg-white border border-[#EAA0A4] rounded-full shadow-md">
                <img src={item.icon} alt={item.title} className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-semibold text-black">{item.title}</h3>
                <p className="text-gray-700 text-xs md:text-base">{item.description}</p>
              </div>
            </div>

            {/* Right Side (Play Video Button) */}
            {item.video && (
              <button
                className="flex items-center gap-2 text-[#E4434B] font-semibold text-sm md:text-base hover:text-red-600 transition"
                onClick={() => setIsVideoOpen(true)}
              >
                <PlayCircle className="w-5 h-5 md:w-6 md:h-6" />
                Play Video
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {isVideoOpen && <VideoModal closeModal={() => setIsVideoOpen(false)} />}
    </section>
  );
};

export default AssistanceSection;
