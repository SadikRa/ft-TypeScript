// learning function

// normal function
//arrow function

function add(num1: number, num2: number) {
  return num1 + num2;
}

add(2, 3);

const addArrow = (nam1: number, num2: number) => {
  return nam1 + num2;
};

const richUser = {
  name: "sadik",
  balance: 0,
  addBalance(balance: number) {
    return this.balance + balance;
  },
};

const array: number[] = [1, 2, 3, 4];
const newArray: number[] = array.map(
  (element: number): number => element * element
);


console.log(newArray)