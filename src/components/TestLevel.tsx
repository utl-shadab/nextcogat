"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const TestLevel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; 

  return (
    <div className="container  max-w-8xl  px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28 py-20 flex flex-col md:flex-row items-start justify-between gap-10" id="prepare">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          How do I know which CogAT test level my child should prepare for?
        </h2>
        <p className="text-gray-700 mb-3">CogAT testing levels depend on:</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>What grade your child is in and</li>
          <li>
            The schedule and level adopted by your school district. This table
            from Riverside Insights provides general guidelines. Contact your
            school’s gifted counselor or district office for more accurate
            information about what version of the test your child will take.
          </li>
        </ul>
      </div>

      {/* Right Section - Image with Overlay */}
      <div
        className="relative w-full md:w-1/2 lg:w-1/3 cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        {/* Image */}
        <img
          src="/cogatImage/Image-146.jpg"
          alt="Recommended Test Levels"
          width={350}
          height={200}
          className="rounded-lg shadow-lg w-full"
        />

        {/* Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100"
        >
          <p className="text-white font-semibold">Expand Image</p>
        </motion.div>
      </div>

      {/* Modal for Enlarged Image */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 bg-white text-black p-2 rounded-full shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Enlarged Image */}
            <img
              src="/cogatImage/Image-146.jpg"
              alt="Recommended Test Levels"
              width={700}
              height={400}
              className="rounded-lg shadow-xl w-[90%] max-w-3xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestLevel;
