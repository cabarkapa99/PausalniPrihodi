"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Da li je aplikacija stvarno besplatna?",
      answer:
        "Da, aplikacija je potpuno besplatna bez skrivenih troškova. Ne naplaćujemo nikakve mesečne ili godišnje pretplate. Naš cilj je da pomognemo paušalnim preduzetnicima u Srbiji da lakše upravljaju svojim finansijama.",
    },
    // {
    //   question: "Kako aplikacija izračunava paušalni porez?",
    //   answer:
    //     "Aplikacija automatski izračunava paušalni porez na osnovu vaših prihoda i trenutnih poreskih stopa u Srbiji. Koristi najnovije poreske informacije i automatski ažurira kalkulacije kada se poreske stope promene.",
    // },
    {
      question: "Da li su moji podaci sigurni?",
      answer:
        "Apsolutno! Svi podaci su sigurno sačuvani i nikada ih nećemo deliti sa trećim stranama bez vaše saglasnosti.",
    },
    {
      question: "Mogu li da koristim aplikaciju na mobilnom telefonu?",
      answer:
        "Da, aplikacija je potpuno responzivna i radi odlično na svim uređajima - desktop računarima, tabletima i mobilnim telefonima. Možete dodavati prihode bilo gde i bilo kada.",
    },
    // {
    //   question: "Da li mogu da eksportujem izveštaje za poresku upravu?",
    //   answer:
    //     "Da, možete generisati detaljne izveštaje u PDF formatu koji su prikladni za predaju poreskoj upravi ili vašem računovođi. Izveštaji sadrže sve potrebne informacije o vašim prihodima i poreznim obavezama.",
    // },
    {
      question: "Šta ako imam problema sa korišćenjem aplikacije?",
      answer:
        "Naš tim podrške je uvek tu da vam pomogne. Možete nas kontaktirati putem email-a i odgovorićemo vam u najkraćem mogućem roku.",
    },
    {
      question: "Da li aplikacija radi offline?",
      answer:
        "Aplikacija zahteva internet konekciju za sinhronizaciju podataka.",
    },
    {
      question: "Koliko dugo se čuvaju moji podaci?",
      answer:
        "Vaši podaci se čuvaju dok god imate aktivan nalog. Možete u bilo kom trenutku da obrišete svoj nalog i svi vaši podaci će biti trajno obrisani iz naših sistema.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Često postavljana <span className="text-blue-600">pitanja</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evo odgovora na najčešća pitanja koja nam postavljaju paušalni
            preduzetnici. Ako ne pronađete odgovor koji tražite, slobodno nas
            kontaktirajte.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-blue-600 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <motion.div
                className="overflow-hidden"
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="pb-6 pr-12">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            I dalje imate pitanja?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Naš tim je tu da vam pomogne. Kontaktirajte nas i odgovorićemo vam u
            najkraćem mogućem roku.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full text-xl shadow-lg transition duration-300 transform hover:scale-105 inline-block"
          >
            Kontaktirajte nas
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
