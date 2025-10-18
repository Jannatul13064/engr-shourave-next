"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-20 px-6 text-white">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* 🏢 Left Section - Contact Info */}
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
            Get In Touch
          </h1>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Whether you have a project in mind, a question about my work, or
            just want to say hello — I’d love to hear from you. Fill out the
            form or use the contact details below to reach out directly. I value
            genuine connections and collaborative discussions that lead to
            innovation and meaningful results.
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed">
            My focus lies in building sustainable technological ecosystems,
            advancing renewable energy solutions, and crafting automation
            systems that empower industries for a smarter future. If you’re a
            business partner, investor, engineer, or creative mind looking to
            collaborate, let’s connect and explore how we can shape progress
            together.
          </p>

          <p className="text-gray-400 mb-10 leading-relaxed">
            I personally review all professional inquiries and ensure each
            message receives the attention it deserves. Don’t hesitate to get in
            touch — your ideas and questions are always welcome.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" size={24} />
              <a
                href="mailto:info@example.com"
                className="text-gray-200 hover:text-blue-400 transition-colors"
              >
                info@example.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" size={24} />
              <a
                href="tel:+880123456789"
                className="text-gray-200 hover:text-blue-400 transition-colors"
              >
                +880 1234 567 89
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" size={24} />
              <p className="text-gray-200">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* 📬 Right Section - Contact Form */}
        <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-800 flex flex-col justify-start">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-blue-400">
            Send a Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-all duration-300"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
