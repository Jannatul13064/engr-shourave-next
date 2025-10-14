"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Engr. Md Shahriar Shourave";

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✨ Typing effect
  useEffect(() => {
    if (!mounted) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 100); // typing speed
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center min-h-[30vh] text-center overflow-hidden py-20"
    >
      {/* 🌌 Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-blue-900/40 via-purple-900/30 to-black opacity-90" />

      {/* ⚡ Glowing Aura Layers */}
      <div className="absolute -z-10 inset-0 flex items-center justify-center">
        <div className="absolute w-[500px] h-[500px] bg-blue-400/30 blur-[150px] rounded-full" />

        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full border-2 border-cyan-400/40 blur-md"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-[700px] h-[700px] bg-gradient-to-r from-blue-600/20 via-cyan-400/10 to-transparent rounded-full blur-[200px]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🌟 Floating Light Particles (Client-only) */}
      {mounted &&
        [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-300 rounded-full blur-[3px] shadow-[0_0_25px_rgba(34,211,238,0.9)]"
            initial={{
              x: Math.random() * 500 - 250,
              y: Math.random() * 400 - 200,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * 500 - 250,
              y: Math.random() * 400 - 200,
              scale: [0, 1.2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* 🧍 Profile Image with Glow */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative"
      >
        <motion.div
          className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full"
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <Image
          src="/images/personal/profile.png"
          alt="Md Shahriar Shourave"
          width={320}
          height={320}
          priority
          className="rounded-full object-cover border-4 border-white/20 shadow-[0_0_100px_rgba(59,130,246,0.8)]"
        />
      </motion.div>

      {/* 🏆 Typing Name */}
      <motion.h1
        className="mt-8 text-4xl sm:text-6xl font-extrabold py-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {displayedName}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-1 bg-blue-400 ml-1 h-[1em] align-bottom"
        />
      </motion.h1>

      {/* 💬 Description */}
      <motion.p
        className="text-gray-300 text-lg sm:text-xl mt-4 max-w-3xl leading-relaxed px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Founder & CEO of{" "}
        <span className="text-blue-400 font-semibold">Advanced ABC Groups</span>{" "}
        — leading innovation in renewable energy, industrial automation, and
        smart technology. Winner of the{" "}
        <span className="text-emerald-400 font-semibold">
          Wondu China Excellence Award
        </span>
        .
      </motion.p>

      {/* 🌐 Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="flex flex-wrap justify-center gap-4 mt-8"
      >
        <a
          href="/about"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
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
