setInterval(function(){
let dancer=document.getElementById("dancer");
let red=Math.floor(Math.random()*225);
let blue=Math.floor(Math.random()*225);
let green=Math.floor(Math.random()*225);
dancer.style.backgroundColor="RGB("+red+", "+blue+","+green+")"
},2000);
let dancefloor=document.getElementById("Dance-Floor");
let emoji=document.getElementById("dancer")
dancefloor.addEventListener("click",function(){
let red= Math.floor(Math.random()*225);
let blue= Math.floor(Math.random()*225);
let green= Math.floor(Math.random()*225);
dancefloor.style.backgroundColor="RGB("+red+","+blue+","+green+")";
console.log("You clicked the dance floor!");});
emoji.addEventListener("click",function(event){
event.stopPropagation();
emoji.textContent="🙌🏻"
console.log("You clicked the dancer")
});


