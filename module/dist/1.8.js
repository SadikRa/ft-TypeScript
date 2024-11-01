"use strict";
//destructuring
const users = {
    id: 3,
    name: {
        firstName: "sadik",
        lastName: "rahman",
    },
    contact: "01784568432",
    address: "soul society",
};
// name alias
const { address: thekana, name: { firstName: fname }, } = users;
// console.log(thekana)
const character = ["zoro", "najuko", "tanjiro", "inosuke", "Zenitsu"];
const [, , Shonen, ...rest] = character;
