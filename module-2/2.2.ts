{
  //Interface, type vs interface
  type User = {
    name: string;
    age: number;
  };

  type userWithRole = User & { role: string };

  const user3: userWithRole = {
    name: "sadik",
    age: 22,
    role: "nothing",
  };

  interface User2 {
    name: string;
    age: number;
  }

  interface user2WithRole extends User2 {
    role: string;
  }
  const user1: user2WithRole = {
    name: "sadik",
    age: 22,
    role: "nothing",
  };

  // console.log(user1)
  // console.log(user3)

  type Roll = number[];

  interface Roll2 {
    [index: number] : number
  }

  const rollNumber: Roll2 = [1, 2, 3, 4];


  type Add = (num1: number, num2: number) => number
   

  interface Add1 {
    (num1 : number, num2: number, num3: number) : number
  }
  const add: Add1 = (num1 , num2, num3) => num1 + num2


}
