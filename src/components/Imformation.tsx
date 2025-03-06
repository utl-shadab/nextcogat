import { motion } from "framer-motion";
const Information = () => {
  const informationContent = [
    {
      title:
        "Understanding the CogAT  Test: A Guide for Parents of Elementary School Children",
      paragraphs: [
        "The Cognitive Abilities Test (CogAT ) is a widely recognized, nationally normed testing tool used to measure your child’s advanced cognitive and academic abilities and reasoning skills. While it is not an IQ test, it serves as a reference framework to understand how developed your child's intelligence is compared to other children in the same age group.",
        "Schools administer the CogAT  primarily to identify students for gifted and talented programs. The test provides educators with insights into how your child learns and processes information, helping tailor educational programs and resources to better meet their needs. Sometimes schools will have specialized classrooms for students who demonstrate advanced learning abilities.",
        "As a parent, you want to ensure your child’s strengths are fully recognized and nurtured. Giving them the best education possible starts with understanding their capacity to think and reason and their potential to learn beyond what is prescribed for their age.",
      ],
      image: "/cogatImage/schoolboy.png", 
    },
  ];

  return (
    <div className="information-section w-full  max-w-8xl relative px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28 pt-24 pb-10">
      {informationContent.map((info, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8"
        >
          {/* Left Side - Text Content */}
          <div className="text-content w-full lg:w-7/12 md:pr-8 pr-0">
            <h4 className="text-2xl md:text-2xl font-poppins leading-none font-semibold mb-6 text-black">
              {info.title}
            </h4>
            {info.paragraphs.map((para, i) => (
              <p key={i} className="text-black text-base  mb-4">
                {para}
              </p>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="image-content w-full lg:w-5/12 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <img
                src={info.image} 
                alt="Child with laptop"
                width={400}
                height={350}
                className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain"
              
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Information;
