import React from "react";
import Link from "next/link";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 transition-colors mb-4 inline-block"
            >
              ← Nazad na početnu
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Politika kolačića
            </h1>
            <p className="text-gray-600">
              Poslednja izmena: {new Date().toLocaleDateString("sr-RS")}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Šta su kolačići?
              </h2>
              <p className="text-gray-700 mb-4">
                Kolačići (cookies) su male tekstualne datoteke koje se čuvaju na
                vašem uređaju kada posetite našu aplikaciju. Oni nam pomažu da
                poboljšamo vaše iskustvo korišćenja aplikacije i da razumemo
                kako koristite našu uslugu.
              </p>
              <p className="text-gray-700 mb-4">
                Kolačići ne sadrže lične podatke koji mogu identifikovati vas
                kao fizičku osobu, osim ako eksplicitno ne unesete takve
                informacije.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Kako koristimo kolačiće
              </h2>
              <p className="text-gray-700 mb-4">
                Paušalni Prihodi koristi kolačiće za sledeće svrhe:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Autentifikaciju i sigurnost</li>
                <li>Pamćenje vaših preferenci</li>
                <li>Analizu korišćenja aplikacije</li>
                <li>Poboljšanje funkcionalnosti</li>
                <li>Personalizaciju sadržaja</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Tipovi kolačića koje koristimo
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                3.1 Neophodni kolačići
              </h3>
              <p className="text-gray-700 mb-4">
                Ovi kolačići su neophodni za osnovno funkcionisanje aplikacije i
                ne mogu se isključiti. Uključuju:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Kolačiće za autentifikaciju korisnika</li>
                <li>Kolačiće za sigurnosne sesije</li>
                <li>Kolačiće za sprečavanje CSRF napada</li>
                <li>Kolačiće za osnovne funkcionalnosti</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                3.2 Funkcionalni kolačići
              </h3>
              <p className="text-gray-700 mb-4">
                Ovi kolačići omogućavaju aplikaciji da pamti vaše izbore i
                preferencije:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Jezik aplikacije</li>
                <li>Tema (svetla/tamna)</li>
                <li>Podešavanja prikaza</li>
                <li>Poslednje aktivnosti</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                3.3 Analitički kolačići
              </h3>
              <p className="text-gray-700 mb-4">
                Koristimo analitičke kolačiće da razumemo kako korisnici koriste
                našu aplikaciju:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Broj posetilaca</li>
                <li>Najčešće korišćene funkcionalnosti</li>
                <li>Vreme provedeno u aplikaciji</li>
                <li>Greške i probleme</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                3.4 Marketing kolačići
              </h3>
              <p className="text-gray-700 mb-4">
                Trenutno ne koristimo marketing kolačiće, ali možemo ih dodati u
                budućnosti za:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Pratenje konverzija</li>
                <li>Personalizovane oglase</li>
                <li>Retargeting kampanje</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Kolačići trećih strana
              </h2>
              <p className="text-gray-700 mb-4">
                Naša aplikacija može koristiti servise trećih strana koji
                postavljaju svoje kolačiće:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  <strong>Google Analytics:</strong> Za analizu korišćenja
                  aplikacije
                </li>
                <li>
                  <strong>Google Fonts:</strong> Za učitavanje fontova
                </li>
                <li>
                  <strong>CDN servisi:</strong> Za brže učitavanje sadržaja
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Ovi kolačići se regulišu politikama privatnosti odgovarajućih
                kompanija.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Upravljanje kolačićima
              </h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                5.1 Kroz pregledač
              </h3>
              <p className="text-gray-700 mb-4">
                Možete kontrolisati kolačiće kroz podešavanja vašeg pregledača:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  <strong>Chrome:</strong> Postavke → Napredno → Privatnost i
                  sigurnost → Kolačići
                </li>
                <li>
                  <strong>Firefox:</strong> Opcije → Privatnost i sigurnost →
                  Kolačići
                </li>
                <li>
                  <strong>Safari:</strong> Preferencije → Privatnost → Kolačići
                </li>
                <li>
                  <strong>Edge:</strong> Postavke → Kolačići i dozvole lokacije
                </li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                5.2 Kroz aplikaciju
              </h3>
              <p className="text-gray-700 mb-4">
                U aplikaciji možete upravljati funkcionalnim kolačićima kroz
                podešavanja naloga.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Posledice isključivanja kolačića
              </h2>
              <p className="text-gray-700 mb-4">
                Ako isključite kolačiće, neke funkcionalnosti aplikacije možda
                neće raditi pravilno:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Možda ćete morati da se prijavljujete češće</li>
                <li>Vaše preferencije se neće pamćiti</li>
                <li>Neki sadržaji možda neće biti dostupni</li>
                <li>Performanse aplikacije mogu biti smanjene</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Trajanje kolačića
              </h2>
              <p className="text-gray-700 mb-4">
                Kolačići koje koristimo imaju različito trajanje:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  <strong>Sešn kolačići:</strong> Brišu se kada zatvorite
                  pregledač
                </li>
                <li>
                  <strong>Trajni kolačići:</strong> Ostaju na uređaju određeno
                  vreme
                </li>
                <li>
                  <strong>Autentifikacijski kolačići:</strong> Obično 30 dana
                </li>
                <li>
                  <strong>Preferencije:</strong> Do 1 godine
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Sigurnost kolačića
              </h2>
              <p className="text-gray-700 mb-4">
                Implementiramo sigurnosne mere za zaštitu kolačića:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>HTTPS enkripcija za sve kolačiće</li>
                <li>HttpOnly flag za sigurnosne kolačiće</li>
                <li>Secure flag za HTTPS konekcije</li>
                <li>SameSite atribut za CSRF zaštitu</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Izmene politike
              </h2>
              <p className="text-gray-700 mb-4">
                Možemo ažurirati ovu politiku kolačića povremeno. Obavestićemo
                vas o bilo kakvim značajnim izmenama putem email-a ili
                obaveštenja u aplikaciji.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Kontakt
              </h2>
              <p className="text-gray-700 mb-4">
                Ako imate pitanja o našoj politici kolačića, možete nas
                kontaktirati na:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> pausalni-prihodi@uwit.rs
                </p>
                <p className="text-gray-700">
                  <strong>Telefon:</strong> +381 62 145 5633
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
