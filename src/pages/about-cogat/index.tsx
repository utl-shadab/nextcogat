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
    const faqsData = [
        { id: "cogat", question: "How is CogAT® Testing Format?" },
        { id: "schools", question: "Why do Schools use the CogAT®?" },
        { id: "administration", question: "How is the CogAT Administered?" },
        { id: "child", question: "Preparing Your Child for the CogAT?" },
        { id: "prepare", question: "How do I know which CogAT test level my child should prepare for?" },
        { id: "benefits", question: "Understanding the Results" },
    ];
    const sectionsData = [
        {
          id: "schools",
          title: "Why do Schools use the CogAT®?",
          text: "Schools administer the CogAT® primarily to identify students for gifted and talented programs. The test provides educators with insights into how your child learns and processes information, helping tailor educational programs and resources to better meet their needs. Sometimes schools will have specialized classrooms to cater to students’ Additionally, it can identify areas where your child may benefit from additional support.",
          text2: "",
          imgSrc: "/cogatImage/Group-1870.png",
          imgAlt: "Parent and child",
          reverse: false,
         textAlign: "left",
        },
        {
          id: "administration",
          title: "How is the CogAT Administered?",
          text: "While the CogAT isn’t a test your child can study for in the traditional sense, practicing regularly is very important for your child to familiarize themselves with the test format and to overcome any issues with specific topics. cogatpractice.ai helps your child feel more prepared and confident on test day.",
          text2: "",
          imgSrc: "/cogatImage/Group-1871.png",
          imgAlt: "Child holding globe",
          reverse: true,
         textAlign: "left",
        },
        {
          id: "benefits",
          title: "Preparing Your Child for the CogAT",
          text: "While the CogAT  isn’t a test your child can study for in the traditional sense, practicing regularly is very important for your child to familiarize themselves with the test format and to overcome any issues with specific topics.  cogatpractice.ai  helps your child feel more prepared and confident on test day.",
          text2: "",
          imgSrc: "/cogatImage/Group-1872.png",
          imgAlt: "Classroom learning",
          reverse: false,
         textAlign: "left",
        },
      ];
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
                <Faq
                    title="FAQs"
                    subtitle="Some frequently asked questions to guide you"
                    faqs={faqsData}
                />
                <Information />
                <LevelCogat />
                <WhyUse sections={sectionsData} />
                <TestLevel />
                <Supporting />
                <Results />
                <Footer />
            </main>
        </>
    );
};

export default About;
