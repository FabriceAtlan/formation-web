# GIT

## Git et GitHub

### git config --global --list

Cette commande permet d'afficher la configuration Git globale de l'utilisateur, c'est-à-dire les paramètres qui s'appliquent à tous les dépôts Git de l'utilisateur sur la machine locale. Cela inclut diverses options telles que :

- **Nom d'utilisateur** et adresse **e-mail** : Ceux-ci sont utilisés pour identifier l'auteur des commits.

- **Éditeur par défaut** : L'éditeur utilisé par Git pour des tâches comme la rédaction des messages de commit (par exemple, Vim ou Nano).

- **Alias de commandes** : Si tu as défini des raccourcis pour certaines commandes Git.

- **Format de diff** : Le format utilisé pour afficher les différences entre les fichiers.

- **Protocole préféré** : Par exemple, si Git doit utiliser SSH ou HTTPS par défaut pour les interactions avec les dépôts distants.

### git config --list

Pour consulter les configurations au niveau local (c'est-à-dire pour un dépôt spécifique), utilisez la commande sans `--global` dans le répertoire du dépôt concerné.

### gh auth login

Cette commande sert à authentifier l'utilisateur auprès de **GitHub** lorsqu'il utilise l'outil en ligne de commande **GitHub CLI (gh)**.

Cet outil permet de travailler avec GitHub directement depuis le terminal sans avoir à passer par l'interface web, et l'authentification est nécessaire pour exécuter des commandes qui nécessitent un accès au compte GitHub.

### gh repo list

Cette commande fait partie de l'outil en ligne de commande **GitHub CLI (abrégé en gh)**, qui permet d'interagir directement avec GitHub depuis le terminal.

- `gh repo list` : retourne une liste de dépôts GitHub de l'utilisateur avec des informations de base comme le nom du dépôt, sa visibilité (public/privé), ainsi que le lien vers le dépôt.

- `gh repo list --public` ou `gh repo list --private` : Filtre les dépôts privés ou publics.

### git remote add origin url

Cette commande a pour objectif d'ajouter un **remote (dépôt distant)** à un dépôt Git local.

Explications détaillées :

- `git remote add` : Cette partie de la commande ajoute un nouveau dépôt distant au projet Git local. Un dépôt distant est simplement une version d'un dépôt hébergé sur un serveur distant.

- `origin` : Par convention, le nom origin est utilisé pour désigner le dépôt principal (ou par défaut) auquel le dépôt local est connecté. Cependant, il s'agit d'un alias permettant de référencer un dépôt plus facilement.

- `https://github.com/FabriceAtlan/atelier-wireframe.git` : C'est l'URL du dépôt distant sur GitHub. En utilisant cette URL, Git saura où envoyer et récupérer le code lors des opérations comme `git push` ou `git pull`.

### git remote -v

Cette commande  est utilisée pour afficher les informations détaillées sur les remotes (dépôts distants) associés à un dépôt Git local.

**Détails de la commande :**

- `git remote` : Cette commande permet de gérer les remotes, c’est-à-dire les dépôts distants auxquels un projet Git local est connecté.

- L’option `-v` (pour "verbose") donne une sortie détaillée, montrant non seulement les noms des remotes, mais aussi leurs URL, à la fois pour les opérations de fetch et de push.

**Sortie typique :**

- `origin  https://github.com/username/repo.git`  (fetch)

- `origin  https://github.com/username/repo.git` (push)

**Ou si tu utilises SSH :**

- `origin  git@github.com:username/repo.git` (fetch)

- `origin  git@github.com:username/repo.git` (push)

### git push origin main

Pour envoyer du code vers le dépôt distant, on utilise la commande `push`. La commande `push` met à jour le dépôt distant avec le contenu des derniers commits locaux non envoyés.

### git pull origin main

Si le dépôt à distance comporte des modifications, utilisez la commande `pull` pour les récupérer.

Il s'agit d'un raccourci, la commande `pull` est en fait un `fetch` puis un `merge` :

- `git fetch origin`
  
  - `fetch` permet de récupérer localement la branche distante.

- `git merge origin/main`
  
  - `merge` fusionne la branche distante et la branche locale.

### git clone <REMOTE_URL>

Permet de cloner un dépôt distant en local.

## Commandes

### Connaître le chemin abolus

- **`pwd`**

### Changer de répertoire

- **`cd`** Changement de répertoire.

- **`cd ..`** Retourne dans le répertoire précédent.

- **`~`** Fait référence au répertoire utilisateur.

### Lister le contenu d'un répertoire

- **`ls`** Lister un dossier.

- **`ls 'nom d'un dossier'`** Permet de lister le contenu d'un dossier sans y être.

- **`;`** te permet de lancer plusieurs commandes en une seule ligne.

### Créer des répertoires

- **`mkdir`** Création d'un répertoire.

- **`mkdir -p`** Le flag `-p` indique à mkdir de créer des répertoires intermédiaires si ceux-ci n'existent pas.

- **`mkdir`** quests/shell/remove-me quests/shell/delete-me

**Remarques :**
Tu peux créer un seul répertoire comme sur la première ligne, ou plusieurs à la fois comme sur la deuxième ligne.
La commande de la deuxième ligne échouerait sans le flag -p parce que le répertoire quests/shell n'existe pas; -p indique à mkdir de créer les répertoires intermédiaires si ceux-ci n'existent pas.

### Suppression

- **`rm`** Supprimer un fichier. Ne fonctionne pas pour les dossiers non vides.

- **`rm -r`** Supprimer des fichiers et des dossiers de façon récursives.

- **`rm -rf`** Supprimer un dossier en mode forcé.

### Afficher le contenu d'un text

- **`cat`** Affiche le contenu d'un fichier dans le terminal.

### Copier des fichiers

- **`cp`** A utiliser avec 2 paramètres (source et cible). Il peut y avoir plusieurs sources, mais il n'y a qu'une seule destination.

- **`mv ../trinkets .`** Copie le fichier trinkets dans le dossier parent.

### Déplacer et/ou renommer

- **`mv`** A utiliser avec 2 paramètres (source et cible). Il peut y avoir plusieurs sources, mais il n'y a qu'une seule destination.

### Télécharger un fichier

- **`curl --ssl-no-revoke -L -o planets.zip "https://github.com/WildCodeSchool/quests-resources/blob/master/terminal/planets.zip?raw=true"`**

### Dézipper un fichier

- **`unzip planets.zip`**

### Création dun ficheir

- **`echo "Hello, world" > helloWorld.txt`**

### Master vers Main

- **`git config --global init.defaultBranch main`**

### Renommer la branche

- **`git branch -m master main`**

### Mettre à jour la branche par défaut sur le dépôt distant

Le fait que la branche par défaut de ton projet soit toujours appelée `master` malgré la modification de la configuration globale avec la commande `git config --global init.defaultBranch main` peut s'expliquer par plusieurs raisons.

**Explications :**

1. **La configuration globale ne change pas les projets existants :** La commande `git config --global init.defaultBranch main` ne modifie pas les dépôts Git déjà existants. Elle ne s'applique qu'aux nouveaux dépôts. Si le dépôt a déjà été initialisé avec une branche master, la branche ne changera pas automatiquement.

2. **Tu travailles dans un dépôt déjà existant :** Si le dépôt sur lequel tu travailles a été créé avant que tu aies modifié la configuration globale, la branche par défaut restera master.

**Solutions :**

Pour renommer la branche master en main dans un projet existant, voici les étapes à suivre :

1. **Renommer la branche `master` en `main` :** Si tu es actuellement sur la branche master, utilise cette commande pour la renommer : **`git branch -m master main`**

2. **Mettre à jour la branche par défaut sur le dépôt distant :** Si tu as un dépôt distant (par exemple sur GitHub ou GitLab), tu dois également mettre à jour la branche par défaut sur le dépôt distant et pousser les changements : **`git push -u origin main`**. Ensuite, si le dépôt distant a déjà une branche master, tu peux la supprimer : **`git push origin --delete master`**

3. **Configurer la branche par défaut sur le dépôt distant :**Si tu utilises un service comme GitHub, tu devras peut-être aller dans les paramètres de ton dépôt pour définir `main` comme la nouvelle branche par défaut et supprimer `master`.

4. **Mettre à jour les configurations locales :** Si des collaborateurs ou des pipelines CI/CD utilisent encore la branche `master`, ils devront mettre à jour leur configuration locale ou leurs scripts pour pointer vers `main`.

En résumé, la configuration globale ne s'applique qu'aux nouveaux projets. Pour un projet existant, tu devras renommer manuellement la branche.
