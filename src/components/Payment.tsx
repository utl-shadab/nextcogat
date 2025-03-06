"use client";

import { useState } from "react";
import { CreditCard, Calendar, Lock, Trash2,  Landmark } from "lucide-react";

const Payment = ({ onNext }: { onNext: () => void }) => {
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState({ cardNumber: "", expiryDate: "", cvc: "" });

  // Regex Validation Functions
  const validateCardNumber = (num: string) => /^\d{16}$/.test(num.replace(/\s/g, ""));
  const validateExpiryDate = (date: string) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(date);
  const validateCVC = (cvc: string) => /^\d{3,4}$/.test(cvc);

  // Card Number Formatting (1234 5678 9012 3456)
  const handleCardNumberChange = (value: string) => {
    let numericValue = value.replace(/\D/g, ""); // Remove non-numeric chars
    numericValue = numericValue.slice(0, 16); // Limit to 16 digits

    // Add spaces every 4 digits
    let formattedValue = numericValue.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(formattedValue);
  };

  // Expiry Date Formatting (MM/YY)
  const handleExpiryDateChange = (value: string) => {
    let numericValue = value.replace(/\D/g, "");
    numericValue = numericValue.slice(0, 4);

    if (numericValue.length > 2) {
      numericValue = numericValue.replace(/(\d{2})(\d{0,2})/, "$1/$2");
    }
    setExpiryDate(numericValue);
  };

  const handleSubmit = () => {
    let newErrors = { cardNumber: "", expiryDate: "", cvc: "" };

    if (!validateCardNumber(cardNumber)) newErrors.cardNumber = "Invalid Card Number (16 digits)";
    if (!validateExpiryDate(expiryDate)) newErrors.expiryDate = "MM/YY format required";
    if (!validateCVC(cvc)) newErrors.cvc = "Invalid CVC (3-4 digits)";

    setErrors(newErrors);

    if (!newErrors.cardNumber && !newErrors.expiryDate && !newErrors.cvc) {
      onNext();
    }
  };

  return (
    <div className="grid md:grid-cols-12 gap-8 bg-white shadow-sm rounded-md w-full">
      {/* Left Section - Payment Form */}
      <div className="md:col-span-6">
        <h3 className="text-lg font-medium flex items-center">
          <CreditCard className="mr-2 text-gray-600" /> Payment
        </h3>

        {/* Payment Method Selection */}
        <p className="mt-10 font-medium ">Payment method</p>
        <div className="flex gap-3 mt-2">
          {[
            { method: "Venmo", icon: <CreditCard size={20} /> },
            { method: "Paypal", icon: <CreditCard size={20} /> },
            { method: "Card", icon: <CreditCard size={20} /> },
          ].map(({ method, icon }) => (
            <button
              key={method}
              onClick={() => setPaymentMethod(method)}
              className={`flex px-4 flex-col  items-start justify-center w-full md:w-32 h-14 border-2 rounded-md transition-all 
                ${paymentMethod === method
                  ? "border-red-500  text-[#E4434B] text-xs"
                  : "border-gray-400 text-black text-xs hover:border-red-500 hover: text-[#E4434B]"
                }`}
            >
              {icon}
              <span className=" text-sm font-medium">{method}</span>
            </button>
          ))}
        </div>


        {/* Payment Form */}
        {paymentMethod === "Card" && (
          <div>
            <div className="relative mt-4">
              <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => handleCardNumberChange(e.target.value)}
                className="w-full p-3 pl-12  text-gray-500 font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              {errors.cardNumber && <p className="text-sm  text-[#E4434B]">{errors.cardNumber}</p>}
            </div>

            <div className="flex  gap-2 mt-2">
              <div className="relative w-1/2">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Expiry Date (MM/YY)"
                  value={expiryDate}
                  onChange={(e) => handleExpiryDateChange(e.target.value)}
                  className="w-full p-3 pl-12  text-gray-500 font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                {errors.expiryDate && <p className="text-sm  text-[#E4434B]">{errors.expiryDate}</p>}
              </div>

              <div className="relative w-1/2">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="CVC Number"
                  value={cvc}
                  maxLength={3}
                  onChange={(e) => setCvc(e.target.value.replace(/\D/g, ""))}
                  className="w-full p-3 pl-12  text-gray-500 font-poppins bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                {errors.cvc && <p className="text-sm  text-[#E4434B]">{errors.cvc}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Pay Now Button */}
        <button
          onClick={handleSubmit}
          className="mt-20 w-full p-3 bg-red-500 text-white rounded-md transition hover:bg-red-600"
        >
          Pay Now
        </button>
        <p className="mt-4 text-[9.5px] text-black text-justify">
          By providing your payment method, you allow LuminaEd. to charge your payment method for future payments
          in accordance with their terms, and you agree to the{" "}
          <span className=" text-[#E4434B] cursor-pointer">Terms of Use</span> and{" "}
          <span className=" text-[#E4434B] cursor-pointer">Privacy Policy</span>.

          You can cancel your subscription anytime.
        </p>
      </div>

      {/* Right Section - Pricing Summary */}
      <div className="md:col-span-6 lg:col-span-5 h-fit lg:col-start-8 bg-[#F7F7F7] p-4 rounded-xl mt-2 md:mt-10 border border-[#B2B2B278] shadow-md">
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

                <p className=" text-gray-900 mb-1">Abiduyah Sharma</p>
                <p className=" text-gray-500 text-xs flex flex-wrap gap-x-4 gap-y-1">
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
              <Trash2 className="text-gray-400 cursor-pointer hover: text-[#E4434B] transition ml-auto" />
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

export default Payment;
