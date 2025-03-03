"use client";

import { useState } from "react";

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
      <div className=" text-gray-700 text-md font-semibold">
        <h3 className="">
          <span className="mr-2">👤</span> Account Setup
        </h3>
        <p className="text-sm text-gray-700">Set password for user@xyz.com</p>
      </div>
      <div className="w-full max-w-xl mx-auto mt-10">
        {/* <div className="text-center"></div> */}

        <div className="mt-4 space-y-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </span>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border rounded-md"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              👁️
            </span>
          </div>
        </div>

        <button
          className="mt-6 w-full bg-[#D42331] text-white py-3 rounded-md hover:bg-red-600 transition"
          onClick={onNext}
        >
          Set Password
        </button>
      </div>
    </div>
  );
};

export default AccountSetup;
