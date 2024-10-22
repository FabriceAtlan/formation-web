# React

## Sommaire

- [Un peu d'histoire](#un-peu-dhistoire)

- [Initialisation d'une application React avec Vite](#initialisation-dune-application-react-avec-vite)

- [Changer le linter par défaut](#changer-le-linter-par-défaut)

### Un peu d'histoire [^](#sommaire)

Suite à l'adoption massive de sa bibliothèque, en **2016** l'équipe en charge du développement de **React** a sorti un installateur nommé **Create React App**.

Ce dernier permet d'initialiser des **applications monopage** (**Single Page Application ou SPA**), d'avoir un **serveur de développement** (permettant notamment de reconstruire l'application lors de la modification des fichiers), de **construire** (**build**) l'application afin de la mettre en production, et tout un tas d'autres choses que tu trouveras sur la documentation officielle.

**Le tout sans aucune configuration !**

### Initialisation d'une application React avec Vite [^](#sommaire)

**La commande d'installation peut changer en fonction de la version de npm utilisée !**

```powershell
npm create vite@latest nom_de_mon_application
```

À la question `Select a framework`, choisis React :

```powershell
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
❯   React
    Preact
    Lit
    Svelte
    Solid
    Qwik
  Others
```

Puis, à la question `Select a variant`, choisis `Typescript` :

```powershell
✔ Select a framework: › React
? Select a variant: › - Use arrow-keys. Return to submit.
❯   TypeScript
    TypeScript + SWC
    JavaScript
    JavaScript + SWC
    Remix ↗
```

### Changer le linter par défaut (optionnel) [^](#sommaire)

L'installation de base intègre `eslint`. Faire les modifications suivantes pour utiliser biome

- Modification du `package.json` :

```powershell
{
  "name": "my-react-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
+    "check": "biome check src",
-    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
+    "@biomejs/biome": "1.8.3",
-    "@eslint/js": "^9.9.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
-    "eslint": "^9.9.0",
-    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
-    "eslint-plugin-react-refresh": "^0.4.9",
-    "globals": "^15.9.0",
    "typescript": "^5.5.3",
-    "typescript-eslint": "^8.0.1",
    "vite": "^5.4.1"
  }
}
```

- Suppression du fichier `eslint.config.js`

- Installation des dépendances avec la commande `npm install`

- Initialisation de biome avec la commande : `npx @biomejs/biome init`

- Vérifier le script `check` avec la commande `npm run check`

- Vérifier si l'installation fonctionne avec la commande suivante pour lancer l'application **React** en mode **développement** : `npm run dev`
