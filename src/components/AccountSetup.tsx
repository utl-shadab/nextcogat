"use client";

import { useState } from "react";
import { Eye, EyeOff, User } from "lucide-react";

interface AccountSetupProps {
  onNext: () => void;
}

const AccountSetup: React.FC<AccountSetupProps> = ({ onNext }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <div className="text-gray-700 text-md font-semibold">
        <h3 className="flex items-center">
          <User className="mr-2" size={20} />
          Account Setup
        </h3>
        <p className="text-sm text-gray-700">Set password for user@xyz.com</p>
      </div>
      <div className="w-full max-w-xl mx-auto mt-10">
  <div className="mt-4 space-y-4 mx-0 md:mx-10">
    
    {/* Password Input */}
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 text-lg  text-[#E4434B] font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <span
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </span>
    </div>

    {/* Confirm Password Input */}
    <div className="relative w-full">
      <input
        type={showConfirmPassword ? "text" : "password"}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full p-3 text-lg  text-[#E4434B] font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <span
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
      >
        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </span>
    </div>
  </div>

  {/* Button with Same Width as Inputs */}
  <button
    className="mt-6 w-full md:w-[calc(100%-4.5rem)] bg-[#D42331] text-white py-3 rounded-md hover:bg-red-600 transition mx-auto block"
    onClick={onNext}
  >
    Set Password
  </button>
</div>
    </div>
  );
};

export default AccountSetup;
