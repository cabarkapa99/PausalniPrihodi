"use client";
import React from "react";
import { motion } from "framer-motion";
import { SignUpButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import videos from "@/constants/videos";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 px-6 flex flex-col items-center justify-center text-center pt-32"
    >
      {/* Animated Title */}
      <motion.h1
        className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Pratite Svoje <span className="text-yellow-300">Paušalne Prihode</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-xl md:text-2xl opacity-95 mb-8 max-w-4xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Profesionalni alat za praćenje prihoda i prelaska limita za PDV za{" "}
        <strong>paušalne preduzetnike u Srbiji</strong>. Ostanite u kontroli
        svojih finansija i izbegnite PDV.
      </motion.p>

      {/* Key Benefits */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-10 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-green-300">✓</span>
          <span>Praćenje prihoda</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-green-300">✓</span>
          <span>Analiza prihoda po mesecima</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-green-300">✓</span>
          <span>Potpuno besplatno</span>
        </div>
      </motion.div>

      {/* Call-to-Action */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      >
        <SignedOut>
          <SignUpButton mode={"modal"}>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-xl shadow-xl transition duration-300 transform hover:scale-105">
              Počnite besplatno sada
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <Link href="/app">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-xl shadow-xl transition duration-300 transform hover:scale-105">
              Idi na aplikaciju
            </button>
          </Link>
        </SignedIn>
        <button
          onClick={() => {
            const featuresSection = document.getElementById("features");
            featuresSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-full text-xl transition duration-300"
        >
          Saznajte više
        </button>
      </motion.div>

      {/* Hero Video */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
          <video
            src={videos.hero}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl w-full max-w-4xl"
            width={800}
            height={600}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Floating elements */}
        <div className="absolute -top-4 -left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
          Besplatno
        </div>
        <div className="absolute -bottom-4 -right-4 bg-green-400 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
          Sigurno
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
