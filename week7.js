let panel1=document.getElementById("Panel-1");
let panel2=document.getElementById("Panel-2");

let panel1time=setInterval(function(){
let red=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
panel1.style.backgroundColor="RGB("+red+", "+blue+","+green+")"
},2000);
let panel2time=setInterval(function(){
let red=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
panel2.style.backgroundColor="RGB("+red+", "+blue+","+green+")"
},2000);

let dancefloor=document.getElementById("Dance-Floor");
let emoji=document.getElementById("dancer")
dancefloor.addEventListener("click",function(){
let red= Math.floor(Math.random()*255);
let blue= Math.floor(Math.random()*255);
let green= Math.floor(Math.random()*255);
dancefloor.style.backgroundColor="RGB("+red+","+blue+","+green+")";
console.log("You clicked the dance floor!");});
emoji.addEventListener("click",function(event){
event.stopPropagation();
emoji.textContent="🙌🏻"
console.log("You clicked the dancer")
});
window.addEventListener("keydown", function(event){
if (event.key=== "ArrowUp"){
emoji.textContent="🙌🏻"}
if (event.key === "ArrowDown"){
emoji.textContent="💁"
}
if (event.key=== "ArrowLeft"){
emoji.textContent="💃"
}
if (event.key === "ArrowRight"){
emoji.textContent="🕺🏻"
}
if (event.key === "r"){
dancefloor.style.backgroundColor= "";
}
});




