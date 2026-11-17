(function () {
  "use strict";

  const ZAKLADKI = [
    { href: "index.html",       nazwa: "Panel Główny" },
    { href: "regulamin.html",   nazwa: "Regulamin" },
    { href: "uczelnia.html",    nazwa: "Uczelnia" },
    { href: "konstytucja.html", nazwa: "Konstytucja" },
    { href: "sekretarze.html",  nazwa: "Spis sekretarzy" },
    { href: "order.html",       nazwa: "Order Orła Czerwonego" }
  ];

  const css = [
    ".menu-rog{ position:fixed; top:16px; left:16px; z-index:1000; }",
    ".menu-przycisk{ width:44px; height:44px; display:inline-flex; align-items:center; justify-content:center; background:rgba(28,26,23,0.92); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); border:1px solid var(--linia); border-radius:6px; color:var(--zloto); font-size:22px; line-height:1; cursor:pointer; box-shadow:0 6px 18px rgba(0,0,0,0.45); transition:border-color .2s ease, background .2s ease, color .2s ease; }",
    ".menu-przycisk:hover, .menu-rog.otwarte .menu-przycisk{ border-color:var(--zloto); background:var(--tlo-karta-jasniej); color:var(--zloto-jasne); }",
    ".menu-przycisk:focus-visible{ outline:2px solid var(--zloto); outline-offset:2px; }",
    ".menu-panel{ display:none; position:absolute; top:calc(100% + 8px); left:0; width:min(86vw, 260px); background:var(--tlo-karta); border:1px solid var(--zloto); border-radius:6px; box-shadow:0 14px 34px rgba(0,0,0,0.65); overflow:hidden; }",
    ".menu-rog.otwarte .menu-panel{ display:block; animation:menuRozwin .16s ease; }",
    "@keyframes menuRozwin{ from{ opacity:0; transform:translateY(-6px); } to{ opacity:1; transform:translateY(0); } }",
    ".menu-tytul{ padding:10px 14px; background:var(--tlo-karta-jasniej); border-bottom:1px solid var(--linia); font-family:'Oswald',sans-serif; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.12em; color:var(--zloto); }",
    ".menu-lista{ list-style:none; margin:0; padding:6px; }",
    ".menu-lista li{ margin:0; padding:0; }",
    ".menu-lista a{ display:block; padding:10px 12px; border-radius:4px; color:var(--tekst-przygaszony); font-family:'Oswald',sans-serif; font-size:14px; text-transform:uppercase; letter-spacing:0.06em; text-decoration:none; transition:background .15s ease, color .15s ease; }",
    ".menu-lista a:hover, .menu-lista a:focus-visible{ color:var(--tekst); background:var(--tlo-karta-jasniej); outline:none; text-decoration:none; }",
    ".menu-lista a[aria-current='page']{ background:linear-gradient(135deg, var(--czerwien), var(--czerwien-jasna)); color:#fff; }"
  ].join("\n");

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  function normalizuj(s) {
    return String(s).replace(/\.html$/i, "").replace(/\/+$/, "");
  }

  let aktualna = normalizuj(location.pathname.split("/").pop() || "index");
  if (aktualna === "") aktualna = "index";

  const nav = document.createElement("nav");
  nav.className = "menu-rog";
  nav.setAttribute("aria-label", "Zakładki");

  const przycisk = document.createElement("button");
  przycisk.type = "button";
  przycisk.className = "menu-przycisk";
  przycisk.textContent = "☰";
  przycisk.setAttribute("aria-label", "Zakładki");
  przycisk.setAttribute("aria-expanded", "false");
  przycisk.setAttribute("aria-controls", "menuPanelZakladek");

  const panel = document.createElement("div");
  panel.className = "menu-panel";
  panel.id = "menuPanelZakladek";

  const tytul = document.createElement("div");
  tytul.className = "menu-tytul";
  tytul.textContent = "Zakładki";

  const lista = document.createElement("ul");
  lista.className = "menu-lista";

  ZAKLADKI.forEach(function (z) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = z.href;
    a.textContent = z.nazwa;
    if (normalizuj(z.href) === aktualna) a.setAttribute("aria-current", "page");
    li.appendChild(a);
    lista.appendChild(li);
  });

  panel.appendChild(tytul);
  panel.appendChild(lista);
  nav.appendChild(przycisk);
  nav.appendChild(panel);
  document.body.prepend(nav);

  function czyOtwarte() { return nav.classList.contains("otwarte"); }

  function ustaw(otwarte) {
    nav.classList.toggle("otwarte", otwarte);
    przycisk.setAttribute("aria-expanded", otwarte ? "true" : "false");
  }

  function linki() { return Array.prototype.slice.call(lista.querySelectorAll("a")); }

  przycisk.addEventListener("click", function (e) {
    e.stopPropagation();
    ustaw(!czyOtwarte());
  });

  document.addEventListener("click", function (e) {
    if (czyOtwarte() && !nav.contains(e.target)) ustaw(false);
  });

  document.addEventListener("keydown", function (e) {
    if (!czyOtwarte() && !(e.target === przycisk && e.key === "ArrowDown")) return;
    if (e.key === "Escape") {
      ustaw(false);
      przycisk.focus();
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!czyOtwarte()) ustaw(true);
      const l = linki();
      let idx = l.indexOf(document.activeElement);
      if (e.key === "ArrowDown") idx = (idx + 1) % l.length;
      else idx = idx <= 0 ? l.length - 1 : idx - 1;
      l[idx].focus();
    }
  });
})();
