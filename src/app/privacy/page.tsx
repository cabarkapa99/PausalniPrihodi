import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
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
              Politika privatnosti
            </h1>
            <p className="text-gray-600">
              Poslednja izmena: {new Date().toLocaleDateString("sr-RS")}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Uvod
              </h2>
              <p className="text-gray-700 mb-4">
                Paušalni Prihodi ("mi", "naš", "nas") poštuje vašu privatnost i
                obavezuje se da zaštiti vaše lične podatke. Ova politika
                privatnosti objašnjava kako prikupljamo, koristimo i čuvamo vaše
                informacije kada koristite našu aplikaciju.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Podaci koje prikupljamo
              </h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.1 Lični podaci
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Ime i prezime</li>
                <li>Email adresa</li>
                <li>Broj telefona (opciono)</li>
                <li>Adresa prebivališta</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.2 Finansijski podaci
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Podaci o prihodima</li>
                <li>Porezne informacije</li>
                <li>Datumi transakcija</li>
                <li>Kategorije prihoda</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.3 Tehnički podaci
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>IP adresa</li>
                <li>Tip pregledača</li>
                <li>Operativni sistem</li>
                <li>Datum i vreme pristupa</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Kako koristimo vaše podatke
              </h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Pružanje i poboljšanje naših usluga</li>
                <li>Obračunavanje poreza i prihoda</li>
                <li>Generisanje izveštaja</li>
                <li>Komunikacija sa vama</li>
                <li>Pružanje korisničke podrške</li>
                <li>Sigurnosne svrhe</li>
                <li>Ispunjavanje zakonskih obaveza</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Deljenje podataka
              </h2>
              <p className="text-gray-700 mb-4">
                Ne prodajemo, ne iznajmljujemo niti delimo vaše lične podatke sa
                trećim stranama, osim u sledećim slučajevima:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Sa vašim izričitim pristankom</li>
                <li>Kada je potrebno za pružanje usluge</li>
                <li>Kada zahtevaju zakonski organi</li>
                <li>Za zaštitu naših prava i bezbednosti</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Sigurnost podataka
              </h2>
              <p className="text-gray-700 mb-4">
                Implementiramo odgovarajuće tehničke i organizacione mere za
                zaštitu vaših ličnih podataka protiv neovlašćenog pristupa,
                izmene, otkrivanja ili uništenja.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Vaša prava
              </h2>
              <p className="text-gray-700 mb-4">Imate pravo da:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Pristupite svojim podacima</li>
                <li>Ispravite netačne podatke</li>
                <li>Obrišete svoje podatke</li>
                <li>Ograničite obradu podataka</li>
                <li>Prenesete podatke</li>
                <li>Uplatite prigovor</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Kolačići
              </h2>
              <p className="text-gray-700 mb-4">
                Koristimo kolačiće za poboljšanje vašeg iskustva korišćenja
                aplikacije. Možete kontrolisati kolačiće kroz podešavanja vašeg
                pregledača.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Kontakt
              </h2>
              <p className="text-gray-700 mb-4">
                Ako imate pitanja o ovoj politici privatnosti, možete nas
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

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Izmene politike
              </h2>
              <p className="text-gray-700 mb-4">
                Možemo ažurirati ovu politiku privatnosti povremeno.
                Obavestićemo vas o bilo kakvim značajnim izmenama putem email-a
                ili obaveštenja u aplikaciji.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
