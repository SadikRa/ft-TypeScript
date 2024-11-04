{
  //Inheritance in OOP


  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep ${numOfHours} hours`);
    }
  }

  class Student  extends Parent{
    constructor(name: string, age: number, address: string) {
      super(name, age, address)
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep ${numOfHours} hours`);
    }
  }

  const student1 = new Student("sadik", 22, "bangla");

  student1.getSleep(7)
  //
}
