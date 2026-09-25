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


