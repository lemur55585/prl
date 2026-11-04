/* ============================================================
   menu.js: hamburger "Zakładki" z listą rozwijaną

   Żeby dodać, usunąć lub przestawić zakładkę, edytuj TYLKO
   tablicę ZAKLADKI poniżej. Zmiana działa od razu na wszystkich
   stronach, bo każda wczytuje ten plik.

   Na stronie musi być (to już jest w każdym pliku .html):
     <nav id="menu-zakladek"></nav>
     <script src="menu.js"></script>
   ============================================================ */
(function () {
  "use strict";

  // --- LISTA ZAKŁADEK (kolejność = kolejność w menu) ---
  var ZAKLADKI = [
    { href: "regulamin.html",   nazwa: "Regulamin" },
    { href: "index.html",       nazwa: "Panel Główny" },
    { href: "uczelnia.html",    nazwa: "Uczelnia" },
    { href: "konstytucja.html", nazwa: "Konstytucja" },
    { href: "sekretarze.html",  nazwa: "Spis sekretarzy" },
    { href: "order.html",       nazwa: "Order Orła Czerwonego" },
    { href: "ai-detektor.html", nazwa: "AI Detector" }
  ];

  var NAPIS_PRZYCISKU = "Zakładki";

  var kontener = document.getElementById("menu-zakladek");
  if (!kontener) return;

  // --- STYLE (wstrzykiwane raz; korzystają ze zmiennych kolorów strony) ---
  var css = [
    ".menu{ display:flex; justify-content:center; margin-top:24px; padding:0 20px; position:relative; z-index:50; }",
    ".menu-wrap{ position:relative; }",
    ".menu-przycisk{ display:inline-flex; align-items:center; gap:12px; padding:10px 20px; background:var(--tlo-karta); border:1px solid var(--linia); border-radius:4px; color:var(--tekst); font-family:'Oswald',sans-serif; font-size:14px; text-transform:uppercase; letter-spacing:0.08em; cursor:pointer; transition:border-color .2s ease; }",
    ".menu-przycisk:hover, .menu.otwarte .menu-przycisk{ border-color:var(--zloto); }",
    ".menu-przycisk:focus-visible{ outline:2px solid var(--zloto); outline-offset:2px; }",
    ".menu-ikona{ display:inline-flex; flex-direction:column; gap:4px; width:18px; }",
    ".menu-ikona span{ display:block; height:2px; background:var(--zloto); border-radius:2px; transition:transform .2s ease, opacity .2s ease; }",
    ".menu.otwarte .menu-ikona span:nth-child(1){ transform:translateY(6px) rotate(45deg); }",
    ".menu.otwarte .menu-ikona span:nth-child(2){ opacity:0; }",
    ".menu.otwarte .menu-ikona span:nth-child(3){ transform:translateY(-6px) rotate(-45deg); }",
    ".menu-lista{ display:none; position:absolute; top:calc(100% + 8px); left:50%; transform:translateX(-50%); width:min(88vw, 300px); margin:0; padding:6px; list-style:none; background:var(--tlo-karta); border:1px solid var(--zloto); border-radius:6px; box-shadow:0 12px 32px rgba(0,0,0,0.55); z-index:60; }",
    ".menu.otwarte .menu-lista{ display:block; animation:menuWjazd .16s ease; }",
    "@keyframes menuWjazd{ from{ opacity:0; transform:translate(-50%,-6px); } to{ opacity:1; transform:translate(-50%,0); } }",
    ".menu-lista li{ margin:0; padding:0; list-style:none; }",
    ".menu-lista a{ display:block; padding:12px 16px; border-radius:4px; color:var(--tekst-przygaszony); font-family:'Oswald',sans-serif; font-size:14px; text-transform:uppercase; letter-spacing:0.06em; text-decoration:none; transition:background .15s ease, color .15s ease; }",
    ".menu-lista a:hover, .menu-lista a:focus-visible{ color:var(--tekst); background:var(--tlo-karta-jasniej, #242119); outline:none; text-decoration:none; }",
    ".menu-lista a[aria-current='page']{ background:linear-gradient(135deg, var(--czerwien), var(--czerwien-jasna)); color:#fff; }",
    "@media (prefers-reduced-motion: reduce){ .menu-lista{ animation:none !important; } .menu-ikona span{ transition:none; } }"
  ].join("\n");

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  // --- MARKUP ---
  function normalizuj(s) { return String(s).replace(/\.html$/i, "").replace(/\/+$/, ""); }
  var aktualna = normalizuj(location.pathname.split("/").pop() || "index");
  if (aktualna === "") aktualna = "index";

  kontener.classList.add("menu");
  kontener.setAttribute("aria-label", "Nawigacja");

  var wrap = document.createElement("div");
  wrap.className = "menu-wrap";

  var przycisk = document.createElement("button");
  przycisk.type = "button";
  przycisk.className = "menu-przycisk";
  przycisk.id = "menuPrzycisk";
  przycisk.setAttribute("aria-expanded", "false");
  przycisk.setAttribute("aria-controls", "menuLista");

  var ikona = document.createElement("span");
  ikona.className = "menu-ikona";
  ikona.setAttribute("aria-hidden", "true");
  for (var i = 0; i < 3; i++) ikona.appendChild(document.createElement("span"));

  var napis = document.createElement("span");
  napis.textContent = NAPIS_PRZYCISKU;

  przycisk.appendChild(ikona);
  przycisk.appendChild(napis);

  var lista = document.createElement("ul");
  lista.className = "menu-lista";
  lista.id = "menuLista";

  ZAKLADKI.forEach(function (z) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = z.href;
    a.textContent = z.nazwa;
    if (normalizuj(z.href) === aktualna) a.setAttribute("aria-current", "page");
    li.appendChild(a);
    lista.appendChild(li);
  });

  wrap.appendChild(przycisk);
  wrap.appendChild(lista);
  kontener.appendChild(wrap);

  // --- OBSŁUGA ---
  function czyOtwarte() { return kontener.classList.contains("otwarte"); }

  function ustaw(otwarte) {
    kontener.classList.toggle("otwarte", otwarte);
    przycisk.setAttribute("aria-expanded", otwarte ? "true" : "false");
  }

  function linki() { return Array.prototype.slice.call(lista.querySelectorAll("a")); }

  przycisk.addEventListener("click", function () { ustaw(!czyOtwarte()); });

  // Kliknięcie poza menu zamyka listę
  document.addEventListener("click", function (e) {
    if (czyOtwarte() && !kontener.contains(e.target)) ustaw(false);
  });

  // Klawiatura: Esc zamyka, strzałki przechodzą po liście
  document.addEventListener("keydown", function (e) {
    if (!czyOtwarte() && !(e.target === przycisk && e.key === "ArrowDown")) return;

    if (e.key === "Escape") {
      ustaw(false);
      przycisk.focus();
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!czyOtwarte()) ustaw(true);
      var l = linki();
      var idx = l.indexOf(document.activeElement);
      if (e.key === "ArrowDown") idx = (idx + 1) % l.length;
      else idx = idx <= 0 ? l.length - 1 : idx - 1;
      l[idx].focus();
    }
  });
})();
