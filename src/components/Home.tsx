// components/Home.tsx
import React from "react";
import CustomCursor from "./CustomCursor";
import Header from "./Header";
import Hero from "./Hero";
import Feature from "./Feature";
import Process from "./Process";
import TestimonialSlider from "./TestimonialSlider";
import Footer from "../common/Footer";

const Home = () => {
    return (
        <>
            <CustomCursor />
            <Header />
            <Hero />
            <Feature />
            <Process/>
            <TestimonialSlider/>
            <Footer/>
        </>
    );
};

export default Home;
