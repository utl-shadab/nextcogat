'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EquationSection from 'common/EquationSection';
import UpperSection from 'common/UpperSection';
import { X } from 'lucide-react';

const Practice = () => {

    const [width, setWidth] = useState('w-full md:w-[80%]');
    const [isImageOpen, setIsImageOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const newWidth = scrollY > 300 ? "w-full md:w-[80%]" : "w-full md:w-[80%]";
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <div id="Precise" className='py-0 md:py-20'></div>
        <section  className={`relative mt-10 md:-mt-5 bg-white shadow-lg border border-[#D6D6D6] rounded-[70px] p-8 flex flex-col items-center transition-all duration-500 ease-in-out ${width}  `}>

            <UpperSection
                title="Precise, Personalized Practice​"
                titleColor="text-[#039490]"
                description="Every child has different roadblocks including"
                subtitleColor="text-black"
                subtitle="It's not just practice. It's the practice that is right for your child that makes the difference."
                descriptionColor="text-gray-900"
                tags={[
                    { text: "Gaps in understanding", emoji: "❓", textColor: "text-[#039490]", borderColor: "border-[#039490]", bgColor: "bg-[#E8F6FF]", hoverBgColor: "hover:bg-[#E8F6FF]" },
                    { text: "Slower Speed", emoji: "🐢", textColor: "text-[#039490]", borderColor: "border-[#039490]", bgColor: "bg-[#E8F6FF]" },
                    { text: "Trouble with recall", emoji: "🧠", textColor: "text-[#039490]", borderColor: "border-[#039490]", bgColor: "bg-[#E8F6FF]" }
                ]}
            />

            <EquationSection
                description="AI creates assignments to strengthen weak areas in a feedback loop to eliminate roadblocks to success."
                items={[
                    { text: "Precise Practice\nFor Weak Spots", isBox: true, bgColor: "bg-[#039490]", padding: "p-1", fontSize: "text-sm", equal: true },
                    { text: "Better\nUnderstanding", icon: "up", equal: false },
                    { text: "Less Careless\nMistakes", isBox: false, icon: "down", bgColor: "bg-green-500", equal: false },
                    { text: "Greater\nRecall", icon: "up" }
                ]}
            />

            {/* Bottom Image Section */}
            <div
                className="bottom-image my-6 relative"
              
            >
                <h2 className="text-2xl md:text-2xl text-[#039490] text-center my-10">Personalized Improvement Journey​</h2>
                <motion.img
                 onMouseEnter={() => setIsImageOpen(true)}
                    src="/cogatImage/Personalized-Improvement-Journey.png"
                    alt="Personalized Improvement Journey​"
                    className="w-1/2 rounded-xl m-auto  cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                />
                <p className="text-xs text-center font-bold">Expand Image </p>
            </div>

            {/* Expanded Image Modal */}
            <AnimatePresence>
                {isImageOpen && (
                    <motion.div
                        className="fixed inset-0 bg-white flex items-center justify-center z-50"
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
                                src="/cogatImage/9d_PersonalizedImprovementJourney_.png"
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
        </>
    );
};

export default Practice;
