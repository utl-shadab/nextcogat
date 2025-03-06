"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Mail, MessageSquare, Phone, User2Icon } from "lucide-react";

// TypeScript interface
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10,15}$/, "Phone number must be between 10-15 digits")
    .required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <div className="max-w-8xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-32 py-4">
      <div className="bg-white flex flex-col md:flex-row gap-10 w-full">
        <div className="w-full md:w-1/2 relative">
          <div className="h-[300px] md:h-[400px] lg:h-[500px] w-full relative">
            <img
              src="/cogatImage/contact.png"
              alt="Contact Us"
              className="rounded-l-lg object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-medium font-poppins mb-16">Send a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4"> 
            
            {/* Name Field */}
            <input
              {...register("name")}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-400 focus:ring-1 rounded-sm focus:ring-blue-700 outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            {/* Email Field */}
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-400 focus:ring-1 rounded-sm focus:ring-blue-700 outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            {/* Phone Field */}
            <input
              {...register("phone")}
              type="tel"
              placeholder="Phone Number"
              pattern="[0-9]*"
              inputMode="numeric"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
              }}
              className="w-full p-3 border border-gray-400 focus:ring-1 rounded-sm focus:ring-blue-700 outline-none"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

            {/* Message Field */}
            <textarea
              {...register("message")}
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-gray-400 focus:ring-1 rounded-sm focus:ring-blue-700 outline-none"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-48 border border-red-500 text-red-500 p-3 hover:bg-red-500 hover:text-white transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
