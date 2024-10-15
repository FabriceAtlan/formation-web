# Notion d'Asynchrone et Non-bloquant

## Sommaire

- [Définition](#définition)

- [Asynchrone](#asynchrone)

- [Non-bloquant](#non-bloquant)

### Définition [^](#sommaire)

**Asynchrone :** Les tâches peuvent être exécutées en parallèle, sans attendre la fin de la précédente.

**Non-bloquant :** Les tâches d'I/O n’interrompent pas l’exécution des autres parties du programme.

Ces concepts permettent à Node.js d'être très performant pour des tâches simultanées, notamment pour les applications réseau.

### Asynchrone [^](#sommaire)

En programmation asynchrone, les opérations ne sont pas exécutées de manière linéaire ou séquentielle, mais sont déclenchées sans attendre que les précédentes soient terminées.

**Exemple simple :**

En programmation classique (synchrone), le code s'exécute étape par étape. Une opération doit se terminer avant que la suivante ne démarre.

```javascript
// Code synchrone
console.log('Début');

// Simulons une opération longue
function operationSynchrone() {
  for (let i = 0; i < 1e9; i++) {}
}

operationSynchrone();  // Le programme attend la fin de cette opération
console.log('Fin');
```

Dans cet exemple, la fonction setTimeout() déclenche une opération qui s’exécutera après un délai, mais le programme continue son exécution, affichant "Fin" avant que l'opération soit terminée.

### Non-bloquant [^](#sommaire)

Le concept de non-bloquant signifie que les opérations I/O (entrées/sorties) n'interrompent pas l'exécution du programme.
Le code peut continuer à s'exécuter tandis que des tâches longues (comme la lecture d'un fichier ou la requête à une base de données) sont effectuées en arrière-plan.

**Exemple avec une fonction bloquante :**

```javascript
const fs = require('fs');

// Lecture synchrone d'un fichier (bloque l'exécution)
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
console.log('Fin');
```

Dans ce cas, la lecture du fichier bloque tout le reste du programme jusqu'à ce que le fichier soit complètement lu.

**Exemple avec une fonction non-bloquante :**

```javascript
const fs = require('fs');

// Lecture asynchrone d'un fichier (non-bloquante)
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('Fin');
```

Ici, readFile est asynchrone et non-bloquante. Le programme continue à s'exécuter sans attendre que le fichier soit entièrement lu.
