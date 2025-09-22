"use client";
import React from "react";
import { motion } from "framer-motion";
import { SignUpButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import videos from "../../constants/videos";

const DemoSection = () => {
  const demoFeatures = [
    {
      title: "Dodavanje Prihoda",
      description: "Jednostavno dodajte svoje prihode sa opcionim opisom.",
      icon: "💰",
    },
    {
      title: "Automatski Izračuni",
      description:
        "Sistem automatski izračunava ukupne prihode i grafički prikaz koliko ste blizu prelaska limita za PDV.",
      icon: "🧮",
    },
    {
      title: "Vizuelni Izveštaji",
      description:
        "Pregledajte svoje finansije kroz intuitivne grafike i tabelarne izveštaje.",
      icon: "📊",
    },
    {
      title: "Mobilna Dostupnost",
      description:
        "Pristupite aplikaciji sa bilo kog uređaja - desktop, tablet ili mobilni telefon.",
      icon: "📱",
    },
  ];

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pogledajte aplikaciju{" "}
            <span className="text-blue-600">u akciji</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evo kako izgleda i funkcioniše naš alat za praćenje paušalnih
            prihoda. Jednostavan, intuitivan i efikasan.
          </p>
        </motion.div>

        {/* Demo Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {demoFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Demo Screenshots */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Intuitivni korisnički interfejs
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Naš dizajn je napravljen da bude jednostavan i efikasan.
                  Dodajte prihode u samo nekoliko klikova i automatski dobijte
                  prikaz vaših prihoda.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>Jednostavno dodavanje prihoda</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>
                      Automatsko računanje udaljenosti od prelaska limita za PDV
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>Vizuelni prikaz trendova</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-4">
                  <video
                    src={videos.demo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-xl w-full"
                    aria-label="Paušalni Prihodi - Demo Video"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Live Demo
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Besplatno
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Demo CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Isprobajte aplikaciju besplatno
          </h3>
          <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto">
            Registrujte se za besplatni nalog i počnite da koristite aplikaciju
            odmah. Nema skrivenih troškova, nema obaveza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                <span>Registracija za 30 sekundi</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Odmah možete početi</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
