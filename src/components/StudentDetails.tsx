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
    <div className="bg-white p-6 mt-6 border border-gray-300 my-10 shadow-sm rounded-md w-full">
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
            {expandedStudent === student.id ? (
              <FaChevronUp className="text-blue-600" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </div>

          {/* Form Fields - Shown only if expanded */}
          {expandedStudent === student.id && (
            <div className="mt-2">
              <input
                type="text"
                placeholder="Student Full Name"
                className="w-full p-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
              <div className="flex gap-2 mt-2">
                <select className="w-1/2 p-2 border rounded-md">
                  <option>Select Grade</option>
                  <option>Grade K</option>
                  <option>Grade 1</option>
                </select>
                <select className="w-1/2 p-2 border rounded-md">
                  <option>CogAT Level (default)</option>
                </select>
              </div>
              <div className="flex gap-4 mt-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name={`testPeriod${student.id}`}
                    checked={student.testPeriod === "Fall 2024"}
                  />
                  <span className="ml-2">Fall 2024</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name={`testPeriod${student.id}`}
                    checked={student.testPeriod === "Spring 2025"}
                  />
                  <span className="ml-2">Spring 2025</span>
                </label>
              </div>
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
      <div className="flex justify-between mt-6">
        <button onClick={onCancel} className="px-6 py-2 border border-gray-400 text-gray-500 rounded-md">
          Cancel
        </button>
        <button onClick={onProceed} className="px-6 py-2 bg-red-500 text-white rounded-md">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default StudentDetails;
