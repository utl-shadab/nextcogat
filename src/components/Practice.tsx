'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EquationSection from 'common/EquationSection';
import UpperSection from 'common/UpperSection';
import { X } from 'lucide-react';

const Practice = () => {
   
    const [width, setWidth] = useState('w-[80%]');
    const [isImageOpen, setIsImageOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setWidth(window.scrollY > 300 ? 'w-[80%]' : 'w-[80%]');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`relative mt-28 bg-white shadow-lg border border-[#D6D6D6] rounded-[70px] p-8 flex flex-col items-center transition-all duration-500 ease-in-out ${width}`}>

            <UpperSection
                title="Unlimited Tests"
                titleColor="text-[#0479D0]"
                subtitle="Don’t practice until you get it right, practice until you can’t get it wrong"
                subtitleColor="text-black"
                description="Your child may be dealing with these challenges"
                descriptionColor="text-gray-900"
                tags={[
                    { text: "Gaps in understanding", emoji: "❓", textColor: "text-red-700", borderColor: "border-red-500", bgColor: "bg-red-200", hoverBgColor: "hover:bg-red-300" },
                    { text: "Slower Speed", emoji: "🐢", textColor: "text-blue-800", borderColor: "border-blue-600", bgColor: "bg-blue-200", hoverBgColor: "hover:bg-blue-300" },
                    { text: "Greater recall", emoji: "🧠", textColor: "text-green-800", borderColor: "border-green-600", bgColor: "bg-green-200", hoverBgColor: "hover:bg-green-300" }
                ]}
            />

            <EquationSection
                description="Practicing daily or every other day makes test-taking second nature to your child"
                items={[
                    { text: "Precise Practice\nFor Weak Spots", isBox: true,  bgColor: "bg-[#039490]", padding: "p-1", fontSize: "text-xs", equal: true },
                    { text: "Better\nUnderstanding", icon: "down", equal: false },
                    { text: "Less Careless\nMistakes", isBox: false, icon: "up", bgColor: "bg-green-500", equal: false},
                    { text: "Greater\nRecall", icon: "up" }
                ]}
            />

            {/* Bottom Image Section */}
            <div
                className="bottom-image my-6 relative cursor-pointer"
                onClick={() => setIsImageOpen(true)}
            >
                <h2 className="text-2xl md:text-2xl text-blue-600 text-center my-10">Personalized Improvement Journey​</h2>
                <motion.img
                    src="/cogatImage/Personalized-Improvement-Journey.png"
                    alt="Personalized Improvement Journey​"
                    className="w-1/2 rounded-xl m-auto"
                    whileHover={{ scale: 1.02 }}
                />
                <p className="text-xs text-center font-bold">Expand Image </p>
            </div>

            {/* Expanded Image Modal */}
            <AnimatePresence>
                {isImageOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Image Expansion */}
                        <motion.div
                            className="relative w-full h-full flex items-center justify-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <motion.img
                                src="/cogatImage/Personalized-Improvement-Journey.png"
                                alt="Expanded Test Preparation Journey"
                                className="w-1/2 h-full object-contain"
                            />

                            {/* Close Button */}
                            <motion.button
                                className="absolute top-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition"
                                onClick={() => setIsImageOpen(false)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X className="w-6 h-6" />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Practice;
