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