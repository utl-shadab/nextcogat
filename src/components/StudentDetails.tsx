"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaUser, FaPlus } from "react-icons/fa";

interface StudentDetailsProps {
  onProceed: () => void;
  onCancel: () => void;
}

const StudentDetails: React.FC<StudentDetailsProps> = ({ onProceed, onCancel }) => {
  const [students, setStudents] = useState([{ id: 1, name: "", grade: "", testPeriod: "Fall 2024" }]);
  const [expandedStudent, setExpandedStudent] = useState<number | null>(1);

  const addStudent = () => {
    if (students.length < 3) {
      setStudents([...students, { id: students.length + 1, name: "", grade: "", testPeriod: "Fall 2024" }]);
    }
  };

  const toggleStudent = (id: number) => {
    setExpandedStudent(expandedStudent === id ? null : id);
  };

  return (
    <div className="bg-white  my-10 shadow-sm rounded-md w-full">
      <h3 className="text-lg font-semibold flex items-center">
        <FaUser className="mr-2 text-gray-600" /> Student Details
      </h3>
      <p className="text-gray-500 text-sm">*You can add a maximum of three students</p>

      {students.map((student) => (
        <div key={student.id} className="border border-blue-400 p-4 rounded-lg mt-4">
          {/* Student Header with Expand/Collapse */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleStudent(student.id)}
          >
            <h4 className="text-blue-600 font-medium">Student {student.id}</h4>
            <div className="text-2xl font-bold text-black">$100</div>
            {/* {expandedStudent === student.id ? (
              <FaChevronUp className="text-blue-600" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )} */}
          </div>

          {/* Form Fields - Shown only if expanded */}
          {expandedStudent === student.id && (
            <div className="mt-2">
              <div className="grid xl:grid-cols-12 gap-4">
                <div className="xl:col-span-8">
                  <input
                    type="text"
                    placeholder="Student Full Name"
                    className="w-full p-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                  />
                  <div className="grid lg:grid-cols-2 gap-2 mt-2">
                    <div className="w-full">
                      <select className="w-full p-2 border rounded-md">
                        <option>Select Grade</option>
                        <option>Grade K</option>
                        <option>Grade 1</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <select className="w-full p-2 border rounded-md">
                        <option>CogAT Level (default)</option>
                      </select>
                      <p className="text-end text-xs text-[#0056D2] mt-2">Show Guidelines Table</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 xl:col-span-4 self-end">
                  <div className="font-bold text-black mb-2 opacity-80 text-lg">Select Test Period</div>
                  <div className="flex flex-wrap gap-2">
                    <label htmlFor="fall" className="flex items-center">
                      <input
                        id="fall"
                        type="radio"
                        name={`testPeriod`}
                        className="accent-red-600 peer"
                        // name={`testPeriod${student.id}`}
                        // checked={student.testPeriod === "Fall 2024"}
                        checked={true}
                      />
                      <span className="peer-checked:text-red-600 ml-2">Fall 2024</span>
                    </label>
                    <label htmlFor="spring" className="flex items-center">
                      <input
                        id="spring"
                        type="radio"
                        name={`testPeriod`}
                        className="accent-red-600 peer"
                      // name={`testPeriod${student.id}`}
                      // checked={student.testPeriod === "Spring 2025"}
                      />
                      <span className="peer-checked:text-red-600 ml-2">Spring 2025</span>
                    </label>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 rounded-md text-white bg-[#0056d2] hover:bg-[#0058d2de] disabled:text-gray-600 disabled:bg-gray-300 mt-4" disabled>Save</button>
            </div>
          )}
        </div>
      ))}

      {students.length < 3 && (
        <button
          onClick={addStudent}
          className="mt-4 w-full p-2 flex items-center justify-center gap-2 bg-red-100 text-red-500 rounded-md border border-red-400"
        >
          <FaPlus /> Add Student {students.length + 1}
        </button>
      )}

      {/* Bottom Buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        <button onClick={onProceed} className="px-6 py-2 bg-red-500 text-white rounded-md">
          Proceed to Payment
        </button>
        <button onClick={onCancel} className="px-6 py-2 border border-gray-400 text-gray-500 rounded-md">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default StudentDetails;
