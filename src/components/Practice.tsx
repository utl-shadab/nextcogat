'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import EquationSection from 'common/EquationSection';
import UpperSection from 'common/UpperSection';

const Practice = () => {
    const [width, setWidth] = useState('w-full md:w-[80%]');
    const [isImageExpanded, setIsImageExpanded] = useState(false);

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
            <section className={`relative mt-10 md:-mt-5 bg-white shadow-lg border border-[#D6D6D6] rounded-[70px] p-8 flex flex-col items-center transition-all duration-500 ease-in-out ${width}`}>

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
                <div className="bottom-image my-6 relative text-center">
                    <h2 className="text-2xl md:text-2xl text-[#6EC1E4] font-medium text-center my-10">
                        Personalized Improvement Journey​
                    </h2>

                    {/* Expandable Image */}
                    <div 
                        className="expand-container flex justify-center relative cursor-pointer overflow-hidden"
                        onMouseEnter={() => !isImageExpanded && setIsImageExpanded(true)}
                        onMouseLeave={() => isImageExpanded && setIsImageExpanded(false)}
                    >
                        {/* Image Transition on Hover */}
                        <motion.img
                            src={isImageExpanded 
                                ? "/cogatImage/9d_PersonalizedImprovementJourney_.png" 
                                : "/cogatImage/Personalized-Improvement-Journey.png"}
                            alt="Personalized Improvement Journey"
                            className="rounded-xl transition-all duration-500 ease-in-out"
                            layout
                            initial={false}
                            animate={{ 
                                width: isImageExpanded ? "70%" : "50%",
                                transition: { duration: 0.5, ease: "easeInOut" }
                            }}
                            style={{ pointerEvents: "none" }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Practice;
