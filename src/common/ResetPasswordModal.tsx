"use client";

import { useState } from "react";
import { FaLock } from "react-icons/fa";
import Modal from "./Modal";
import StudentModal from "./StudentModal";

interface ResetPasswordModalProps {
  isOpen: boolean;
  closeModal: () => void;
  openLogin: () => void;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({ isOpen, closeModal }) => {
  const [isStudentModalOpen, setStudentModalOpen] = useState(false);
  const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when typing
  };

  const handleSubmit = () => {
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    alert("Password successfully reset!");
    closeModal();
  };
  const handleOpenStudentModal = () => {
    closeModal();
    setTimeout(() => setStudentModalOpen(true), 200);
  };
  return (
    <>

      <Modal isOpen={isOpen} closeModal={closeModal} width="max-w-5xl" height="h-[550px]" grayBackground>
        {/* Left Side - Image */}
        <div className="hidden md:block w-[48%]">
          <img src="/cogatImage/modalimg.png" alt="Reset Password Illustration" className="w-full" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-[45%] md:px-8">
          <h2 className="text-2xl font-bold text-red-600">Reset Password</h2>
          <p className="text-gray-600 font-poppins mt-2 text-xs">Enter your new password below</p>

          <div className="relative mt-20 font-poppins">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={formData.password}
              onChange={handleChange}
              className="p-3 pl-12 w-full text-red-500 font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="relative mt-4 font-poppins">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-3 pl-12 w-full text-red-500 font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {error && <p className="text-sm text-red-500 font-poppins mt-2">{error}</p>}

          {/* Reset Button */}
          <button
            className="mt-4 w-full font-poppins bg-[#E4434B] text-white py-3 rounded-md font-semibold hover:bg-red-700 transition"
            onClick={handleSubmit}
          >
            Reset Password
          </button>

          <p className="text-sm font-poppins mt-10 text-red-500 text-center  cursor-pointer" onClick={closeModal}>
            Cancel & Close
          </p>
        </div>
        {isOpen && (
          <div className="absolute bottom-0 left-1/2 transform z-50 -translate-x-1/2">
            <button
              className="px-7 py-1 bg-white hover:bg-red-500 text-red-500 border-red-500 border  hover:text-white rounded-md  transition"
              onClick={handleOpenStudentModal}
            >
              Edit
            </button>
          </div>
        )}
      </Modal>
      <StudentModal isOpen={isStudentModalOpen} closeModal={() => setStudentModalOpen(false)} />
    </>
  );
};

export default ResetPasswordModal;
