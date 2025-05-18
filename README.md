# 🚴‍♂️ Ride Engine EPSIC – Client Setup Guide

## 🔧 Prérequis


- *Node.js* (18) – [https://nodejs.org/](https://nodejs.org/)
- *Angular CLI* –

```bash
npm install -g @angular/cli
```

- *JSON Server*

```bash
npm install -g json-server
```

---

## Setup du projet

### 1. Installer les dépendances

```bash
npm install
```

---

## Lancer l'application en local

### Démarrer le JSON server

```bash
json-server --watch db.json --port 3000
```
L'api est disponible sur
`http://localhost:3000`


### Démarrer le front Angular

```bash
ng serve
```

App accessible sur

`http://localhost:4200/home`

---

### Structure du projet

```text
src/
├── app/
│   ├── pages/
│   │   └── home/                  → Homepage
│   ├── common/
│   │   ├── ride/                  → Carde d'une balade
│   │   │   ├── ride.component.ts
│   │   │   └── ride.component.html
│   │   ├── ride-detail/           → Page de détails d'une balade
│   │   │   ├── ride-detail.component.ts
│   │   │   ├── ride-detail.component.html
│   │   │   └── ride-detail.component.scss
│   │   ├── list/
│   │   └── header/                → Header de l'application
│   ├── services/
│   │   └── rides.service.ts       → Service qui appelle le JSON server
│   ├── pipes/
│   │   └── difficulty-color.pipe.ts → Pipe qui permet d'obtenir une couleur en fonction d'un nombre
│   ├── assets/                    → Images
│   │   └── images/
│   ├── types/
│   │   └── ride.ts                → Types et définitions
│   ├── app.routes.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.component.scss
├── styles.scss
├── index.html
└── main.ts
```
