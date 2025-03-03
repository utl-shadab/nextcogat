import React from "react";

const Results = () => {
  return (
    <div className="container bg-[#F7F7FA] rounded-[64px] mb-8 ">
      <div className="flex items-center flex-col md:flex-row gap-6 p-4 sm:p-8 md:p-12 lg:p-16 ">
        {/* Heading & Description */}
        <div className="mb-8 w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-poppins font-medium text-black">
            Understanding the Results
          </h2>
          <p className="text-gray-700 text-base mt-4 ">
            After the test, you will receive a report detailing your child’s scores in each
            of the three cognitive areas. The scores are usually presented as percentiles,
            indicating how your child performed relative to their peers. This information
            can provide valuable insights into your child’s cognitive strengths and areas
            for growth.
            For more detailed information about the CogAT, visit Riverside Insights, the
            publisher of the test. They offer comprehensive guides and resources for
            parents and educators. By understanding the CogAT and supporting your child
            through the process, you can help them feel prepared and confident, setting
            them up for success in their educational journey.
          </p>

        </div>

        {/* Responsive Table */}
        <div className="w-full md:w-1/2">
          {/* Table for Desktop & Tablet */}
          <div className="hidden md:block w-full overflow-x-auto">
            <table className="w-full border border-black">
              <thead >
                <tr className="bg-gray-200  text-left">
                  <th className="p-2  border border-black text-md font-poppins font-medium ">
                    Type of Assessment
                  </th>
                  <th className="p-2 border border-black text-md font-poppins font-medium ">
                    Typical Score Range of Students Identified for Services
                  </th>
                  <th className="p-2 border border-black text-md font-poppins font-medium ">
                    Your student&apos;s score
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-2 border border-black">
                    CogAT Screening Form
                  </td>
                  <td className="p-2 border border-black">
                    Standard Age Score 126–160 <br />
                    (95–99 Age Percentile Rank)
                  </td>
                  <td className="p-2 border border-black">
                    Standard Age Score (SAS): 149 <br />
                    <hr className="my-1 text-black" />
                    Age Percentile Rank (APR): 99
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Content Block for Mobile */}
          <div className="md:hidden bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-black mb-2">
              Type of Assessment
            </h3>
            <p className="text-gray-700 mb-4">CogAT Screening Form</p>

            <h3 className="text-lg font-semibold text-black mb-2">
              Typical Score Range of Students Identified for Services
            </h3>
            <p className="text-gray-700 mb-4">
              Standard Age Score 126–160 (95–99 Age Percentile Rank)
            </p>

            <h3 className="text-lg font-semibold text-black mb-2">
              Your Student&apos;s Score
            </h3>
            <p className="text-gray-700">
              Standard Age Score (SAS): 149 <br />
              Age Percentile Rank (APR): 99
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;