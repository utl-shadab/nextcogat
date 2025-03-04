"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
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
    <div className="max-w-8xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-32 py-16">
      <div className="bg-white flex flex-col md:flex-row gap-10 w-full">
        <div className="w-full md:w-1/2 relative">
          <div className="h-[300px] md:h-[400px] lg:h-[500px] w-full relative">
            <Image
              src="/cogatImage/contact.png"
              alt="Contact Us"
              layout="fill"
              objectFit="cover"
              className="rounded-l-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col border-2 border-blue-950 rounded-3xl justify-center">
          <h2 className="text-2xl font-bold text-center mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4"> 
            <div className="relative">
              <User2Icon className="absolute left-3  top-4 text-gray-500 h-5" />
              <input
                {...register("name")}
                placeholder="Your Name"
                className="w-full p-3 pl-10 bg-[#F6F6F6] rounded-lg focus:ring-2 focus:ring-blue-950 outline-none"
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            <div className="relative">
              <Mail className="absolute left-3 top-4 text-gray-500 h-5" />
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full p-3 pl-10 bg-[#F6F6F6] rounded-lg focus:ring-2 focus:ring-blue-950 outline-none"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            <div className="relative">
              <Phone className="absolute left-3 top-4 text-gray-500 h-5" />
              <input
                {...register("phone")}
                type="tel"
                placeholder="Contact Number"
                pattern="[0-9]*"
                inputMode="numeric"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                }}
                className="w-full p-3 pl-10 bg-[#F6F6F6] rounded-lg focus:ring-2 focus:ring-blue-950 outline-none"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-gray-500 h-5" />
              <textarea
                {...register("message")}
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 pl-10 bg-[#F6F6F6] rounded-lg focus:ring-2 focus:ring-blue-950 outline-none"
              />
            </div>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

            <button
              type="submit"
              className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition font-semibold"
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
