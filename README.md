# Kasa

Application web de location immobilière entre particuliers, développée en React dans le cadre de la formation OpenClassrooms — parcours Développeur web, testeur de logiciel.

Le projet consistait à développer l'ensemble du front-end à partir de maquettes Figma et d'un jeu de données JSON, en remplacement d'une ancienne stack ASP.NET.

## Fonctionnalités

- Navigation entre les pages avec React Router (accueil, fiche logement, à propos, erreur 404)
- Galerie de logements générée dynamiquement depuis les données
- Carrousel d'images avec navigation cyclique
- Collapses dépliables pour la description, les équipements et les sections « À propos »
- Redirection vers la page 404 si l'identifiant du logement n'existe pas
- Interface responsive, conforme aux maquettes desktop et mobile

## Stack technique

- React
- React Router
- Vite
- Sass
- Vitest pour les tests unitaires

## Tests

Tests unitaires sur les composants Banner et Slideshow, avec une couverture de 100 % sur ces deux composants.

```bash
npm run test
```

## Installation

```bash
git clone https://github.com/GucciziMane/projet-KASA.git
cd projet-KASA
npm install
npm run dev
```

L'application est disponible sur `http://localhost:5173`.
