"use client";

import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

interface StudentModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

const students = [
    { id: 1, name: "Abiuday Sharma" },
    { id: 2, name: "Manyata Sharma" },
    { id: 3, name: "Saurabh" },
];

const StudentModal: React.FC<StudentModalProps> = ({ isOpen, closeModal }) => {
    const [selectedStudent, setSelectedStudent] = useState<number | null>(null);

    return (
        <Modal isOpen={isOpen} closeModal={closeModal} width="max-w-5xl" height="h-[550px]">

            <div className="w-full text-center relative">
                <div className="">
                    <Image
                        src="/cogatImage/LOGO.png"
                        alt="AceCogAT Logo"
                        width={140}
                        height={50}
                        className="object-contain"
                    />
                </div>
                {/* Title */}
                <h2 className="text-2xl font-medium font-fredoka  text-[#E4434B]">Select Student to Enter</h2>
                <p className="text-gray-600 text-sm  mt-2 font-poppins">
                    You can switch to student from user Page or Top right link
                </p>

                {/* Student Cards */}
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 ">
                    {students.map((student) => (
                        <div
                            key={student.id}
                            onClick={() => setSelectedStudent(student.id)}
                            className={`p-4 rounded-xl border cursor-pointer text-center  border-[#045D9F] shadow-md font-poppins transition-all duration-300 ease-in-out 
                                ${selectedStudent === student.id
                                    ? "bg-blue-600 text-white border-blue-700"
                                    : "bg-blue-100 text-blue-800 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-700"
                                }`}
                        >
                            <div className="flex flex-col justify-center gap-4 ">
                                <p className="text-xs font-semibold">Student {student.id}</p>
                                <p className="text-md font-medium">{student.name}</p>
                                <div className="flex justify-center gap-4 items-center">
                                    <p className="text-sm mt-2">Grade: <b>K</b> </p><p className="text-sm mt-2">CogAT Test: <b>Sept 2024</b></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enter Button */}
                <button
                    className={`mt-20 w-36 md:w-80 py-3 rounded-md font-semibold transition ${selectedStudent
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    disabled={!selectedStudent}
                    onClick={closeModal}
                >
                    Enter
                </button>

                {/* Cancel & Close */}
                <p className="text-sm  text-[#E4434B] cursor-pointer mt-3 font-poppins" onClick={closeModal}>
                    Cancel & Close
                </p>
            </div>
        </Modal>
    );
};

export default StudentModal;
