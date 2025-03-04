"use client";

import { useState } from "react";
import SignupForm from "./SignupForm";
import OTPForm from "./OTPForm";
import AccountSetup from "./AccountSetup";
import StudentDetails from "./StudentDetails";
import Payment from "./Payment";
import PaymentOTP from "./PaymentOTP";
import Finish from "./Finish";

const AuthLayout = () => {
  const [step, setStep] = useState<
    "signup" | "otp" | "accountSetup" | "studentDetails" | "payment" | "paymentOtp" | "finish"
  >("signup");

  return (
    <div className="flex items-center py-10 h-100 w-full">
      {/* Left Section (Image & Branding) */}
      <div className="hidden lg:flex lg:w-1/4 bg-[#EFF2FB] flex-col items-center justify-center px-10 fixed top-0 h-full">
        <img src="/fixed.png" alt="Signup Illustration" className="w-fit mt-5" />
      </div>

      {/* Right Section (Form) */}
      <div className="w-full lg:w-3/4 flex justify-center items-center lg:max-w-6xl lg:ml-auto px-4 lg:px-12 ">
        <div className="w-full">
          <div className="text-end mb-4">
            {/* Go Home Button */}
            <button className="mt-4 md:mt-0 px-6 py-2 border border-[#D42331] text-[#D42331] text-xs md:text-sm rounded-md hover:bg-[#D42331] hover:text-white transition-all">
              Go to Home Page
            </button>
          </div>
          {/* Header Section */}

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#D42331] flex items-center">
              {step === "signup"
                ? "Registration"
                : step === "otp"
                  ? "Verify OTP"
                  : step === "accountSetup"
                    ? "Account Setup"
                    : step === "studentDetails"
                      ? "Student Details"
                      : step === "payment"
                        ? "Payment"
                        : step === "paymentOtp"
                          ? "Verify Payment"
                          : "Completed"}
              <span className="text-xs md:text-sm italic font-normal text-gray-500 ml-1">
                (All Fields are mandatory)
              </span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">
              {step === "signup"
                ? "Follow the instructions to register."
                : step === "otp"
                  ? "Enter the OTP sent to your email."
                  : step === "accountSetup"
                    ? "Set your secure password."
                    : step === "studentDetails"
                      ? "Fill in your student details."
                      : step === "payment"
                        ? "Complete your payment."
                        : step === "paymentOtp"
                          ? "Verify payment OTP."
                          : "Registration completed!"}
            </p>
          </div>


          {/* Form Container */}
          <div className="bg-white p-4 mt-6 border border-gray-300 my-10 shadow-sm rounded-md w-full">
            <div className="w-full min-h-[320px] md:min-h-[400px] flex flex-col justify-center">
              {step === "signup" && <SignupForm onVerify={() => setStep("otp")} />}
              {step === "otp" && <OTPForm onChangeEmail={() => setStep("signup")} onValidate={() => setStep("accountSetup")} />}
              {step === "accountSetup" && <AccountSetup onNext={() => setStep("studentDetails")} />}
              {step === "studentDetails" && <StudentDetails onProceed={() => setStep("payment")} onCancel={() => setStep("signup")} />}
              {step === "payment" && <Payment onNext={() => setStep("paymentOtp")} />}
              {step === "paymentOtp" && <PaymentOTP onNext={() => setStep("finish")} />}
              {step === "finish" && <Finish />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
