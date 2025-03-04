"use client";


const Thoughtful = () => {
  return (
    <section className="w-full  max-w-8xl flex flex-col items-center text-center px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28 py-20">
      {/* Image Container */}
      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
        {/* Background Circles */}
        <div className="absolute -top-4 -left-6 w-12 h-12 bg-[#FDDC98] rounded-full md:w-16 md:h-16"></div>
        <div className="absolute top-4 right-6 w-10 h-10 bg-[#F38BA3] rounded-full md:w-14 md:h-14"></div>

        {/* Main Image */}
        <img
          src="/cogatImage/thought.png" // Replace with actual image path
          alt="Family enjoying time together"
          width={600}
          height={400}
          className="relative z-10 mx-auto"
        />
      </div>

      {/* Text Content */}
      <h3 className="text-lg md:text-xl font-poppins font-semibold mt-6">Final Thoughts</h3>
      <p className="text-black text-base md:text-[20.6px] leading-snug mt-4 ">
        Raising a gifted child is a journey filled with both joys and challenges.
        By understanding what giftedness is and how it might show up in your child, 
        you can better support them as they grow. Remember, your role isn’t just to nurture 
        their intellect—it’s also to help them develop the emotional and social skills 
        they need to lead a happy, balanced life.
      </p>
    </section>
  );
};

export default Thoughtful;
