
import LevelTabs from "./LevelTabs";

const LevelCogat = () => {
  return (
    <div className="levelCogat-section mx-auto  " id="cogat"
      style={{
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(180deg, #BDECFF 0%, #FFFFFF 100%)",
      }}>
      {/* Cloud Top Section */}
      <div className="cloud-top bg-[#E7F5FD] ">
        <div className="content-container w-full   max-w-8xl relative px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28 text-center">
          {/* Title */}
          <h1 className="section-title text-2xl md:text-3xl mt-20 text-start">
            CogAT®Testing Format?
          </h1>

          {/* Description */}
          <p className="section-description text-gray-700 text-start text-base md:text-lg mt-4">
            The CogAT<sup>®</sup> assesses your child’s cognitive development in three key areas:
            verbal, quantitative, and non-verbal abilities. Rather than focusing on academic knowledge,
            it evaluates reasoning skills that your child uses to solve problems and think critically.
          </p>

          {/* Note Container */}
          <div className="note-container bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-6 rounded-lg">
            <p className="note-text text-start text-sm md:text-base text-gray-800">
              <strong>Note:</strong> There are some variances in the testing format for students in grades 3 and up.
              If your child is in grades 3–5, click on the Level 3–5 tab below to learn more about the test format for those grades.
            </p>
          </div>
        </div>
      </div>

      <div className="container w-full max-w-8xl mt-10 relative px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28">
        {/* Level Tabs Component */}
        <LevelTabs />
      </div>
    </div>
  );
};

export default LevelCogat;
