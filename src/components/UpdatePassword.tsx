"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

interface UpdatePasswordProps {
    onNext: () => void;
}

const UpdatePassword: React.FC<UpdatePasswordProps> = ({onNext }) => {
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

    };

    return (
        <>
            <div className="max-w-96 w-full mx-auto mt-10">
            <div className="font-semibold">
                <h3 className="flex items-center text-3xl text-[#E4434B]">
                    Reset Password
                </h3>
                <p className="text-sm text-gray-700">Enter your new password below</p>
            </div>

                <div className="relative mt-20 font-poppins">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="password"
                        name="password"
                        placeholder="New Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="p-3 pl-12 w-full  text-[#E4434B] font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                <div className="relative mt-4 font-poppins">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="p-3 pl-12 w-full  text-[#E4434B] font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                {error && <p className="text-sm  text-[#E4434B] font-poppins mt-2">{error}</p>}

                {/* Reset Button */}
                <button
                    className="mt-4 w-full font-poppins bg-[#E4434B] text-white py-3 rounded-md font-medium hover:bg-red-700 transition"
                    onClick={handleSubmit}
                   
                >
                    Reset Password
                </button>

              
            <div className="mt-10 text-center">
             <p className="text-[#e4434b] text-sm font-medium cursor-pointer"  onClick={onNext}> Edit</p>
            </div>
            </div>
        </>
    );
};

export default UpdatePassword;