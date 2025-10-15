"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const fullName = "Engr. Md Shahriar Shourave";
  const [name, setName] = useState("");
  const [particles, setParticles] = useState<
    { x: number; y: number; delay: number; duration: number }[]
  >([]);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setName(fullName.slice(0, ++i));
      if (i === fullName.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Generate particles on mount
  useEffect(() => {
    const data = Array.from({ length: 80 }, (_, i) => ({
      x: Math.random() * 500 - 250,
      y: Math.random() * 400 - 200,
      delay: i * 0.4,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(data);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden pt-20"
    >
      {/* Removed hero background & glow */}

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-300 rounded-full blur-[3px]"
          style={{ left: "50%", top: "50%" }}
          initial={{ x: p.x, y: p.y, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Profile image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative"
      >
        <Image
          src="/images/personal/profile.png"
          alt="Md Shahriar Shourave"
          width={280}
          height={280}
          priority
          className="rounded-full border-4 border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.8)] object-cover"
        />
      </motion.div>

      {/* Typing name */}
      <motion.h1
        className="mt-8 text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 pb-3"
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.5 }}
      >
        {name}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-1 bg-blue-400 ml-1 h-[1em] align-bottom"
        />
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-gray-300 text-lg sm:text-xl mt-4 max-w-2xl leading-relaxed px-4"
        animate={{ opacity: [0, 1] }}
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

      {/* Buttons */}
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 1.3 }}
        className="flex flex-wrap justify-center gap-4 mt-8"
      >
        <a
          href="/about"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 animate-bounce ..."
        >
          Discover His Vision
        </a>
        <a
          href="/companies"
          className="px-6 py-3 border border-blue-500 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-black font-semibold transition"
        >
          Explore Advanced ABC Groups
        </a>
      </motion.div>
    </motion.section>
  );
}
