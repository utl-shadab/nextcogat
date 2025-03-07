import { Link } from "react-scroll";

interface FAQItem {
  id: string;
  question: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

const FAQ = ({ title = "FAQs", subtitle = "Some frequently asked questions to guide you", faqs }: FAQProps) => {
  return (
    <div className="faq-section w-full container relative ">
      {/* Heading */}
      <h2 className="text-[#0479D0] text-center text-2xl md:text-3xl font-medium my-2">
        {title}
      </h2>
      <p className="text-gray-600 text-base my-1 text-center">{subtitle}</p>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 mt-7 md:grid-cols-2 mx-2 gap-x-20 gap-y-3">
        {faqs.map((faq) => (
          <Link
            key={faq.id}
            to={faq.id}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <div className="faq-item border-gray-300 border  p-3 bg-[#EFF2FB] shadow-sm  transition">
              <p className="text-base text-gray-800 hover:text-[#E4434B]">
                {faq.question}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
