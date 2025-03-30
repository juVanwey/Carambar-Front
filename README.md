# API Carambar & co 8

Bienvenue dans le projet **API Carambar & co 8** !
Cette API permet de consulter et ajouter des blagues via des endpoints. Elle est construite avec **Node.js**, **Express**, **Sequelize**, et utilise une base de données **SQLite** pour stocker les blagues.

## 🚀 Fonctionnalités

Cette API propose les 4 endpoints suivants :

### Consulter toutes les blagues

- **Méthode** : GET
- **Endpoint** : `/jokes`
- **Description** : Récupère la liste de toutes les blagues stockées dans la base de données.

### Consulter une blague aléatoire

- **Méthode** : GET
- **Endpoint** : `/jokes/random`
- **Description** : Récupère une blague au hasard.

### Consulter une blague spécifique

- **Méthode** : GET
- **Endpoint** : `/jokes/:id`
- **Description** : Récupère une blague spécifique en fonction de son ID.  
  Exemple : `/jokes/1`

### Ajouter une blague

- **Méthode** : POST
- **Endpoint** : `/jokes`
- **Description** : Permet d'ajouter une nouvelle blague à la base de données.  
  Exemple de corps de la requête :
  ```json
  {
    "question": "Quelle est la femelle du hamster ?",
    "answer": "L’Amsterdam."
  }
  ```

## 🛠️ Technologie

- **Node.js** : Environnement d'exécution JavaScript pour le backend.
- **Express** : Framework web pour gérer les routes et les requêtes HTTP.
- **Sequelize** : ORM pour interagir avec la base de données SQLite.
- **SQLite** : Base de données légère pour stocker les blagues.
- **Swagger** : Documentation interactive pour l'API.

## 📝 Documentation de l'API

Lien vers la documentation Swagger : [https://carambar-gmqo.onrender.com/api-docs/#/Jokes](https://carambar-gmqo.onrender.com/api-docs/#/Jokes)

## 🚀 Déploiement

- **Backend déployé sur Render.com** : [https://carambar-gmqo.onrender.com](https://carambar-gmqo.onrender.com)]
- **Frontend**, qui interagit avec cette API, déployé sur **GitHub Pages** : [https://juvanwey.github.io/Carambar-Front/](https://juvanwey.github.io/Carambar-Front/)

## 📂 Structure du projet

### Backend

Le code de l'API (Node.js, Express, Sequelize, SQLite) est organisé comme suit :
- `app.js` : Point d'entrée de l'API.
- `models/` : Contient les modèles Sequelize pour interagir avec la base de données.
- `controllers/` : Contient la logique de gestion des requêtes.
- `routes/` : Définit les routes et associe les méthodes aux routes.
- `swagger/` : Contient la configuration pour Swagger (documentation de l'API).

### Frontend

Le code de l'interface utilisateur (HTML, CSS, JavaScript) est organisé comme suit :
- `index.html` : Page principale de l'interface utilisateur.
- `style.css` : Styles CSS pour l'interface utilisateur.
- `script.js` : Logique JavaScript pour l'interaction avec l'API et le frontend.

## 📥 Installation et lancement du projet

### Backend

1. Clone le repository du backend : [https://github.com/juVanwey/Carambar](https://github.com/juVanwey/Carambar)
2. Installe les dépendances avec npm :
   ```bash
   npm i
   npm run seed
   npm run start
   ```

### Frontend

1. Clone le repository du frontend : [https://github.com/juVanwey/Carambar-Front](https://github.com/juVanwey/Carambar-Front)
2. Ouvre le fichier `index.html` dans ton navigateur pour voir l'interface frontend.

## 📑 Instructions de test via Postman

Tu peux tester les endpoints de l'API en utilisant **Postman**.

## 📜 Licence

Ce projet est sous la licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

## Liens utiles

- Repository Backend : [https://github.com/juVanwey/Carambar](https://github.com/juVanwey/Carambar)
- Repository Frontend : [https://github.com/juVanwey/Carambar-Front](https://github.com/juVanwey/Carambar-Front)
- Documentation API Swagger : [https://carambar-gmqo.onrender.com/api-docs/#/Jokes](https://carambar-gmqo.onrender.com/api-docs/#/Jokes)

N'hésite pas à contribuer, à poser des questions ou à signaler des bugs ! 😊

