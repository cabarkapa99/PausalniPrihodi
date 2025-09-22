"use client";
import React from "react";
import { motion } from "framer-motion";
import { SignUpButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Spremni da počnete?
          </h2>
          <p className="text-xl md:text-2xl opacity-95 mb-8 max-w-3xl mx-auto">
            Pridružite se hiljadama paušalnih preduzetnika koji već koriste naš
            alat za praćenje prihoda i poreznih obaveza.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <SignedOut>
              <SignUpButton mode={"modal"}>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-5 rounded-full text-2xl shadow-xl transition duration-300 transform hover:scale-105">
                  Počnite besplatno sada
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/app">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-5 rounded-full text-2xl shadow-xl transition duration-300 transform hover:scale-105">
                  Idi na aplikaciju
                </button>
              </Link>
            </SignedIn>

            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Potpuno besplatno</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Bez obaveza</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Registracija za 30 sekundi</span>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Aktivnih korisnika</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Podrška</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
