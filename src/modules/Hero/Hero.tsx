"use client";
import React from "react";
import { motion } from "framer-motion";
import { SignUpButton } from "@clerk/nextjs";

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
        <SignUpButton mode={"modal"}>Počnite sada</SignUpButton>
      </motion.div>

      {/* Hero Image (Replace with your own screenshot or illustration) */}
      <motion.img
        src="https://source.unsplash.com/800x500/?finance,graphs"
        alt="Income Tracker"
        className="mt-12 rounded-lg shadow-lg w-full max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
      />
    </section>
  );
};

export default Hero;
