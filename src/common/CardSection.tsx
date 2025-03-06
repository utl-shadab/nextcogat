import React from "react";


const cards = [
  {
    id: 1,
    title: "Familiarization",
    description: "Learning about the types of questions that are asked in the test.",
    color: " text-[#E4434B]",
    bgHover: "hover:bg-red-100 hover:shadow-md rounded-xl",
    iconColor: " text-[#E4434B]",
    icon: "/cogatImage/bookred.svg",
  },
  {
    id: 2,
    title: "Learning",
    description: "Knowing how to approach the question and what makes an answer correct.",
    color: "text-blue-600",
    bgHover: "hover:bg-blue-100 hover:shadow-md rounded-xl",
    iconColor: "text-blue-600",
    icon: "/cogatImage/bookblue.svg",
  },
  {
    id: 3,
    title: "Proficiency",
    description: "Improving speed to make sure the test is completed in time.",
    color: "text-green-600",
    bgHover: "hover:bg-green-100 hover:shadow-md rounded-xl",
    iconColor: "text-green-600",
    icon: "/cogatImage/bookgreen.svg",
  },
];

const CardSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 mt-3">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`flex flex-col items-start p-6  transition-all duration-400 cursor-pointer ${card.bgHover} `}
        >
          {/* <BookOpen className={`w-10 h-10 ${card.iconColor}`} /> */}
          <div className="flex gap-1">
          <span className="mt-[6px]">
              <img src={card.icon} alt={card.title} width={40} height={40} />
            </span>

            <div>
              <h3 className={`text-2xl font-normal mb-1 ${card.color}`}>{card.title}</h3>
              <p className={`${card.iconColor} text-sm`}>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
