const characterName = "Luna";
const homeWorld = "Eldoria";
const baseClass = "Mage";

let currentHealth = 100;
let experiencePoints = 0;

console.log("Character Name: " + characterName);
console.log("Home World: " + homeWorld);
console.log("Class: " + baseClass);
console.log("Health: " + currentHealth);
console.log("XP: " + experiencePoints);
const charactername = "Luna";
const homeworld= "Eldoria";
const baseclass = "Mage";

let currenthealth = 100;
let experiencepoints = 0;

console.log("Character Name: " + characterName);
console.log("Home World: " + homeWorld);
console.log("Class: " + baseClass);
console.log("Health: " + currentHealth);
console.log("XP: " + experiencePoints);

let powerLevel = (currentHealth * 0.5) + (experiencePoints * 10);

console.log("Starting Power Level: " + powerLevel);

currentHealth += 20;
experiencePoints += 50;

powerLevel = (currentHealth * 0.5) + (experiencePoints * 10);

console.log("Health after potion: " + currentHealth);
console.log("XP after potion: " + experiencePoints);
console.log("Updated Power Level: " + powerLevel);

for (let day = 1; day <= 5; day++) {
    experiencePoints += 20;

    console.log(
        "Day " + day + ": Training hard... XP is now " + experiencePoints
    );
}

console.log("Final XP after training: " + experiencePoints);

let bossHealth = 150;

console.log("The final boss battle begins!");

while (currentHealth > 0 && bossHealth > 0) {
    currentHealth -= 25;
    bossHealth -= 30;

    console.log("Hero Health: " + currentHealth);
    console.log("Boss Health: " + bossHealth);
}

if (currentHealth <= 0 && bossHealth <= 0) {
    console.log("Both the hero and boss were defeated! It is a draw.");
} else if (bossHealth <= 0) {
    console.log(characterName + " defeated the boss!");
} else {
    console.log("The boss defeated " + characterName + ".");
}