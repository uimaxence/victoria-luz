# Victoria-Luz — Design System

> Source de vérité unique pour le développement du site.
> **Site éditorial, asymétrique, chaleureux et premium.** Grille présente mais volontairement « cassée » : rien n'est systématiquement centré. La grille peut changer d'une section à l'autre mais reste cohérente et lisible.

---

## 1. Marque & ton

**Victoria-Luz** — Tatoueuse professionnelle · Reconstruction corporelle (sous-marque : *Enluzd*).

**Prestations :**
- **Reconstruction corporelle / tatouage réparateur :** tatouage 3D d'aréole mammaire (post-mastectomie), camouflage de cicatrices, dermopigmentation des sourcils et des lèvres.
- **Tatouage artistique :** style personnel et créatif, pièces sur-mesure.
- **Podcast & événements.**

**Positionnement :** fusion entre **l'art du tatouage et l'univers du luxe** — une expérience exclusive, soignée et personnelle, plutôt qu'une prestation « clinique ». Ce fil luxe nourrit le caractère premium, raffiné et éditorial du site.

**Parcours (utile pour le ton et la page « Qui suis-je ») :** deux années en **architecture d'intérieur et design d'objet** (sens de l'espace, de la composition et de l'esthétique → cohérent avec l'approche grille/éditoriale du site), puis révélation pour le tatouage et activité de tatoueuse professionnelle ; aujourd'hui en formation **marketing du luxe** (ISG Luxury, Nantes). Passionnée de mode, de culture et d'univers artistiques.

**Personnalité :** chaleureuse, douce, affirmée, humaine, fiable, bienveillante — et raffinée. Experte sans être clinique ; sensible sur les sujets de reconstruction, créative et affirmée sur le volet artistique.

**Ton de voix :**
- Rassurant et bienveillant, jamais médicalisant à l'excès.
- Affirmé et valorisant : on parle de réappropriation du corps, de reconstruction, de lumière (« Luz »).
- Inclusif et respectueux : le public peut traverser un parcours difficile (maladie, deuil corporel).
- Quelques touches manuscrites portent une voix plus forte et personnelle sur les grands titres/messages clés.

**Architecture du site (5 pages) :**
1. **Accueil** — vendeuse, claire, donne immédiatement à comprendre qui est Victoria, son positionnement (art + luxe + réparation) et ses prestations.
2. **Qui suis-je** — parcours (archi d'intérieur & design d'objet → tatouage → ambition luxe), valeurs, approche humaine et exigeante.
3. **Artiste tatoueuse** — le versant artistique : style personnel, créations sur-mesure, galerie.
4. **Reconstruction corporelle** — cœur de l'expertise : tatouage 3D aréole mammaire, camouflage de cicatrices, sourcils & lèvres ; ton rassurant, valorisant, pédagogique.
5. **Podcast & événements** — contenus, épisodes, dates, communauté.

> Une page « Contact / Prise de rendez-vous » est à prévoir au minimum en footer + CTA persistant.

---

## 2. Couleurs

Palette issue de la charte. Le grain de la peau est une référence assumée → fonds texturés autorisés.

| Token | Nom | HEX | Rôle |
|---|---|---|---|
| `--creme` | Crème | `#FFF2ED` | Fond principal |
| `--nude` | Nude | `#F7D6C9` | Fond secondaire / sections alternées |
| `--rose` | Rose | `#E39982` | Accent chaud, manuscrit, surlignage (gros formats uniquement) |
| `--marron` | Marron | `#733B2B` | Fond foncé chaleureux, blocs immersifs |
| `--chocolat` | Chocolat | `#3B1712` | **Texte courant**, fond très foncé, contraste |
| `--bleuet` | Bleuet | `#829CD1` | Accent doux, détails, bien-être |
| `--bleu-klein` | Bleu Klein | `#243385` | **Accent fort / CTA / liens / boutons** (registre médical, sérieux) |

**Principales** (majorité de la communication) : Crème, Nude, Rose, Marron.
**Secondaires** (accents, contraste, rythme, boutons) : Bleuet, Bleu Klein, Chocolat.

### Rôles sémantiques (à mapper en tokens)
```css
--bg:            var(--creme);
--bg-alt:        var(--nude);
--bg-dark:       var(--marron);
--bg-darker:     var(--chocolat);
--text:          var(--chocolat);   /* texte sur fond clair */
--text-invert:   var(--creme);      /* texte sur fond foncé */
--accent:        var(--bleu-klein); /* CTA, liens, focus */
--accent-warm:   var(--rose);       /* manuscrit, highlights display */
--accent-soft:   var(--bleuet);     /* détails secondaires */
--line:          color-mix(in srgb, var(--chocolat) 18%, transparent); /* filets de grille/séparateurs */
```

### Règles de contraste (accessibilité)
- **Texte courant** : Chocolat sur Crème/Nude ✔ · Crème sur Marron/Chocolat ✔ · Crème sur Bleu Klein ✔.
- **Rose** et **Bleuet** : réservés aux **grands formats** (display, manuscrit, filets, aplats décoratifs). **Jamais** pour du corps de texte sur fond clair (contraste insuffisant).
- Bleu Klein = couleur de lien/CTA par défaut ; au survol → Chocolat ou soulignement.
- Viser WCAG AA (4.5:1 corps, 3:1 grands titres). Vérifier chaque combinaison.

### Combinaisons d'aplats recommandées (encadrés, blocs, tampons)
Crème + Chocolat · Nude + Marron · Marron + Crème · Bleu Klein + Crème · Crème + Bleu Klein.
Éviter les paires faiblement contrastées (Nude+Crème, Rose+Nude) hors usage purement décoratif.

---

## 3. Typographie

Trois voix typographiques, hiérarchie stricte.

### 3.1 Polices
| Usage | Police | Statut | Fallback dev |
|---|---|---|---|
| **Titres / display** | **Solea** | Fichier fourni (`assets/typo/Solea-Regular.otf`), chargé en local | `Fraunces` / `Cormorant Garamond` (pile de secours) |
| **Corps, surtitres, sous-titres, UI** | **Work Sans** | Fournie en local (5 graisses, `assets/typo/`) | `system-ui` |
| **Manuscrit / script** | **Quentin** | Fichier fourni (`assets/typo/Quentin.otf`), chargé en local (`--font-quentin`) | `Caveat` / `cursive` |

> ✅ **Solea (étape 1) :** Victoria a fourni `Solea-Regular.otf`. Elle est chargée via `next/font/local` (variable `--font-solea`) et branchée sur le **point de bascule unique `--font-display`**. La pile Fraunces/Cormorant reste en secours. ⚠️ Seul le **poids Regular** est disponible : pas de graisse display « bold » — la hiérarchie repose sur la taille et les MAJUSCULES. Acheter d'autres graisses si besoin.
> ✅ **Manuscrit :** Victoria a fourni `Quentin.otf` — script utilisé pour les accents émotionnels et les **interludes** décoratifs. Chargée via `next/font/local` (variable `--font-quentin`) et branchée sur `--font-hand`. Caveat reste en secours. À utiliser avec parcimonie.

```css
/* Un seul point de bascule pour la police de titres. */
--font-display: var(--font-solea), 'Fraunces', 'Cormorant Garamond', serif;
--font-sans:    var(--font-worksans), system-ui, sans-serif;
--font-hand:    var(--font-quentin), 'Caveat', cursive;
```

### 3.2 Règles d'emploi (issues de la charte)
- **H1 / titres (Solea)** : **MAJUSCULES**, interlettrage `0`, interlignage serré (`line-height: 1.05–1.15`).
- **Surtitre (Work Sans Regular)** : **MAJUSCULES**, interlettrage large (`letter-spacing: 0.22–0.3em`).
- **Sous-titre (Work Sans Bold)** : minuscules, Première lettre en majuscule, interlettrage `0`.
- **Corps (Work Sans Regular)** : `line-height: 1.6–1.75`. Possibilité de **texte justifié** en colonne étroite (style charte) — uniquement desktop, jamais sur mobile.
- **Manuscrit (Caveat)** : réservé aux **gros titres / messages forts** et accents émotionnels (« scroll », signatures, mots-clés). Couleur Rose ou Marron sur clair, Crème sur foncé. À utiliser **avec parcimonie**.

### 3.3 Échelle typographique (fluide)
```css
--fs-display: clamp(3rem, 8vw, 8rem);       /* hero Solea, peut déborder (bleed). Floor abaissé 3.5→3rem (étape 1) pour la lisibilité mobile */
--fs-h1:      clamp(2.5rem, 5vw, 4.5rem);
--fs-h2:      clamp(2rem, 3.5vw, 3rem);
--fs-h3:      clamp(1.5rem, 2.2vw, 2rem);
--fs-hand:    clamp(2.5rem, 6vw, 6rem);      /* manuscrit display */
--fs-surtitre:clamp(0.75rem, 0.9vw, 0.875rem);
--fs-body:    clamp(1rem, 1.1vw, 1.125rem);
--fs-small:   0.875rem;
--fs-caption: 0.75rem;
```

---

## 4. Système de grille (cœur du projet)

**Principe :** une grille **présente et assumée**, mais des compositions **asymétriques**. On évite le « tout centré ». Les éléments se posent sur les côtés, débordent, se chevauchent — comme dans les inspirations et les maquettes de la charte.

### 4.1 Base
```css
--grid-cols: 12;
--grid-gutter: clamp(1rem, 2vw, 1.5rem);
--page-margin: clamp(1.25rem, 5vw, 5rem);   /* marge extérieure */
--content-max: 1440px;                       /* le full-bleed reste autorisé */
--baseline: 8px;                             /* rythme vertical */
```
Conteneur standard : `max-width: var(--content-max)` centré, marges `--page-margin`, 12 colonnes. **Le débordement (bleed) hors conteneur est volontaire et encouragé** pour images et gros titres.

### 4.2 Patterns de layout (réutilisables, nommés)
La grille **change de logique selon la section**, mais le vocabulaire reste constant :

1. **`hero-bleed`** — Titre Solea surdimensionné aligné à **gauche** (colonne ≈ 55 %, aérée du bord, centrée verticalement) ; **image plein écran à droite** occupant **45 %** de la largeur sur **toute la hauteur du viewport** (`min-h: calc(100svh - 4.5rem)`), **légèrement à cheval** sur la section suivante (déborde ≈ 4 rem vers le bas, `z-index` au-dessus ; absorbé par le `padding-top` de la section d'après). L'image est **révélée en cascade sur 4 colonnes** (cf. §8) et porte une **signature manuscrite** (« Victoria ») en accent. Le mot manuscrit reste lisible/explicite (pas de jeu de mots opaque). Plus de tampon rotatif ni d'indice « faire défiler » dans le hero. Le positionnement décoratif critique (image plein écran, feuillages) est posé en **inline-style** `position:absolute` pour garantir le retrait du flux. (cf. inspiration « The Inside Look » / charte p.40)
2. **`split-5-7`** — Deux colonnes inégales (≈ 5/12 + 7/12). Image pleine hauteur d'un côté, texte justifié étroit + titre de l'autre. Inverser le sens une section sur deux. (cf. charte p.40–41)
3. **`broken-overlap`** — Image qui chevauche un aplat de couleur ou une autre image ; léger décalage vertical ; tampon ou fleur au trait débordant. (cf. charte p.44)
4. **`editorial-index`** — Liste numérotée `(01) (02) (03)` avec filets horizontaux pleine largeur, titre Solea à gauche, courte description Work Sans à droite. Idéal pour lister prestations / épisodes. Au survol (pointeur fin uniquement), le **curseur natif est masqué et remplacé par une vignette-image** propre à chaque ligne, qui suit la souris (cf. §8). (cf. inspiration « Inside Look » bas de page)
5. **`offset-stack`** — Blocs empilés volontairement désalignés horizontalement (un bloc poussé à droite, le suivant à gauche), beaucoup de négatif.
6. **`label-vertical`** — Texte vertical pivoté (`writing-mode: vertical-rl` ou `rotate(-90deg)`), surtitre en marge d'une image. (cf. charte « OUR SERVICES »)
7. **`gallery-scroll`** — Rangée d'images en défilement horizontal avec légendes courtes + flèches. Pour réalisations / itinéraires d'épisodes. (cf. inspiration « featured itineraries »)
8. **`interlude`** — Section **purement décorative** (pas de contenu fonctionnel) : un **mot manuscrit** (Quentin) surimposé à une image — parfois deux en léger chevauchement (`broken-overlap`) — beaucoup de **négatif** (padding `py-44`→`py-52`) et des apparitions douces au scroll, en cascade. Sert à **aérer** et donner du corps entre deux sections. Variante `mirror` (image à gauche/texte à droite). (cf. inspiration « It begins with sharing stories »)

> Chaque section choisit **un** pattern. Cohérence assurée par : mêmes marges, même gutter, même rythme vertical (baseline 8px), mêmes filets `--line`.

### 4.3 Overlay de grille en dev (demandé)
Outil de debug visuel **activable** :
- Toggle par **touche `g`** ET via paramètre d'URL **`?grid=1`**.
- Affiche : les **12 colonnes** (filets verticaux semi-transparents), les **marges**, et la **baseline** horizontale (8px).
- Doit pouvoir se superposer à n'importe quelle page sans casser le layout (`position: fixed; pointer-events: none; z-index: 9999`).
- Désactivé par défaut, **jamais visible en production** (mais conservé, activable via env/flag).

Implémentation suggérée : un composant/élément `GridOverlay` en `position:fixed` plein écran, colonnes en `repeat(12, 1fr)` avec `gap: var(--grid-gutter)`, bandes de couleur très faible (`color-mix(... bleu-klein 8% ...)`), + un second calque `repeating-linear-gradient` pour la baseline.

---

## 5. Espacement & rythme

Échelle basée sur 4px (rem) :
```css
--space-1: .25rem;  --space-2: .5rem;  --space-3: .75rem;  --space-4: 1rem;
--space-6: 1.5rem;  --space-8: 2rem;   --space-12: 3rem;   --space-16: 4rem;
--space-24: 6rem;   --space-32: 8rem;  --space-40: 10rem;  --space-48: 12rem;
```
- Respiration généreuse entre sections (`--space-24`/`--space-32`+ desktop).
- Rythme vertical aligné sur la baseline 8px quand c'est possible.
- Rayons : interfaces quasi droites/« carrées » (côté épuré demandé) → `--radius: 2px`. Le **cercle** est réservé aux **tampons** et aux **boutons « explore »** ronds.

---

## 6. Composants

- **Navigation** : barre pleine largeur, liens répartis (style magazine), logo `VICTORIA—LUZ` au centre ou à gauche. Variante claire (sur Crème) et inversée (sur Marron/Chocolat). Sticky discret.
- **Boutons** :
  - *Primaire* : aplat Bleu Klein, texte Crème, coins quasi droits. Hover → Chocolat.
  - *Secondaire* : contour (`1px` Chocolat), fond transparent. Hover → remplissage.
  - *Lien texte* : Work Sans, soulignement animé (largeur 0→100%).
  - *Rond « explore »* : pastille circulaire (Crème/contour) avec micro-rotation au survol.
- **Tampons / submarks** (SVG) : monogramme `VL.` cerclé, tampon `RECONSTRUCTION CORPORELLE`, tampon `ENLUZD`. Placés en **surimpression d'angle d'image**, opacité 60–100 %, rotation lente optionnelle. Aucun fichier n'étant fourni, ils sont **recréés en SVG inline** dans le composant `Stamp` (variantes `vl` / `reconstruction` / `enluzd`, texte circulaire, couleur via `currentColor`, `spin` optionnel). À affiner avec les vrais tampons de la charte si fournis.
- **Cadre image** : image nette, option **filet fin** (`1px`) ou **bordure pleine largeur** style « late checkout ». Toujours décalée/débordante selon le pattern.
- **Liste index** : `(0n)` en Solea/Work Sans, filet `--line` pleine largeur, titre + description. Hover : léger glissement + changement de couleur d'accent.
- **Carte épisode / événement** : vignette, surtitre (date en majuscules espacées), titre Solea, lien. Format `gallery-scroll` ou grille.
- **Footer** : logo, navigation, réseaux, CTA contact/RDV, mentions. Fond Marron ou Chocolat, texte Crème.

---

## 7. Éléments graphiques & texture

- **Grain** : overlay de grain sur les fonds de couleur (réf. grain de peau). Subtil. Via SVG `feTurbulence` ou PNG tileable en `mix-blend-mode: multiply/overlay`, opacité 4–10 %.
- **Fleurs au trait (pivoines) & feuillages** : illustrations SVG fines, **avec parcimonie**, en débordement de bord, basse opacité (Rose/Marron). Ne jamais surcharger. Assets fournis dans `/public/florals/` (copiés depuis `assets/icon/`) : `Pivoine_<1-5>_<couleur>`, `Feuilles_<couleur>`, `Feuilles_Pivoine_<n><A|B>_<couleur>` — couleur intégrée au fichier (`rose, marron, bleuet, nude, chocolat, bleu, creme`). Composant `Floral` (props `name`, `opacity`, `rotate`, `flip`, `width`).
- **Filets** : séparateurs fins `--line`, pleine largeur, structurants (rappellent les lignes de grille).
- **Photographie** : tons chauds, lumière naturelle, grain argentique léger, intime et respectueux (peau, mains, regards). Placeholders en dev (ratios cohérents : portrait 3:4, paysage 3:2).

---

## 8. Motion (sobre, premium)

- **Load** : une orchestration soignée par page — révélation décalée (stagger) des blocs hero (`animation-delay`).
  - **Hero — révélation en colonnes** : l'image hero est découpée visuellement en **4 colonnes** qui se découvrent **du haut vers le bas** (`clip-path: inset()` + léger `translateY`), avec un **décalage subtil et régulier** d'une colonne à l'autre (`--delay`). L'image reste continue (`object-cover` partagé) — c'est une recomposition, pas un patchwork.
- **Scroll** : images et titres qui apparaissent en fondu/glissement léger (`IntersectionObserver`).
- **Hover** : soulignements qui grandissent, légers déplacements. Rotation lente des tampons (`Stamp spin`) là où ils sont posés (Footer, bloc reconstruction) — **retirée du hero**.
  - **Curseur-image** (`editorial-index`) : sur appareil à **survol fin** (`(hover: hover) and (pointer: fine)`), le curseur natif est masqué (`cursor: none`) et une **vignette suit la souris**, affichant un **visuel différent par ligne** (fond-enchaîné au passage d'une ligne à l'autre). Désactivé au tactile et en `reduced-motion`.
- Respecter `prefers-reduced-motion: reduce` → désactiver les animations non essentielles (y compris la révélation en colonnes et le curseur-image).
- Pas de surenchère : le sujet est sensible, le mouvement doit rester doux.

---

## 9. Responsive & accessibilité

- **Mobile-first.** Les compositions asymétriques desktop se **simplifient** en colonne unique sur mobile (jamais de texte justifié, jamais de débordement illisible).
- Breakpoints suggérés : `sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`.
- Cibles tactiles ≥ 44px. Focus visible (anneau Bleu Klein).
- Images : `alt` descriptifs et dignes (contexte médical/intime). `loading="lazy"`.
- Structure sémantique (`<header><main><section><footer>`), titres hiérarchisés, contrastes AA.
- Le sujet (post-cancer, cicatrices) impose tact dans les textes et les `alt`.

---

## 10. Tech & tokens

**Stack recommandée :** Next.js (App Router) + Tailwind, tokens en variables CSS exposées au thème Tailwind.
*Alternative plus légère :* Astro (idéal pour un site éditorial majoritairement statique). Le système de tokens reste identique (variables CSS).

**Conventions :**
- Tous les tokens ci-dessus définis dans `:root` (`/styles/tokens.css`), mappés dans Tailwind via `theme.extend`.
- Un seul point de bascule pour Solea (`--font-display`).
- Pas de valeurs « en dur » : couleurs, espacements, typo passent par les tokens.
- Composant `GridOverlay` livré dès la home.

**Arborescence suggérée :**
```
/src
  /styles      tokens.css, globals.css
  /components  Nav, Footer, Button, Stamp, GridOverlay, IndexList, ImageFrame, SectionSplit...
  /assets      /stamps  /florals  /grain  /img(placeholders)
  /app (ou /pages)  accueil, qui-suis-je, artiste-tatoueuse, reconstruction-corporelle, podcast-evenements
design.md      ← ce fichier, source de vérité
```

---

## 11. Définition de « fini » pour une page

- [ ] Utilise un (ou des) pattern(s) de §4.2, **pas de centrage par défaut**.
- [ ] Tokens couleurs/typo/espacement uniquement (aucune valeur en dur).
- [ ] Hiérarchie typo conforme §3.2 (Solea MAJ titres, Work Sans corps, Caveat parcimonie).
- [ ] Overlay de grille fonctionnel (`g` / `?grid=1`) et propre.
- [ ] Responsive vérifié (asymétrie desktop → colonne mobile).
- [ ] Contrastes AA, focus visibles, `prefers-reduced-motion` géré.
- [ ] Grain + fleurs au trait dosés (parcimonie).
- [ ] `design.md` mis à jour si une décision de design a évolué.

---

## 12. Journal de développement

### Étape 1 — Fondations + page d'accueil
**Stack mise en place :** Next.js 14 (App Router) + Tailwind 3.4. Tokens en variables CSS (`src/styles/tokens.css`) mappés via `theme.extend` (`tailwind.config.ts`). Aucune valeur en dur.

**Arborescence livrée :**
```
src/
  app/         layout.tsx · page.tsx (home) · fonts.ts
  styles/      tokens.css · globals.css
  lib/         site.ts (contenu/placeholders partagés)
  components/  GridOverlay · Reveal · Grain · Stamp · Floral
               Nav · Button · ImageFrame · IndexList · Footer
    sections/  Hero · Approach · Poles · Reconstruction · Invitation
  fonts/       Solea-Regular.otf · WorkSans-*.ttf (chargés via next/font/local)
public/
  img/         photos placeholder optimisées (≤1800px, depuis assets/img)
  florals/     pivoines + feuilles SVG (depuis assets/icon)
  grain/       grain.svg (feTurbulence)
```

**Décisions arbitrées (cf. sections concernées) :**
- **Solea** fournie → chargée en local (variable unique `--font-display`). Seul le Regular existe : hiérarchie par taille + MAJ.
- **`--fs-display`** : floor 3.5rem → **3rem** (lisibilité mobile, §3.3).
- **Tampons** recréés en SVG inline (`Stamp`), aucun fichier fourni (§6).
- **`overflow-x: clip`** posé sur `html` (garde-fou anti-scroll horizontal des bleeds).
- Home = enchaînement `hero-bleed → split-5-7 → interlude → editorial-index → broken-overlap → interlude(mirror) → offset-stack`, orientations alternées et **interludes décoratifs** pour la respiration ; CTA RDV final dans le `Footer`.

**Outil grille :** `GridOverlay` actif par touche **`g`** et **`?grid=1`** (12 col + marges + baseline 8px, `z-9999`, off par défaut).

**À brancher ensuite :** textes définitifs de Victoria, sélection/retouche finale des photos, autres pages (Qui suis-je, Artiste tatoueuse, Reconstruction, Podcast & événements, Contact), licence/graisses Solea supplémentaires si besoin.
