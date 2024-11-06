{
  ///Polymorphism

  class Person {
    getSleep() {
      console.log(`i sleep 8 hour per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`i sleep for 6 hour`);
    }
  }

  class developer extends Person {
    getSleep() {
      console.log(`i sleep for 5 hour`);
    }
  }

  const getSleepInHour = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new developer();
  getSleepInHour(person1);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    redius: number;

    constructor(redius: number) {
      super();
      this.redius = redius;
    }

    getArea(): number {
      return Math.PI * this.redius * this.redius;
    }
  }

  //height weight

  class RectAngle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new RectAngle(10, 20);

  getShapeArea(shape3);
  ///
}
