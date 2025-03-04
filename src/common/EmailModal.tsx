"use client";

import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Modal from "./Modal";

interface ResetPasswordModalProps {
  isOpen: boolean;
  closeModal: () => void;
  openLoginModal: () => void;
  openResetPassword: () => void;
}

const EmailModal: React.FC<ResetPasswordModalProps> = ({ isOpen, closeModal, openLoginModal, openResetPassword }) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} width="max-w-5xl" height="h-[550px]">
      {/* Left Side - Image */}
      <div className="hidden md:block w-[48%]">
        <Image src="/cogatImage/modalimg.png" alt="Reset Password Illustration" width={450} height={220} />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-[45%] md:px-8">
        <h2 className="text-2xl font-bold text-red-600">Reset Password</h2>
        <p className="text-gray-600 mt-2 text-xs font-poppins">
          Enter your registered email ID to send a reset link.
        </p>

        <div className="mt-20 relative">
          <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            className="p-3 pl-12 w-full text-red-500 font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <button className=" font-poppins mt-4 w-full bg-[#E4434B] text-white py-3 rounded-md font-semibold hover:bg-red-700 transition"
          onClick={openResetPassword}>
          Open
        </button>

        <p className="text-sm text-red-500 font-poppins text-center mt-20 cursor-pointer" onClick={openLoginModal}>
          Try Login Again
        </p>

        <p className="text-sm text-red-500 font-poppins text-center mt-2 cursor-pointer" onClick={closeModal}>
          Cancel & Close
        </p>
      </div>
    </Modal>
  );
};

export default EmailModal;
