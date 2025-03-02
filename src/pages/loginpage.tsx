// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="flex h-screen w-full">
//       {/* Left Side - Image Section */}
//       <div className="hidden md:flex w-1/2 bg-[#F8F9FB] flex-col  justify-center  px-10">
//         {/* <img src="/cogatImage/LOGO.png" alt="AceCogAT" className="h-28 w-full object-fit mb-4 ms-0" /> */}
//         <img
//           src="/cogatImage/Login-Robot.png"
//           alt="Login Illustration"
//           className="w-full max-w-xl mx-auto mt-4"
//         />
//       </div>

//       {/* Right Side - Form Section */}
//       <div className="flex justify-center items-center w-full md:w-1/2 px-6 md:px-12 lg:px-20">
//         <div className="w-full max-w-lg">
//           {/* Header */}
//           <h2 className="text-3xl font-bold text-[#D42331]">Sign In</h2>
//           <p className="text-gray-600 mt-2">Sign in to start using acecogat.ai</p>

//           {/* Form */}
//           <div className="bg-white p-6 mt-6 border border-gray-200 shadow-sm rounded-md">
//           <img src="/cogatImage/LOGO.png" alt="AceCogAT" className="mx-auto block md:hidden h-12 mb-4" />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email ID"
//               value={formData.email}
//               onChange={handleChange}
//               className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="p-3 w-full border border-gray-300 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-red-400"
//             />

//             <div className="flex justify-end mt-2">
//               <Link href="#" className="text-sm text-gray-500 hover:text-red-500">
//                 Forgot Password?
//               </Link>
//             </div>

//             <button className="mt-4 w-full bg-[#D42331] text-white py-3 rounded-md font-semibold hover:bg-red-600 transition">
//               Login
//             </button>

//             {/* Social Login Buttons */}
//             <div className="flex gap-4 mt-6">
//               <button className="w-1/2 border border-red-400 text-red-500 py-3 rounded-md hover:bg-red-50 transition">
//                 Sign up with Google
//               </button>
//               <button className="w-1/2 border border-red-400 text-red-500 py-3 rounded-md hover:bg-red-50 transition">
//                 Sign up with Facebook
//               </button>
//             </div>

//             {/* Terms & Navigation */}
//             <p className="text-sm text-gray-600 text-center mt-4">
//               By continuing, you agree to our{" "}
//               <Link href="#" className="text-blue-500 underline">
//                 Terms of Use
//               </Link>{" "}
//               and{" "}
//               <Link href="#" className="text-blue-500 underline">
//                 Privacy Policy
//               </Link>
//             </p>

//             <p className="text-sm text-gray-600 text-center mt-2">
//               Don&apos;t have an account?{" "}
//               <Link href="/signup" className="text-red-500 font-semibold">
//                 Sign up
//               </Link>
//             </p>

           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login; 