// Variable global score 
var score = 0;
var life = 6;
let vitesseCan = 4;
let vitesseBull = 2;
let debug = false;

function SpriteDeplacement(id, vitesse, direction) {
    var image = document.getElementById(id);
    if (!image || !(image instanceof Element)) {
        console.log('Pas d image !');
        return;
    }
    let currentPosition = parseFloat(getComputedStyle(image).left) || 0;

    if (direction === 'right') {
        image.style.left = currentPosition + vitesse + 'px';
    } else if (direction === 'left') {
        image.style.left = currentPosition - vitesse + 'px';
    }
}

function SpriteChange(path, id) {
    var image = document.getElementById(id);
    image.src = path;
}

var canGenerated = false; // Variable pour vérifier si la canette a déjà été générée
var bulldozerGenerated = false; // Variable pour vérifier si le bulldozer a déjà été généré

function SpriteClique(id) {
    var spriteClique = document.getElementById(id);

    if (spriteClique) {
        spriteClique.addEventListener('click', function () {
            if (id === 'Can') {
                score++;
                canGenerated = false;
                Score();
            }
            else if (id === 'Bulldozer') {
                score ++;
                bulldozerGenerated = false;
                Score();
            }
            spriteClique.remove();
        });
    }
}


function SpriteCollision(id1, id2) {
    var image1 = document.getElementById(id1);
    var image2 = document.getElementById(id2);

    if (!image1 || !(image1 instanceof Element)) {
        console.log('Pas image 1 !');
        return;
    }

    if (!image2 || !(image2 instanceof Element)) {
        console.log('Pas image 2 !');
        return;
    }

    var image1X = parseFloat(getComputedStyle(image1).left) || 0;
    var image1Y = parseFloat(getComputedStyle(image1).top) || 0;
    var image2X = parseFloat(getComputedStyle(image2).left) || 0;
    var image2Y = parseFloat(getComputedStyle(image2).top) || 0;

    if (image1X < image2X + image2.width &&
        image1X + image1.width > image2X &&
        image1Y < image2Y + image2.height &&
        image1Y + image1.height > image2Y) {
        let id = image1.id;
        image1.remove();
        if (id === 'Can') {
            canGenerated = false;
            life -= 1;
            Life();
        } else if (id === 'Bulldozer') {
            bulldozerGenerated = false;
            life -= 2;
            Life();
        }
    }
}

function CollisionView(id) {
    var image = document.getElementById(id);
    var imageX = parseFloat(getComputedStyle(image).left) || 0;
    var imageY = parseFloat(getComputedStyle(image).top) || 0;

    var rect = document.createElement("div");
    rect.style.width = image.width + 'px';
    rect.style.height = image.height + 'px';
    rect.style.position = 'absolute';
    rect.style.left = imageX + 'px';
    rect.style.top = imageY + 'px';
    rect.style.border = '1px solid red';
    rect.style.opacity = '0.5';
    document.body.appendChild(rect);
}

let directionCan, positionxCan;
function CanGenerator() {
    const random = getRandomVal();
    if(canGenerated == false) {
        if (random === 1) {
            directionCan = 'left';
            positionxCan = '115%';
        } else {
            directionCan = 'right';
            positionxCan = '-15%';
        }
        var image = document.createElement("img");
        image.id = 'Can';
        image.src = '../images/can.png';
        image.style.position = 'absolute';
        image.style.left = positionxCan;
        image.style.top = '80%';
        image.style.width = '5%';
        image.style.height = 'auto';
        image.style.zIndex = '10';
        document.body.appendChild(image);
        canGenerated = true;
    }

    if (debug) console.log('YAAA', directionCan, positionxCan);
    SpriteClique('Can');
    SpriteCollision('Can', 'Plant1');
    SpriteDeplacement('Can', vitesseCan, directionCan);
}

