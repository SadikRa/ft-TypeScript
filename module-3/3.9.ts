{
///Abstraction in OOP 1. interface 2. abstract

 interface Vehicle1 {
    name: string;
    model: number
 }


interface Vehicle1 {
    startEngine() : void;
    stopEngine() : void;
    move(): void

}

//  const vehicle1 : Vehicle1 = {
//     name: 'Ford',
//     model: 1979
//  }

class Car1 implements Vehicle1 {
//    name: ''
//    model: 0
   startEngine(): void {
       console.log('`i am start the engine')
   }
   stopEngine(): void {
       console.log(`I am stopped the engine`);
   }
   move(): void {
       console.log(`car start to moving`)
   }
   test() {
    console.log(`i am just testing`)
   }
}

const ford = new Car1()

ford.startEngine()
ford.startEngine()
ford.move()


abstract class Car2 {
  abstract  startEngine(): void ;
   abstract stopEngine(): void ;
   abstract move(): void ;
    test() {
     console.log(`i am just testing`)
    }
}

class FordCar extends Car2 {
    startEngine(): void {
        console.log(`i am done`);
    }
    stopEngine(): void {
        console.log(`i am end`);
    }
    move(): void {
        console.log(`car moved`);
    }
}
 const hondaCar = new Car2()

 hondaCar.startEngine()



///
}