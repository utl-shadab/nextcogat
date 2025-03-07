"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import Image from "next/image";

interface ResetPasswordProps {
    onNext: () => void;
    onBack: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ onBack, onNext }) => {
    const [email, setEmail] = useState("");

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
                        {/* Email Input */}
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 pl-12 text-lg text-gray-700 font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        {/* Send Button */}
                        <button
                            className="mt-6 w-full bg-[#CC1A23] text-white py-3 rounded-md hover:bg-red-600 transition"
                            onClick={onNext}
                        >
                            Send Reset Link
                        </button>

                        {/* Back to Login */}
                        <div className="text-center mt-10">
                            <p className="text-base text-[#E4434B] cursor-pointer" onClick={onBack}>
                                Try Login Again
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
