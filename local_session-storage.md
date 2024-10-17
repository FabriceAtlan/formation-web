# local / session Storage

## Sommaire

- [Durée de stockage](#duree-de-stockage)

- [localStorage](#localstorage)

- [sessionStorage](#sessionstorage)

## Durée de stockage [^](#sommaire)

### localStorage [^](#sommaire)

Les données sont conservées indéfiniment, même après la fermeture du navigateur ou du redémarrage de l'appareil. Elles ne sont effacées que si l'utilisateur les supprime manuellement ou si le développeur appelle une méthode pour le faire.

### sessionStorage [^](#sommaire)

Les données sont conservées uniquement pour la durée de la session. Elles sont automatiquement supprimées lorsque l'onglet ou la fenêtre du navigateur est fermé.

### Portée

**localStorage :** Les données sont accessibles sur toutes les pages du même domaine, même entre différents onglets ou fenêtres.

**sessionStorage :** Les données sont accessibles uniquement dans l'onglet ou la fenêtre en cours et ne sont pas partagées entre les onglets.

### Méthodes d'utilisation [^](#sommaire)

#### Stocker une donnée

`setItem()` pour ajouter une clé et sa valeur :

```javascript
// Stocker une valeur
localStorage.setItem('clé', 'valeur');
sessionStorage.setItem('clé', 'valeur');
```

#### Récupérer une donnée

`getItem()` pour obtenir la valeur associée à une clé :

```javascript
// Récupérer une valeur
let valeur = localStorage.getItem('clé');
let valeurSession = sessionStorage.getItem('clé');
```

#### Supprimer une donnée

`removeItem()` pour supprimer une clé spécifique :

```javascript
// Supprimer une clé spécifique
localStorage.removeItem('clé');
sessionStorage.removeItem('clé');
```

#### Effacer toutes les données

`clear()` pour effacer toutes les données stockées :

```javascript
// Vider toutes les clés
localStorage.clear();
sessionStorage.clear();
```

### `localStorage` - Exemple d'utilisation

```javascript
// Stocker un score
localStorage.setItem('score', '100');

// Récupérer le score
let score = localStorage.getItem('score');
console.log(score); // Affiche '100'

// Supprimer le score
localStorage.removeItem('score');

// Vider complètement le localStorage
localStorage.clear();
```

### sessionStorage - Exemple d'utilisation

```javascript
// Stocker une donnée de session
sessionStorage.setItem('niveau', '2');

// Récupérer le niveau
let niveau = sessionStorage.getItem('niveau');
console.log(niveau); // Affiche '2'

// Supprimer le niveau
sessionStorage.removeItem('niveau');

// Vider complètement le sessionStorage
sessionStorage.clear();
```

### stocker un tableau

- `JSON.stringify()` pour convertir le tableau en chaîne de caractères avant de le stocker.

- `JSON.parse()` pour convertir la chaîne en tableau lors de la récupération.

```javascript
// Tableau représentant l'inventaire du joueur
let inventory = ['épée', 'bouclier', 'potion'];

// Convertir le tableau en chaîne de caractères et le stocker
localStorage.setItem('inventory', JSON.stringify(inventory));

// Récupérer la chaîne de caractères et la reconvertir en tableau
let storedInventory = JSON.parse(localStorage.getItem('inventory'));

// Afficher l'inventaire récupéré
console.log(storedInventory); // ['épée', 'bouclier', 'potion']
```

Ce code fonctionne également avec `sessionStorage`, en remplaçant simplement `localStorage` par `sessionStorage`.
