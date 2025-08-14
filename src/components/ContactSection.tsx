import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactUs() {
  const contactInfo = [
    {
      icon: <Phone className="text-amber-900 w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Phone",
      details: "+91 98765 43210",
    },
    {
      icon: <Mail className="text-amber-900 w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Email",
      details: "info@mitalialmirah.com",
    },
    {
      icon: <MapPin className="text-amber-900 w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Address",
      details: "123, Pune, Maharashtra, India",
    },
    {
      icon: <Clock className="text-amber-900 w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 7:00 PM",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-white pt-2 pb-8 px-4 flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-10 text-center">
        Contact Us
      </h2>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="bg-amber-50 p-3 sm:p-4 rounded-lg shadow-md text-center text-xs sm:text-sm md:text-base"
          >
            <div className="mb-2 flex justify-center">{info.icon}</div>
            <h3 className="font-bold text-amber-900">{info.title}</h3>
            <p className="text-amber-800">{info.details}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <form className="mt-12 w-full max-w-2xl bg-amber-50 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-amber-900 mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-amber-200 rounded focus:outline-none focus:border-amber-500"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-amber-900 mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 border border-amber-200 rounded focus:outline-none focus:border-amber-500"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-amber-900 mb-2 font-medium">
            Message
          </label>
          <textarea
            rows="4"
            className="w-full p-2 border border-amber-200 rounded focus:outline-none focus:border-amber-500"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-900 text-white py-2 px-4 rounded hover:bg-amber-800 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
