"use client";
import React from "react";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Uštedite vreme",
      description:
        "Umesto da provodite sate računajući prihode ručno, naš alat automatski izračunava sve što vam je potrebno.",
      icon: "⏰",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Izbegnite greške",
      description:
        "Automatski proračun znači da nećete napraviti greške koje mogu da vas koštaju novca ili problema sa poreskom upravom.",
      icon: "✅",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Budite u kontroli",
      description: "Uvek znate koliko ste daleko od prelaska limita za PDV.",
      icon: "🎯",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Sigurni podaci",
      description:
        "Vaši podaci su sigurni. Ne delimo vaše podatke sa trećim stranama.",
      icon: "🔒",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Zašto birati <span className="text-blue-600">Paušalne Prihode</span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naš alat je napravljen posebno za potrebe paušalnih preduzetnika u
            Srbiji. Evo kako možete da profitirate od korišćenja našeg servisa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-16 h-16 rounded-full ${benefit.color} flex items-center justify-center text-2xl flex-shrink-0`}
              >
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8">
            Brojke govore same za sebe
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Besplatno</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Dostupnost</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-lg opacity-90">Skrivenih troškova</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
