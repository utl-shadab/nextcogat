"use client";

import { useState, useRef, useEffect } from "react";

interface OTPFormProps {
  onChangeEmail: () => void;
  onValidate: () => void;
}

const OTPForm: React.FC<OTPFormProps> = ({ onChangeEmail, onValidate }) => {
  const [otp, setOtp] = useState(["1", "2", "3", "4", "5", "6"]); // Default OTP: 123456
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isResendDisabled) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval!);
            setIsResendDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval!);
  }, [isResendDisabled]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOTP = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimer(30);
    setIsResendDisabled(true);
  };

  const isOTPComplete = otp.every((digit) => digit !== "");

  return (
    <>
      <div className="">
        <div className=" text-gray-700 text-md font-semibold">
          <h3 className="">
            <span className="mr-2">👤</span> Account Setup
          </h3>
        </div>

        {/* Center - Form */}
        <div className="w-full max-w-xl mx-auto mt-10">
          <div className="text-center">
            <p className="text-sm text-gray-700">Please enter the One-Time Code to verify your account</p>
            <p className="text-sm text-gray-600 mt-1">
              OTP was sent to <span className="text-blue-500">user@xyz.com</span>, <br /> Wrong ID?{" "}
              <span className="text-red-500 cursor-pointer mt-1" onClick={onChangeEmail}>
                Change
              </span>
            </p>
          </div>

          {/* OTP Input Fields */}
          <div className="flex justify-center gap-3 mt-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleBackspace(index, e)}
                maxLength={1}
                className="w-[9vw] h-[9vw] md:w-14 md:h-14 text-center text-2xl text-red-500 font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            ))}
          </div>

          {/* Validate Button */}
          <button
            className={`mt-6 w-full py-3 rounded-md font-medium transition ${isOTPComplete ? "bg-[#D42331] text-white hover:bg-red-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            onClick={onValidate}
            disabled={!isOTPComplete}
          >
            Validate
          </button>

          {/* Resend OTP Code with Timer */}
          <p
            className={`text-sm mt-6 text-center cursor-pointer ${isResendDisabled ? "text-gray-400" : "text-red-500 hover:underline"
              }`}
            onClick={!isResendDisabled ? handleResendOTP : undefined}
          >
            {isResendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP Code"}
          </p>

          <p className="h-20"></p>
        </div>

        {/* Right Section - Empty for Equal Spacing */}
        <div className="hidden md:block w-1/5"></div>
      </div>
    </>
  );
};

export default OTPForm;
