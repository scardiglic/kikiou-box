// ============================================================
//  Kikiou-Box — personnages et dessin des chats
//  Fichier partage entre la page de jeu et la galerie.
// ============================================================

const EXPRESSIONS = [
  { nom: "Curieux",   robe: "#fff4e6", yeux: "ouverts",     bouche: "w",       extra: "" },
  { nom: "Content",   robe: "#ffe8d6", yeux: "heureux",     bouche: "sourire", extra: "" },
  { nom: "Endormi",   robe: "#e8e4f0", yeux: "fermes",      bouche: "ron",     extra: "zzz" },
  { nom: "Amoureux",  robe: "#ffe0ec", yeux: "coeurs",      bouche: "w",       extra: "coeurs" },
  { nom: "Fâché",     robe: "#f5d0c5", yeux: "faches",      bouche: "fronce",  extra: "fumee" },
  { nom: "Satisfait", robe: "#d9f0e0", yeux: "heureux",     bouche: "sourire", extra: "" },
  { nom: "Triste",    robe: "#d6e4ff", yeux: "tristes",     bouche: "moue",    extra: "larme" },
  { nom: "Roi",       robe: "#fff0c2", yeux: "ouverts",     bouche: "sourire", extra: "couronne" },
  { nom: "Savant",    robe: "#e4dcff", yeux: "ouverts",     bouche: "plat",    extra: "lunettes" },
  { nom: "Riche",     robe: "#d4f5dc", yeux: "dollars",     bouche: "sourire", extra: "" },
  { nom: "Effrayé",   robe: "#efe0ff", yeux: "ecarquilles", bouche: "o",       extra: "" },
  { nom: "Noir",      robe: "#3a3a4a", yeux: "ouverts",     bouche: "w",       extra: "" },
  { nom: "Étoilé",    robe: "#fff6cc", yeux: "etoiles",     bouche: "o",       extra: "" },
  { nom: "Fantôme",   robe: "#dcdce4", yeux: "fermes",      bouche: "plat",    extra: "halo" },
  { nom: "Furieux",   robe: "#ffd0c5", yeux: "faches",      bouche: "crocs",   extra: "fumee" },
  { nom: "Zen",       robe: "#d0f0ee", yeux: "fermes",      bouche: "sourire", extra: "" },
  { nom: "Gourmand",  robe: "#ffe0c2", yeux: "heureux",     bouche: "langue",  extra: "poisson" },
  { nom: "Boudeur",   robe: "#d8d8e0", yeux: "tristes",     bouche: "moue",    extra: "" },
  { nom: "Excité",    robe: "#fff0a8", yeux: "etoiles",     bouche: "sourire", extra: "eclair" },
  { nom: "Timide",    robe: "#ffd9e8", yeux: "fermes",      bouche: "w",       extra: "rougeur" },
  { nom: "Sérieux",   robe: "#c8d4e0", yeux: "ouverts",     bouche: "plat",    extra: "lunettes" },
  { nom: "Pirate",    robe: "#e0c8a8", yeux: "faches",      bouche: "crocs",   extra: "bandeau" },
  { nom: "Fatigué",   robe: "#d4dce4", yeux: "fermes",      bouche: "plat",    extra: "larme" },
  { nom: "Fier",      robe: "#d4f0d8", yeux: "heureux",     bouche: "sourire", extra: "" },
  { nom: "Chapeau",   robe: "#ffe0d0", yeux: "ouverts",     bouche: "w",       extra: "chapeau" },
];

function ombrir(hex, f) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.round(((n >> 16) & 255) * f);
  const g = Math.round(((n >> 8) & 255) * f);
  const b = Math.round((n & 255) * f);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function estSombre(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (r * 0.299 + g * 0.587 + b * 0.114) < 128;
}

