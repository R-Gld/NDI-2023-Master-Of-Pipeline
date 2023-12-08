// Chargement des modules
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const apiRoutes = require('./routes/api');


// Ne pas modifier le numéro du port ou vous allez entrer en conflit avec d'autres équipes
const server = app.listen(49141, function () {
  console.log("C'est parti ! En attente de connexion sur le port 49141...");
  console.log("Se connecter à l'application en local : http://localhost:49141");
});

// Configuration d'express pour utiliser le répertoire "public"
app.use(express.static("public"));
app.use(express.json())
app.use(bodyParser.json());


app.use('/api', apiRoutes);
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
