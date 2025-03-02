import React from "react";
import Image from "next/image";

// Data-driven approach for reusability
const sections = [
  {
    id: "schools",
    title: "Why do Schools use the CogAT®?",
    text: "Schools administer the CogAT® primarily to identify students for gifted and talented programs. The test provides educators with insights into how your child learns and processes information, helping tailor educational programs and resources to better meet their needs. Sometimes schools will have specialized classrooms to cater to students. Additionally, it can identify areas where your child may benefit from additional support.",
    imgSrc: "/cogatImage/Group-1870.png",
    imgAlt: "Parent and child",
    imgClass: "whyuse-image-1",
    reverse: false,
  },
  {
      id: "administration",
      title: "How is the CogAT Administered?",
      text: "Your child will typically take the CogAT in a group setting within their school. The test is divided into three batteries, each focusing on a different cognitive ability. Depending on your school district’s resources, the test can be taken either online or with paper and pencil. Accommodations are available to ensure the test is accessible to all students.",
      imgSrc: "/cogatImage/Group-1871.png",
      imgAlt: "Child holding globe",
      imgClass: "whyuse-image-2",
      reverse: true,
    },
    {
      id: "benefits",
      title: "Why do Schools use the CogAT®?",
      text: "Schools administer the CogAT® primarily to identify students for gifted and talented programs. The test provides educators with insights into how your child learns and processes information, helping tailor educational programs and resources to better meet their needs. Sometimes schools will have specialized classrooms to cater to students. Additionally, it can identify areas where your child may benefit from additional support.",
      imgSrc: "/cogatImage/Group-1872.png",
      imgAlt: "Parent and child",
      imgClass: "whyuse-image-1",
      reverse: false,
    },

];

const WhyUse = () => {
  return (
    <div className="whyuse-section">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={` py-10 ${index % 2 !== 0 ? "whyuse-bg-light" : ""} ${
            index === 2 ? "third-bg" : ""
          }`}
          id={section.id}
        >
          <div
            className={`flex flex-col md:flex-row  max-w-8xl  px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28 ${
              section.reverse ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 text-center">
              <Image
                src={section.imgSrc}
                alt={section.imgAlt}
                width={500}
                height={400}
                className={`img-fluid ${section.imgClass} mx-auto`}
              />
            </div>

            {/* Text Content Section */}
            <div className="w-full md:w-1/2">
              <div className="whyuse-content">
                <h2 className="whyuse-title">{section.title}</h2>
                <p className="whyuse-text">{section.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUse;
