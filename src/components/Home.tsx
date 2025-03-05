// components/Home.tsx
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Feature from "./Feature";
import Process from "./Process";
import TestimonialSlider from "./TestimonialSlider";
import Footer from "../common/Footer";
import Assistance from "./Assistance";

const Home = () => {
    return (
        <>
          
            <Header />
            <Hero />
            <Feature />
            <Process/>
            <Assistance/>
            <TestimonialSlider/>
            <Footer/>
        </>
    );
};

export default Home;
