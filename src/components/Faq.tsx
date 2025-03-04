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
          <Link 
            key={faq.id} 
            to={faq.id} 
            smooth={true} 
            duration={500} 
            className="cursor-pointer"
          >
            <div className="faq-item border-gray-400 border rounded-md p-2 bg-[#EFF2FB] shadow-sm hover:bg-[#dde7f5] transition">
              <p className="text-base text-gray-800 hover:text-[#007bff]">
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
