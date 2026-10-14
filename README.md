# 🐱 Kikiou-Box

Un site de micro-divertissement : tu cliques sur une boîte, elle tremble, le couvercle s'ouvre, et **un petit chat kawaii** en sort. Tu ne sais jamais lequel.

**25 chats différents**, chacun avec sa couleur, ses yeux, sa bouche et son accessoire.

---

## Le concept

Style **kawaii japonais** : tête ronde, oreilles triangulaires, museau clair, joues roses, grands yeux, moustaches et queue recourbée.

Le couvercle s'ouvre avec une **charnière à gauche** — il bascule vers la droite comme un vrai couvercle.

Un second clic referme la boîte.

---

## Les 25 chats

| # | Nom | Particularité |
|---|---|---|
| 1 | Curieux | Yeux ouverts, bouche « w » |
| 2 | Content | Yeux en arcs, sourire |
| 3 | Endormi | Yeux fermés, « zzz » |
| 4 | Amoureux | Yeux en cœurs, cœurs qui s'envolent |
| 5 | Fâché | Sourcils froncés, fumée |
| 6 | Satisfait | Yeux en arcs |
| 7 | Triste | Sourcils tombants, larme |
| 8 | Roi | Couronne dorée |
| 9 | Savant | Lunettes rondes |
| 10 | Riche | Yeux en dollars |
| 11 | Effrayé | Yeux écarquillés, bouche ouverte |
| 12 | Noir | Robe sombre (contraste adapté) |
| 13 | Étoilé | Yeux en étoiles |
| 14 | Fantôme | Halo, yeux fermés |
| 15 | Furieux | Crocs, fumée |
| 16 | Zen | Yeux fermés, sourire |
| 17 | Gourmand | Langue tirée, poisson |
| 18 | Boudeur | Moue |
| 19 | Excité | Yeux en étoiles, éclair |
| 20 | Timide | Rougeur aux joues |
| 21 | Sérieux | Lunettes, bouche plate |
| 22 | Pirate | Bandeau |
| 23 | Fatigué | Larme |
| 24 | Fier | Yeux en arcs |
| 25 | Chapeau | Chapeau haut |

**Jamais deux fois le même d'affilée** — le tirage évite les répétitions.

---

## Stack

**Un seul fichier HTML.** Aucune dépendance, aucun build.

- Personnages dessinés en **SVG vectoriel** (générés en JavaScript)
- Animations CSS (secousse, ouverture, flottement)
- Responsive, accessible au clavier

---

## Emplacements

| Élément | Valeur |
|---|---|
| **En ligne** | https://scardiglic.github.io/laboite/ |
| **Dépôt** | github.com/scardiglic/laboite |
| **Local** | /home/hermes/projets/web/kikiou-box/ |

> **Note** : l'URL GitHub Pages contient encore « laboite ». Le renommage
> du dépôt est à faire (voir « Prochaines étapes »).

---

## Lancer en local

```bash
cd kikiou-box
python3 -m http.server 8080 --bind 0.0.0.0
```

Puis ouvrir http://localhost:8080

---

## Ajouter un chat

Dans `index.html`, tableau `EXPRESSIONS` :

```javascript
{ nom: "NomDuChat", robe: "#couleur", yeux: "type", bouche: "type", extra: "accessoire" },
```

**Yeux :** `ouverts`, `heureux`, `fermes`, `ecarquilles`, `faches`, `tristes`, `coeurs`, `etoiles`, `dollars`

**Bouches :** `w`, `sourire`, `ron`, `o`, `plat`, `fronce`, `moue`, `crocs`, `langue`

**Accessoires :** `halo`, `fumee`, `eclair`, `zzz`, `lunettes`, `couronne`, `chapeau`, `bandeau`, `larme`, `coeurs`, `poisson`, `rougeur`

---

## Emplacements publicitaires

Deux zones réservées dans le HTML :
- `#pub-haut` — bandeau supérieur, format 728×90
- `#pub-bas` — bandeau inférieur, même format

Le CSS est déjà dimensionné aux formats standards.

> **Contrainte** : AdSense exige un nom de domaine propre. L'adresse
> `scardiglic.github.io` n'est pas éligible.

---

## Prochaines étapes

- [ ] Acheter le domaine `kikioubox.com` (disponible, vérifié)
- [ ] Renommer le dépôt GitHub de `laboite` vers `kikiou-box`
- [ ] Vérifier les pseudos `kikioubox` sur X, YouTube et Twitch
- [ ] Ajouter des effets sonores
- [ ] Bouton de partage social (moteur de viralité)

---

## Licence

À définir.
