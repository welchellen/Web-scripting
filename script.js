console.log("Script Loaded")
let username = "Any";
alert ("Welcome to the Fitness Tracker, "+ "username" + "!" ) 
let weighlifted= Number(prompt("How much weight did you lift?"))
let repsPerformed= Number(prompt("How many reps did you perform"))
let totalvolume= weighlifted* repsPerformed;
console.log(totalvolume) 
document.getElementById("status").textContent = statusmessage

let statusmessage = ("Great Job! \n You moved 500 units today.") 
