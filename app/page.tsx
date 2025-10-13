"use client";

import Hero from "@/components/Hero";
import GalleryPage from "./gallery/page";
import WorkPage from "./work/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center px-6 sm:px-12">
      {/* ✨ Simple Gradient Background */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-200/30 via-purple-200/30 to-green-200/20 blur-3xl brightness-110 animate-pulse"
      />

      {/* 🌟 Page Sections */}
      <Hero />
      <GalleryPage />
      <WorkPage />
      <Contact/>
    </main>
  );
}
