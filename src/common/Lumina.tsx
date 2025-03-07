const Lumina = () => {
  return (
    <section className="container py-16">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-medium text-black">
        We Are <span className="text-[#000]">Lumina Ed.</span>
      </h2>

      {/* Content */}
      <div className="mt-6 text-lg text-gray-800 leading-relaxed">
        <p>
          We are an education technology company with a vision to develop next-generation test practice
          and learning tools that will revolutionize test preparation for students in K-12 and beyond.
        </p>
        <br />
        <p>
          We are researchers in Computer Science and communications professionals who have worked for some
          of the biggest tech companies in the world that are at the forefront of the AI revolution.
          But we are first and foremost, parents who are passionate about seeing children succeed.
        </p>
        <br />
        <p>
          When our kids were in elementary school and preparing to take the CogAT, we were frustrated by the
          extremely limited number of test preparation resources available to us. We knew that it was important
          for our kids to practice with full-length tests so that they could be prepared for test day.
          It was also important to us that there was a data-driven approach to test-taking — one that dove
          deep and analyzed their weak spots so that they could practice and improve on those questions
          that were the most challenging for them. This is why we created AceCogAT.ai, which helped our kids
          practice for the CogAT and gain acceptance into the gifted program in our state.
        </p>
        <br />
        <p>
          We are excited to continue building tools and apps that will help your child succeed in their
          academic journey.
        </p>
      </div>
    </section>
  );
};

export default Lumina;
