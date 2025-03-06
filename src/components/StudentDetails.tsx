"use client";

import { Plus, User, Trash2, ChevronDown, ChevronUp, Asterisk } from "lucide-react";
import { useState } from "react";

interface Student {
  id: number;
  name: string;
  grade: string;
  cogatLevel: string;
  testPeriod: string;
  isSaved: boolean;
}

interface StudentDetailsProps {
  onProceed: () => void;
  onCancel: () => void;
}

const StudentDetails: React.FC<StudentDetailsProps> = ({ onProceed, onCancel }) => {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "", grade: "", cogatLevel: "CogAT Level (default)", testPeriod: "Fall 2024", isSaved: false },
  ]);
  const [expandedStudent, setExpandedStudent] = useState<number | null>(1);

  const addStudent = () => {
    if (students.length < 3) {
      setStudents([
        ...students,
        { id: students.length + 1, name: "", grade: "", cogatLevel: "CogAT Level (default)", testPeriod: "Fall 2024", isSaved: false },
      ]);
    }
  };

  const removeStudent = (id: number) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const toggleStudent = (id: number) => {
    setExpandedStudent(expandedStudent === id ? null : id);
  };

  const saveStudent = (id: number) => {
    setStudents(students.map((s) => (s.id === id ? { ...s, isSaved: true } : s)));
    setExpandedStudent(null);
  };

  return (
    <div className="bg-white my-10 shadow-sm rounded-md w-full">
      <h3 className="text-lg font-semibold flex items-center">
        <User className="mr-2 text-gray-600" /> Student Details
      </h3>
      <p className="text-gray-500 text-sm">*You can add a maximum of three students</p>

      {students.map((student) => (
        <div key={student.id} className="border border-blue-400 p-4 rounded-lg mt-4 ">
          {/* Student Header with Expand/Collapse */}
          <div
            className="flex justify-between items-center hover-click cursor-pointer p-3 rounded-md  relative"
            onClick={() => toggleStudent(student.id)}
          >



            <h4 className="text-blue-600 font-medium mr-10">Student {student.id}</h4>

            {/* Show Details if Collapsed & Saved */}
            {student.isSaved && expandedStudent !== student.id && (
              <div className="flex justify-between items-center w-[40rem] text-gray-800">
                <span className="text-black font-medium">{student.name}</span>
                <span className="text-gray-600 text-sm">
                  {student.grade} | {student.cogatLevel}
                </span>
              </div>
            )}
            <div className="flex items-center gap-4">
              <div className="text-lg font-bold text-black relative group">
                +20$
                <span className="hidden group-hover:block absolute -bottom-5 text-green-500 text-xs">(80% discount)</span>
              </div>
              <Trash2
                className="hidden group-hover:block text-gray-400 cursor-pointer hover:text-[#E4434B] transition"
                onClick={(e) => {
                  e.stopPropagation();
                  removeStudent(student.id);
                }}
              />
              {expandedStudent === student.id ? (
                <ChevronUp className="text-blue-600" />
              ) : (
                <ChevronDown className="text-gray-500" />
              )}
            </div>
          </div>

          {/* Form Fields - Shown only if expanded */}
          {expandedStudent === student.id && (
            <div className="mt-2">
              <div className="grid xl:grid-cols-12 gap-4">
                <div className="xl:col-span-8">
                  {/* Student Name */}
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="text"
                      placeholder="Student Full Name"
                      className="w-full pl-10 p-4 mt-2 text-black bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                      value={student.name}
                      onChange={(e) =>
                        setStudents(
                          students.map((s) => (s.id === student.id ? { ...s, name: e.target.value } : s))
                        )
                      }
                    />
                  </div>

                  {/* Grade & Cogat Level */}
                  <div className="grid lg:grid-cols-2 gap-2 mt-2">
                    <div className="relative">
                      {/* <Asterisk className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} /> */}
                      <select
                        className="w-full pl-10 p-4 text-black bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                        value={student.grade}
                        onChange={(e) =>
                          setStudents(students.map((s) => (s.id === student.id ? { ...s, grade: e.target.value } : s)))
                        }
                      >
                        <option value="">Select Grade</option>
                        <option>Grade K</option>
                        <option>Grade 1</option>
                      </select>
                    </div>

                    <div className="relative">
                      <select
                        className="w-full p-4 text-black bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                        value={student.cogatLevel}
                        onChange={(e) =>
                          setStudents(students.map((s) => (s.id === student.id ? { ...s, cogatLevel: e.target.value } : s)))
                        }
                      >
                        <option>CogAT Level (default)</option>
                        <option>CogAT Level 1</option>
                        <option>CogAT Level 2</option>
                      </select>
                      <p className="text-end text-xs text-[#0056D2] mt-2">Show Guidelines Table</p>
                    </div>
                  </div>
                </div>

                {/* Test Period Selection */}
                <div className=" xl:col-span-3 self-end">
                  <div className="font-bold text-black mb-2 opacity-80 text-lg">Select Test Period</div>
                  <div className="flex flex-wrap gap-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name={`testPeriod${student.id}`}
                        className="accent-[#E4434B] peer"
                        checked={student.testPeriod === "Fall 2024"}
                        onChange={() =>
                          setStudents(students.map((s) => (s.id === student.id ? { ...s, testPeriod: "Fall 2024" } : s)))
                        }
                      />
                      <span className="peer-checked:text-[#E4434B] ml-2">Fall 2024</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name={`testPeriod${student.id}`}
                        className="accent-[#E4434B] peer"
                        checked={student.testPeriod === "Spring 2025"}
                        onChange={() =>
                          setStudents(students.map((s) => (s.id === student.id ? { ...s, testPeriod: "Spring 2025" } : s)))
                        }
                      />
                      <span className="peer-checked:text-[#E4434B] ml-2">Spring 2025</span>
                    </label>
                  </div>
                </div>
              </div>
              <button onClick={() => saveStudent(student.id)} className="px-6 py-2  bg-[#E4434B] text-white rounded-md mt-4">
                Save
              </button>
            </div>
          )}
        </div>
      ))}
      {students.length < 3 && (
        <button
          onClick={addStudent}
          className="mt-4 w-full p-2 flex items-center justify-center gap-2 bg-red-100 text-[#E4434B] rounded-md border border-red-400"
        >
          <Plus /> Add Student {students.length + 1}
        </button>
      )}
      {/* Bottom Buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        <button onClick={onProceed} className="px-6 py-2 bg-[#E4434B] text-white rounded-md">
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
