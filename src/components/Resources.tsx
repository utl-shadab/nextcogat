"use client";

import { ArrowRight, ExternalLink } from "lucide-react"; // Using Lucide React icons

const resources = [
  {
    title: "National Association for Gifted Children",
    url: "#",
  },
  {
    title: "Davidson Institute: Gifted Traits and Characteristics",
    url: "#",
  },
  {
    title: "CNBC: 5 Signs Your Child is ‘Highly Gifted’",
    url: "#",
  },
];

const Resources = () => {
  return (
    <section className="w-full max-w-8xl text-center px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28 py-20">
      {/* Heading */}
      <h2 className="text-[#007bff] text-2xl md:text-3xl font-semibold mb-6">
        Links & Resources
      </h2>

      {/* Resource Box */}
      <div className="bg-[#F4F6F9] rounded-[40px] py-8 px-6 md:px-10 lg:px-16 shadow-md max-w-4xl mx-auto">
        {/* List of Links */}
        <ul className="divide-y divide-gray-300">
          {resources.map((resource, index) => (
            <li key={index} className="flex flex-wrap gap-2 justify-between md:justify-between items-center py-4">
              {/* Left Side: Icon + Text */}
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 text-lg hover:text-[#007bff] transition"
              >
                <ArrowRight className="text-[#007bff] w-5 h-5 mr-2" />
                {resource.title}
              </a>

              {/* Right Side: "Go to Link" */}
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex mx-auto sm:mx-0 items-center text-[#007bff] text-lg font-medium hover:underline"
              >
                Go to Link <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resources;
