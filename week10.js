class pet{
constructor(name,type){
this.name=name
this.type=type
this.hunger=50;
}

describe(){
return "I am a" +this.type+ "named" +this.name + ".";}

feed() {
this.hunger=Math.max(0,this.hunger-10);
}
}
const petnameimput= document.getElementById("pet-name");
const addpetbutton= document.getElementById("add-pet");
const santuary = document.getElementById("Santuary");

function addpet() {
const petname= petnameimput.value;
const newpet= new pet(petname, "Dog");
const petcard= document.createElement("div");
const petTitle= document.createElement("h3")
petTitle.textContent = newpet.name;
const hungerdisplay = document.createElement("p");
hungerdisplay.textContent ="Hunger:" + newpet.hunger;

const feedbutton =document.createElement("button");
feedbutton.textContent = "Feed";
feedbutton.addEventListener("click",function(){
    newpet.feed();
    hungerdisplay.textContent= "Hunger:" + newpet.hunger;

});

petcard.appendChild(petTitle);
petcard.appendChild(hungerdisplay);
petcard.appendChild(feedbutton);
santuary.appendChild(petcard);
petnameimput.value="";
}


addpetbutton.addEventListener("click",addpet);

const pet1= new pet("Max","Dog");

const pet2 = new pet ("Luna","Cat");



console.log(pet1.describe());
console.log(pet2.describe());
