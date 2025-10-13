"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      className="mt-24 relative flex justify-center items-center"
    >
      {/* Background glow aura */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[650px] h-[650px] sm:w-[480px] sm:h-[480px] rounded-full blur-3xl bg-gradient-to-tr from-blue-500/25 via-purple-500/25 to-sky-400/25 animate-pulse"></div>
      </div>

      {/* Main profile image */}
      <div className="relative w-[760px] h-[760px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-[8px] border-white/20 shadow-[0_0_60px_rgba(56,189,248,0.35)] hover:shadow-[0_0_90px_rgba(56,189,248,0.45)] transition-all duration-700">
        <Image
          src="/images/personal/profile.png"
          alt="Md Shahriar Shourave"
          fill
          className="object-cover rounded-full scale-105 hover:scale-110 transition-transform duration-700"
          priority
        />
      </div>
    </motion.div>
  );
}
