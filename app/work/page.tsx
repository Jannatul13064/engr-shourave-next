"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experienceCards = [
  {
    title: "SIEMENS IVD Systems",
    description:
      "Expert in Dimension RxL/Xpand, ADVIA Centaur XP/CP, BN ProSpec, and Immulyte series. Installed Bangladesh’s first SIEMENS StreamLab automation at RMCH.",
    image: "/images/work/siemens.png",
  },
  {
    title: "BIORAD & Randox Quality Systems",
    description:
      "Proficient in BIORAD D10/Variant HPLC analyzers and EQAS/REQAS quality control programs for precision and reliability.",
    image: "/images/work/biorad.png",
  },
  {
    title: "Advanced IVD Innovation",
    description:
      "Introduced CYBOW Urinalysis, ALARiS Auto ESR, iSED ESR (ALCOR, USA), and BIOMED Diagnostics reagents in Bangladesh.",
    image: "/images/work/cybow.png",
  },
  {
    title: "MAGLUMI & MINDRAY Automation",
    description:
      "Driving adoption of SNIBE Chemiluminescence and MINDRAY Hematology analyzers for smarter lab automation.",
    image: "/images/work/mindray.png",
  },
  {
    title: "Founder — BEAB",
    description:
      "Established the Biomedical Engineering Association of Bangladesh to foster innovation in medical technology.",
    image: "/images/work/beab.png",
  },
];

export default function WorkPage() {
  // Duplicate cards to make infinite scroll seamless
  const duplicated = [...experienceCards, ...experienceCards];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen py-20 text-center text-gray-100 overflow-hidden">
      {/* Title & Description */}
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Professional Work Experience
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Discover our contributions to the IVD industry, biomedical innovation, and advanced diagnostic technology.
        </p>
      </div>

      {/* Infinite carousel */}
      <div className="w-full overflow-hidden mt-16">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {duplicated.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[340px] bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10 hover:border-blue-400/50 transition-all"
            >
              <div className="relative w-full h-36 mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-16">
        <a
          href="https://bd.linkedin.com/in/shahriar-shourave-695b921aa"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Visit LinkedIn
        </a>
        <a
          href="/companies"
          className="px-6 py-3 border border-blue-500 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-black font-semibold transition"
        >
          Explore Advanced ABC Group
        </a>
      </div>
    </section>
  );
}
