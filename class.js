// Définition de l'objet Arbre
function Arbre(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;

    this.attack = function (enemy) {
        console.log(`${this.name} attaque ${enemy.name} et inflige ${this.attackPower} dégâts.`);
        enemy.takeDamage(this.attackPower);
    };

    this.takeDamage = function (damage) {
        this.health -= damage;
        console.log(`${this.name} inflige ${damage} dégâts. Santé: ${this.health}`);
    };
}

// Définition de l'objet NPC
function NPC(name, health, attackPower, x, y) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.x = x;
    this.y = y;

    // Set position
    this.setPosition = function(newX, newY) {
        this.x = newX;
        this.y = newY;
        console.log(`${this.name} a été déplacé à la position (${this.x}, ${this.y}).`);
    };

    // Get position
    this.getPosition = function () {
        console.log(`${this.name} est à la position (${this.x}, ${this.y}).`);
        return { x: this.x, y: this.y };
    };

    this.attack = function (target) {
        console.log(`${this.name} attaque ${target.name} et inflige ${this.attackPower} dégâts.`);
        target.takeDamage(this.attackPower);
    };

    this.takeDamage = function (damage) {
        this.health -= damage;
        console.log(`${this.name} prend ${damage} dégâts. Santé: ${this.health}`);
    };

}

// Création d'instances de Arbre et NPC
const joueur = new Arbre("Arbre", 100, 2);
const bulldozer = new NPC("Bulldozer", 50, 80, 10, 20);

joueur.attack(bulldozer); // joueur attaque bulldozer
bulldozer.attack(joueur); // bulldozer attaque joueur
bulldozer.getPosition(); // affiche la position de bulldozer
bulldozer.setPosition(15, 30);
bulldozer.getPosition(); // affiche la position de bulldozer

