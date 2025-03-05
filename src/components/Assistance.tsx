'use client';

import { useEffect, useState } from 'react';
import UpperSection from 'common/UpperSection';
import AssistanceSection from 'common/AssistanceSection';

const Assistance = () => {
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
        <div className="relative w-full flex flex-col items-center bg-gradient-to-b from-[#cbf0ff] to-white overflow-hidden pb-20   mx-auto  max-w-8xl px-4 sm:px-4 md:px-8 lg:px-16 xl:px-28 ">
        <section className={`relative mt-10 md:mt-28 bg-white shadow-lg border border-[#D6D6D6] rounded-[70px] p-8 flex flex-col items-center transition-all duration-500 ease-in-out ${width}`}>
            <UpperSection
                title="Instant Assistance"
                titleColor="text-[#D46C54]"
                description="The best tools your child can have are the ones that"
                subtitle="The right help at the right time can transform a challenge into success​"
                subtitleColor="text-black"
                descriptionColor="text-[#03014C]"
                tags={[
                    {
                        text: "Provide guidance",
                        emoji: "📢",
                        textColor: "text-[#F79321]",
                        borderColor: "border-[#F79321]",
                        bgColor: "bg-[#FFEFEF]",
                        hoverBgColor: "hover:bg-bg-[#FFEFEF]"
                    },
                    {
                        text: "Give detailed explanations",
                        emoji: "📝",
                        textColor: "text-[#F79321]",
                        borderColor: "border-[#F79321]",
                        bgColor: "bg-[#FFEFEF]",
                        hoverBgColor: "hover:bg-bg-[#FFEFEF]"
                    },
                    {
                        text: "Are engaging",
                        emoji: "🎯",
                        textColor: "text-[#F79321]",
                        borderColor: "border-[#F79321]",
                        bgColor: "bg-[#FFEFEF]",
                        hoverBgColor: "hover:bg-bg-[#FFEFEF]"
                    }
                ]}
            />
            <AssistanceSection />
        </section>
</div>
    );
};

export default Assistance;
