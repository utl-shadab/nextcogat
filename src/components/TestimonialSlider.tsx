"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Aparna",
    role: "aceCogAT.ai user",
    rating: 5,
    text: "I am so glad I found aceCogAT.ai! I had no experience with the CogAT and didn’t know how to help my child practice for the test. Thanks to this site, my daughter was able to understand the test format clearly and practice even without my help. The AI chatbot was an excellent guide that taught her how to think about solving the question without giving away the answer.",
  },
  {
    id: 2,
    name: "Anand",
    role: "Parent of 2rd grader",
    rating: 5,
    text: "My son used aceCogAT.ai to prepare for the CogAT every day and did a total of 60+ totally unique tests. I clearly saw his speed and accuracy go up week over week, and he gained a real understanding of the question format. This was essential since the CogAT is not based on prior knowledge or memorization. There are no comparable study sites or books that offer so much variety and personalized practice. I highly recommend this site to any parent who is looking for the best way to help their child succeed.",
  },
  {
    id: 3,
    name: "Rajesh",
    role: "Parent of 3th grader",
    rating: 4,
    text: "aceCogAT.ai really helped my child to work on the topics that were most challenging, like paper folding. I loved the personalized, targeted practice with unlimited questions to make sure her weak spots were addressed. The site is so easy to use and the analytics and insights are tremendously useful for parents.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="w-full px-4 md:px-16 py-12 flex flex-col items-center"
      style={{
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(180deg, #BDECFF 0%, #FFFFFF 100%)",
      }}
    >
      {/* Heading */}
      {/* <h3 className="text-red-500 text-xl font-poppins md:text-xl mb-2">Member Reviews</h3> */}
      <h2 className="text-xl md:text-3xl font-medium  text-[#0479D0] text-center">
        Member Reviews
      </h2>

      {/* Slider Container */}
      <div className="relative w-full    max-w-8xl  px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28  mt-8 flex items-center">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-[-50px] w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Testimonial Content */}
        <div className="w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-start gap-2 md:gap-8   rounded-2xl p-6 md:p-10 w-full "
            >
              {/* Skeleton Placeholder (40% Width) */}
              <div className="w-full md:w-[30%] h-40 md:h-60 rounded-3xl bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
              </div>

              {/* Testimonial Text (60% Width) */}
              <div className="w-full md:w-[70%] flex flex-col h-full justify-between px-4 md:px-6">
                <p className="text-gray-700 text-sm md:text-md text-justify leading-relaxed  overflow-hidden">
                  {testimonials[currentIndex].text}
                </p>

                {/* Rating & Name */}
                <div className="mt-4">
                  <div className="flex gap-1 text-yellow-500 text-lg">
                    {"★".repeat(testimonials[currentIndex].rating)}
                  </div>
                  <p className="font-semibold text-lg md:text-xl text-red-500">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-[-50px] w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-orange-500" : "bg-gray-400"
              } transition`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
