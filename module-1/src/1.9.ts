{
  type Students = {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  };

  const student: Students = {
    name: "sadik",
    age: 22,
    gender: "male",
    contactNo: "017454654645",
    address: "soul society",
  };

  const student2: Students = {
    name: "zoro",
    age: 22,
    gender: "male",
    contactNo: "56487654555",
    address: "soul society",
  };

  type userName = string;
  type IsAdmin = boolean;
  const userName: userName = "sadik";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  add(2, 3);
}
