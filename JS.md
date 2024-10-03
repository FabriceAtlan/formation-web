# JavaScript

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

L'événement `load` en JavaScript est déclenché lorsque tous les éléments de la page (y compris le HTML, les feuilles de style CSS, les images, les iframes et les scripts) ont été complètement chargés. `load` attend donc que toutes les ressources soient prêtes :

- Le HTML
- Les styles CSS
- Les images
- Les vidéos et fichiers multimédias
- Les iframes
- Les scripts et autres ressources externes
