// Fonction pour regarder si un id est cliqué
function Play(id){
   // Récupérer l'élément avec l'ID spécifié
   var boutonClique = document.getElementById(id);

   // Vérifier si l'élément a été trouvé
   if (boutonClique) {
       // Ajouter un écouteur d'événement pour le clic sur le bouton
       boutonClique.addEventListener('click', function() {
           // Changer de page vers play.html
            window.location.href = "../Play.html";
       });
    }

}
// Fonction Main
function Main(){
    Play("Play");
}

// Appel de la fonction main en permanence
setInterval(Main, 100);
