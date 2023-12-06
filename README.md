# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Commande Docker AIDE CHAT GPT:

Bien sûr ! Je vais te guider sur la création d'un fichier Docker pour containeriser ton projet Nuxt.js. Assure-toi d'avoir Docker installé sur ta machine avant de commencer.

Crée un fichier Dockerfile à la racine de ton projet :

Dockerfile
Copy code

# Utilise une image Node.js en tant que base

FROM node:14-alpine

# Crée le répertoire de travail dans le conteneur

WORKDIR /usr/src/app

# Copie le package.json et le package-lock.json dans le conteneur

COPY package\*.json ./

# Installe les dépendances

RUN npm install

# Copie le reste des fichiers dans le conteneur

COPY . .

# Construit l'application Nuxt.js en mode de production

RUN npm run build

# Expose le port 3000

EXPOSE 3000

# Démarre l'application Nuxt.js

CMD ["npm", "start"]
Crée un fichier .dockerignore pour ignorer les fichiers/dossiers inutiles lors de la copie dans le conteneur :

Copy code
node_modules
.git
.nuxt
Modifie le script de démarrage dans ton package.json pour utiliser l'hôte 0.0.0.0 :

json
Copy code
"scripts": {
"start": "nuxt start -H 0.0.0.0 -p 3000",
// ...
}
Cela permet à l'application d'écouter sur tous les hôtes, nécessaire lorsqu'elle est exécutée dans un conteneur Docker.

Construis ton image Docker :

Ouvre un terminal à la racine de ton projet et exécute la commande suivante pour construire l'image Docker. Remplace <image_name> par le nom que tu veux donner à ton image.

bash
Copy code
docker build -t <image_name> .
Vérifie que l'image a été créée avec succès :

bash
Copy code
docker images
Exécute ton conteneur Docker localement pour tester :

bash
Copy code
docker run -p 3000:3000 <image_name>
Ouvre un navigateur et accède à http://localhost:3000 pour vérifier que ton application fonctionne correctement.

Arrête et supprime le conteneur de test :

bash
Copy code

# Trouve le CONTAINER_ID en exécutant "docker ps"

docker stop CONTAINER_ID
docker rm CONTAINER_ID
Maintenant, tu peux déployer ton image Docker sur ton VPS OVH. Transfère ton image Docker sur ton VPS (par exemple, en utilisant docker save et docker load ou en utilisant un registre Docker). Ensuite, exécute ton conteneur sur le VPS.

Assure-toi que le port que tu exposes dans ton conteneur (ici, 3000) est accessible depuis l'extérieur sur ton VPS. Tu peux utiliser Nginx ou un autre serveur proxy pour rediriger les demandes HTTP vers ton conteneur Docker.

N'oublie pas de sécuriser correctement ton déploiement en production, en configurant des certificats SSL, en limitant les accès, etc.
