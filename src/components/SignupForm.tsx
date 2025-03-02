"use client";

import { useState } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import Image from "next/image";

interface SignupFormProps {
    onVerify: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onVerify }) => {
    const [formData, setFormData] = useState({ firstName: "", email: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex justify-between items-start w-full">
            {/* Left Section - Account Setup */}
            <div className="hidden md:block w-1/5 text-gray-700 text-md font-semibold">
                <h3 className="flex items-center">
                    <span className="mr-2">👤</span> Account Setup
                </h3>
            </div>

            {/* Center - Form */}
            <div className="w-full md:w-1/2 mt-10">
                <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="p-3 pl-12 w-full text-red-500 font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                        onChange={handleChange}
                    />
                </div>

                <div className="relative mt-4">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        className="p-3 pl-12 w-full text-red-500 font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                        onChange={handleChange}
                    />
                </div>

                <button
                    className="mt-4 w-full bg-[#D42331] font-poppins text-white py-3 rounded-md font-medium hover:bg-red-600 transition"
                    onClick={onVerify}
                >
                    Verify Email
                </button>
                {/* Social Login */}
                <div className="flex gap-4 mt-6 font-poppins text-xs font-medium">
                    <button className="w-1/2 flex items-center justify-center border border-gray-400 text-[#03014C] py-3 rounded-md hover:bg-blue-100 transition">
                        <Image src="/cogatImage/google.svg" alt="Google" width={20} height={20} className="mr-1" />
                        Sign up with Google
                    </button>
                    <button className="w-1/2 flex items-center justify-center border border-gray-400 text-[#03014C] py-3 rounded-md hover:bg-blue-100 transition">
                        <Image src="/cogatImage/facebook.svg" alt="Facebook" width={20} height={20} className="mr-1" />
                        Sign up with Facebook
                    </button>
                </div>
                {/* Terms & Conditions */}
                <p className="text-sm text-gray-600 text-center mt-4">
                    By continuing, you agree to our{" "}
                    <a href="#" className="text-blue-500 underline">
                        Terms of Use
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-500 underline">
                        Privacy Policy
                    </a>
                </p>

                <p className="text-sm text-gray-600 text-center mt-2">
                    Already have an account?{" "}
                    <a href="/login" className="text-red-500 font-semibold">
                        Sign in
                    </a>
                </p>

                <p className="text-center mt-4">
                    <a href="/" className="text-red-500 ">
                        Go to Home
                    </a>
                </p>
            </div>

            {/* Right - Empty Space for Alignment */}
            <div className="hidden md:block w-1/5"></div>
        </div>
    );
};

export default SignupForm;
