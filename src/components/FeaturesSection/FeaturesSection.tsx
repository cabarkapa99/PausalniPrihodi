"use client";
import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "📊",
      title: "Praćenje Prihoda",
      description:
        "Jednostavno dodajte i kategorizujte svoje prihode. Automatski izračunajte ukupne prihode i koliko ste blizu limita za PDV.",
    },
    {
      icon: "📈",
      title: "Analiza Trendova",
      description:
        "Vidite kako se vaši prihodi menjaju tokom vremena. Identifikujte najbolje i najgore mesece za vaš posao.",
    },
    // {
    //   icon: "💰",
    //   title: "Porezne Obaveze",
    //   description:
    //     "Automatski izračunajte paušalni porez na osnovu vaših prihoda. Nikad više nećete biti iznenađeni poreskim obavezama.",
    // },
    {
      icon: "📱",
      title: "Web Aplikacija",
      description:
        "Pristupite svojim podacima bilo gde. Dodajte prihode čak i kada ste u pokretu.",
    },
    // {
    //   icon: "🔒",
    //   title: "Sigurnost Podataka",
    //   description:
    //     "Ne delimo vaše podatke sa trećim stranama. Vaši podaci su sigurni.",
    // },
    // {
    //   icon: "📋",
    //   title: "Izveštaji",
    //   description:
    //     "Generišite detaljne izveštaje za poresku upravu ili vašeg računovođu. Sve što vam je potrebno na jednom mestu.",
    // },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sve što vam je potrebno za{" "}
            <span className="text-blue-600">uspešno poslovanje</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naš alat je dizajniran posebno za paušalne preduzetnike u Srbiji.
            Jednostavan, efikasan i potpuno besplatan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
