"use client";

import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";

interface SignInFormProps {
    onLogin: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onLogin }) => {
    const [formData, setFormData] = useState({ password: "", email: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex items-center justify-center h-full  px-4">
            <div className="bg-white  rounded-xl p-10 flex flex-col md:flex-row items-center md:max-w-5xl w-full">
                {/* Left Side - Image */}
                <div className="hidden md:flex w-1/2 justify-center">
                    <Image 
                        src="/cogatImage/Login-Robot.png" 
                        alt="Login Illustration" 
                        width={400} 
                        height={400} 
                        className="max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 flex flex-col items-center">
            
                    {/* Email Input */}
                    <div className="relative w-full mb-4">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email ID"
                            className="p-3 pl-12 w-full text-[#E4434B] font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative w-full mb-4">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="p-3 pl-12 w-full text-[#E4434B] font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Forgot Password */}
                    <p className="text-[#848484] text-xs text-end cursor-pointer w-full" onClick={onLogin}>
                        Forgot Password?
                    </p>

                    {/* Login Button */}
                    <button
                        className="mt-4 w-full bg-[#E4434B] font-poppins text-white py-3 rounded-md font-medium hover:bg-red-600 transition"
                        onClick={onLogin}
                    >
                        Login
                    </button>

                    {/* Social Login */}
                    <div className="grid md:grid-cols-2 gap-4 mt-6 font-poppins text-xs font-medium w-full">
                        <button className="w-full flex items-center justify-center border border-gray-400 text-[#03014C] py-3 rounded-md hover:bg-blue-100 transition">
                            <Image src="/cogatImage/google.svg" alt="Google" width={20} height={20} className="mr-2" />
                            Sign in with Google
                        </button>
                        <button className="w-full flex items-center justify-center border border-gray-400 text-[#03014C] py-3 rounded-md hover:bg-blue-100 transition">
                            <Image src="/cogatImage/facebook.svg" alt="Facebook" width={20} height={20} className="mr-2" />
                            Sign in with Facebook
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

                    {/* Signup Link */}
                    <p className="text-sm text-gray-600 text-center mt-2">
                        Don't have an account?{" "}
                        <a href="/signup" className="text-[#E4434B] font-medium">
                            Sign Up
                        </a>
                    </p>

                    {/* Home Page Link */}
                    <p className="text-center mt-4">
                        <a href="/" className="text-[#E4434B]">
                            Go to Home Page
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
