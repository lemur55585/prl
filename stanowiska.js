// --- STANOWISKA I KADENCJE ---
const nazwaSekretarza1     = "Pax";
const dataStartuKadencji1  = "2026-09-05T00:00:00";
const dataKoncaKadencji1   = "2026-10-31T23:59:59";

const nazwaSekretarza2     = "Devon";
const dataStartuKadencji2  = "2026-09-05T00:00:00";
const dataKoncaKadencji2   = "2026-10-31T23:59:59";

// --- BAZA PRAWNA ---
const nazwaKonstytucjiTekst   = "Konstytucja PRL z 2026";
const dataNowelizacjiTekst    = "01.08.2026";
const statusPrawnyAktywny     = true;
const czyTrwaGlosowanie       = false;

// --- REJESTR ODZNACZEŃ (ORDER ORŁA CZERWONEGO) ---
const listaOdznaczonychObywateli = [
  { imie: "Maloy", powod: "Za utworzenie serwera i ogromną aktywność", data: "" },
  { imie: "Pas",   powod: "Za bycie z nami od samych początków i dalszego uczestnictwa w życiu serwera", data: "" },
  { imie: "Devon", powod: "Za rozbudowę serwera i zostanie pierwszą osobą na stanowisku sekretarza po Maloyu", data: "" },
  { imie: "Pax",   powod: "Za współzałożenie pierwszego serwera i pomaganie w następnych", data: "" },
  { imie: "Eko",   powod: "Za znaczący udział przy tworzeniu PRL3, dodanie na serwer wielu nowych osób i organizację eventu z pisania konstytucji", data: "" }
];

// --- ZARZĄDCY UCZELNI ---
const listaZarzadcowUczelni = [
  { imie: "Brak zarządców", powod: "Wydział nieobsadzony.", data: "" }
];

// --- WYKŁADOWCY ---
const listaWykladowcow = [
  { 
    imie: "Lemur", 
    przedmioty: ["Fizyka", "Informatyka"], 
    powod: "Fizyka, Informatyka", 
    data: "Wykładowca" 
  },
  { 
    imie: "Bluetes", 
    przedmioty: ["Historia"], 
    powod: "Historia", 
    data: "Wykładowca" 
  },
  { 
    imie: "Hirohito", 
    przedmioty: ["Chemia", "Matematyka", "Fizyka Jądrowa", "Fizyka Kwantowa"], 
    powod: "Chemia, Matematyka, Fizyka Jądrowa, Fizyka Kwantowa", 
    data: "Wykładowca" 
  }
];