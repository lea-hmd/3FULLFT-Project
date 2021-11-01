# A Savoir avant de contribuer au projet

Nous vous remercions de l'intérêt que vous portez à notre application. Voici quelques informations qui peuvent vous être utiles.

## Arborescence

Ce concept révolutionnaire permet de configurer et commander son kebab en ligne !

### Dossier 'public'

On retrouve tous les médias et images utilisées sur l'application

### Dossier 'src'

Ce dossier regroupe la quasi totalité du code et des dossiers ci-dessous, ils ne sont pas accessible au public depuis le navigateur.

### Dossier 'components'

C'est ici que l'on retrouve tous les composants de notre application, tels que le header/footer, les cards, le panier, ...
Chaque composant est dans un dossier et comprend son fichier de style approprié.

### Dossier 'context'

On y retrouve le fichier 'OrderContext.js' qui est la base de notre application car il contient toutes les interactions utiles au bon fonctionnement du configurateur de kebab.

### Dossier 'data'

Ici sont stockés les fichiers de données des ingrédients. On peut y rajouter une infinité d'ingrédients afin de les afficher sur l'application.

### Dossier 'views'

Il contient toutes les pages de l'application. Leurs routes y sont définies dans le fichier 'AppStructure.js'.

## Important

### Création d'un contexte

- Veiller à bien importer le provider de ce dernier dans le fichier index.js, autrement il ne sera pas pris en compte.
- On peut accéder aux valeurs du contexte sur le navigateur via l'outil inspecter l'élément depuis la fenêtre nommée 'Application' puis 'Local Storage'

### Création d'une view

- Veiller à bien définir sa route dans le fichier AppStructure afin de pouvoir accéder au composant de la vue depuis l'url

## Quelques idées d'amélioration ...

Libre à vous de proposer une amélioration, voici quelques propositions.

### Fonctionnalités

- Améliorer le style de l'application
- Faire correspondre le thème de l'application avec le thème système de la machine
- Mettre en place des tests
- Rendre l'application responsive
- Développer une application React Native
- Proposer le TofuBab pré-fait ^^
