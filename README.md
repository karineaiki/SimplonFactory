# Tuto typescript

## Installation

- Créer un nouveau dossier à partir du terminal où vous souhaitez ranger votre projet. (mkdir "nom-de-votre-projet")

- A partir du terminal, initialisez le package.json dans le dossier fraîchement créé (npm init -y)

- Ensuite, dans le terminal, tapez la commande : npm install typescript --save-dev. Cela permettra de créer le dossier node module et de créer les dépendances dans le document package.json

- Si ce n'est pas déjà fait, ouvrez votre IDE puis ouvrez le dossier de votre projet. Vous allez créer deux dossiers : un dossier "dist" et un dossier "src". Dans le dossier src nous retrouverons notre document typescript. Vous pouvez dès à présent le créer. Ici, par exemple, je l'ai appelé "app.ts"

- Grâce à la commande npx tsc src/app.ts, vous allez pouvoir créer un document .js qui transcrira votre typescript en javascript. Ce document se retrouvera dans le dossier dist.

- Dans votre projet, vous pourrez créer le document tsconfig.json, et écrire : 
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2022",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "dist"
  },

  "include": [" src/**/* "],
  "exclude": [" **/*.spec.ts "],
  "files": [" src/app.ts "]
}

- Dans le packsage.json, ajoutez : "scripts": {
    "start": "node dist/app.js",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

Ce qui est intéressant à voir, c'est que maintenant que la page est configurée, pour conpiler le projet, il ne sera plus nécessaire de faire la commande npm run build && npm start. Puisque vous avez déjà précisé où ce situait le document ts, vous pourrez simplement faire la commande npx tsc.