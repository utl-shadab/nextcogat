"use client";

import { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaTrashAlt } from "react-icons/fa";

const PaymentOtp = ({ onBack, onNext }: { onBack: () => void; onNext: () => void }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
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
    <div className="flex flex-col md:flex-row justify-between bg-white p-6 mt-6 border border-gray-300 my-10 shadow-sm rounded-md w-full">
      {/* Left Section - OTP Form */}
      <div className="w-full md:w-1/2">
        <h3 className="text-lg font-semibold flex items-center">
          <FaArrowLeft className="mr-2 cursor-pointer text-gray-600" onClick={onBack} />
          Payment
        </h3>

        <p className="text-sm text-gray-700 text-center mt-2">
          Please enter the One-Time Code to verify your account
        </p>
        <p className="text-sm text-gray-600 text-center mt-1">
          You must have received OTP on your registered mobile number
        </p>

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
              className="w-14 h-14 text-center text-2xl text-red-500 bg-gray-100 rounded-md focus:ring-2 focus:ring-red-400"
            />
          ))}
        </div>

        {/* Validate Button */}
        <button
          onClick={onNext}
          className={`mt-6 w-full p-3 rounded-md font-medium transition ${
            isOTPComplete ? "bg-[#D42331] text-white hover:bg-red-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isOTPComplete}
        >
          Validate
        </button>

        {/* Resend OTP Code */}
        <p
          className={`text-sm mt-4 text-center cursor-pointer ${
            isResendDisabled ? "text-gray-400" : "text-red-500 hover:underline"
          }`}
          onClick={!isResendDisabled ? handleResendOTP : undefined}
        >
          {isResendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP Code"}
        </p>

        {/* Back to Previous Page */}
        <p className="text-sm text-red-500 mt-4 text-center cursor-pointer hover:underline" onClick={onBack}>
          Go back to previous page
        </p>
      </div>

      {/* Right Section - Pricing Summary */}
      <div className="w-full md:w-1/3 bg-gray-100 p-5 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">Pricing Summary</h3>
          <button className="text-gray-500 text-sm border border-gray-300 px-3 py-1 rounded-md">Edit</button>
        </div>

        {/* Student 1 */}
        <div className="bg-white p-3 rounded-md shadow-sm mb-2">
          <h4 className="text-blue-600 font-medium">Student 1 ▼</h4>
          <p className="text-sm text-gray-600">Abiduyah Sharma</p>
          <p className="text-sm text-gray-500">Grade: K &nbsp;&nbsp; <span className="font-semibold">CogAT Test: Sept 2024</span></p>
          <p className="text-lg font-bold mt-1">$80</p>
        </div>

        {/* Student 2 */}
        <div className="bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
          <div>
            <h4 className="text-blue-600 font-medium">Student 2 ▼</h4>
            <p className="text-sm text-gray-600">Abiduyah Sharma</p>
            <p className="text-sm text-gray-500">Grade: K &nbsp;&nbsp; <span className="font-semibold">CogAT Test: Sept 2024</span></p>
            <p className="text-lg font-bold mt-1">$20 <span className="text-green-500 text-sm">(80% discount)</span></p>
          </div>
          <FaTrashAlt className="text-gray-400 cursor-pointer hover:text-red-500" />
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-lg font-bold">$100</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOtp;
