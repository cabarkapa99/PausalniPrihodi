import "dotenv/config";
import { getPayload } from "payload";
import payloadConfigModule from "../payload.config.mjs";

const config = payloadConfigModule.default ?? payloadConfigModule;
const APP_URL = "https://app.pausalni-prihodi.com";

const legalPagesSeed = [
  {
    slug: "privacy",
    title: "Politika privatnosti",
    paragraphs: [
      "Poslednja izmena: 7. 12. 2025.",
      "1. Uvod",
      'Paušalni Prihodi ("mi", "naš", "nas") poštuje vašu privatnost i obavezuje se da zaštiti vaše lične podatke. Ova politika privatnosti objašnjava kako prikupljamo, koristimo i čuvamo vaše informacije kada koristite našu aplikaciju.',
      "2. Podaci koje prikupljamo",
      "2.1 Lični podaci",
      "Ime i prezime",
      "Email adresa",
      "Broj telefona (opciono)",
      "Adresa prebivališta",
      "2.2 Finansijski podaci",
      "Podaci o prihodima",
      "Porezne informacije",
      "Datumi transakcija",
      "Kategorije prihoda",
      "2.3 Tehnički podaci",
      "IP adresa",
      "Tip pregledača",
      "Operativni sistem",
      "Datum i vreme pristupa",
      "3. Kako koristimo vaše podatke",
      "Pružanje i poboljšanje naših usluga",
      "Obračunavanje poreza i prihoda",
      "Generisanje izveštaja",
      "Komunikacija sa vama",
      "Pružanje korisničke podrške",
      "Sigurnosne svrhe",
      "Ispunjavanje zakonskih obaveza",
      "4. Deljenje podataka",
      "Ne prodajemo, ne iznajmljujemo niti delimo vaše lične podatke sa trećim stranama, osim u sledećim slučajevima:",
      "Sa vašim izričitim pristankom",
      "Kada je potrebno za pružanje usluge",
      "Kada zahtevaju zakonski organi",
      "Za zaštitu naših prava i bezbednosti",
      "5. Sigurnost podataka",
      "Implementiramo odgovarajuće tehničke i organizacione mere za zaštitu vaših ličnih podataka protiv neovlašćenog pristupa, izmene, otkrivanja ili uništenja.",
      "6. Vaša prava",
      "Imate pravo da:",
      "Pristupite svojim podacima",
      "Ispravite netačne podatke",
      "Obrišete svoje podatke",
      "Ograničite obradu podataka",
      "Prenesete podatke",
      "Uplatite prigovor",
      "7. Kolačići",
      "Koristimo kolačiće za poboljšanje vašeg iskustva korišćenja aplikacije. Možete kontrolisati kolačiće kroz podešavanja vašeg pregledača.",
      "8. Kontakt",
      "Ako imate pitanja o ovoj politici privatnosti, možete nas kontaktirati na:",
      "Email: podrska@pausalni-prihodi.com",
      "Telefon: +381 62 145 5633",
      "9. Izmene politike",
      "Možemo ažurirati ovu politiku privatnosti povremeno. Obavestićemo vas o bilo kakvim značajnim izmenama putem email-a ili obaveštenja u aplikaciji.",
    ],
  },
  {
    slug: "terms",
    title: "Uslovi korišćenja",
    paragraphs: [
      "Poslednja izmena: 7. 12. 2025.",
      "1. Prihvatanje uslova",
      'Dobrodošli u Paušalni Prihodi. Korišćenjem naše aplikacije ("Usluga"), vi se slažete da budete vezani ovim uslovima korišćenja ("Uslovi"). Ako se ne slažete sa bilo kojim delom ovih uslova, ne smete koristiti našu uslugu.',
      "2. Opis usluge",
      "Paušalni Prihodi je aplikacija dizajnirana za paušalne preduzetnike u Srbiji za praćenje prihoda, obračunavanje poreza i upravljanje finansijskim podacima. Usluga uključuje:",
      "Unos i praćenje prihoda",
      "Automatski obračun poreza",
      "Generisanje izveštaja",
      "Pregled finansijskih trendova",
      "Eksport podataka",
      "3. Registracija i nalog",
      "3.1 Kreiranje naloga",
      "Da biste koristili našu uslugu, morate kreirati nalog. Obavezujete se da:",
      "Pružate tačne i potpune informacije",
      "Ažurirate informacije kada se promene",
      "Čuvate sigurnost svog naloga",
      "Budete odgovorni za sve aktivnosti na vašem nalogu",
      "3.2 Zabrana deljenja",
      "Ne smete deliti svoje korisničke podatke sa drugim osobama ili dozvoliti drugima da pristupe vašem nalogu.",
      "4. Prihvatljivo korišćenje",
      "4.1 Dozvoljene aktivnosti",
      "Korišćenje aplikacije u skladu sa namenom",
      "Unos vlastitih finansijskih podataka",
      "Generisanje izveštaja za ličnu upotrebu",
      "Kontaktiranje podrške za pomoć",
      "4.2 Zabranjene aktivnosti",
      "Korišćenje aplikacije za ilegalne svrhe",
      "Pokušaj hakovanja ili narušavanja sigurnosti",
      "Distribucija malvera ili štetnog softvera",
      "Kršenje intelektualnih prava",
      "Spam ili neželjena komunikacija",
      "Korišćenje automatizovanih sistema za pristup",
      "5. Intelektualna svojina",
      "Svi sadržaji, dizajn, funkcionalnosti i tehnologije aplikacije Paušalni Prihodi su zaštićeni autorskim pravima i drugim intelektualnim pravima. Ne smete:",
      "Kopirati, modifikovati ili distribuirati naš kod",
      "Koristiti naše zaštitne znakove bez dozvole",
      "Pokušati reverse engineering aplikacije",
      "Kreirati derivativne radove bez dozvole",
      "6. Odricanje odgovornosti",
      'Usluga se pruža "kako jeste" bez garancija bilo koje vrste. Ne garantujemo da će usluga biti:',
      "Neprekidno dostupna",
      "Bez grešaka ili bagova",
      "Sigurna od gubitka podataka",
      "Kompatibilna sa svim uređajima",
      "Važno: Aplikacija je alat za pomoć u vođenju evidencije, ali ne zamenjuje profesionalno savetovanje računovođe ili poreskog savetnika.",
      "7. Ograničenje odgovornosti",
      "U najvećoj meri dozvoljenoj zakonom, Paušalni Prihodi neće biti odgovoran za bilo kakve direktne, indirektne, slučajne, posebne ili posledične štete koje proističu iz korišćenja ili nemogućnosti korišćenja naše usluge.",
      "8. Prekidanje usluge",
      "Možemo prekinuti ili suspendovati vaš pristup usluzi u bilo kom trenutku, bez prethodne obaveštenosti, zbog:",
      "Kršenja ovih uslova",
      "Zakonskih zahteva",
      "Tehničkih problema",
      "Bezbednosnih razloga",
      "9. Izmene uslova",
      "Zadržavamo pravo da menjamo ove uslove u bilo kom trenutku. Obavestićemo vas o značajnim izmenama putem email-a ili obaveštenja u aplikaciji. Nastavak korišćenja usluge nakon izmena predstavlja prihvatanje novih uslova.",
      "10. Primena zakona",
      "Ovi uslovi se regulišu zakonima Republike Srbije. Bilo kakvi sporovi će se rešavati pred nadležnim sudom u Srbiji.",
      "11. Kontakt",
      "Ako imate pitanja o ovim uslovima korišćenja, možete nas kontaktirati na:",
      "Email: podrska@pausalni-prihodi.com",
      "Telefon: +381 62 145 5633",
    ],
  },
  {
    slug: "cookies",
    title: "Politika kolačića",
    paragraphs: [
      "Poslednja izmena: 7. 12. 2025.",
      "1. Šta su kolačići?",
      "Kolačići (cookies) su male tekstualne datoteke koje se čuvaju na vašem uređaju kada posetite našu aplikaciju. Oni nam pomažu da poboljšamo vaše iskustvo korišćenja aplikacije i da razumemo kako koristite našu uslugu.",
      "Kolačići ne sadrže lične podatke koji mogu identifikovati vas kao fizičku osobu, osim ako eksplicitno ne unesete takve informacije.",
      "2. Kako koristimo kolačiće",
      "Paušalni Prihodi koristi kolačiće za sledeće svrhe:",
      "Autentifikaciju i sigurnost",
      "Pamćenje vaših preferenci",
      "Analizu korišćenja aplikacije",
      "Poboljšanje funkcionalnosti",
      "Personalizaciju sadržaja",
      "3. Tipovi kolačića koje koristimo",
      "3.1 Neophodni kolačići",
      "Ovi kolačići su neophodni za osnovno funkcionisanje aplikacije i ne mogu se isključiti. Uključuju:",
      "Kolačiće za autentifikaciju korisnika",
      "Kolačiće za sigurnosne sesije",
      "Kolačiće za sprečavanje CSRF napada",
      "Kolačiće za osnovne funkcionalnosti",
      "3.2 Funkcionalni kolačići",
      "Ovi kolačići omogućavaju aplikaciji da pamti vaše izbore i preferencije:",
      "Jezik aplikacije",
      "Tema (svetla/tamna)",
      "Podešavanja prikaza",
      "Poslednje aktivnosti",
      "3.3 Analitički kolačići",
      "Koristimo analitičke kolačiće da razumemo kako korisnici koriste našu aplikaciju:",
      "Broj posetilaca",
      "Najčešće korišćene funkcionalnosti",
      "Vreme provedeno u aplikaciji",
      "Greške i probleme",
      "3.4 Marketing kolačići",
      "Trenutno ne koristimo marketing kolačiće, ali možemo ih dodati u budućnosti za:",
      "Pratenje konverzija",
      "Personalizovane oglase",
      "Retargeting kampanje",
      "4. Kolačići trećih strana",
      "Naša aplikacija može koristiti servise trećih strana koji postavljaju svoje kolačiće:",
      "Google Analytics: Za analizu korišćenja aplikacije",
      "Google Fonts: Za učitavanje fontova",
      "CDN servisi: Za brže učitavanje sadržaja",
      "Ovi kolačići se regulišu politikama privatnosti odgovarajućih kompanija.",
      "5. Upravljanje kolačićima",
      "5.1 Kroz pregledač",
      "Možete kontrolisati kolačiće kroz podešavanja vašeg pregledača:",
      "Chrome: Postavke → Napredno → Privatnost i sigurnost → Kolačići",
      "Firefox: Opcije → Privatnost i sigurnost → Kolačići",
      "Safari: Preferencije → Privatnost → Kolačići",
      "Edge: Postavke → Kolačići i dozvole lokacije",
      "5.2 Kroz aplikaciju",
      "U aplikaciji možete upravljati funkcionalnim kolačićima kroz podešavanja naloga.",
      "6. Posledice isključivanja kolačića",
      "Ako isključite kolačiće, neke funkcionalnosti aplikacije možda neće raditi pravilno:",
      "Možda ćete morati da se prijavljujete češće",
      "Vaše preferencije se neće pamćiti",
      "Neki sadržaji možda neće biti dostupni",
      "Performanse aplikacije mogu biti smanjene",
      "7. Trajanje kolačića",
      "Kolačići koje koristimo imaju različito trajanje:",
      "Sešn kolačići: Brišu se kada zatvorite pregledač",
      "Trajni kolačići: Ostaju na uređaju određeno vreme",
      "Autentifikacijski kolačići: Obično 30 dana",
      "Preferencije: Do 1 godine",
      "8. Sigurnost kolačića",
      "Implementiramo sigurnosne mere za zaštitu kolačića:",
      "HTTPS enkripcija za sve kolačiće",
      "HttpOnly flag za sigurnosne kolačiće",
      "Secure flag za HTTPS konekcije",
      "SameSite atribut za CSRF zaštitu",
      "9. Izmene politike",
      "Možemo ažurirati ovu politiku kolačića povremeno. Obavestićemo vas o bilo kakvim značajnim izmenama putem email-a ili obaveštenja u aplikaciji.",
      "10. Kontakt",
      "Ako imate pitanja o našoj politici kolačića, možete nas kontaktirati na:",
      "Email: podrska@pausalni-prihodi.com",
      "Telefon: +381 62 145 5633",
    ],
  },
];

