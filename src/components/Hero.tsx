"use client";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import VideoModal from "./VideoModal";

const slides = [
  {
    id: 1,
    title: "The next revolution in CogAT prep",
    description: (
      <>
        <p className="text-lg">
          Designed by researchers and powered by AI, AceCogAT is the ultimate test prep tool for your child.
        </p>
        <ul className="list-none space-y-2 mt-4 text-base text-[#E4434B]">
          <li className="flex items-start gap-2">
            <Image src="/cogatImage/star.svg" alt="Bullet Icon" width={20} height={20} />
            <span><b>Unlimited tests:</b> Generate as many new practice tests as your child needs.</span>
          </li>
          <li className="flex items-start gap-2">
            <Image src="/cogatImage/star.svg" alt="Bullet Icon" width={20} height={20} />
            <span><b>Personalized practice:</b> Our AI analyzes testing data and automatically generates practice questions to strengthen your child's weak areas.</span>
          </li>
          <li className="flex items-start gap-2">
            <Image src="/cogatImage/star.svg" alt="Bullet Icon" width={20} height={20} />
            <span><b>Instant assistance:</b> Get detailed explanations and chat guidance to help your child.</span>
          </li>
        </ul>
      </>
    ),
    image: "/cogatImage/bnrpic1.png",
  },
  {
    id: 2,
    title: "Unlimited tests. Unmatched value.",
    description: (
      <>
        <p className="text-lg">
          No other CogAT prep leverages the power of AI to create unlimited, unique test questions. Now your child can take as many tests as they need to improve their accuracy and speed, and gain confidence.
        </p>
        <Link smooth={true}
          duration={500} to="Unlimited" className="text-[#E43F5A] my-6 cursor-pointer text-lg block"
          >
          Learn more
        </Link>
      </>
    ),
    image: "/cogatImage/bnrpic2.png",
  },
  {
    id: 3,
    title: "Precise, personalized practice",
    description: (
      <>
        <p className="text-lg">
          Our innovative AI carefully analyzes your child’s test performance history to identify areas for improvement. It then creates targeted practice questions to help improve their accuracy, speed and recall.
        </p>
        <Link smooth={true}
          duration={500} to="Precise" className="text-[#E43F5A] my-6 cursor-pointer text-lg block">
          Learn more
        </Link>
      </>
    ),
    image: "/cogatImage/bnrpic3.png",
  },
  {
    id: 4,
    title: "Help whenever you need it",
    description: (
      <>
        <p className="text-lg">
          Learn from detailed explanations to every question. Watch video lessons to understand concepts. Lumi, our AI-chatbot is always ready to help your child with the question as they practice!
        </p>
         <Link smooth={true}
          duration={500} to="whenever" className="text-[#E43F5A] cursor-pointer  text-lg my-6 block">
          Learn more
        </Link>
      </>
    ),
    image: "/cogatImage/bnrpic4.png",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to move to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to move to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section className="relative w-full bg-[#EAF6FF] py-6 md:py-10 flex justify-center">
        <div className="container mx-auto relative w-full max-w-8xl flex flex-col md:flex-row items-center justify-between py-3 md:pt-28 lg:pt-24 xl:pt-10 px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28">
          {/* Left Button (Now Enabled) */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#EDF6FC] hover:bg-[#FBBC05] p-4 rounded-full shadow-md z-10"
          >
            <ChevronLeft className="text-gray-500 text-2xl" />
          </button>

          {/* Slide Content */}
          <div
            className={`flex flex-col-reverse md:flex-row w-full items-center 
              ${slides[currentIndex].id === 1 ? "h-[45rem] md:h-[29rem]" : "h-[45rem] md:h-[29rem]"}
            `}
          >
            <div className="w-full md:w-[60%] text-center md:text-left space-y-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[currentIndex].id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl md:text-4xl mb-4 font-medium text-[#E43F5A]">
                    {slides[currentIndex].title}
                  </h1>
                  <div className="text-gray-700 text-lg ">{slides[currentIndex].description}</div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Image */}
            <div className="w-full md:w-[40%] flex justify-center md:justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[currentIndex].id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-lg z-10"
                >
                  <img
                    src={slides[currentIndex].image}
                    alt="Slide Image"
                    width={500}
                    height={400}
                    className="rounded-lg mt-5 z-10 md:mt-20 object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Button (Now Enabled) */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#EDF6FC] hover:bg-[#FBBC05] p-4 rounded-full shadow-md z-10"
          >
            <ChevronRight className="text-gray-500 text-2xl" />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute -bottom-20  md:-bottom-12 left-1/2 md:left-[12%] z-10 -translate-x-1/2 flex flex-col items-center"
          >
            {/* Circular Button with Play Icon */}
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FFDD67] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <Play className="text-[#004AAD]  w-6 h-6 md:w-8 md:h-8" />
            </div>

            {/* Text Below the Button */}
            <span className="text-black font-medium text-xs  mt-2">
              What is CoGATpractice.ai
            </span>
          </button>
        </div>
        {/* Bottom Cloud & Video Button */}
        <div className="absolute z-1 -bottom-11 w-full h-3 md:h-auto flex justify-center">
          <img src="/cogatImage/Herocloud.png" alt="Cloud" width={1400} height={200} />

          {isModalOpen && <VideoModal closeModal={() => setIsModalOpen(false)} />}
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
