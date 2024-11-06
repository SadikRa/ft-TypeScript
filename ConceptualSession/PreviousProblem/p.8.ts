{
  ///

  class car {
    // brand: string;
    // model: string;
    // year: number;

    // constructor(brand: string , model: string, year: number){
    //   this.brand = brand;
    //   this.model = model;
    //   this.year = year;
    // }
    constructor(
      public brand: string,
      public model: string,
      public year: number
    ) {}

    displayInfo(): string {
      return `your car model is ${this.model} from ${this.brand} ${this.year}`;
    }
  }

  const myCar = new car('ford' , 'murank', 1979 )

  console.log(myCar)

  ///
}
