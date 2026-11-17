// ============================================================
// CENTRALNY PLIK DANYCH — SERWER PRL
// Wszystkimi osobami, kadencjami, odznaczeniami, kadrą uczelni
// oraz treścią Konstytucji zarządzasz wyłącznie w tym pliku.
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
const nazwaKonstytucjiTekst   = "KONSTYTUCJA III PRL (z dnia 30 sierpnia 2026 roku)";
const dataNowelizacjiTekst    = "02.11.2026";
const statusPrawnyAktywny     = true;
const czyTrwaGlosowanie       = false;

// --- 2A. PEŁNA TREŚĆ KONSTYTUCJI III PRL (30.08.2026) ---
const rozdzialyKonstytucji = [
  {
    numer: "I",
    tytul: "Postanowienia ogólne",
    podtytul: "",
    artykuly: [
      { nr: "Art. 1.", tresc: "Serwer oficjalnie jest świecki." },
      { nr: "Art. 2.", tresc: "Na serwerze oficjalnie panuje ustrój jednopartyjny." },
      { nr: "Art. 3.", tresc: "Hymnem serwera jest: Międzynarodówka." },
      { nr: "Art. 4.", tresc: "Każdy ma równe prawa i każdy równo ponosi konsekwencje swoich zachowań." }
    ]
  },
  {
    numer: "II",
    tytul: "Członkostwo w Partii",
    podtytul: "limit członków • przyjmowanie członków • prawa członków",
    artykuly: [
      { nr: "Art. 1.", tresc: "Jedno miejsce w partii przypada na pięciu członków z rangą towarzysza." },
      { nr: "Art. 2.", tresc: "Członkowie mogą:\n• Proponować ustawy.\n• Głosować w sprawie ustaw.\n• Kandydować na I Sekretarza.\n• Awansować do ZOMO i Administracji." },
      { nr: "Art. 3.", tresc: "Członków mianuje I Sekretarz." },
      { nr: "Art. 4.", tresc: "Członków może odwołać I Sekretarz lub ponad ⅔ członków partii w wyniku głosowania." },
      { nr: "Art. 5.", tresc: "Aby ubiegać się o stanowisko członka partii trzeba:\n• być na serwerze minimum tydzień.\n• nie być członkiem opozycji.\n• być choć trochę aktywną osobą." }
    ]
  },
  {
    numer: "III",
    tytul: "I Sekretarz",
    podtytul: "długość kadencji • sposób wyboru • prawa i obowiązki • zakres kompetencji",
    artykuly: [
      { nr: "Art. 1.", tresc: "Kadencja I Sekretarza trwa 2 miesiące." },
      { nr: "Art. 2.", tresc: "I Sekretarz może zrezygnować w każdej chwili." },
      { nr: "Art. 3.", tresc: "I Sekretarz jest wybierany w wyborach ogólnoserwerowych." },
      { nr: "Art. 4.", tresc: "I Sekretarz jest zobowiązany do:\na) organizowania głosowań nad poszczególnymi wnioskami.\nb) wprowadzania zmian za pośrednictwem administracji.\nc) koordynowania pracy administracji." },
      { nr: "Art. 5.", tresc: "I Sekretarz może dowolnie wymieniać członków partii na ludzi którzy spełniają wymagania z art.5. rozdziału II oraz może dokonać maksymalnie 3 zmiany dziennie." },
      { nr: "Art. 6.", tresc: "I Sekretarz nie może sam mianować się administratorem." },
      { nr: "Art. 7.", tresc: "Jeśli I Sekretarz nie jest pewny podjęcia jakiejś decyzji lub po prostu chce by zdecydował lud może zorganizować referendum ogólnoserowe (UWAGA! REFERENDUM NIE MOŻE BYĆ GŁOSOWANIEM NAD USTAWĄ LUB ZMIANĄ KONSTYTUCJI)." },
      { nr: "Art. 8.", tresc: "I Sekretarz może zostać odwołany głosem ponad 3/4 obywateli w ogólno-serwerowym głosowaniu." }
    ]
  },
  {
    numer: "IV",
    tytul: "II Sekretarz",
    podtytul: "sposób powołania • prawa i obowiązki • zastępowanie I Sekretarza • zakres kompetencji",
    artykuly: [
      { nr: "Art. 1.", tresc: "II Sekretarza mianuje I Sekretarz jako swojego zastępcę." },
      { nr: "Art. 2.", tresc: "Gdy I Sekretarz jest nieobecny II Sekretarz zajmuje jego pozycje do czasu powrotu I Sekretarza." },
      { nr: "Art. 3.", tresc: "Gdy I Sekretarz zrezygnuje II Sekretarz automatycznie staje sie I Sekretarzem i wybiera nowego zastępcę." },
      { nr: "Art. 4.", tresc: "I Sekretarz nie może zmienić II Sekretarza przez 20 dni od jego wyboru." },
      { nr: "Art. 5.", tresc: "II Sekretarz jest zobowiązany do:\na) koordynowania pracy ZOMO.\nb) pilnowania by regulamin był przestrzegany na serwerze." },
      { nr: "Art. 6.", tresc: "II Sekretarz nie może sam mianować się członkiem ZOMO." }
    ]
  },
  {
    numer: "V",
    tytul: "ZOMO",
    podtytul: "kompetencje • prawa i obowiązki",
    artykuly: [
      { nr: "Art. 1.", tresc: "ZOMO powołuje II Sekretarz po objęciu stanowiska." },
      { nr: "Art. 2.", tresc: "ZOMO mogą zostać tylko członkowie partii." },
      { nr: "Art. 3.", tresc: "ZOMO jest zobowiązane do:\na) pilnowania przestrzegania regulaminu.\nb) tworzenia ankiet min. raz na 2 tygodnie." },
      { nr: "Art. 4.", tresc: "Jeśli członek ZOMO będzie nadużywać swoich uprawnień może dostać karę bez ostrzeżenia." }
    ]
  },
  {
    numer: "VI",
    tytul: "Administracja",
    podtytul: "kompetencje • prawa i obowiązki",
    artykuly: [
      { nr: "Art. 1.", tresc: "Administracje powołuje I Sekretarz na początku swojej kadencji." },
      { nr: "Art. 2.", tresc: "Administratorami mogą zostać tylko członkowie partii." },
      { nr: "Art. 3.", tresc: "Administracja jest zobowiązana do:\na) wprowadzania przegłosowanych ustaw i wniosków.\nb) wykonywania poleceń I Sekretarza." },
      { nr: "Art. 4.", tresc: "Jeśli członek administracji będzie nadużywać swoich uprawnień może dostać karę bez ostrzeżenia lub gdy przewinienia będą poważne może zostać zastosowany ban." }
    ]
  },
  {
    numer: "VII",
    tytul: "Założyciel Serwera",
    podtytul: "",
    artykuly: [
      { nr: "Art. 1.", tresc: "Założyciel serwera jest jednocześnie prezesem banku." },
      { nr: "Art. 2.", tresc: "Założyciel serwera nie może zostać I ani II sekretarzem." },
      { nr: "Art. 3.", tresc: "Kiedy założyciel widzi łamanie konstytucji/regulaminu może OD RAZU zastosować karę." },
      { nr: "Art. 4.", tresc: "Jeśli założyciel serwera zauważy że władza stwarza zagrożenie zniszczenia serwera lub jego mocnego osłabienia może ich usunąć jednak musi mieć do tego powód." },
      { nr: "Art. 5.", tresc: "Założyciel serwera klasyfikuje ustawy, wnioski i zmiany konstytucji." }
    ]
  },
  {
    numer: "VIII",
    tytul: "Ustawy i wnioski",
    podtytul: "składanie • rozpatrywanie • głosowanie",
    artykuly: [
      { nr: "Art. 1.", tresc: "Ustawy i wnioski mogą składać wyłącznie członkowie partii i opozycji." },
      { nr: "Art. 2.", tresc: "Wnioski są rozpatrywane przez I Sekretarza bez głosowań." },
      { nr: "Art. 3.", tresc: "Kiedy złożona jest ustawa musi ona najpierw zostać sprawdzona pod kątem zgodności z konstytucją i rzeczywiście sklasyfikowana jako ustawa przez założyciela serwera a dopiero potem dopuszczona do głosowania." },
      { nr: "Art. 4.", tresc: "Kiedy ustawa jest dopuszczona do głosowania I Sekretarz organizuje 24-godzinne głosowanie w którym wygrywa opcja zaznaczona przez większość członków partii." },
      { nr: "Art. 5.", tresc: "W sytuacji remisu w głosowaniu I Sekretarz podejmuje decyzje nad tym czy ustawa przeszła." },
      { nr: "Art. 6.", tresc: "Kiedy ustawa przejdzie głosowanie I Sekretarz może ją przyjąć i wdrożyć najszybciej jak to możliwe lub zawetować i cofnąć do głosowania gdzie aby przejść ponownie musi uzyskać ponad 2/3 głosów." },
      { nr: "Art. 7.", tresc: "I Sekretarz ma tydzień czasu na podpis/weto ustawy od jej przegłosowania po tym czasie ustawa automatycznie wchodzi w życie." },
      { nr: "Art. 8.", tresc: "I Sekretarz musi tłumaczyć powód każdego weta." },
      { nr: "Art. 9.", tresc: "I Sekretarz musi każdą ustawę lub każdy wniosek który wchodzi w życie przedstawić na kanale ogłoszeniowym serwera." },
      { nr: "Art. 10.", tresc: "Wniosek to:\n• zgłoszenie nieprawidłowego zachowania administracji, zomo, I oraz II Sekretarza lub innego członka serwera.\n• propozycja zmiany czegoś małego (np. zmiana nazwy kanału, dodanie emotki, naklejki itp.)" },
      { nr: "Art. 11.", tresc: "Ustawa to: propozycja większych zmian dotyczących regulaminu, ekonomii, dodania nowego kanału, nowego bota itp." }
    ]
  },
  {
    numer: "IX",
    tytul: "Wybory",
    podtytul: "",
    artykuly: [
      { nr: "Art. 1.", tresc: "Wybory na I Sekretarza organizuje założyciel serwera." },
      { nr: "Art. 2.", tresc: "O stanowisko I Sekretarza mogą ubiegać się tylko członkowie partii." },
      { nr: "Art. 3.", tresc: "Kandydaci muszą umieścić swoje programy wyborcze na odpowiednim kanale w określony dzień inaczej zostaną usunięci z kandydatury." },
      { nr: "Art. 4.", tresc: "W sytuacji gdy jakiś kandydat w I Turze dostanie więcej niż 50% głosów wygrywa wybory automatycznie." },
      { nr: "Art. 5.", tresc: "Gdy w I Turze wyborów jest remis który uniemożliwia organizacje II tury z 2 kandydatami organizowana jest II tura która jest przejściowa i decyduje o tym kto będzie w III turze." },
      { nr: "Art. 6.", tresc: "Jeśli kandydat zrezygnuje w trakcie wyborów to ich głosy są nieważne już od I tury co może całkowicie odwrócić bieg wyborów." }
    ]
  },
  {
    numer: "X",
    tytul: "Order Orła Czerwonego",
    podtytul: "zasady nadawania • odbieranie odznaczenia",
    artykuly: [
      { nr: "Art. 1.", tresc: "Order Orła Czerwonego to najwyższe odznaczenie za serwerze." },
      { nr: "Art. 2.", tresc: "Order Orła Czerwonego może nadawać tylko założyciel serwera za szczególne i uzasadnione zasługi jednak na nadanie muszą wyrazić zgodę I jak i II Sekretarz." },
      { nr: "Art. 3.", tresc: "Order Orła Czerwonego może zostać odebrany tylko gdy zgodzą się na to Założyciel oraz I i II sekretarz." }
    ]
  },
  {
    numer: "XI",
    tytul: "Zmiana Konstytucji",
    podtytul: "",
    artykuly: [
      { nr: "Art. 1.", tresc: "Propozycje zmiany konstytucji mogą złożyć tylko członkowie partii i opozycji." },
      { nr: "Art. 2.", tresc: "Po sklasyfikowaniu propozycji jako zmiany konstytucji przez założyciela serwera I Sekretarz jest zobowiązany zorganizować głosowanie w którym potrzeba powyżej 4/5 głosów za by zmiana przeszła wtedy I Sekretarz nie może jej zawetować a zmiana wchodzi od następnego poniedziałku po przyjęciu." },
      { nr: "Art. 3.", tresc: "I Sekretarz musi każdą zmianę konstytucji która wchodzi w życie przedstawić na kanale ogłoszeniowym serwera." }
    ]
  },
  {
    numer: "XII",
    tytul: "Przepisy końcowe",
    podtytul: "",
    artykuly: [
      { nr: "Art. 1.", tresc: "Konstytucja zaczyna obowiązywać na serwerach PRL 3 i nowszych (jeśli takie będą) od 01.09.2026r." },
      { nr: "Art. 2.", tresc: "Do aktualizacji konstytucji mają dostęp tylko Maloy i Krzychu Bluetesowicz." }
    ]
  }
];

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
