"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden py-20"
    >
      {/* 🌟 Subtle Glow Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-900/30 via-purple-900/20 to-black opacity-70" />

      {/* 🧍‍♂️ Profile Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full scale-125" />
        <Image
          src="/images/personal/profile.png"
          alt="Md Shahriar Shourave"
          width={300}
          height={300}
          priority
          className="rounded-full shadow-[0_0_60px_rgba(59,130,246,0.5)] border-4 border-white/10 object-cover"
        />
      </motion.div>

      {/* 🏆 Name with Shiny Effect */}
      <motion.h1 className="mt-8 text-4xl sm:text-6xl font-extrabold py-3 shiny-text">
        Engr. Md Shahriar Shourave
      </motion.h1>

      <motion.p className="text-gray-300 text-lg sm:text-xl mt-4 max-w-3xl leading-relaxed px-6">
        Founder & CEO of{" "}
        <span className="text-blue-400 font-semibold">Advanced ABC Groups</span>{" "}
        — a leading conglomerate in electrical innovation, renewable energy, and
        industrial automation. Honored with multiple international awards,
        including the prestigious{" "}
        <span className="text-emerald-400 font-semibold">
          Wondu China Excellence Award
        </span>
        .
      </motion.p>

      {/* 🌐 Action Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-wrap justify-center gap-4 mt-8 "
      >
        <a
          href="/about"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 animate-bounce ..."
        >
          Discover His Vision
        </a>
        <a
          href="/companies"
          className="px-8 py-3 border border-blue-500 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-black font-semibold transition"
        >
          Explore Advanced ABC Groups
        </a>
      </motion.div>
    </motion.section>
  );
}