// viewBox 140 x 145
function dessinerChat(e) {
  const robe = e.robe;
  const robeOmbre = ombrir(robe, 0.88);
  const sombre = estSombre(robe);
  const trait = sombre ? "#e8e8f0" : "#4a4a55";
  const museau = sombre ? "#5a5a6a" : "#fffaf5";
  let s = "";

  if (e.extra === "halo") {
    s += '<ellipse cx="70" cy="18" rx="26" ry="7" fill="none" stroke="#ffe066" stroke-width="3.5" opacity=".9"/>';
  }
  if (e.extra === "fumee") {
    s += '<path d="M40 32 q-7 -11 2 -17 q-5 -9 4 -13" stroke="#ff9f43" stroke-width="4" fill="none" stroke-linecap="round" opacity=".75"/>';
    s += '<path d="M100 32 q7 -11 -2 -17 q5 -9 -4 -13" stroke="#ff9f43" stroke-width="4" fill="none" stroke-linecap="round" opacity=".75"/>';
  }
  if (e.extra === "eclair") {
    s += '<path d="M114 24 l-13 19 h9 l-8 17 17 -21 h-9z" fill="#ffe066"/>';
  }
  if (e.extra === "zzz") {
    s += '<text x="108" y="34" font-size="17" font-weight="bold" fill="#8ab4f8" opacity=".9">z</text>';
    s += '<text x="120" y="21" font-size="12" font-weight="bold" fill="#8ab4f8" opacity=".65">z</text>';
  }

  // queue
  s += '<path d="M102 116 q24 -4 22 -26 q-1 -11 -10 -13" stroke="' + robe + '" stroke-width="14" fill="none" stroke-linecap="round"/>';
  s += '<path d="M102 116 q24 -4 22 -26 q-1 -11 -10 -13" stroke="' + robeOmbre + '" stroke-width="4" fill="none" stroke-linecap="round" opacity=".3"/>';

  // corps
  s += '<ellipse cx="70" cy="114" rx="35" ry="27" fill="' + robe + '"/>';
  s += '<ellipse cx="53" cy="133" rx="11" ry="8" fill="' + robeOmbre + '"/>';
  s += '<ellipse cx="87" cy="133" rx="11" ry="8" fill="' + robeOmbre + '"/>';
  s += '<ellipse cx="53" cy="135" rx="4" ry="2.5" fill="#ffb8c8" opacity=".6"/>';
  s += '<ellipse cx="87" cy="135" rx="4" ry="2.5" fill="#ffb8c8" opacity=".6"/>';

  // oreilles
  s += '<path d="M31 48 L26 14 L59 37 Z" fill="' + robe + '"/>';
  s += '<path d="M36 46 L33 22 L53 38 Z" fill="#ffb8c8" opacity=".7"/>';
  s += '<path d="M109 48 L114 14 L81 37 Z" fill="' + robe + '"/>';
  s += '<path d="M104 46 L107 22 L87 38 Z" fill="#ffb8c8" opacity=".7"/>';

  // tete
  s += '<ellipse cx="70" cy="78" rx="43" ry="39" fill="' + robe + '"/>';
  s += '<ellipse cx="51" cy="59" rx="13" ry="9" fill="#ffffff" opacity="' + (sombre ? ".1" : ".4") + '"/>';

  // museau
  s += '<ellipse cx="70" cy="92" rx="25" ry="17" fill="' + museau + '"/>';

  // joues
  s += '<ellipse cx="35" cy="88" rx="10" ry="6" fill="#ff9eb5" opacity=".5"/>';
  s += '<ellipse cx="105" cy="88" rx="10" ry="6" fill="#ff9eb5" opacity=".5"/>';

  // moustaches
  s += '<path d="M45 89 h-15 M45 94 h-14 M45 99 h-13" stroke="' + trait + '" stroke-width="1.6" stroke-linecap="round" opacity=".45"/>';
  s += '<path d="M95 89 h15 M95 94 h14 M95 99 h13" stroke="' + trait + '" stroke-width="1.6" stroke-linecap="round" opacity=".45"/>';

  // yeux
  const xg = 52, xd = 88, yg = 73, yd = 73;
  if (e.yeux === "ouverts") {
    s += '<ellipse cx="' + xg + '" cy="' + yg + '" rx="8" ry="10.5" fill="#2a2a35"/>';
    s += '<ellipse cx="' + xd + '" cy="' + yd + '" rx="8" ry="10.5" fill="#2a2a35"/>';
    s += '<circle cx="' + (xg+2.5) + '" cy="' + (yg-4) + '" r="3.2" fill="#fff"/>';
    s += '<circle cx="' + (xd+2.5) + '" cy="' + (yd-4) + '" r="3.2" fill="#fff"/>';
    s += '<circle cx="' + (xg-2) + '" cy="' + (yg+3.5) + '" r="1.7" fill="#fff" opacity=".65"/>';
    s += '<circle cx="' + (xd-2) + '" cy="' + (yd+3.5) + '" r="1.7" fill="#fff" opacity=".65"/>';
  } else if (e.yeux === "heureux") {
    s += '<path d="M' + (xg-9) + ' ' + (yg+4) + ' q9 -12 18 0" stroke="#2a2a35" stroke-width="3.8" fill="none" stroke-linecap="round"/>';
    s += '<path d="M' + (xd-9) + ' ' + (yd+4) + ' q9 -12 18 0" stroke="#2a2a35" stroke-width="3.8" fill="none" stroke-linecap="round"/>';
  } else if (e.yeux === "fermes") {
    s += '<path d="M' + (xg-9) + ' ' + yg + ' q9 8 18 0" stroke="#2a2a35" stroke-width="3.5" fill="none" stroke-linecap="round"/>';
    s += '<path d="M' + (xd-9) + ' ' + yd + ' q9 8 18 0" stroke="#2a2a35" stroke-width="3.5" fill="none" stroke-linecap="round"/>';
  } else if (e.yeux === "ecarquilles") {
    s += '<circle cx="' + xg + '" cy="' + yg + '" r="11.5" fill="#fff"/>';
    s += '<circle cx="' + xd + '" cy="' + yd + '" r="11.5" fill="#fff"/>';
    s += '<circle cx="' + xg + '" cy="' + yg + '" r="5.5" fill="#2a2a35"/>';
    s += '<circle cx="' + xd + '" cy="' + yd + '" r="5.5" fill="#2a2a35"/>';
    s += '<circle cx="' + (xg+2) + '" cy="' + (yg-2) + '" r="2.2" fill="#fff"/>';
    s += '<circle cx="' + (xd+2) + '" cy="' + (yd-2) + '" r="2.2" fill="#fff"/>';
  } else if (e.yeux === "faches") {
    s += '<ellipse cx="' + xg + '" cy="' + (yg+3) + '" rx="7" ry="8" fill="#2a2a35"/>';
    s += '<ellipse cx="' + xd + '" cy="' + (yd+3) + '" rx="7" ry="8" fill="#2a2a35"/>';
    s += '<circle cx="' + (xg+2) + '" cy="' + (yg-0.5) + '" r="2.3" fill="#fff"/>';
    s += '<circle cx="' + (xd+2) + '" cy="' + (yd-0.5) + '" r="2.3" fill="#fff"/>';
    s += '<path d="M' + (xg-10) + ' ' + (yg-15) + ' l19 7" stroke="#2a2a35" stroke-width="3.5" stroke-linecap="round"/>';
    s += '<path d="M' + (xd+10) + ' ' + (yd-15) + ' l-19 7" stroke="#2a2a35" stroke-width="3.5" stroke-linecap="round"/>';
  } else if (e.yeux === "tristes") {
    s += '<ellipse cx="' + xg + '" cy="' + (yg+2) + '" rx="7" ry="9" fill="#2a2a35"/>';
    s += '<ellipse cx="' + xd + '" cy="' + (yd+2) + '" rx="7" ry="9" fill="#2a2a35"/>';
    s += '<circle cx="' + (xg+2) + '" cy="' + (yg-1) + '" r="2.5" fill="#fff"/>';
    s += '<circle cx="' + (xd+2) + '" cy="' + (yd-1) + '" r="2.5" fill="#fff"/>';
    s += '<path d="M' + (xg-9) + ' ' + (yg-17) + ' l17 8" stroke="#2a2a35" stroke-width="3" stroke-linecap="round"/>';
    s += '<path d="M' + (xd+9) + ' ' + (yd-17) + ' l-17 8" stroke="#2a2a35" stroke-width="3" stroke-linecap="round"/>';
  } else if (e.yeux === "coeurs") {
    s += '<path d="M' + xg + ' ' + (yg+5) + ' c-7.5 -7.5 -15 -1 -7.5 6.5 l7.5 7.5 7.5 -7.5 c7.5 -7.5 0 -14 -7.5 -6.5z" fill="#ff4d6d"/>';
    s += '<path d="M' + xd + ' ' + (yd+5) + ' c-7.5 -7.5 -15 -1 -7.5 6.5 l7.5 7.5 7.5 -7.5 c7.5 -7.5 0 -14 -7.5 -6.5z" fill="#ff4d6d"/>';
  } else if (e.yeux === "etoiles") {
    const etoile = (cx, cy) => 'M' + cx + ' ' + (cy-11) + ' l3.2 7.5 8 .7 -5.9 5.4 1.9 7.9 -7.2 -4.5 -7.2 4.5 1.9 -7.9 -5.9 -5.4 8 -.7z';
    s += '<path d="' + etoile(xg, yg) + '" fill="#ffd700"/>';
    s += '<path d="' + etoile(xd, yd) + '" fill="#ffd700"/>';
  } else if (e.yeux === "dollars") {
    s += '<text x="' + xg + '" y="' + (yg+9) + '" font-size="23" font-weight="bold" fill="#2e7d32" text-anchor="middle">$</text>';
    s += '<text x="' + xd + '" y="' + (yd+9) + '" font-size="23" font-weight="bold" fill="#2e7d32" text-anchor="middle">$</text>';
  }

  // nez
  s += '<path d="M70 86 l-5.5 5.5 h11 z" fill="#ff9eb5"/>';

  // bouche
  const yb = 99;
  if (e.bouche === "w") {
    s += '<path d="M62 ' + yb + ' q4 6 8 0 q4 6 8 0" stroke="#2a2a35" stroke-width="2.9" fill="none" stroke-linecap="round"/>';
  } else if (e.bouche === "sourire") {
    s += '<path d="M60 ' + yb + ' q10 9 20 0" stroke="#2a2a35" stroke-width="3" fill="none" stroke-linecap="round"/>';
  } else if (e.bouche === "ron") {
    s += '<ellipse cx="70" cy="' + (yb+2) + '" rx="5" ry="6" fill="#8b4a5a"/>';
  } else if (e.bouche === "o") {
    s += '<ellipse cx="70" cy="' + (yb+2) + '" rx="6" ry="7" fill="#8b4a5a"/>';
  } else if (e.bouche === "plat") {
    s += '<path d="M62 ' + (yb+2) + ' h16" stroke="#2a2a35" stroke-width="3" stroke-linecap="round"/>';
  } else if (e.bouche === "fronce") {
    s += '<path d="M60 ' + (yb+5) + ' q10 -8 20 0" stroke="#2a2a35" stroke-width="3" fill="none" stroke-linecap="round"/>';
  } else if (e.bouche === "moue") {
    s += '<path d="M63 ' + (yb+4) + ' q7 -6 14 0" stroke="#2a2a35" stroke-width="3" fill="none" stroke-linecap="round"/>';
  } else if (e.bouche === "crocs") {
    s += '<path d="M58 ' + (yb-2) + ' q12 14 24 0z" fill="#8b4a5a"/>';
    s += '<path d="M62 ' + (yb-2) + ' l4 6 4 -6z" fill="#fff"/>';
    s += '<path d="M74 ' + (yb-2) + ' l4 6 4 -6z" fill="#fff"/>';
  } else if (e.bouche === "langue") {
    s += '<path d="M60 ' + yb + ' q10 8 20 0" stroke="#2a2a35" stroke-width="3" fill="none" stroke-linecap="round"/>';
    s += '<ellipse cx="70" cy="' + (yb+7) + '" rx="7" ry="5" fill="#ff8fa3"/>';
  }

  if (e.extra === "lunettes") {
    s += '<circle cx="' + xg + '" cy="' + yg + '" r="13.5" fill="none" stroke="#3a4a5a" stroke-width="3.4"/>';
    s += '<circle cx="' + xd + '" cy="' + yd + '" r="13.5" fill="none" stroke="#3a4a5a" stroke-width="3.4"/>';
    s += '<path d="M' + (xg+13.5) + ' ' + yg + ' h' + (xd-xg-27) + '" stroke="#3a4a5a" stroke-width="3.4"/>';
    s += '<path d="M' + (xg-13.5) + ' ' + yg + ' l-11 -4" stroke="#3a4a5a" stroke-width="3" stroke-linecap="round"/>';
    s += '<path d="M' + (xd+13.5) + ' ' + yd + ' l11 -4" stroke="#3a4a5a" stroke-width="3" stroke-linecap="round"/>';
    s += '<ellipse cx="' + (xg-3) + '" cy="' + (yg-5) + '" rx="4.5" ry="2.8" fill="#fff" opacity=".4"/>';
    s += '<ellipse cx="' + (xd-3) + '" cy="' + (yd-5) + '" rx="4.5" ry="2.8" fill="#fff" opacity=".4"/>';
  }
  if (e.extra === "couronne") {
    s += '<path d="M42 36 l8 17 8 -14 12 14 8 -14 8 17 8 -17 -7 30 h-38z" fill="#ffd700" stroke="#d4a017" stroke-width="1.8"/>';
    s += '<circle cx="70" cy="40" r="3.5" fill="#ff4d6d"/>';
    s += '<circle cx="52" cy="44" r="2.5" fill="#4dabf7"/>';
    s += '<circle cx="88" cy="44" r="2.5" fill="#51cf66"/>';
  }
  if (e.extra === "chapeau") {
    s += '<ellipse cx="70" cy="44" rx="41" ry="8" fill="#3a3a4a"/>';
    s += '<path d="M48 44 q0 -31 22 -31 q22 0 22 31z" fill="#4a4a5a"/>';
    s += '<rect x="48" y="36" width="44" height="7" fill="#ff6b35"/>';
  }
  if (e.extra === "bandeau") {
    s += '<path d="M27 64 q43 -13 86 0 l0 9 q-43 -13 -86 0z" fill="#2a2a35"/>';
    s += '<circle cx="33" cy="70" r="3.5" fill="#ffd700"/>';
  }
  if (e.extra === "larme") {
    s += '<path d="M36 93 q5 12 0 17 q-6 -5 0 -17z" fill="#58a6ff"/>';
  }
  if (e.extra === "coeurs") {
    s += '<path d="M114 42 c-5.5 -5.5 -12 -1 -5.5 5.5 l5.5 5.5 5.5 -5.5 c6.5 -6.5 0 -11 -5.5 -5.5z" fill="#ff4d6d" opacity=".9"/>';
    s += '<path d="M25 48 c-4.5 -4.5 -10 -1 -4.5 4.5 l4.5 4.5 4.5 -4.5 c5.5 -5.5 0 -9 -4.5 -4.5z" fill="#ff4d6d" opacity=".6"/>';
  }
  if (e.extra === "poisson") {
    s += '<path d="M104 108 q11 -9 20 0 q-11 9 -20 0z" fill="#7fb8e8"/>';
    s += '<path d="M124 108 l9 -7 v14z" fill="#5a98d0"/>';
    s += '<circle cx="110" cy="106" r="1.7" fill="#1a1a1a"/>';
  }
  if (e.extra === "rougeur") {
    s += '<ellipse cx="33" cy="86" rx="14" ry="9" fill="#ff6b8a" opacity=".32"/>';
    s += '<ellipse cx="107" cy="86" rx="14" ry="9" fill="#ff6b8a" opacity=".32"/>';
  }

  return s;
}
