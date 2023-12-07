// Fonction pour déplacer un sprite 
// Arguments : Id, Vitesse
function SpriteDeplacement(id, vitesse){
    // Récupérez l'élément image par son ID
    var image = document.getElementById(id);

    let currentPosition = parseFloat(getComputedStyle(image).left) || 0;
    image.style.left = currentPosition + vitesse + 'px';
    image.style.top = currentPosition - vitesse + 'px';
}

// Fonctions pour changer le Sprite
function SpriteChange(path, id){
    // Récupérez l'élément image par son ID
    var image = document.getElementById(id);

    image.src = path;
}

// Fonction pour regarder si un sprite est cliqué
function SpriteClique(id){
    // Récupérer l'élément avec l'ID spécifié
    var spriteClique = document.getElementById(id);

    // Vérifier si l'élément a été trouvé
    if (spriteClique) {
        // Ajouter un écouteur d'événement pour le clic sur le sprite
        spriteClique.addEventListener('click', function() {
            // On Supprime le sprite
            spriteClique.remove();
        });
    }
}

// Fonction Main
function Main(){
    SpriteDeplacement("Sprite", 1);
    SpriteClique("Sprite");
}

// Appel de la fonction main en permanence
setInterval(Main, 4);