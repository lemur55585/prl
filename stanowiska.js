// ============================================================
// CENTRALNY PLIK DANYCH — SERWER PRL
// Wszystkimi osobami, kadencjami, odznaczeniami i kadrą uczelni
// zarządzasz wyłącznie w tym pliku.
// ============================================================

// --- 1. OBECNE STANOWISKA I KADENCJE (PANEL GŁÓWNY) ---
// I Sekretarz (Listopad i Grudzień)
const nazwaSekretarza1     = "Pax";
const dataStartuKadencji1  = "2026-11-01T00:00:00";
const dataKoncaKadencji1   = "2026-12-31T23:59:59";

// II Sekretarz (Listopad)
const nazwaSekretarza2     = "Eko";
const dataStartuKadencji2  = "2026-11-01T00:00:00";
const dataKoncaKadencji2   = "2026-11-30T23:59:59";

// II Sekretarz (Grudzień — przełącza się automatycznie po starcie kadencji)
const nazwaSekretarza3     = "Lemur";
const dataStartuKadencji3  = "2026-12-01T00:00:00";
const dataKoncaKadencji3   = "2026-12-31T23:59:59";

// --- 2. BAZA PRAWNA I STATUS GŁOSOWANIA ---
const nazwaKonstytucjiTekst   = "Konstytucja PRL z 2026";
const dataNowelizacjiTekst    = "02.11.2026";
const statusPrawnyAktywny     = true;
const czyTrwaGlosowanie       = false;

// --- 3. SPIS SEKRETARZY (CHRONOLOGICZNA HISTORIA) ---
const historiaSekretarzy = [
  {
    okresy: [
      { daty: "Do 31.07.2026", sekretarz1: "Måløy", sekretarz2: "Pas" }
    ],
    opis: "29 czerwca 2026 roku Måløy, nie chcąc sprawować władzy samodzielnie, ustanowił stanowisko II Sekretarza i powołał na nie Pasa."
  },
  {
    okresy: [
      { daty: "01.08.2026–31.08.2026", sekretarz1: "Devon", sekretarz2: "Måløy" }
    ],
    opis: "1 sierpnia 2026 roku Devon objęła władzę po zwycięstwie w wyborach. Była pierwszą osobą, która wygrała wybory, przerywając tym samym długotrwałe rządy Måløy."
  },
  {
    okresy: [
      { daty: "01.09.2026–03.09.2026", sekretarz1: "Papaj", sekretarz2: "Bluetes" }
    ],
    opis: "30 sierpnia 2026 roku ustanowiono nową konstytucję, która weszła w życie 1 września. Tego samego dnia władzę objął Papaj. Jego rządy nie trwały jednak długo. W wyniku buntu osób wcześniej usuniętych przez niego z partii został obalony."
  },
  {
    okresy: [
      { daty: "04.09.2026–05.09.2026", sekretarz1: "Bluetes", sekretarz2: "Pax" }
    ],
    opis: "Po obaleniu Papaja władzę przejął dotychczasowy II Sekretarz, Bluetes. Jego rządy trwały zaledwie dwa dni. W tym czasie doszło do poważnych naruszeń porządku serwera, a jego przywództwo zakończyło się 5 września."
  },
  {
    okresy: [
      { daty: "06.09.2026–31.10.2026", sekretarz1: "Pax", sekretarz2: "Devon" }
    ],
    opis: "6 września 2026 roku władzę objął Pax, a funkcję II Sekretarza powierzył Devon. Pax sprawował władzę przez kolejne dwa miesiące, utrzymując stabilne przywództwo. Jego kadencja zakończyła się 31 października 2026 roku, po czym kontynuował sprawowanie funkcji I Sekretarza w kolejnym okresie."
  },
  {
    okresy: [
      { daty: "01.11.2026–30.11.2026", sekretarz1: "Pax", sekretarz2: "Eko" },
      { daty: "01.12.2026–31.12.2026", sekretarz1: "Pax", sekretarz2: "Lemur" }
    ],
    opis: "Pax zwyciężył w kolejnych wyborach, zapewniając sobie dalsze dwumiesięczne sprawowanie władzy. Na listopad powołał Eko na II Sekretarza, natomiast na grudzień wyznaczył na to stanowisko Lemura."
  }
];

// --- 4. REJESTR ODZNACZEŃ (ORDER ORŁA CZERWONEGO) ---
const listaOdznaczonychObywateli = [
  { imie: "Maloy", powod: "Za utworzenie serwera i ogromną aktywność", data: "" },
  { imie: "Pas",   powod: "Za bycie z nami od samych początków i dalszego uczestnictwa w życiu serwera", data: "" },
  { imie: "Devon", powod: "Za rozbudowę serwera i zostanie pierwszą osobą na stanowisku sekretarza po Maloyu", data: "" },
  { imie: "Pax",   powod: "Za współzałożenie pierwszego serwera i pomaganie w następnych", data: "" },
  { imie: "Eko",   powod: "Za znaczący udział przy tworzeniu PRL3, dodanie na serwer wielu nowych osób i organizację eventu z pisania konstytucji", data: "" }
];

// --- 5. ZARZĄDCY UCZELNI ---
const listaZarzadcowUczelni = [
  { imie: "Maloy",    powod: "Zarząd Uczelni", data: "Zarząd", ikona: "🏛️" },
  { imie: "Hirohito", powod: "Zarząd Uczelni", data: "Zarząd", ikona: "🏛️" },
  { imie: "Lemur",    powod: "Zarząd Uczelni", data: "Zarząd", ikona: "🏛️" }
];

// --- 6. WYKŁADOWCY I PRZEDMIOTY ---
// Zakładka „Przedmioty” na stronie Uczelni generuje się automatycznie z tej listy.
const listaWykladowcow = [
  { imie: "Lemur",    przedmioty: ["Informatyka"],                                              data: "Wykładowca", ikona: "💻" },
  { imie: "Bluetes",  przedmioty: ["Historia"],                                                 data: "Wykładowca", ikona: "📜" },
  { imie: "Rafaella", przedmioty: ["Historia Rafalska"],                                        data: "Wykładowca", ikona: "📖" },
  { imie: "Hirohito", przedmioty: ["Chemia", "Matematyka", "Fizyka Jądrowa", "Fizyka Kwantowa"], data: "Wykładowca", ikona: "⚛️" }
];
