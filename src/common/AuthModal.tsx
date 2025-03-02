"use client";

import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Modal from "../common/Modal";

interface AuthModalProps {
    isOpen: boolean;
    closeModal: () => void;
    openResetModal?: () => void;
    openForgotPassword: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, closeModal, openResetModal, openForgotPassword }) => {
    const [passwordError, setPasswordError] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    if (!isOpen) return null;
    return (
        <Modal isOpen={isOpen} closeModal={closeModal} width="max-w-5xl">
            {/* Left Side (Image) */}
            <div className="hidden md:block w-[48%]">
                <Image
                    src="/cogatImage/modalimg.png"
                    alt="Login Illustration"
                    width={450}
                    height={220}
                    className="rounded-l-lg"
                />
            </div>

            {/* Right Side (Form) */}
            <div className="w-full md:w-[45%] p-8">
                {/* Form Header */}
                <h2 className="text-2xl font-bold text-red-600">Sign In</h2>
                <p className="text-gray-600 mt-2 font-poppins">Sign in to start using acecogat.ai</p>

                {/* Form Inputs */}
                <div className="mt-6">
                    {/* Email Input */}
                    <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email ID"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-3 pl-12 w-full text-red-500 font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative mt-4">
                        <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`p-3 pl-12 w-full border text-red-500 ${passwordError ? "border-red-500" : "border-none bg-gray-100"
                                } rounded-md focus:outline-none focus:ring-2 focus:ring-red-400`}
                        />
                        {passwordError && <p className="text-sm text-red-500 mt-1">Wrong password, try again</p>}
                    </div>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end mt-2">
                    <Link href="#" className="text-xs text-[#03014C] font-poppins hover:text-red-500"
                        onClick={openForgotPassword}
                    >
                        Forgot Password?
                    </Link>
                </div>

                {/* Login Button */}
                <button className="mt-4 w-full font-poppins bg-[#E4434B] text-white py-3 rounded-md font-semibold hover:bg-red-700 transition">
                    Login
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

                {/* Terms & Navigation */}
                <p className="text-sm text-gray-600 text-center mt-4 font-poppins">
                    By continuing, you agree to our{" "}
                    <Link href="#" className="text-blue-500 underline">
                        Terms of Use
                    </Link>{" "}
                    <br />
                    and{" "}
                    <Link href="#" className="text-blue-500 underline">
                        Privacy Policy
                    </Link>
                </p>

                <p className="text-sm text-gray-600 text-center mt-2 font-poppins">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-red-500 font-semibold">
                        Sign up
                    </Link>
                </p>

                <p className="text-sm text-red-500 text-center mt-2 cursor-pointer font-poppins" onClick={closeModal}>
                    Cancel & Close
                </p>
            </div>
        </Modal>
    );
};

export default AuthModal;
