"use strict";
// learning function
// normal function
//arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
const addArrow = (nam1, num2) => {
    return nam1 + num2;
};
const richUser = {
    name: "sadik",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    },
};
const array = [1, 2, 3, 4];
const newArray = array.map((element) => element * element);
console.log(newArray);
