# 🎁 La Boîte

Un site de micro-divertissement geek : tu cliques sur une boîte, elle tremble, s'ouvre, et un truc improbable en sort.

**25 surprises**, humour décalé sur le monde de la tech. Pas de vulgarité — le ton reste publiable.

---

## Le principe

Un clic sur la boîte. Le couvercle pivote, le contenu jaillit. Un deuxième clic referme. Le compteur en bas suit le nombre de boîtes ouvertes.

Quelques exemples :

| Surprise | Punchline |
|---|---|
| Un développeur | *Il dit que ça marche chez lui.* |
| Une mise en prod | *Un vendredi. À 17 h 58.* |
| Le stagiaire cloud | *Facture de 40 000 €.* |
| Une IA | *Elle a pris ton poste. Bisous.* |
| Rien | *Absolument rien. Bien joué.* |

## Stack

**Un seul fichier HTML.** Aucune dépendance, aucune bibliothèque, aucun build.

- Animations CSS + SVG (couvercle en rotation avec effet rebond)
- JavaScript vanilla pour la logique et le tirage aléatoire
- Responsive (mobile et desktop)
- Accessible au clavier (Entrée / Espace)

## Lancer en local

```bash
cd laboite
python3 -m http.server 8080 --bind 0.0.0.0
```

Puis ouvrir http://localhost:8080

## Emplacements publicitaires

Deux zones réservées sont en place dans le HTML :

- `#pub-haut` — bandeau supérieur, format 728×90
- `#pub-bas` — bandeau inférieur, même format

Il suffit d'y coller le code de la régie (AdSense ou autre) une fois le site en ligne. Le CSS est déjà dimensionné aux formats standards.

> **Note sur la monétisation** : AdSense exige un nom de domaine propre (pas un `*.github.io`) et refuse les contenus vulgaires. Le ton de ce projet a été choisi en conséquence.

## Ajouter une surprise

Tout est dans le tableau `SURPRISES` en haut du `<script>` :

```javascript
const SURPRISES = [
  { t: "Un développeur.", c: "#3fb950", s: "Il dit que ça marche chez lui." },
  // t = texte affiché, c = couleur, s = punchline sous la boîte
];
```

## Déploiement

Prévu sur **GitHub Pages** — hébergement gratuit, HTTPS automatique, domaine personnalisé possible plus tard.

## Licence

À définir.
