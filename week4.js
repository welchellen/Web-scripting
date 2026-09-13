
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
let subtotal= 0;
console.log("food subtotal: $" + subtotal);
const ReceiptItems =[ ]
let additem = prompt("Would you like to enter a new item? Enter y to continue.");
while (additem === "y") {
let itemname= prompt( "What would you like?");
let itemprice= Number(prompt("What is the price of your item?"));
let item= {
name:itemname,
price:itemprice
};
ReceiptItems.push(item);
additem=prompt("Would you like to order another item? Enter y to continue");
}; 

for (let item of ReceiptItems) {
    console.log(item.name + " -- $" + item.price);
    subtotal = subtotal + item.price;
}
let removeditem= ReceiptItems.pop()
console.log("removeditem",removeditem.name);
removeditem.name
let revisedsubtotal=0 
for (let item of ReceiptItems) {
revisedsubtotal= revisedsubtotal+ item.price;
}
let grosssubtotal= revisedsubtotal+ storeInfo.tablefee;
let taxamount= grosssubtotal * (storeInfo.Taxrate/100);
let grandtotal= grosssubtotal+taxamount;

console.log ("Final Receipt");
for (let item of ReceiptItems){
console.log (item.name + "--$" + item.price);
}
console.log("Food subtotal: $" + revisedsubtotal);
console.log("Table fee: $" + storeInfo.tablefee);
console.log("Gross subtotal: $" + grosssubtotal);
console.log("Tax: $" + taxamount);
console.log("Grand total: $" + grandtotal);

console.log("food subtotal: $" + subtotal);
console.log("Total items:", ReceiptItems.length);
console.log("Receipt items:", ReceiptItems);





