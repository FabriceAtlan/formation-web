# JavaScript

## DOMContentLoaded

### À quoi ça sert ?

L'événement `DOMContentLoaded` en JavaScript est déclenché lorsque le document HTML a été entièrement chargé, sans attendre que les feuilles de style, les images et les sous-documents aient terminé leur chargement.

`DOMContentLoaded` se concentre uniquement sur le HTML et permet d'exécuter du JavaScript plus rapidement après le chargement du HTML. Si votre script ne dépend pas de ressources comme des images, c'est l'événement idéal pour initialiser les interactions et manipuler le **DOM**.

### Fonctionnement interne

Sous le capot, dès que le navigateur commence à charger la page, il analyse le HTML. Une fois que l'intégralité du document HTML a été parcourue, il déclenche l'événement DOMContentLoaded.

### Quand utiliser `DOMContentLoaded` ?

Lorsque vous avez besoin d'exécuter du code JavaScript dès que le HTML est prêt à être manipulé, mais que vous n'avez pas besoin d'attendre que toutes les ressources (comme les images ou les CSS) soient chargées.
