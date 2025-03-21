"use client";
import React from "react";
import { motion } from "framer-motion";
import { SignUpButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-gradient-to-r from-indigo-400 to-purple-700 text-white py-20 px-6 flex flex-col items-center justify-center text-center mt-36">
      {/* Animated Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Pratite Vaše Prihode Jednostavno!
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl opacity-90 mb-6 max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Upravljajte svojim prihodima lako i efikasno uz naš alat za praćenje
        finansija.
      </motion.p>

      {/* Call-to-Action */}
      <motion.div
        className="bg-white text-blue-600 hover:bg-gray-200 font-semibold px-6 py-3 rounded-full text-lg shadow-lg transition duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <SignedOut>
          <SignUpButton mode={"modal"}>Počnite sada</SignUpButton>
        </SignedOut>
        <SignedIn>
          <Link href="/app">Počnite sada</Link>
        </SignedIn>
      </motion.div>

      {/* Hero Image (Replace with your own screenshot or illustration) */}
      <motion.img
        src="https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=2155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Income Tracker"
        width={800}
        height={600}
        className="mt-12 rounded-lg shadow-lg w-full max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
      />
    </section>
  );
};

export default Hero;
