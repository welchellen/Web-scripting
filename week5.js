console.log("javascript is connected");
console.log(document.body);
let mypoem= document.getElementById("poem-sunrise");
mypoem.style.backgroundColor= "red"
document.querySelectorAll("#wall-west .poem");
let westPoems=document.querySelectorAll("#wall-west .poem");

console.log("mypoem",mypoem);
console.log("westPoems",westPoems);
let parentNode= document.getElementById("wall-east");
let childNode = document.getElementById("poem-stars");
parentNode.appendChild(childNode);
childNode.style.backgroundColor= "red";

// Find the button on the page
const addPoemButton = document.getElementById("add-poem"); //make sure your html button is using this id

// Attach an event listener to respond when clicked
addPoemButton.addEventListener("click", function () {
 let newpoem= document.createElement("article");
let newtitle= document.createElement("h3");
let newparagraph= document.createElement("p")

let Poemtitle= document.getElementById("poem-title").value;
let Poemlines= document.getElementById("poem-lines").value;
let Poemcolor= document.getElementById("poem-color").value;
let Wallchoice= document.getElementById("wall-choice").value;
newpoem.style.backgroundColor= Poemcolor
newtitle.textContent= Poemtitle
newparagraph.textContent= Poemlines
let selectedwall= document.getElementById(Wallchoice);
newpoem.appendChild(newtitle);
newpoem.appendChild(newparagraph);
selectedwall.appendChild(newpoem);

document.getElementById("poem-title").value = "";
document.getElementById("poem-lines").value = "";
document.getElementById("poem-color").value= "" ;
document.getElementById("wall-choice").value= "";
console.log("Poemtitle",Poemtitle);
console.log("Poemlines",Poemlines);
console.log("Poemcolor",Poemcolor);
console.log("Wallchoice",Wallchoice);
});


