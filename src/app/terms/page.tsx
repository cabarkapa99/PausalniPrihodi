import React from "react";
import Link from "next/link";

const TermsOfService = () => {
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
              Uslovi korišćenja
            </h1>
            <p className="text-gray-600">
              Poslednja izmena: {new Date().toLocaleDateString("sr-RS")}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Prihvatanje uslova
              </h2>
              <p className="text-gray-700 mb-4">
                Dobrodošli u Paušalni Prihodi. Korišćenjem naše aplikacije
                ("Usluga"), vi se slažete da budete vezani ovim uslovima
                korišćenja ("Uslovi"). Ako se ne slažete sa bilo kojim delom
                ovih uslova, ne smete koristiti našu uslugu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Opis usluge
              </h2>
              <p className="text-gray-700 mb-4">
                Paušalni Prihodi je aplikacija dizajnirana za paušalne
                preduzetnike u Srbiji za praćenje prihoda, obračunavanje poreza
                i upravljanje finansijskim podacima. Usluga uključuje:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Unos i praćenje prihoda</li>
                <li>Automatski obračun poreza</li>
                <li>Generisanje izveštaja</li>
                <li>Pregled finansijskih trendova</li>
                <li>Eksport podataka</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Registracija i nalog
              </h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                3.1 Kreiranje naloga
              </h3>
              <p className="text-gray-700 mb-4">
                Da biste koristili našu uslugu, morate kreirati nalog.
                Obavezujete se da:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Pružate tačne i potpune informacije</li>
                <li>Ažurirate informacije kada se promene</li>
                <li>Čuvate sigurnost svog naloga</li>
                <li>Budete odgovorni za sve aktivnosti na vašem nalogu</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                3.2 Zabrana deljenja
              </h3>
              <p className="text-gray-700 mb-4">
                Ne smete deliti svoje korisničke podatke sa drugim osobama ili
                dozvoliti drugima da pristupe vašem nalogu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Prihvatljivo korišćenje
              </h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                4.1 Dozvoljene aktivnosti
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Korišćenje aplikacije u skladu sa namenom</li>
                <li>Unos vlastitih finansijskih podataka</li>
                <li>Generisanje izveštaja za ličnu upotrebu</li>
                <li>Kontaktiranje podrške za pomoć</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                4.2 Zabranjene aktivnosti
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Korišćenje aplikacije za ilegalne svrhe</li>
                <li>Pokušaj hakovanja ili narušavanja sigurnosti</li>
                <li>Distribucija malvera ili štetnog softvera</li>
                <li>Kršenje intelektualnih prava</li>
                <li>Spam ili neželjena komunikacija</li>
                <li>Korišćenje automatizovanih sistema za pristup</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Intelektualna svojina
              </h2>
              <p className="text-gray-700 mb-4">
                Svi sadržaji, dizajn, funkcionalnosti i tehnologije aplikacije
                Paušalni Prihodi su zaštićeni autorskim pravima i drugim
                intelektualnim pravima. Ne smete:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Kopirati, modifikovati ili distribuirati naš kod</li>
                <li>Koristiti naše zaštitne znakove bez dozvole</li>
                <li>Pokušati reverse engineering aplikacije</li>
                <li>Kreirati derivativne radove bez dozvole</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Odricanje odgovornosti
              </h2>
              <p className="text-gray-700 mb-4">
                Usluga se pruža "kako jeste" bez garancija bilo koje vrste. Ne
                garantujemo da će usluga biti:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Neprekidno dostupna</li>
                <li>Bez grešaka ili bagova</li>
                <li>Sigurna od gubitka podataka</li>
                <li>Kompatibilna sa svim uređajima</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Važno:</strong> Aplikacija je alat za pomoć u vođenju
                evidencije, ali ne zamenjuje profesionalno savetovanje
                računovođe ili poreskog savetnika.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Ograničenje odgovornosti
              </h2>
              <p className="text-gray-700 mb-4">
                U najvećoj meri dozvoljenoj zakonom, Paušalni Prihodi neće biti
                odgovoran za bilo kakve direktne, indirektne, slučajne, posebne
                ili posledične štete koje proističu iz korišćenja ili
                nemogućnosti korišćenja naše usluge.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Prekidanje usluge
              </h2>
              <p className="text-gray-700 mb-4">
                Možemo prekinuti ili suspendovati vaš pristup usluzi u bilo kom
                trenutku, bez prethodne obaveštenosti, zbog:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Kršenja ovih uslova</li>
                <li>Zakonskih zahteva</li>
                <li>Tehničkih problema</li>
                <li>Bezbednosnih razloga</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Izmene uslova
              </h2>
              <p className="text-gray-700 mb-4">
                Zadržavamo pravo da menjamo ove uslove u bilo kom trenutku.
                Obavestićemo vas o značajnim izmenama putem email-a ili
                obaveštenja u aplikaciji. Nastavak korišćenja usluge nakon
                izmena predstavlja prihvatanje novih uslova.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Primena zakona
              </h2>
              <p className="text-gray-700 mb-4">
                Ovi uslovi se regulišu zakonima Republike Srbije. Bilo kakvi
                sporovi će se rešavati pred nadležnim sudom u Srbiji.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Kontakt
              </h2>
              <p className="text-gray-700 mb-4">
                Ako imate pitanja o ovim uslovima korišćenja, možete nas
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

export default TermsOfService;
