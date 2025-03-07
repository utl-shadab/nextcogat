"use client";

// import { useState } from "react";
import Link from "next/link";
// import AuthModal from "./AuthModal";
// import EmailModal from "./EmailModal";
// import ResetPasswordModal from "./ResetPasswordModal";
import { LogIn, LogInIcon, User2Icon } from "lucide-react";


const AuthButtons = () => {
  // const [isLoginOpen, setLoginOpen] = useState(false);
  // const [isEmailOpen, setEmailOpen] = useState(false);
  // const [isResetOpen, setResetOpen] = useState(false);

  return (
    <>
      <div className="container  mx-auto w-full max-w-8xl flex items-center justify-between pt-0 md:pt-4 px-2 sm:px-4 md:px-10 lg-px-14">
        <div className="flex  justify-center  md:justify-end items-center space-x-4 ml-auto">
          {/* Sign Up Button */}
          <Link href="/signup" className="inline-flex">
            <button className="w-full md:w-28 py-0.5 md:py-2 whitespace-nowrap px-3 md:px-0.5  font-poppins border border-red-600  text-[#E4434B] font-medium md:font-semibold  rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-white">
              <User2Icon className="md:hidden" />
              <span className="hidden md:inline-block">Sign Up</span>
            </button>
          </Link>

          {/* Login Button */}
          <Link href="/signin" className="inline-flex">
            <button className="w-full md:w-28 py-0.5 md:py-2 whitespace-nowrap px-3 md:px-0.5  font-poppins border border-red-600  text-[#E4434B] font-medium md:font-semibold  rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-white">
              <LogInIcon className="md:hidden" />
              <span className="hidden md:inline-block">Sign in</span>
            </button>
          </Link>
          {/* <button
            onClick={() => {
              setLoginOpen(true);
              setEmailOpen(false);
              setResetOpen(false);
            }}
            className="w-full md:w-28 py-0.5 md:py-2 whitespace-nowrap px-3 md:px-0.5  font-poppins border border-red-600  text-[#E4434B] font-medium md:font-semibold  rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-white">
            <LogIn className="md:hidden" />
            <span className="hidden md:inline-block">Login</span>
          </button> */}
        </div>
      </div>

      {/* LOGIN MODAL */}
      {/* <AuthModal
        isOpen={isLoginOpen}
        closeModal={() => setLoginOpen(false)}
        openForgotPassword={() => {
          setLoginOpen(false);
          setEmailOpen(true);
        }}
      /> */}

      {/* EMAIL MODAL */}
      {/* <EmailModal
        isOpen={isEmailOpen}
        closeModal={() => setEmailOpen(false)}
        openLoginModal={() => {
          setEmailOpen(false);
          setLoginOpen(true);
        }}
        openResetPassword={() => {
          setEmailOpen(false);
          setResetOpen(true);
        }}
      /> */}

      {/* RESET PASSWORD MODAL */}
      {/* <ResetPasswordModal
        isOpen={isResetOpen}
        closeModal={() => setResetOpen(false)}
        openLogin={() => {
          setResetOpen(false);
          setLoginOpen(true);
        }}
      /> */}
    </>
  );
};

export default AuthButtons;