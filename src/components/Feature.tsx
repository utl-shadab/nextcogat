"use client";

import React, { useRef } from "react";
import HoverButton from "common/HoverButton";

const features = [
    {
        id: 1,
        title: "Unlimited Tests",
        description:
            "Never run out of questions with our AI-generated tests that help your child to succeed and feel confident.",
        gradient: "from-[#E3F2FD] to-[#F0FAFF]",
        imgSrc: "/cogatImage/test.png",
    },
    {
        id: 2,
        title: "Personalized Practice",
        description:
            "Our innovative technology identifies areas for improvement and creates targeted practice questions to help your child improve.",
        gradient: "from-[#D6F5E3] to-[#EBFDF0]",
        imgSrc: "/cogatImage/practice.png",
    },
    {
        id: 3,
        title: "Instant Assistance",
        description:
            "From video lessons to Lumi, our friendly AI chatbot, your child will find guidance every step of the way.",
        gradient: "from-[#FEE7E7] to-[#FFF3F3]",
        imgSrc: "/cogatImage/bot.png",
    },
];

const Feature = () => {
    return (
        <section className="py-20 bg-white container mx-auto w-full max-w-8xl px-4 sm:px-4 md:px-8 lg:px-16 xl:px-28">
            {/* Top Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-20 mb-8 px-4 mx-2 md:mx-20 ">
                <div className="md:col-span-8">
                    <HoverButton text="Click here to see AI-generated sample questions" />
                </div>
                <div className="md:col-span-4">
                    <HoverButton text="Sign up today" redirectToSignup />
                </div>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-4 md:gap-16 max-w-7xl mx-auto">
                {features.map((feature) => (
                    <div
                        key={feature.id}
                        className={`feature-card p-6 my-6 rounded-[80px] h-full w-full bg-gradient-to-b ${feature.gradient} shadow-md text-center transition-all duration-500 hover:shadow-2xl`}
                    >
                        {/* Feature Image */}
                        <img
                            src={feature.imgSrc}
                            alt={feature.title}
                            className="feature-image mx-auto w-28 h-28 mb-4 transition-all duration-500"
                        />
                        <h3 className="text-3xl w-48 mx-auto font-medium text-center">{feature.title}</h3>
                        <p className="text-gray-600 mt-2 px-4">{feature.description}</p>
                        <a
                            href="#"
                            className="text-[#E43F5A] font-semibold mt-4 inline-block hover:scale-105 transition-all duration-500"
                        >
                            Learn more
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Feature;
