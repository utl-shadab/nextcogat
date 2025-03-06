
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full  overflow-hidden">
      {/* Cloud Background */}
      <div className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center">
        <div
          className="absolute top-0 w-full h-full bg-cover  bg-no-repeat"
          style={{ backgroundImage: "url('/cogatImage/footerbg.png')" }}
        ></div>

        {/* Footer Content */}
        <div className="relative z-10  mt-40 w-full max-w-8xl flex flex-col md:flex-row items-center justify-between py-3 px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/cogatImage/LOGO.png" alt="AceCogAT" width={150} height={40}  />
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 md:mt-0">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 lg:gap-8 justify-center text-black font-medium text-sm lg:text-base">
              <li>
                <Link href="/" className=" text-[#E4434B]">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about-cogat">ABOUT COGAT</Link>
              </li>
              <li>
                <Link href="/about">ABOUT US</Link>
              </li>
              <li>
                <Link href="/about-giftedness">ABOUT GIFTEDNESS</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT US</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Copyright & Contact */}
      <div className="bg-black text-white text-center text-xs md:text-sm py-4 relative z-10   w-full max-w-8xl flex flex-col md:flex-row items-center justify-between  px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28">
        <p>© 2025 acecogat.ai Pvt Ltd.</p>
        <p className="mt-1 md:mt-0">contact@acecogat.ai</p>
      </div>
    </footer>
  );
};

export default Footer;
