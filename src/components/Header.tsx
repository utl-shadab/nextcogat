"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import AuthButtons from "common/AuthButtons";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About CogAT", path: "/about-cogat" },
  { name: "About Us", path: "/about" },
  { name: "About Giftedness", path: "/about-giftedness" },
  { name: "Contact Us", path: "/contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all font-sans capitalize ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Hide AuthButtons when scrolled */}
      {!isScrolled && <div className="hidden  md:flex lg:flex"><AuthButtons/></div>}

      <div className=" mx-auto w-full max-w-8xl  flex items-center justify-between py-3 px-4 md:px-8 lg:px-12 xl:px-28">
        
        <div className="flex items-center">
          <img src="/cogatImage/LOGO.png" alt="AceCogAT" className="h-[40px]" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5 lg:space-x-3 text-black tracking-normal font-normal font-poppins relative">
          {menuItems.map((item, index) => (
            <motion.div key={index} className="relative">
              <Link
                href={item.path}
                className={`relative px-3 py-2 transition ${
                  pathname === item.path ? "text-[#c1141d] font-semibold" : "hover:text-[#c1141d]"
                }`}
              >
                {item.name}
              </Link>
              {/* Active Border Effect */}
              {pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-[-21px] left-0 w-full h-[3px] bg-[#c1141d]"
                />
              )}
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="sm:hidden md:hidden flex items-center">
         <AuthButtons />
        
          <button onClick={() => setMenuOpen(true)}>
            <IoMdMenu className="text-2xl text-black" />
          </button>
        </div>
      </div>

      {/* Mobile Full Page Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#F0FCFF] z-50 flex flex-col items-start pl-6 justify-start space-y-20 pt-16"
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-xl text-white bg-black p-3 rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              <IoMdClose />
            </button>

            {/* Mobile Menu Links */}
            <nav className="flex flex-col space-y-6 text-black text-3xl font-bold font-poppins">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={`transition ${
                    pathname === item.path ? "text-[#c1141d]" : "hover:text-[#c1141d]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