let directionBull, positionxBull;
function BulldozerGenerator() {
    if(bulldozerGenerated == false) {
        const random = getRandomVal();
        if (random === 1) {
            directionBull = 'left';
            positionxBull = '115%';
        } else {
            directionBull = 'right';
            positionxBull = '0%';
        }
        var image = document.createElement("img");
        image.id = 'Bulldozer';
        image.src = '../images/bulldozer.png';
        image.style.position = 'absolute';
        image.style.left = positionxBull;
        image.style.top = '35%';
        image.style.width = '45%';
        image.style.height = 'auto';
        image.style.zIndex = '10';
        document.body.appendChild(image);
        bulldozerGenerated = true;
    }

    if (debug) console.log('YIIIIII', directionBull, positionxBull);
    SpriteClique('Bulldozer');
    SpriteCollision('Bulldozer', 'Plant1');
    SpriteDeplacement('Bulldozer', vitesseBull, directionBull);
}

// Fonction pour Afficher le score
function Score() {
    var scoreView = document.getElementById('score');
    scoreView.innerHTML = score;
}

// Verification du score : Si  score > Sup changement de sprite
function ScoreVerification() {
    if(score > 200) {
        SpriteChange('../images/medium_tree.png', 'Plant1');
        // Augmenter la hauteur du sprite
        var image = document.getElementById('Plant1');
        image.style.height = 'auto';
        image.style.bottom = '14%';
    }
    if(score > 500) {
        SpriteChange('../images/medium_tree2.png', 'Plant1');
        var image = document.getElementById('Plant1');
        image.style.height = '40%';
        image.style.bottom = '12%';
        vitesseCan = 6;
        vitesseBull = 3;
    }
    if(score > 1000) {
        SpriteChange('../images/tall_tree.png', 'Plant1');
        var image = document.getElementById('Plant1');
        image.style.height = '55%';
        image.style.width = '40%';
        image.style.left = '30%';
        image.style.bottom = '10%';
        vitesseCan = 12;
        vitesseBull = 7;
    }
    if(score > 2000) {
        SpriteChange('../images/tall_tree2.png', 'Plant1');
        var image = document.getElementById('Plant');
        image.style.height = '80%';
        image.style.width = '65%';
        image.style.left = '15%';
        image.style.bottom = '8%';
        vitesseCan = 16;
        vitesseBull = 12;
    }

    if(score > 5000) {
        SpriteChange('../images/tall_tree2.png', 'Plant1');
        var image = document.getElementById('Plant');
        image.style.height = '80%';
        image.style.width = '65%';
        image.style.left = '15%';
        image.style.bottom = '8%';
        vitesseCan = 25;
        vitesseBull = 20;
    }

    if(score > 7500) {
        SpriteChange('../images/tall_tree2.png', 'Plant1');
        var image = document.getElementById('Plant');
        image.style.height = '80%';
        image.style.width = '65%';
        image.style.left = '15%';
        image.style.bottom = '8%';
        vitesseCan = 35;
        vitesseBull = 30;
    }

    if(score > 10000) {
        SpriteChange('../images/tall_tree2.png', 'Plant1');
        var image = document.getElementById('Plant');
        image.style.height = '80%';
        image.style.width = '65%';
        image.style.left = '15%';
        image.style.bottom = '8%';
        vitesseCan = 70;
        vitesseBull = 50;
    }
}

// Fonction Pour les points de vie 
function Life(){
    if(life <= 5){
        SpriteChange("../images/half_heart.png", "Heart");
    }
    if(life <= 4){
        SpriteChange("../images/empty_heart.png", "Heart");
    }
    if(life <= 3){
        SpriteChange("../images/half_heart.png", "Heart1");
    }
    if(life <= 2){
        SpriteChange("../images/empty_heart.png", "Heart1");
    }
    if(life <= 1){
        SpriteChange("../images/half_heart.png", "Heart2");
    }
    if(life <= 0){
        SpriteChange("../images/empty_heart.png", "Heart2");
        // On retourne sur la page d'accueil
        window.location.href = "../index.html";
    }
}

function getRandomVal() {
    return Math.floor(Math.random() * 2); // Generes un 1 ou un 0 
}

function Main() {
    // Afficher le score
    Score();
    // Verification du score
    ScoreVerification();
    // Prendre valeur hasard
    // CanGenerator('right', '-15%'); // Verifié
    CanGenerator();
    BulldozerGenerator();
}

function animate() {
    Main();
    setTimeout(function() {
        requestAnimationFrame(animate);
    }, 32);
}

// Appel initial de la fonction d'animation
requestAnimationFrame(animate);
