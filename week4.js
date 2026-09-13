
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
console.log("storeinfo",storeInfo);

const ReceiptItems =[ ]
let additem = prompt("Would you like to enter a new item? Enter y to continue.");
additem=prompt("Would you like to order another item? Enter y to continue");
while (additem === "y") {
let itemprice= Number(prompt("What is the price of your item?"));
let item= {
name:itemname,
price:itemprice
};
ReceiptItems.push(item);
let itemname= prompt( "What would you like?");
}; 
console.log("Total items:", ReceiptItems.length);
console.log("Receipt items:", ReceiptItems);


