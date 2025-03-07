"use client";

const Disclaimer = () => {
  return (
    <div className="flex justify-center items-center h-80 bg-[#FEFCE3] px-4">
      <div className="relative max-w-3xl bg-white text-center rounded-2xl p-6 md:p-8 shadow-lg">
        {/* Top Left Decorative Element */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FDC65B] rounded-full opacity-80"></div>

        {/* Bottom Right Decorative Element */}
        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#FDC65B] opacity-80 rounded-br-2xl"></div>

        {/* Disclaimer Heading */}
        {/* <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Disclaimer</h2> */}

        {/* Disclaimer Text */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">
          <span className="font-semibold">Cognitive Abilities Test™ (CogAT®)</span> is a registered trademark of Riverside Assessments, LLC.
          AceCogAT and its parent, Lumina Ed, are not affiliated with Riverside Insights, nor is the content on this site promoted or endorsed by Riverside or its affiliates.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