const landingGlobalsSeed = {
  "site-settings": {
    siteName: "Paušalni Prihodi",
    appUrl: APP_URL,
    contactEmail: "podrska@pausalni-prihodi.com",
    contactPhone: "+381 62 145 5633",
    metaTitle:
      "Paušalni Prihodi — Invoicing & Tax Management for Serbian Entrepreneurs",
    metaDescription:
      "The trusted tax tracker for Serbian Paušalci, now with professional invoicing, foreign currency support, and automated reminders.",
  },
  hero: {
    badgeText: "Novo: Fakturisanje + Praćenje poreza u jednoj aplikaciji",
    heading: "Fakturišite profesionalno. Pratite porez automatski. Zaradite više.",
    subheading:
      "Jedina platforma za srpske paušalce koja spaja profesionalno fakturisanje, automatsko praćenje limita od 6M RSD i podršku za strane klijente — besplatno, za 30 sekundi.",
    primaryCtaText: "Kreiraj besplatni nalog",
    primaryCtaUrl: `${APP_URL}/register`,
    secondaryCtaText: "Pogledaj kako radi",
    secondaryCtaUrl: "#deep-dive",
    ctaSubtext: "Besplatno zauvek. Bez kartice. Bez caka.",
    stats: [
      { value: "1,000+", label: "Aktivnih korisnika" },
      { value: "6M RSD", label: "Limit praćenje" },
      { value: "24/7", label: "Automatizovano" },
    ],
  },
  features: {
    heading: "6 razloga zašto paušalci prelaze kod nas",
    items: [
      {
        iconName: "FileText",
        title: "Profesionalne fakture",
        description:
          "Prilagođeni šabloni za domaće i međunarodne klijente. Kreirajte, šaljite i pratite sve na jednom mestu.",
      },
      {
        iconName: "Gauge",
        title: "Pametni limiti",
        description:
          "Automatsko ažuriranje limita od 6.000.000 RSD čim se faktura označi kao plaćena.",
      },
      {
        iconName: "Bell",
        title: "Automatski podsetnici",
        description: "Automatski podsetite klijente koji kasne sa plaćanjem.",
      },
      {
        iconName: "Users",
        title: "Upravljanje klijentima",
        description:
          "Centralizovana baza podataka. Prestanite da ponovo unosite podatke o klijentima.",
      },
      {
        iconName: "Globe",
        title: "Inostranstvo podrška",
        description:
          "Fakturisanje u stranim valutama sa automatskim konverzijama po kursu NBS.",
      },
      {
        iconName: "TrendingUp",
        title: "Napredna analitika",
        description:
          "Pratite prihode, rashode i trendove sa detaljnim izveštajima.",
      },
    ],
  },
  "trust-section": {
    heading: "Platforma kojoj veruju 1,000+ preduzetnika",
    items: [
      {
        value: "Pouzdano praćenje",
        label: "Godinama tačno praćenje limita paušalnog poreza.",
      },
      {
        value: "Ažurni propisi",
        label: "Uvek usklađeni sa najnovijim poreskim propisima Srbije.",
      },
      {
        value: "Konstantan rast",
        label: "Platforma koja raste zajedno sa vašim biznisom.",
      },
    ],
  },
  "app-preview": {
    eyebrow: "Pogledajte aplikaciju",
    heading: "Sve na jednom mestu, dizajnirano za vas",
    description:
      "Čist, intuitivan interfejs koji vam štedi vreme. Evo kako izgleda vaš svakodnevni rad.",
    appUrl: APP_URL,
    ctaText: "Kreiraj nalog",
    ctaUrl: `${APP_URL}/register`,
  },
  "social-proof": {
    heading: "1,000+ preduzetnika nam veruje sa svojim biznisom",
    testimonials: [
      {
        name: "Marko Jovanovic",
        role: "Frontend Developer, Freelancer",
        text: "Pre ove aplikacije, svaki mesec sam se mučio sa Excel tabelama i kalkulatorom. Sada samo unesem fakturu i sve se automatski obračuna. Bukvalno mi štedi 5 sati mesečno.",
        rating: 5,
      },
      {
        name: "Ana Petrovic",
        role: "Grafički dizajner, Paušalac",
        text: "Konačno profesionalne fakture koje mogu da pošaljem stranim klijentima bez da me bude sramota. NBS kurs se automatski povlači, ne moram ništa ručno da računam.",
        rating: 5,
      },
      {
        name: "Stefan Nikolic",
        role: "IT Consultant",
        text: "Prešao sam sa druge aplikacije i za 2 minuta su mi svi podaci bili ovde. Pro plan se isplati samo zbog automatskih podsetnika — klijenti sada plaćaju na vreme.",
        rating: 5,
      },
      {
        name: "Jelena Milosevic",
        role: "Copywriter, Freelancer",
        text: "Kao neko ko mrzi administraciju, ovo mi je spas. Faktura za 30 sekundi, limit se sam ažurira, i imam pregled koliko još mogu da zaradim ove godine. 10/10.",
        rating: 5,
      },
      {
        name: "Nikola Djordjevic",
        role: "Video producent, Paušalac",
        text: "Koristim besplatni plan i ne fali mi ništa za početak. Kada porastem, preći ću na Pro. Odlično što nema pritiska da odmah platiš.",
        rating: 5,
      },
      {
        name: "Milica Stojanovic",
        role: "UX Designer, Remote",
        text: "Radim za nemački i holandski tim — inostrane fakture su mi svakodnevnica. Sa ovom app-om ih napravim za minut, sa svim potrebnim podacima i valutama.",
        rating: 5,
      },
    ],
  },
  pricing: {
    heading: "Počnite besplatno. Rastite bez limita.",
    subheading:
      "Besplatan plan vam daje sve što vam treba za početak.",
    plans: [
      {
        name: "Besplatan",
        price: "0",
        period: "",
        ctaText: "Počni besplatno",
        ctaUrl: `${APP_URL}/register`,
        features: [
          { value: "Neograničen broj faktura" },
          { value: "Praćenje limita od 6M RSD" },
          { value: "Domaće i inostrane fakture" },
          { value: "Osnovni šablon (sa watermarkom)" },
          { value: "Upravljanje klijentima" },
        ],
      },
    ],
  },
  faq: {
    heading: "Imate pitanja? Imamo odgovore.",
    items: [
      {
        question: "Da li je Paušalni Prihodi besplatan?",
        answer:
          "Da! Besplatan plan uključuje neograničen broj faktura, praćenje limita od 6M RSD, domaće i inostrane fakture i upravljanje klijentima. Pro plan za 1,490 RSD/mesečno dodaje automatske podsetnike, premium šablone, naprednu analitiku i prioritetnu podršku.",
      },
      {
        question: "Ko može da koristi ovu platformu?",
        answer:
          "Platforma je dizajnirana za sve paušalno oporezovane preduzetnike u Srbiji. Bilo da ste programer, dizajner, konsultant ili imate drugu delatnost — ako ste paušalac, ovo je za vas.",
      },
      {
        question: "Kako funkcioniše praćenje limita od 6M RSD?",
        answer:
          "Svaki put kada kreirate fakturu ili označite uplatu, sistem automatski ažurira vaš iskorišćeni limit. Dobićete upozorenje kada se približite limitu, tako da uvek znate koliko još možete da fakturišete.",
      },
      {
        question: "Da li mogu da šaljem fakture inostranim klijentima?",
        answer:
          "Apsolutno! Kreirajte fakture u EUR, USD ili bilo kojoj drugoj valuti. Sistem automatski povlači srednji kurs NBS i konvertuje iznos u RSD za vaš limit. Fakture su dvojezične (srpski/engleski).",
      },
      {
        question: "Šta se dešava sa mojim podacima iz stare verzije?",
        answer:
          "Svi vaši postojeći podaci — limiti, klijenti, transakcije — su automatski migrirani na novu platformu. Prijavite se sa istim nalogom i nastavite gde ste stali, sada sa svim novim funkcijama.",
      },
      {
        question: "Da li su moji podaci bezbedni?",
        answer:
          "Bezbednost je naš prioritet. Koristimo enkripciju, redovne backup-ove i strogo poštujemo GDPR regulativu. Vaši finansijski podaci su zaštićeni na najvišem nivou.",
      },
      {
        question: "Mogu li da otkazem Pro plan u bilo kom trenutku?",
        answer:
          "Naravno. Nema ugovora, nema skrivenih troškova. Otkazujete jednim klikom i vaš nalog se vraća na besplatan plan. Svi vaši podaci ostaju sačuvani.",
      },
      {
        question: "Da li generišete eFakture za SEF?",
        answer:
          "Trenutno podržavamo izradu PDF faktura. Integracija sa Sistemom eFaktura (SEF) je u planu i biće dostupna uskoro. Pratite naše objave za najnovije informacije.",
      },
    ],
  },
  "final-cta": {
    heading: "Prestanite da gubite vreme na administraciju. Počnite danas.",
    subheading:
      "Pridružite se 1,000+ paušalaca koji su automatizovali fakturisanje i praćenje poreza. Besplatan zauvek, nadogradite kada želite.",
    primaryCtaText: "Kreiraj besplatni nalog",
    primaryCtaUrl: `${APP_URL}/register`,
    secondaryCtaText: "Pogledaj demo",
    secondaryCtaUrl: "#deep-dive",
    ctaSubtext: "Bez kreditne kartice. Registracija za 30 sekundi.",
  },
  "migration-notice": {
    enabled: true,
    heading: "Svi vaši podaci su već ovde i unapređeni.",
    description:
      "Ako ste koristili staru verziju Paušalnih Prihoda, svi vaši podaci o limitima, klijentima i transakcijama su automatski migrirani na novu platformu. Prijavite se sa istim nalogom.",
    ctaText: "Prijavi se na novi nalog",
    ctaUrl: `${APP_URL}/login`,
  },
  "contact-info": {
    heading: "Pišite nam. Odgovaramo brzo.",
    subheading:
      "Imate pitanje, predlog ili vam nešto nije jasno? Naš tim je tu da pomogne — obično odgovaramo u roku od par sati.",
    email: "podrska@pausalni-prihodi.com",
    liveChatHours: "Dostupan radnim danima 9-17h",
  },
};

