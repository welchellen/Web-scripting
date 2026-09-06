const calculatePrice = (price, quantity) => price * quantity;

const getTax= (amount, Taxrate) => amount * Taxrate;

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
function applydiscount (total, discountcallback){ ;
    return (discountcallback)(total);
};
const studentDiscount = (total) => (total * 0.90); 
const seniorDiscount = (total) => (total * 0.80);
let studentprice= applydiscount(100, studentDiscount);
let seniorprice= applydiscount( 100, seniorDiscount);
console.log ("Studentprice" , studentprice );
console.log ("Seniorprice", seniorprice);

function calculateFinalbill (price, quantity, discountcallback) {;
let subtotal= calculatePrice(price, quantity);
let discountedPrice = applydiscount(subtotal, discountcallback);
let taxamount= getTax(discountedPrice, 0.07);


return discountedPrice + taxamount;
}
let finalBill = calculateFinalbill(20, 3, studentDiscount);
console.log("Final Bill:", finalBill);



