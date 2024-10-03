# JavaScript

## Histoire

`JavaScript` a été conçu par **Brendan Eich** pour être utilisé côté `frontend` (dans le navigateur donc). Mais depuis 2009, il est possible de créer du code `backend` (côté serveur donc) avec `NodeJS` ! 

Bien que leurs noms semblent similaires, `JavaScript` est totalement différent de `Java`.
JS est appelé JavaScript car quand il a été créé, Java était populaire, donc les créateurs ont pensé qu'ajouter Java dans son nom le rendrait plus accessible.

## ECMAScript Standards

Comme tout langage de programmation, JavaScript a son lot de règles et de spécifications. Ces specs sont implémentées dans un standard appelé `ECMAScript (ES)`.

Chaque nouvelle version d'`ECMAScript` vient avec des nouvelles features, des nouvelles normes sur la façon d'écrire le JavaScript.

`ES6` a été introduit en **2015** et a ajouté de nombreuses fonctionnalités au langage.

JavaScript à partir d'ES6 et au-delà (ES6+) est parfois appelé le **JavaScript moderne**.

## DOMContentLoaded

### À quoi ça sert ?

L'événement `DOMContentLoaded` en JavaScript est déclenché lorsque le document HTML a été entièrement chargé, sans attendre que les feuilles de style, les images et les sous-documents aient terminé leur chargement.

`DOMContentLoaded` se concentre uniquement sur le HTML et permet d'exécuter du JavaScript plus rapidement après le chargement du HTML. Si votre script ne dépend pas de ressources comme des images, c'est l'événement idéal pour initialiser les interactions et manipuler le **DOM**.

### Fonctionnement interne

Sous le capot, dès que le navigateur commence à charger la page, il analyse le HTML. Une fois que l'intégralité du document HTML a été parcourue, il déclenche l'événement DOMContentLoaded.

### Quand utiliser `DOMContentLoaded` ?

Lorsque vous avez besoin d'exécuter du code JavaScript dès que le HTML est prêt à être manipulé, mais que vous n'avez pas besoin d'attendre que toutes les ressources (comme les images ou les CSS) soient chargées.

### Exemple d'utilisation

```javascript
document.addEventListener("DOMContentLoaded", function() {
    console.log("Le document est entièrement chargé et analysé.");
    // Ici, vous pouvez manipuler le DOM
});

```

## L'événement `load`

L'événement `load` en JavaScript est déclenché lorsque tous les éléments de la page (y compris le HTML, les feuilles de style CSS, les images, les iframes et les scripts) ont été complètement chargés.

`load` attend donc que toutes les ressources soient prêtes telles que :

- Le HTML
- Les styles CSS
- Les images
- Les vidéos et fichiers multimédias
- Les iframes
- Les scripts et autres ressources externes

## La balise `script`

```javascript
<script src="script.js"></script>
```

## Opérateurs d'incrément

En JavaScript, tu peux utiliser différents opérateurs pour incrémenter une variable :

- l'opérateur d'incrément `++` pour augmenter la valeur de un : c'est un raccourci pour `+= 1`
- l'opérateur d'incrément `+=` pour augmenter la valeur tout en assignant le résultat : `a += 1` est un raccourci pour `a = a + 1`
- l'opérateur d'incrément `+` est l'opérateur "normal" pour faire une addition : celui que tu connais depuis toujours. L'opérateur + ne fait "que" une addition : pour stocker le résultat dans une variable, tu dois utiliser - l'opérateur = dans ton instruction.
