import Breadcrumb from "common/BreadCrumb";
import Footer from "common/Footer";
import Faq from "components/Faq";
import Header from "components/Header";
import Information from "components/Imformation";
import LevelCogat from "components/LevelCogat";
import Results from "components/Results";
import Supporting from "components/Supporting";
import TestLevel from "components/TestLevel";
import WhyUse from "components/WhyUse";
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>About Us | AceCogAT</title>
                <meta name="description" content="Learn more about AceCogAT and our mission." />
            </Head>
            <Header />
            <Breadcrumb
                title="About CogAT®"
                image="/cogatImage/children.png"
                alt="Group of Students"
                />
            <main className="">
            <Faq/>
            <Information/>
            <LevelCogat/>
            <WhyUse/>
            <TestLevel/>
            <Supporting/>
            <Results/>
            <Footer/>
                </main>
        </>
    );
};

export default About;
