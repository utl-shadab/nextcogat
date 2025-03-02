'use client';

import { useEffect, useState } from 'react';
import CardSection from 'common/CardSection';
import UpperSection from 'common/UpperSection';
import AssistanceSection from 'common/AssistanceSection';

const Assistance = () => {
    const [width, setWidth] = useState('w-[80%]');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newWidth = scrollY > 300 ? 'w-[80%]' : 'w-[80%]';
            setWidth(newWidth);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`relative mt-28 bg-white shadow-lg border border-[#D6D6D6] rounded-[70px] p-8 flex flex-col items-center transition-all duration-500 ease-in-out ${width}`}>
            <UpperSection
                title="Instant Assistance"
                titleColor="text-[#D46C54]"
                subtitle="The right help at the right time can transform a challenge into success​"
                subtitleColor="text-black"
                description="The best tools your child can have are the ones that"
                descriptionColor="text-[#03014C]"
                tags={[
                    {
                        text: "Provide guidance",
                        emoji: "📢",
                        textColor: "text-red-600",
                        borderColor: "border-red-500",
                        bgColor: "bg-red-100",
                        hoverBgColor: "hover:bg-red-200"
                    },
                    {
                        text: "Give detailed explanations",
                        emoji: "📝",
                        textColor: "text-blue-600",
                        borderColor: "border-blue-500",
                        bgColor: "bg-blue-100",
                        hoverBgColor: "hover:bg-blue-200"
                    },
                    {
                        text: "Are engaging",
                        emoji: "🎯",
                        textColor: "text-green-600",
                        borderColor: "border-green-500",
                        bgColor: "bg-green-100",
                        hoverBgColor: "hover:bg-green-200"
                    }
                ]}
            />
            <AssistanceSection />
        </section>

    );
};

export default Assistance;
