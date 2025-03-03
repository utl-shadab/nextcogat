"use client";

import { useState } from "react";
import Link from "next/link";
import AuthModal from "./AuthModal";
import EmailModal from "./EmailModal";
import ResetPasswordModal from "./ResetPasswordModal";
import { LogIn, UserPlus } from "lucide-react";


const AuthButtons = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isEmailOpen, setEmailOpen] = useState(false);
  const [isResetOpen, setResetOpen] = useState(false);

  return (
    <>
     <div
        className={`container mx-auto w-full max-w-8xl flex items-center justify-between  transition-all duration-300 ${
          isScrolled ? "pt-0" : "md:pt-4"
        }`}
      >
        <div className="flex  justify-center  md:justify-end items-center space-x-4 ml-auto">
          {/* Sign Up Button */}
          <Link href="/signup" className="inline-flex">
            <button className="w-full md:w-28 py-0.5 md:py-2 whitespace-nowrap px-3 md:px-0.5  font-poppins border border-red-600 text-red-600 font-medium md:font-semibold  rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-white">
              {/* <FaUserLock className="md:hidden" /> */}
              <UserPlus className="md:hidden w-5 h-5" />
              <span className="hidden md:inline-block">Sign Up</span>
            </button>
          </Link>

          {/* Login Button */}
          <button
            onClick={() => {
              setLoginOpen(true);
              setEmailOpen(false);
              setResetOpen(false);
            }}
            className="w-full md:w-28 py-0.5 md:py-2 whitespace-nowrap px-3 md:px-0.5  font-poppins border border-red-600 text-red-600 font-medium md:font-semibold  rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-white">
            {/* <FiLogIn className="md:hidden" /> */}
            <LogIn className="md:hidden w-5 h-5" />
            <span className="hidden md:inline-block">Login</span>
          </button>
        </div>
      </div>

      {/* LOGIN MODAL */}
      <AuthModal
        isOpen={isLoginOpen}
        closeModal={() => setLoginOpen(false)}
        openForgotPassword={() => {
          setLoginOpen(false);
          setEmailOpen(true);
        }}
      />

      {/* EMAIL MODAL */}
      <EmailModal
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
      />

      {/* RESET PASSWORD MODAL */}
      <ResetPasswordModal
        isOpen={isResetOpen}
        closeModal={() => setResetOpen(false)}
        openLogin={() => {
          setResetOpen(false);
          setLoginOpen(true);
        }}
      />
    </>
  );
};

export default AuthButtons;
