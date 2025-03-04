"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
  grayBackground?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  children,
  width = "max-w-5xl",
  height = "h-auto md:h-[550x]",
  grayBackground = false,
}) => {
  useEffect(() => {
    if (isOpen) {
      // Disable background scroll
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.documentElement.style.overflow = "hidden";
    } else {
      // Restore scroll when modal is closed
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      className={`fixed inset-0 flex justify-center items-center p-4 z-50 ${grayBackground ? "bg-gray-500" : "bg-black bg-opacity-50"
        }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

    >
      <motion.div
        className={`relative w-full ${width} ${height} bg-white rounded-3xl shadow-lg flex flex-col overflow-hidden overflow-y-auto p-6`}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black border border-gray-400 rounded-full p-2"
          onClick={closeModal}
        >
          <X size={24} />
        </button>

        {/* Modal Content */}
        <div className="relative flex flex-1 justify-center items-center">{children}</div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
