import React, { useRef, useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

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

  // Form ref and status state for UI feedback
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // Read Vite env variables (must be prefixed with VITE_)
  const EMAILJS_SERVICE_ID = (import.meta.env.VITE_EMAILJS_SERVICE_ID as string) || "";
  const EMAILJS_TEMPLATE_ID = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string) || "";
  const EMAILJS_PUBLIC_KEY = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string) || "";

  // Initialize EmailJS SDK with your public key on component mount
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      console.error('EmailJS service/template id not set.');
      setStatus('error');
      return;
    }

    setStatus("sending");

    // Use sendForm (init already called)
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current)
      .then(() => {
        setStatus("success");
        form.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((err) => {
        console.error('EmailJS send error:', err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="contact" className="bg-white py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-10 text-center">
        Contact Us
      </h2>

      {/* Wrapper for Info + Form */}
      <div className="flex flex-col lg:flex-row lg:gap-10 max-w-6xl mx-auto">
        {/* Contact Info Grid */}
        <div className="grid grid-cols-2 gap-4 flex-1 mb-8 lg:mb-0">
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
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full lg:w-1/2 bg-amber-50 p-6 rounded-lg shadow-md"
        >
          {/* include timestamp for template */}
          <input type="hidden" name="time" value={new Date().toString()} />

          <div className="mb-4">
            <label className="block text-amber-900 mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
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
              name="user_email"
              required
              className="w-full p-2 border border-amber-200 rounded focus:outline-none focus:border-amber-500"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-amber-900 mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full p-2 border border-amber-200 rounded focus:outline-none focus:border-amber-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full ${
              status === "sending" ? "bg-amber-700" : "bg-amber-900"
            } text-white py-2 px-4 rounded hover:bg-amber-800 transition-colors disabled:opacity-70`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="mt-3 text-green-600 text-center">
              Message sent successfully. Thank you!
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-red-600 text-center">
              Failed to send message. Please try again later.
            </p>
          )}

          {/* Helpful comment: Replace placeholders above with your actual EmailJS IDs or use environment variables. */}
        </form>
      </div>
    </section>
  );
}
