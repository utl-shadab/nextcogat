"use client";

import { useState } from "react";
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
    title: "Adaptive Learning for Kids",
    description: (
      <>
        <p className="text-lg">
          Our AI-powered system dynamically adjusts the difficulty based on your child's progress, ensuring they always learn at the right pace.
        </p>
        <a href="#" className="text-[#E43F5A] font-semibold text-lg">
          Learn more
        </a>
      </>
    ),
    image: "/cogatImage/bnrpic2.png",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full bg-[#EAF6FF] py-6 md:py-10 flex justify-center">
        <div className="container mx-auto relative w-full max-w-8xl flex flex-col md:flex-row items-center justify-between py-3 md:pt-28 lg:pt-24 xl:pt-10 px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28">
          <button
            onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#EDF6FC] hover:bg-[#FBBC05] p-4 rounded-full shadow-md z-10"
          >
            <ChevronLeft className="text-gray-500 text-2xl" />
          </button>

          <div className="flex flex-col-reverse md:flex-row w-full items-center">
            <div className="w-full md:w-[60%] text-center md:text-left space-y-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[currentIndex].id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl md:text-4xl mb-4 font-bold text-[#E43F5A]">
                    {slides[currentIndex].title}
                  </h1>
                  <div className="text-gray-700 text-lg">{slides[currentIndex].description}</div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full md:w-[40%] flex justify-center md:justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[currentIndex].id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-lg"
                >
                  <img
                    src={slides[currentIndex].image}
                    alt="Slide Image"
                    width={500}
                    height={400}
                    className="rounded-lg mt-5 md:mt-20 object-contain"
                   
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#EDF6FC] hover:bg-[#FBBC05] p-4 rounded-full shadow-md z-10"
          >
            <ChevronRight className="text-gray-500 text-2xl" />
          </button>
        </div>

        <div className="absolute z-1 -bottom-11 w-full flex justify-center">
          <img src="/cogatImage/Herocloud.png" alt="Cloud" width={1400} height={200}  />
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 md:left-[17rem] mt-10 whitespace-nowrap  md:m-1 transform flex items-center space-x-3 bg-[#E43F5A] px-6 py-3 rounded-full shadow-md"
          >
            <Play className="text-white text-3xl" />
            <span className="text-white font-semibold">What is CoGATpractice.ai</span>
          </button>
          {isModalOpen && <VideoModal closeModal={() => setIsModalOpen(false)} />}
        </div>
      </section>
    </>
  );
};

export default HeroSlider;