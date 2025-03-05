import React from "react";

const Supporting = () => {
  const cards = [
    {
      title: "Encourage Practice",
      description:
        "Use practice tests to help your child become familiar with the types of questions they will encounter.",
      bgColor: "bg-[#FFEFEF]", 
    },
    {
      title: "Build Reasoning Skills",
      description:
        "Engage in activities that promote critical thinking and problem-solving, such as puzzles, games, and reading comprehension exercises.",
      bgColor: "bg-[#F2D9BD]", 
    },
    {
      title: "Maintain a Positive Attitude",
      description:
        "Encourage your child to view the test as a way to showcase their unique strengths and abilities, not as a high-pressure exam.",
      bgColor: "bg-[#E9E8EB]", 
    },
  ];

  return (
    <div className="support-container max-w-8xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-32 py-16" id="child">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="support-heading text-2xl md:text-3xl font-medium text-[#1273EB]">
          Supporting Your Child
        </h2>
        <p className="support-subheading text-gray-700 text-lg mt-3">
          Here are a few tips to help support your child as they prepare for the CogAT:
        </p>
      </div>

      {/* Support Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14">
        {cards.map((card, index) => (
          <div key={index} className="w-full h-full">
            <div
              className={`support-card ${card.bgColor} p-8  shadow-lg rounded-[41px] h-full flex flex-col`}
            >
              <h5 className="support-card-title text-xl font-poppins font-semibold mb-3">
                {card.title}
              </h5>
              <p className="support-card-text text-black text-base flex-grow">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supporting;
