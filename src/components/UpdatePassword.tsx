"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import Image from "next/image";

interface UpdatePasswordProps {
    onNext: () => void;
}

const UpdatePassword: React.FC<UpdatePasswordProps> = ({ onNext }) => {
    const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(""); 
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
    };

    return (
        <div className="flex items-center justify-center h-full md:h-[500px] px-4">
            <div className="bg-white  rounded-xl p-10 flex flex-col md:flex-row items-center md:max-w-5xl w-full">
                
                {/* Left Side - Image */}
                <div className="hidden md:flex w-1/2 justify-center">
                    <Image 
                        src="/cogatImage/Login-Robot.png" 
                        alt="Reset Password Illustration" 
                        width={400} 
                        height={400} 
                        className="max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <div className="mt-10 w-full max-w-sm">
                        {/* New Password Input */}
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="password"
                                name="password"
                                placeholder="New Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-3 pl-12 text-lg text-gray-700 font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        {/* Confirm Password Input */}
                        <div className="relative mt-4">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full p-3 pl-12 text-lg text-gray-700 font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        {error && <p className="text-sm text-[#E4434B] font-poppins mt-2">{error}</p>}

                        {/* Reset Button */}
                        <button
                            className="mt-6 w-full bg-[#E4434B] text-white py-3 rounded-md font-medium hover:bg-red-700 transition"
                            // onClick={handleSubmit}
                            onClick={onNext}
                        >
                            Reset Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePassword;
