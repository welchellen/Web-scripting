
let storename= prompt("What is the restaurants name?");
let Taxrate= Number(prompt("What is the taxrate? Enter 8 for 8%"));
let tablefee= Number(prompt("What is the standard table fee"));

let storeInfo= {
    storename: storename,
    Taxrate: Taxrate,
    tablefee: tablefee
};
console.log("Welcome to " + storeInfo.storename + "! The standard table fee is $" + storeInfo.tablefee);

console.log("storename",storename);
console.log("taxrate", Taxrate );
console.log("tablefee",tablefee);
console.log("storeinfo",storeInfo)
