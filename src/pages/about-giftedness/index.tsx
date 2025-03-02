import Breadcrumb from "common/BreadCrumb";
import Footer from "common/Footer";
import GiftCards from "components/GiftCards";
import Giftedness from "components/Giftedness";
// import FAQ from "components/Faq";
import Header from "components/Header";
import Resources from "components/Resources";
import Thoughtful from "components/Thoughtful";
import WhyUse from "components/WhyUse";
import Head from "next/head";

export default function AboutGiftedness() {
  // const faqsData = [
  //   { id: "cogat", question: "About Giftedness: What Parents Need to Know" },
  //   { id: "schools", question: "What Exactly Is Giftedness?" },
  //   { id: "results", question: "How to Spot a Gifted Child?" },
  //   { id: "preparation", question: "The Ups and Downs of Giftedness" },
  //   { id: "preparation2", question: "How to Support Your Gifted Child" },
  //   { id: "links", question: "Links & Resources" },
  // ];
  const sectionsData = [
    {
      id: "Giftedness",
      title: "The Ups and Downs of Giftedness",
      text: "Having a gifted child is exciting, but it can also be challenging. Gifted kids might feel out of place with their peers because they’re thinking about things at a different level. This can sometimes lead to loneliness or frustration. They may also put a lot of pressure on themselves to be perfect, which can lead to anxiety or a fear of failure. ",
      text2: "As a parent, it’s important to recognize these challenges and help your child navigate them. Supporting their emotional well-being is just as crucial as fostering their intellectual growth.",
      imgSrc: "/cogatImage/Group-1870.png",
      imgAlt: "Parent and child",
      reverse: true,
      textAlign: "left",
    },
    {
      id: "giftchild",
      title: "How to Support Your Gifted Child",
      text: "So, how can you help your gifted child thrive? Start by encouraging their love of learning. Provide them with opportunities to explore their interests, whether that’s through books, projects, or extracurricular activities. It’s also important to connect them with other kids who share similar interests, so they don’t feel so alone.",
      text2: "In school, talk to your child’s teacher about ways to challenge them without overwhelming them. Some schools offer enrichment programs or can tailor lessons to better meet your child’s needs.",
      imgSrc: "/cogatImage/Group-1871.png",
      imgAlt: "Child holding globe",
      reverse: false,
      textAlign: "right",
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
        title="About Giftedness"
        alt="Group of Students" />
          {/* <FAQ 
      title="Frequently Asked Questions" 
      subtitle="Find answers to common questions about CogAT"
      faqs={faqsData} 
    /> */}
    <Giftedness/>
    <GiftCards/>
    <WhyUse sections={sectionsData} />
    <Thoughtful/>
    <Resources/>
    <Footer/>
    </>
  );
}
