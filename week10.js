class pet{
constructor(name,type){
this.name=name
this.type=type
this.hunger=50;
}

describe(){
return "I am a" + this.type+ "named" + this.name + ".";}

feed() {
this.hunger=this.hunger-10; 
}
}

const pet1= new pet("Max","Dog");

const pet2 = new pet ("Luna","Cat");



console.log(pet1.describe());
console.log(pet2.describe());

const hungerdisplay = document.getElementById("hunger-display");
const feedbutton= document.getElementById("feed-button");

const mypet= new pet ("buddy","dog");

feedbutton.addEventListener("click", function(){
mypet.feed();
hungerdisplay.textContent ="hunger:" + mypet.hunger;
});
