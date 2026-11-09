"use strict";

function validateName(name) {
    const namepattern= /^[a-zA-Z ]{2,}$/;
    return namepattern.test(name)
}
    function validateUsername(username) {
const usernamePattern= /^\w{3,12}$/;
return usernamePattern.test(username)
}
    function validatePhone(phone) {
const phonePattern= /^\d{3}[-.]?\d{3}[-.]?\d{4}$/;
return phonePattern.test(phone)
}
    function validatePromoCode(promoCode) {
    const promoPattern=/^SUMMER$/i;
    return promoPattern.test(promoCode)
    }

const sampleUsers = [
  {
    name: "Alex Johnson",
    username: "alex_j",
    phone: "555-234-5678",
    promoCode: "SUMMER"
  },
  {
    name: "B", // Invalid name (too short)
    username: "cool_user_123",
    phone: "555.345.6789",
    promoCode: "summer"
  },
  {
    name: "Charlie Brown",
    username: "charlie!brown", // Invalid username (illegal character '!')
    phone: "5554567890",
    promoCode: "SUMMER2026" // Invalid promo code
  },
  {
    name: "Dana Scully",
    username: "da", // Invalid username (too short, min 3)
    phone: "555-567-8901",
    promoCode: "SuMmEr"
  },
  {
    name: "Edward Nygma",
    username: "the_riddler_super_fan", // Invalid username (too long, max 12)
    phone: "555-678-901", // Invalid phone (missing a digit)
    promoCode: null
  },
  {
    name: "Fiona Gallagher",
    username: "fiona_g",
    phone: "555-789-0123",
    promoCode: "" // No promo code provided
  }
];
sampleUsers.forEach(function(user) {
    console.log("Fiona Gallagher:", "fiona_g");
    console.log("Valid Name:", validateName(user.name));

    console.log("Username:", user.username);
    console.log("Valid Username:", validateUsername(user.username));

    console.log("--------------------");
});