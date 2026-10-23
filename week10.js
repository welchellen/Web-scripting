class pet{
constructor(name,type){
this.name=name
this.type=type
}

describe(){
return "I am a" + this.type+ "named" + this.name + ".";
}

}
const pet1= new pet("Max","Dog");

const pet2 = new pet ("Luna","Cat");

console.log(pet1.describe());
console.log(pet2.describe());