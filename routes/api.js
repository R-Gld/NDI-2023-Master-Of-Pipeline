const express = require('express');
const router = express.Router();
const db = require('../database'); // Remplacez avec le chemin correct vers database.js


// Endpoint pour mettre à jour le meilleur score
router.post('/updateBestScore', (req, res) => {
    const name = req.body.name; // Assurez-vous que le client envoie 'name' dans le corps de la requête
    console.log("updateBestScore/" + name + " called.");
    db.updateBestScore(name);
    res.status(200).json({ message: 'best score updated' });
});

router.get('/isPlaying/:name', (req, res) => {
    const name = req.params.name;
    console.log("/api/isPlaying/" + name + " called.");
    db.isPlaying(name, (isPlaying) => {
        res.status(200).json(JSON.stringify({ name: name, isPlaying: isPlaying }, null, 0));
    });
});


// Exemple de route GET
router.get('/leaderboard', (req, res) => {
    console.log("leaderboard called.");
    db.getLeaderboard((err, results) => {
        if(err) {
            console.log("leaderboard error");
            res.status(404).json({error: true, message: err.message});
        } else {
            console.log("/api/leaderboard result: " + JSON.stringify(results, null, 0));
            res.status(200).json(results);
        }
    });
});

router.post("/increaseScore", (req, res) => {
    let name = req.body.name;
    let amount = req.body.amount;
    console.log("increase score of " + name + ", amount: " + amount);
    db.increaseScore(name, amount);
    res.status(200).json({});
});

router.post("/start", (req, res) => {
    let name = req.body.name;
    db.register(name);
    res.status(200);
})

// Ajoutez d'autres routes API ici

module.exports = router;