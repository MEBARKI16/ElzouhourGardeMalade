# Utiliser une image de base Node.js version 18
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier le reste du code du projet dans le conteneur
COPY . .

# Construire le projet Next.js
RUN npm run build

# Exposer le port 3000 (par défaut, Next.js tourne sur ce port)
EXPOSE 3000

# Commande pour démarrer le projet
CMD ["npm", "start"]
