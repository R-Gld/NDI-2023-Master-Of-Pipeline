// Fonction pour faire une pop-up
function afficherPopup(titre, description) {
    Swal.fire({
        title: titre,
        text: description,
        icon: 'info',
        confirmButtonText: 'OK'
    });
}

// Fonction Random pop up
function afficherPopupRandom() {
    // Fonction random pour afficher une pop up
    let random = Math.floor(Math.random() * 8);

    if(random === 0) {
        afficherPopup("Le savais-tu ?", "Si nous ne faisons pas rapidement plus d'efforts pour lutter contre le changement climatique, la planète pourrait se réchauffer de 3,2 degrés d'ici la fin du siècle.");

    }
    else if(random === 1){
        afficherPopup("Le savais-tu ?", "Utiliser des énergies renouvelables est une véritable solution pour réduire les émissions de gaz à effet de serre qui contribuent au réchauffement de la planète.");

    }
    else if(random === 2){
        afficherPopup("Le savais-tu ?", "L'affirmation le climat a toujours changé, c'est naturel est fausse. Bien que les changements aient toujours eu lieu, la rapidité et l'ampleur actuelles signalent un changement inhabituel.");
    }
    else if(random === 3){
        afficherPopup("Le savais-tu ?", "Dire que le réchauffement climatique est limité est incohérent. À l'avenir, il va entraîner des records de chaleur et augmenter le nombre de réfugiés climatiques.");

    }
    else if(random === 4){
        afficherPopup("Le savais-tu ?", "En Europe, il pourrait y avoir des périodes de froid intense si le climat ne s'améliore pas.");
    }
    else if(random === 5){
       afficherPopup("Le savais-tu ?", "Il reste du temps avant que le climat ne se dérègle totalement est faux. Depuis quelques années, le réchauffement climatique a accéléré la fonte des glaces et déclenché des incendies de forêt."); 

    }
    else if(random === 6){
        afficherPopup("Le savais-tu ?", "Il n'est pas logique de dire que le changement climatique n'affectera que peu la France. En réalité, la faune et la flore seront gravement perturbées dans de nombreuses régions françaises.");

    }
    else if(random === 8){
        afficherPopup("Le savais-tu ?", "Pour combattre le changement climatique, il faut agir à tous les niveaux : en tant qu'individu, à travers les gouvernements et les entreprises.");
    }
}

// Fonction au lancemant de la page
document.addEventListener('DOMContentLoaded', function() {
    afficherPopupRandom();
});