import { Link } from "react-scroll";

const Faq = () => {
  const faqs = [
    { id: "cogat", question: "How is CogAT® Testing Format?" },
    { id: "schools", question: "Why do Schools use the CogAT®?" },
    { id: "results", question: "How is the CogAT Administered?" },
    {
      id: "preparation",
      question: "How do I know which CogAT test level my child should prepare for?",
    },
    {
      id: "preparation2",
      question: "Understanding the Results",
    },
  ];

  return (
    <div className="faq-section w-full  max-w-8xl relative px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28">
      {/* Heading */}
      <h2 className="text-[#007bff] text-2xl  md:text-3xl font-semibold my-2">
        FAQs
      </h2>
      <p className="text-gray-600 text-base my-2">
        Some frequently asked questions to guide you
      </p>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item border-gray-400 border ">
            <div key={faq.id} className="p-2 bg-[#EFF2FB] border-gray-400  shadow-sm">
              <Link
                to={faq.id}
                smooth={true}
                duration={500}
                className="text-base text-gray-800 hover:text-[#007bff] transition cursor-pointer"
              >
                {faq.question}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
