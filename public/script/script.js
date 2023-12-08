//const cook = require("/public/script/cookie");
window.getName = getName;

// Attacher des événements après le chargement complet du DOM
document.addEventListener('DOMContentLoaded', function() {
    checkNameFromCookie();
    setupPlayButton();
});


// Vérifier et définir le nom du joueur à partir des cookies
function checkNameFromCookie() {
    let nameFromCookie = getName();
    if (nameFromCookie !== null) {
        let playerNameInput = document.getElementById("playerName");
        playerNameInput.value = nameFromCookie;
        console.log("Nom lu via les cookies : " + nameFromCookie);
    }
}

// Vérifier si le joueur est déjà en train de jouer
async function checkIfPlayerIsPlaying(name) {
    try {
        console.log("Vérification en base de données si le joueur joue : " + name);
        const response = await fetch(`/api/isPlaying/${name}`);
        const data = await response.json();
        return data.isPlaying;
    } catch (error) {
        console.error('Erreur lors de l\'appel à l\'API:', error);
        return false;
    }
}


// Configurer le comportement du bouton de jeu
function setupPlayButton() {
    const playButton = document.getElementById("playButton");
    playButton.addEventListener('click', function() {
        let playerName = document.getElementById("playerName").value;

        if (!playerName.trim()) return; // Ne rien faire si le champ est vide

        let cookievl = getName()
        // Mettre à jour le cookie si le nom a changé
        if (cookievl === null || cookievl !== playerName) {
            document.cookie = "name=" + playerName + "; path=/";
        }

        // Vérifier le statut du joueur et agir en conséquence
        checkIfPlayerIsPlaying(playerName).then(isPlaying => {
            if (isPlaying) {
                console.log("Le joueur suivant est déjà en train de jouer : ", playerName);
            } else {
                fetch('/api/start', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: playerName })
                }).then(response => {
                    console.log("/api/start appelé : réponse : " + response.body);
                });
                window.location.href = "/play.html";
            }
        });
    });
}
