"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
        isScrolled ? "bg-[#EAF6FF] shadow-md py-2.5" : "bg-transparent"
      }`}
    >
      {/* AuthButtons at the top before scrolling */}
      {!isScrolled && (
        <div className="hidden lg:flex">
          <AuthButtons isScrolled={isScrolled} />
        </div>
      )}

      <div className="mx-auto w-full max-w-8xl flex items-center justify-between px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/cogatImage/LOGO.png"
            alt="AceCogAT"
            className="h-[40px] object-contain"
          />
        </div>

        {/* Desktop Navigation - Hidden on 1024px (lg) and below */}
        <nav
          className={`hidden lg:flex space-x-4 whitespace-nowrap text-black tracking-normal font-normal font-poppins ${
            isScrolled ? "absolute left-1/2 transform -translate-x-1/2" : ""
          }`}
        >
          {menuItems.map((item, index) => (
            <motion.div key={index} className="relative">
              <Link
                href={item.path}
                className={`text-sm lg:text-base relative px-2 py-2 transition ${
                  pathname === item.path
                    ? "text-[#c1141d] font-semibold"
                    : "hover:text-[#c1141d]"
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

        {/* AuthButtons on the right when scrolled - Hidden on 1024px (lg) and below */}
        {isScrolled && (
          <div className="hidden lg:flex">
            <AuthButtons isScrolled={isScrolled} />
          </div>
        )}

        {/* Mobile Menu Button - Visible on 1024px (lg) and below */}
        <div className="lg:hidden flex items-center">
          <AuthButtons isScrolled={isScrolled} />
          <button onClick={() => setMenuOpen(true)}>
            <Menu className="text-2xl text-black" />
          </button>
        </div>
      </div>

      {/* Mobile Full Page Menu - Only on lg (1024px) and below */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#F0FCFF] z-50 flex flex-col items-start pl-6 justify-start space-y-20 pt-16 lg:hidden"
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-xl text-white bg-black p-3 rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              <X />
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
