// ============================================================
//  Kikiou-Box — Edition Halloween
//  25 chats sur le theme d'Halloween
//  Fichier partage entre la page de jeu et la galerie.
// ============================================================

const EXPRESSIONS = [
  // --- Les classiques revisites ---
  { nom: "Citrouille",   robe: "#ff8c42", yeux: "heureux",     bouche: "sourire", extra: "citrouille" },
  { nom: "Fantôme",      robe: "#e8e8f0", yeux: "fermes",      bouche: "o",       extra: "halo" },
  { nom: "Vampire",      robe: "#2a2438", yeux: "faches",      bouche: "crocs",   extra: "cape" },
  { nom: "Sorcière",     robe: "#6b4fa0", yeux: "ouverts",     bouche: "sourire", extra: "chapeausorciere" },
  { nom: "Momie",        robe: "#ddd6c4", yeux: "ouverts",     bouche: "plat",    extra: "bandelettes" },
  { nom: "Zombie",       robe: "#7a9e6b", yeux: "tristes",     bouche: "crocs",   extra: "" },
  { nom: "Squelette",    robe: "#f0f0e8", yeux: "ouverts",     bouche: "crocs",   extra: "os" },
  { nom: "Démon",        robe: "#c0392b", yeux: "faches",      bouche: "crocs",   extra: "cornes" },

  // --- Les créatures ---
  { nom: "Chauve-souris", robe: "#3d3450", yeux: "ouverts",    bouche: "w",       extra: "ailes" },
  { nom: "Araignée",     robe: "#2b2b38", yeux: "ecarquilles", bouche: "fronce",  extra: "toile" },
  { nom: "Chat noir",    robe: "#1a1a24", yeux: "ouverts",     bouche: "w",       extra: "luneverte" },
  { nom: "Loup-garou",   robe: "#6b5a48", yeux: "faches",      bouche: "crocs",   extra: "poils" },
  { nom: "Serpent",      robe: "#4a7c59", yeux: "ouverts",     bouche: "langue",  extra: "" },
  { nom: "Corbeau",      robe: "#25252e", yeux: "ouverts",     bouche: "plat",    extra: "ailes" },

  // --- Les esprits ---
  { nom: "Spectre",      robe: "#b8d4e8", yeux: "fermes",      bouche: "ron",     extra: "halo" },
  { nom: "Âme errante",  robe: "#c8c8dc", yeux: "ouverts",     bouche: "o",       extra: "fumee" },
  { nom: "Ombre",        robe: "#1a1520", yeux: "etoiles",     bouche: "plat",    extra: "fumee" },
  { nom: "Poltergeist",  robe: "#d8d0e8", yeux: "faches",      bouche: "crocs",   extra: "eclair" },

  // --- Les sucreries ---
  { nom: "Bonbon",       robe: "#ff6b9d", yeux: "heureux",     bouche: "sourire", extra: "coeurs" },
  { nom: "Gâteau",       robe: "#f5deb3", yeux: "heureux",     bouche: "langue",  extra: "bougie" },
  { nom: "Chocolat",     robe: "#5c3a21", yeux: "heureux",     bouche: "sourire", extra: "" },

  // --- Les ambiances ---
  { nom: "Potiron",      robe: "#e8912a", yeux: "fermes",      bouche: "sourire", extra: "citrouille" },
  { nom: "Brouillard",   robe: "#9aa5b1", yeux: "fermes",      bouche: "plat",    extra: "fumee" },
  { nom: "Chandelle",    robe: "#fff3d4", yeux: "heureux",     bouche: "o",       extra: "bougie" },
  { nom: "Cimetière",    robe: "#4a4a5a", yeux: "tristes",     bouche: "moue",    extra: "pierretombe" },
  { nom: "Pleine lune",  robe: "#e8e4d0", yeux: "etoiles",     bouche: "sourire", extra: "luneverte" },
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
