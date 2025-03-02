"use client";

import { motion } from "framer-motion";

const Slide: React.FC<{ slide: { id: number; image: string; title: string } }> = ({ slide }) => {
  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute w-full h-full flex flex-col items-center justify-center"
    >
      <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
      <h2 className="absolute top-10 text-3xl font-bold text-red-500">{slide.title}</h2>
    </motion.div>
  );
};

export default Slide;