const toLexicalState = (paragraphs) => ({
  root: {
    type: "root",
    format: "",
    indent: 0,
    version: 1,
    direction: null,
    children: paragraphs.map((paragraph) => ({
      type: "paragraph",
      format: "",
      indent: 0,
      version: 1,
      direction: null,
      children: [
        {
          type: "text",
          detail: 0,
          format: 0,
          mode: "normal",
          style: "",
          text: paragraph,
          version: 1,
        },
      ],
    })),
  },
});

try {
  const payload = await getPayload({ config });

  const email = "dimitrije.cabarkapa99@gmail.com";
  const password = process.env.SEED_SUPERADMIN_PASSWORD;

  const existing = await payload.find({
    collection: "users",
    where: { email: { equals: email } },
    limit: 1,
  });

  if (existing.docs.length === 0) {
    if (password) {
      await payload.create({
        collection: "users",
        data: {
          email,
          password,
          role: "superadmin",
        },
      });
      console.log(`Created superadmin: ${email}`);
    } else {
      console.log(
        "Skipped superadmin creation: set SEED_SUPERADMIN_PASSWORD to create initial admin user.",
      );
    }
  } else {
    console.log(`Superadmin already exists: ${email}`);
  }

  for (const legalPage of legalPagesSeed) {
    const existingPage = await payload.find({
      collection: "legal-pages",
      where: { slug: { equals: legalPage.slug } },
      limit: 1,
    });

    const legalData = {
      slug: legalPage.slug,
      title: legalPage.title,
      lastModified: new Date().toISOString(),
      content: toLexicalState(legalPage.paragraphs),
    };

    if (existingPage.docs.length === 0) {
      await payload.create({
        collection: "legal-pages",
        data: legalData,
      });
      console.log(`Created legal page: ${legalPage.slug}`);
      continue;
    }

    await payload.update({
      collection: "legal-pages",
      id: existingPage.docs[0].id,
      data: legalData,
    });
    console.log(`Updated legal page: ${legalPage.slug}`);
  }

  for (const [slug, data] of Object.entries(landingGlobalsSeed)) {
    await payload.updateGlobal({
      slug,
      data,
    });
    console.log(`Upserted global: ${slug}`);
  }

  if (payload.db?.destroy) {
    await payload.db.destroy();
  }

  process.exit(0);
} catch (error) {
  console.error(error);
  process.exit(1);
}
