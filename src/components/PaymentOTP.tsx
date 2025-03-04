"use client";

import { useState, useRef, useEffect } from "react";
import {  Trash2, User2Icon } from "lucide-react";

interface PaymentOtpProps {
  onBack: () => void;
  onNext: () => void;
}

const PaymentOtp: React.FC<PaymentOtpProps> = ({ onBack, onNext }) => {
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
    <div className="grid md:grid-cols-12 gap-8 bg-white mt-6 my-10 shadow-sm rounded-md w-full">
      {/* Left Section - OTP Form */}
      <div className="md:col-span-6 p-6">
        <h3 className="text-lg ml-3 font-semibold flex items-center">
          <User2Icon className="mr-2 cursor-pointer text-gray-600" size={20}  />
          Payment
        </h3>

        <p className="text-[15px] text-gray-700 text-center mt-2">
          Please enter the One-Time Code to verify your account
        </p>
        <p className="text-[13px] text-gray-600 text-center mt-1">
          You must have received OTP on your registered mobile number
        </p>

        {/* OTP Input Fields */}
        <div className="flex justify-center gap-3 mt-4 md:mt-20">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleBackspace(index, e)}
              maxLength={1}
              className="w-[9vw] h-[9vw] md:w-6 md:h-6 lg:w-10 xl:w-14 lg:h-10 xl:h-14 text-center text-2xl text-red-500 bg-gray-100 rounded-md focus:ring-2 focus:ring-red-400"
            />
          ))}
        </div>

        {/* Validate Button */}
        <button
          onClick={onNext}
          className={`mt-6 w-full md:w-96 md:flex md:justify-center md:m-auto md:mt-7 p-3 rounded-md font-medium transition ${
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
      <div className="md:col-span-6 lg:col-span-5 lg:col-start-8 bg-[#F7F7F7] p-4 rounded-xl border border-[#B2B2B278] shadow-md">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b border-gray-300 py-3 mb-3">
          <h3 className="text-lg font-semibold">Pricing Summary</h3>
          <button className="text-gray-500 text-sm border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-200 transition">
            Edit
          </button>
        </div>

        {/* Student 1 */}
        <div className="bg-white p-4 rounded-md shadow-sm mb-3 border border-[#B2B2B278]">
          <div className="grid grid-cols-12 items-center gap-4 text-sm">
            <div className="col-span-9">
              <h4 className="text-blue-600 mb-2 font-medium flex items-center">
                Student 1 <span className="ml-1 text-xs">▼</span>
              </h4>
              <p className="text-gray-900 mb-1">Abiduyah Sharma</p>
              <p className="text-gray-500 text-xs flex flex-wrap gap-x-4 gap-y-1">
                <span>
                  Grade: <span className="font-bold text-black">K</span>
                </span>
                <span className="font-semibold">
                  CogAT Test: <span className="text-black">Sept 2024</span>
                </span>
              </p>
            </div>
            <div className="text-end col-span-3">
              <p className="text-lg font-semibold mt-1">80$</p>
            </div>
          </div>
        </div>

        {/* Student 2 */}
        <div className="bg-white p-4 rounded-md shadow-sm border border-[#B2B2B278]">
          <div className="grid grid-cols-12 items-center gap-4 text-sm">
            <div className="col-span-9">
              <h4 className="text-blue-600 mb-2 font-medium flex items-center">
                Student 2 <span className="ml-1 text-xs">▼</span>
              </h4>
              <div className="flex flex-col">
                <p className="text-gray-900 mb-1">Abiduyah Sharma</p>
                <p className="text-gray-500 text-xs flex flex-wrap gap-x-4 gap-y-1">
                  <span>
                    Grade: <span className="font-bold text-black">K</span>
                  </span>
                  <span className="font-semibold">
                    CogAT Test: <span className="text-black">Sept 2024</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="text-end col-span-3">
              <Trash2 className="text-gray-400 cursor-pointer hover:text-red-500 transition ml-auto" size={20} />
              <p className="font-semibold text-lg mt-2">
                20$ <span className="text-green-500 block text-[10px] leading-tight">(80% discount)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Total Section */}
        <div className="flex justify-end items-center gap-4 mt-3 border-t pt-3">
          <p className="text-md font-bold">Total</p>
          <p className="text-lg font-bold">100$</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOtp;
