"use client";

import { useEffect } from "react";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Hero from "@/components/Hero";
import GalleryPage from "./gallery/page";
import WorkPage from "./work/page";

export default function Home() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX / window.innerWidth);
      y.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  // Smooth motion
  const sx = useSpring(x, { stiffness: 40, damping: 20 });
  const sy = useSpring(y, { stiffness: 40, damping: 20 });
  const gx = useTransform(sx, [0, 1], ["0%", "100%"]);
  const gy = useTransform(sy, [0, 1], ["0%", "100%"]);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center px-6 sm:px-12">
      {/* ✨ Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at ${gx.get()} ${gy.get()}, rgba(56,189,248,0.25), transparent 55%),
                       radial-gradient(circle at ${gy.get()} ${gx.get()}, rgba(147,51,234,0.25), transparent 55%),
                       radial-gradient(circle at 70% 90%, rgba(34,197,94,0.15), transparent 65%)`,
          filter: "blur(80px) brightness(1.1)",
        }}
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🌟 Hero Section */}
      <Hero />
      <GalleryPage />
      <WorkPage />
    </main>
  );
}
