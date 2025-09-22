"use client";
import React from "react";
import { motion } from "framer-motion";
import { SignUpButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marko Petrović",
      role: "IT Konsultant",
      location: "Beograd",
      content:
        "Koristim Paušalne Prihode već 6 meseci i ne mogu da zamislim kako sam ranije vodio računa o svojim prihodima. Sve je tako jednostavno i jasno!",
      rating: 5,
    },
    {
      name: "Ana Stojanović",
      role: "Dizajner",
      location: "Novi Sad",
      content: "Najbolji alat za paušalne preduzetnike! Preporučujem svima!",
      rating: 5,
    },
    {
      name: "Nikola Jovanović",
      role: "Freelancer",
      location: "Niš",
      content:
        "Konačno nešto što je napravljeno za nas u Srbiji. Ne moram više da se brinem o prelasku u PDV. Hvala vam!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Šta kažu naši <span className="text-blue-600">korisnici</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preko hiljadu paušalnih preduzetnika već koristi naš alat. Evo šta
            kažu o svom iskustvu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pridružite se hiljadama zadovoljnih korisnika
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Počnite besplatno danas i uvidite zašto su paušalni preduzetnici iz
            cele Srbije odabrali naš alat.
          </p>
          <SignedOut>
            <SignUpButton mode={"modal"}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full text-xl shadow-lg transition duration-300 transform hover:scale-105">
                Počnite besplatno sada
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link href="/app">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full text-xl shadow-lg transition duration-300 transform hover:scale-105">
                Idi na aplikaciju
              </button>
            </Link>
          </SignedIn>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
