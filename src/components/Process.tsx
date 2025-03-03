'use client';

import { useEffect, useState } from 'react';
import CardSection from 'common/CardSection';
import EquationSection from 'common/EquationSection';
import UpperSection from 'common/UpperSection';
import Practice from './Practice';
import Assistance from './Assistance';

const Process = () => {
    const [width, setWidth] = useState('w-full md:w-[80%]');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newWidth = scrollY > 300 ? "w-full md:w-[80%]" : "w-full md:w-[80%]";
            setWidth(newWidth);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative w-full flex flex-col items-center bg-[#BDECFF] overflow-hidden pt-20 pb-20  mx-auto  max-w-8xl px-4 sm:px-4 md:px-8 lg:px-16 xl:px-28">
            {/* Cloud Background */}
            <div className="absolute top-0 left-0 w-full h-[200px] bg-[url('/cogatImage/rotatecloud.png')] bg-cover bg-center" />

            <div
                className={`relative mt-2 bg-white shadow-lg border border-[#D6D6D6] rounded-[70px] p-8 flex flex-col items-center transition-all duration-500 ease-in-out ${width}`}
            >
                <UpperSection
                    title="Unlimited Tests"
                    titleColor="text-[#0479D0]"
                    subtitle="Don’t practice until you get it right, practice until you can’t get it wrong"
                    subtitleColor="text-black"
                    description="Your child may be dealing with these challenges"
                    descriptionColor="text-gray-900"
                    tags={[
                        { text: "Avoidable Mistakes", emoji: "⚠️", textColor: "text-red-600", borderColor: "border-red-500", bgColor: "bg-red-100", hoverBgColor: "hover:bg-red-200" },
                        { text: "Lack of Confidence", emoji: "😨", textColor: "text-blue-600", borderColor: "border-blue-500", bgColor: "bg-blue-100", hoverBgColor: "hover:bg-blue-200" },
                        { text: "Stress of a Timed Test", emoji: "⏳", textColor: "text-green-600", borderColor: "border-green-500", bgColor: "bg-green-100", hoverBgColor: "hover:bg-green-200" }
                    ]}
                />

                <EquationSection
                    description="Practicing daily or every other day makes test-taking second nature to your child"
                    items={[
                        { text: "More\nTests", isBox: true, bgColor: "bg-blue-600", equal: true },
                        { text: "Fewer\nMistakes", icon: "down", equal: false },
                        { text: "More\nConfidence", isBox: false, icon: "up", bgColor: "bg-green-500", equal: true },
                        { text: "Higher\nTest Score", icon: "up" }
                    ]}
                />
                <div className="bottom-image my-6">
                    <h2 className="text-2xl md:text-2xl text-blue-600 text-center">Test Preparation Journey</h2>
                    <img src="/cogatImage/bottomimage.png" alt="Test Preparation Journey" className="w-full rounded-xl" />
                    <CardSection />
                </div>
            </div>
            <Practice />
            <Assistance />
        </div>
    );
};

export default Process;
