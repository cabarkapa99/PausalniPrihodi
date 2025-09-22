import React from "react";
import Image from "next/image";
import logos from "@/constants/logos";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={logos.logo}
                alt="Paušalni Prihodi Logo"
                width={40}
                height={40}
              />
              <div>
                <h3 className="font-bold text-xl">Paušalni Prihodi</h3>
                <p className="text-gray-400 text-sm">Za preduzetnike</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Profesionalni alat za praćenje prihoda i poreznih obaveza za
              paušalne preduzetnike u Srbiji. Besplatno, sigurno i jednostavno.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Proizvod</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Funkcije
                </Link>
              </li>
              <li>
                <Link
                  href="#benefits"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Prednosti
                </Link>
              </li>
              <li>
                <Link
                  href="#demo"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Česta pitanja
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          {/* <div className="space-y-4">
            <h4 className="font-semibold text-lg">Podrška</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#help"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pomoć
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <a
                  href="#documentation"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dokumentacija
                </a>
              </li>
              <li>
                <a
                  href="#tutorials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tutorijali
                </a>
              </li>
              <li>
                <a
                  href="#status"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Status sistema
                </a>
              </li>
            </ul>
          </div> */}

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Pravno</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privatnost
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Uslovi korišćenja
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kolačići
                </Link>
              </li>
              {/* <li>
                <a
                  href="#gdpr"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GDPR
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bezbednost
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Paušalni Prihodi. Sva prava zadržana.
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Napravljeno sa</span>
              <span className="text-red-500">♥</span>
              <span>od strane</span>
              <a
                href="https://uwit.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                UWIT
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
