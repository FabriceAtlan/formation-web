# React | Création d'un composant

## Sommaire

- [React et le Pascal case](#react-et-le-pascal-case)

- [Répertoire components](#react--création-dun-composant)

- [import / export](#import--export)

### React et le Pascal case [^](#sommaire)

Dans `React`, il est impératif d'utiliser le **Pascal case** pour créer nos composants.

### Répertoire components [^](#sommaire)

Une bonne pratique consiste à créer nos composants dans un répertoire `components` dans le dossier `src` du projet.

### import / export [^](#sommaire)

Un composant est déclaré avec le mot-clé `function`. Puis exporté avec les mots-clés `export default`. En faisant cela, le composant est disponible à l'extérieur du fichier.

Pouvoir utiliser un composant, il faut l'importer comme suit :

```powershell
import nom_du_composant from "chemin_du_composant";
```
