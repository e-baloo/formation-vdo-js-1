# Installation de l'environnement de développement


## Interpréteur JS

JavaScript (JS) est le langage de programmation de tous les navigateurs Web et il est donc nativement intégré à ceux-ci.

Cependant, il n'est pas présent de manière native sur un ordinateur pour une utilisation en dehors du navigateur. Pour débuter, nous allons donc devoir installer un interpréteur pour JavaScript.

## Les interpréteurs JS

Il existe actuellement trois principaux interpréteurs JS :

Node.js : Le plus ancien et le plus répandu (c'est celui que nous utiliserons pour le reste de la formation). Node.js permet d'exécuter du code JavaScript côté serveur et offre un écosystème riche en modules grâce à npm (Node Package Manager).

Deno : Un interpréteur moderne créé par Ryan Dahl, le créateur de Node.js. Deno se distingue par sa sécurité renforcée par défaut, son support natif pour TypeScript et son intégration de modules ES sans nécessiter de gestionnaire de paquets externe.

Bun : Un nouvel interpréteur très performant, conçu pour être compatible avec Node.js et Deno. Bun se concentre sur la rapidité d'exécution et l'amélioration des performances des outils de développement JavaScript.

Avec ces outils, vous pouvez exécuter et tester du code JavaScript en dehors du navigateur, ce qui est essentiel pour le développement de serveurs, d'applications back-end, et d'outils de ligne de commande.

## Guide d'installation de Node.js

### Pré-requis

- Un ordinateur avec un système d'exploitation compatible (Windows, macOS, Linux).
- Accès à Internet pour télécharger Node.js et ses composants.

### Étapes d'installation

#### 1. Télécharger Node.js

1. Allez sur le site officiel de Node.js : [nodejs.org](https://nodejs.org/).
1. Vous verrez deux versions disponibles :
   - **LTS (Long Term Support)** : version recommandée pour la plupart des utilisateurs, offrant une stabilité à long terme.
   - **Current** : version avec les dernières fonctionnalités, mais potentiellement moins stable.

   Pour débuter, il est conseillé de choisir la version LTS.

1. Cliquez sur le bouton pour télécharger l'installateur approprié à votre système d'exploitation (Windows, macOS, ou Linux).

#### 2. Installer Node.js

##### Windows

1. Ouvrez le fichier `.msi` téléchargé.
1. Suivez les instructions de l'installateur. Acceptez les termes du contrat de licence.
1. Choisissez les options par défaut pour une installation standard.
1. Cliquez sur `Install` et attendez que l'installation se termine.
1. Une fois l'installation terminée, cliquez sur `Finish`.

##### macOS

1. Ouvrez le fichier `.pkg` téléchargé.
1. Suivez les instructions de l'installateur. Acceptez les termes du contrat de licence.
1. Cliquez sur `Install` et attendez que l'installation se termine.
1. Une fois l'installation terminée, fermez l'installateur.

##### Linux

Pour installer Node.js sur une distribution Linux, vous pouvez utiliser le gestionnaire de paquets de votre distribution.

###### Debian et Ubuntu

1. Ouvrez un terminal.
1. Exécutez les commandes suivantes :

   ```bash
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

###### CentOS et Fedora

1. Ouvrez un terminal.
1. Exécutez les commandes suivantes :

    ```bash
    curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
    sudo yum install -y nodejs
    ```

#### 3. Vérifier l'installation
Pour vérifier que Node.js et npm (Node Package Manager) ont été installés correctement, ouvrez un terminal (ou une invite de commandes sous Windows) et tapez les commandes suivantes :

```bash
node -v
```

Cela devrait afficher la version de Node.js installée.

```bash
npm -v
yarn -v
```
Cela devrait afficher la version de npm et yarn installée.

#### 4. Installer un éditeur de code
Pour écrire du code JavaScript, vous aurez besoin d'un éditeur de code. Voici quelques éditeurs populaires :

- [Visual Studio Code](https://code.visualstudio.com/): Un éditeur de code gratuit et puissant, très populaire parmi les développeurs JavaScript.
- [Sublime Text](https://www.sublimetext.com/): Un éditeur de texte léger et rapide.
- [Atom](https://github.blog/news-insights/product-news/sunsetting-atom/): Un éditeur de code open source développé par GitHub.

- [WebStorm](https://www.jetbrains.com/fr-fr/webstorm/): Un éditeur de code de JetBrain

Téléchargez et installez l'éditeur de votre choix (nous utiliseron VSCode).

#### 5. Premier script Node.js

Pour tester votre installation, vous pouvez créer un simple script Node.js :

1. Ouvrez votre éditeur de code.
1. Créez un nouveau fichier et nommez-le app.js.
1. Ajoutez le code suivant :
    ```javascript
    console.log('Hello, world!');
    ```
1. Enregistrez le fichier.
1. Ouvrez un terminal (ou une invite de commandes sous Windows) et naviguez jusqu'au dossier où vous avez enregistré app.js.
1. Exécutez le script en tapant la commande suivante :
    ```bash
    node app.js
    ```
Vous devriez voir s'afficher Hello, world! dans le terminal.

#### 6. Aller plus loin
Vous êtes maintenant prêt à commencer à développer avec Node.js. Voici quelques ressources pour continuer votre apprentissage :

- [Documentation](https://nodejs.org/docs/latest/api/) officielle de Node.js
- [NodeSchool](https://nodeschool.io/fr-fr/): Des ateliers interactifs pour apprendre Node.js.
 
*Bonne programmation !*
