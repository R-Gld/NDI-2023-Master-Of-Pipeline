// Chargement des modules
const express = require("express");
const app = express();

// Ne pas modifier le numéro du port ou vous allez entrer en conflit avec d'autres équipes
const server = app.listen(49141, function () {
  console.log("C'est parti ! En attente de connexion sur le port 49141...");
  console.log("Se connecter à l'application en local : http://localhost:49141");
});

// Configuration d'express pour utiliser le répertoire "public"
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
