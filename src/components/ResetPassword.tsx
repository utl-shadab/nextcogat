"use client";

import { useState } from "react";
import { Mail, User } from "lucide-react";

interface ResetPasswordProps {
    onNext: () => void;
    onBack: () => void;

}

const ResetPassword: React.FC<ResetPasswordProps> = ({onBack, onNext }) => {
    const [email, setEmail] = useState("");

    return (
        <div>
            <div className="font-semibold">
                <h3 className="flex items-center text-3xl text-[#E4434B]">
                    Reset Password
                </h3>
                <p className="text-sm text-gray-700">Enter you registered email id to send rest link</p>
            </div>
            <div className="max-w-96 w-full mx-auto mt-10">
                <div className="mt-4 space-y-4 mx-0 md:mx-10">

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
                </div>

                {/* Button with Same Width as Inputs */}
                <button
                    className="mt-6 w-full md:w-[calc(100%-4.5rem)] bg-[#CC1A23] text-white py-3 rounded-md hover:bg-red-600 transition mx-auto block"
                    onClick={onNext}
                >
                    Send
                </button>
                <div className="text-center mt-20">
                    <p className="text-base text-[#E4434B] cursor-pointer" onClick={onBack}>Try Login Again</p>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
