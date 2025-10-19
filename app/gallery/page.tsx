"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryPage() {
  const images = [
    "/images/personal/work1.jpg",
    "/images/personal/work2.jpg",
    "/images/personal/work3.jpg",
    "/images/personal/work4.jpg",
    "/images/personal/work5.jpg",
    "/images/personal/work6.jpg",
    "/images/personal/work7.jpeg",
    "/images/personal/work8.jpeg",
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl w-full mx-auto">
        {/* ✨ Title Section */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-10 text-center w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-3">
            Gallery
          </span>
        </motion.h1>

        {/* 🖼️ Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.15)]"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="relative w-full h-64">
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <p className="text-lg font-semibold tracking-wide text-cyan-300">
                  Memories {i + 1}
                </p>
              </div>

              {/* Neon border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/40 transition-all duration-500"
                animate={{
                  boxShadow: ["0 0 0px #00ffff00", "0 0 20px #00ffff55"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
