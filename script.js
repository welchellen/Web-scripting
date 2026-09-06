function calculatePrice (price, quantity) { 
    return price * quantity;
}

const getTax= function (amount, Taxrate) {
    return amount * Taxrate;
};

let subtotal = calculatePrice (15,4);
let tax = getTax (subtotal,0.07);
console.log("Subtotal:", subtotal);
console.log("Tax:", tax );

function calculatestoreprice (amount) {
const defaultTaxRate = 0.07;
return getTax(amount * defaultTaxRate)
};
let defaultTaxRate= (calculatestoreprice (100));
console.log (calculatestoreprice)
//console.log (defaultTaxRate);

