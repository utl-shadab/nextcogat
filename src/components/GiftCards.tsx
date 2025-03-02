"use client";

const GiftCards = () => {
  const cards = [
    {
      title: "Endless Curiosity",
      description:
        'If your child is constantly asking “why” and “how,” they might be gifted. Gifted kids have a deep desire to understand the world around them and won’t settle for simple answers.',
      bgColor: "bg-[#DFF0FA]",
    },
    {
      title: "Creative Problem-Solving",
      description:
        "Does your child come up with unexpected solutions to problems? Gifted children often think outside the box, finding creative ways to tackle challenges.",
      bgColor: "bg-[#FFEFEF]",
    },
    {
      title: "A Passion for Learning",
      description:
        "Some kids can get lost in a book or dive deep into a subject that fascinates them. If your child is driven to learn more about their favorite topics, this could be a sign of giftedness.",
      bgColor: "bg-[#E9E8EB]",
    },
    {
      title: "Heightened Sensitivity",
      description:
        "Gifted kids are often more sensitive, emotionally or even physically. They might pick up on the feelings of others or be bothered by loud noises or tags in their clothes.",
      bgColor: "bg-[#CBEDEC]",
    },
    {
      title: "Uneven Development",
      description:
        "Gifted kids are often more sensitive, emotionally or even physically. They might pick up on the feelings of others or be bothered by loud noises or tags in their clothes.",
      bgColor: "bg-[#F4F1EA]",
    },
    {
      title: "Advanced Reasoning Skills",
      description:
        "It’s not unusual for gifted kids to excel in one area, like reading, but struggle in others, like social skills. This is known as asynchronous development, and it’s a common trait among gifted children.",
      bgColor: "bg-[#DFF0FA]",
    },
  ];

  return (
    <section className="w-full max-w-8xl  py-3 px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28 pb-20">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[#007bff] text-2xl md:text-3xl font-semibold">
          How to Spot a Gifted Child?
        </h2>
        <p className="text-gray-600 text-base mt-2 max-w-2xl mx-auto">
          You might be wondering, “Is my child gifted?” While every child is unique, there are some common signs that parents of gifted kids often notice:
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-10 rounded-[60px]  shadow-md ${card.bgColor} shadow-md flex flex-col flex-grow`}
          >
            <h3 className="text-xl md:text-[25px] mb-0 font-poppins font-semibold">{card.title}</h3>
            <p className="text-gray-700 text-xl my-8 flex-1">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiftCards;
