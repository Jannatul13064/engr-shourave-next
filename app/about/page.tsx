"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 👤 Left Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full scale-125" />
            <Image
              src="/images/personal/profile.png"
              alt="Engr. Md Shahriar Shourave"
              width={350}
              height={350}
              className="rounded-2xl border-4 border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.4)] object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* 🧾 Right Side - Bio Information */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">
            Engr. Md Shahriar Shourave
          </h1>

          <h2 className="text-xl text-blue-400 font-semibold mb-6">
            Founder & CEO, Advanced ABC Groups
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            Engr. Md Shahriar Shourave is the visionary Founder and CEO of{" "}
            <span className="text-blue-400 font-semibold">
              Advanced ABC Groups
            </span>
            — a leading conglomerate driving innovation in{" "}
            <span className="text-emerald-400 font-semibold">
              electrical technology, renewable energy,
            </span>{" "}
            and{" "}
            <span className="text-emerald-400 font-semibold">
              industrial automation
            </span>
            . Under his leadership, the group has achieved global recognition for
            excellence, sustainability, and transformative innovation.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            His contributions to advancing modern technology have earned him
            several prestigious honors, including the renowned{" "}
            <span className="text-emerald-400 font-semibold">
              Wondu China Excellence Award
            </span>
            . His dedication to empowering future generations through
            technology, innovation, and leadership continues to inspire
            professionals worldwide.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <a
              href="/work"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              View His Work
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-blue-500 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-black font-semibold transition"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
