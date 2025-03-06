"use client";

import { useState } from "react";
import { Mail, User2Icon } from "lucide-react";
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
        <div className="">
            {/* Left Section - Account Setup */}
            <div className="hidden md:block text-gray-700 text-md font-semibold">
                <h3 className="flex items-center">
                    <span className="mr-2">👤</span> Account Setup
                </h3>
            </div>

            {/* Center - Form */}
            <div className="max-w-xl mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* First Name */}
    <div className="relative">
        <User2Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="p-3 pl-12 w-full text-[#E4434B] font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            onChange={handleChange}
        />
    </div>

    {/* Last Name */}
    <div className="relative">
        <User2Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="p-3 pl-12 w-full text-[#E4434B] font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            onChange={handleChange}
        />
    </div>
</div>

{/* Email Input (Full Width) */}
<div className="relative mt-4">
    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <input
        type="email"
        name="email"
        placeholder="Email ID"
        className="p-3 pl-12 w-full text-[#E4434B] font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        onChange={handleChange}
    />
</div>
                <button
                    className="mt-4 w-full bg-[#E4434B] font-poppins text-white py-3 rounded-md font-medium hover:bg-red-600 transition"
                    onClick={onVerify}
                >
                    Verify Email
                </button>
                {/* Social Login */}
                <div className="grid md:grid-cols-2 gap-4 mt-6 font-poppins text-xs font-medium">
                    <button className="w-full flex items-center justify-center border border-gray-400 text-[#03014C] py-3 rounded-md hover:bg-blue-100 transition">
                        <Image src="/cogatImage/google.svg" alt="Google" width={20} height={20} className="mr-1" />
                        Sign up with Google
                    </button>
                    <button className="w-full flex items-center justify-center border border-gray-400 text-[#03014C] py-3 rounded-md hover:bg-blue-100 transition">
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
                    <a href="/login" className="text-[#E4434B] font-medium">
                        Sign in
                    </a>
                </p>

                <p className="text-center mt-4">
                    <a href="/" className="text-[#E4434B] ">
                        Go to Home Page
                    </a>
                </p>
            </div>

            {/* Right - Empty Space for Alignment */}
            <div className="hidden md:block w-1/5"></div>
        </div>
    );
};

export default SignupForm;
