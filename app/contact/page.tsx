"use client";

import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 text-white overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* ✨ Animated background light blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse"></div>
      </div>

      {/* 🌟 Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent shiny-text">
          Contact
        </h1>
        <div className="mt-4 h-[3px] w-24 mx-auto bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"></div>
      </motion.div>

      {/* 🔹 Main Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-start relative z-10"
      >
        {/* 🏢 Left Section - Contact Info */}
        <div className="bg-gray-900/60 backdrop-blur-md p-10 rounded-2xl border border-gray-800 shadow-xl hover:border-blue-500/40 transition-all duration-500">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Whether you have a project in mind, a question, or simply want to
            connect — I’d love to hear from you. Let’s collaborate and bring
            innovative ideas to life.
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I personally review all messages and inquiries. Your insights and
            thoughts are always valued.
          </p>

          <div className="space-y-6 mt-10">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" size={24} />
              <a
                href="mailto:corporation.abc.bd@gmail.com"
                className="text-gray-200 hover:text-blue-400 transition-colors"
              >
                corporation.abc.bd@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" size={24} />
              <a
                href="tel:+8801711460062"
                className="text-gray-200 hover:text-blue-400 transition-colors"
              >
                +8801711460062
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" size={24} />
              <p className="text-gray-200">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* 📬 Right Section - Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/70 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-gray-800 hover:border-blue-500/40 transition-all duration-500"
        >
          <h2 className="text-3xl font-bold mb-10 text-center md:text-left bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Send a Message
          </h2>

          <form className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              <label className="block text-sm text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full pl-10 bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-sm text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <label className="block text-sm text-gray-300 mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full pl-10 bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg"
            >
              <Send className="animate-pulse" size={18} /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </main>
  );
}
