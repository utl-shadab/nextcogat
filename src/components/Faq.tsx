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
    <div className="faq-section w-full max-w-8xl relative px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28">
      {/* Heading */}
      <h2 className="text-[#007bff] text-2xl md:text-3xl font-semibold my-2">
        {title}
      </h2>
      <p className="text-gray-600 text-base my-2">{subtitle}</p>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item border-gray-400 border rounded-md">
            <div className="p-2 bg-[#EFF2FB] border-gray-400 shadow-sm rounded-md">
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

export default FAQ;
