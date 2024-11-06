// {
// ///Abstraction in OOP 1. interface 2. abstract

//  interface Vehicle1 {
//     name: string;
//     model: number
//  }


// interface Vehicle1 {
//     startEngine() : void;
//     stopEngine() : void;
//     move(): void

// }

// //  const vehicle1 : Vehicle1 = {
// //     name: 'Ford',
// //     model: 1979
// //  }

// class Car1 implements Vehicle1 {

//    startEngine(): void {
//        console.log('`i am start the engine')
//    }
//    stopEngine(): void {
//        console.log(`I am stopped the engine`);
//    }
//    move(): void {
//        console.log(`car start to moving`)
//    }
//    test() {
//     console.log(`i am just testing`)
//    }
// }

// const ford = new Car1()

// ford.startEngine()
// ford.startEngine()
// ford.move()


// abstract class Car2 {
//   abstract  startEngine(): void ;
//    abstract stopEngine(): void ;
//    abstract move(): void ;
//     test() {
//      console.log(`i am just testing`)
//     }
// }

// class FordCar extends Car2 {
//     startEngine(): void {
//         console.log(`i am done`);
//     }
//     stopEngine(): void {
//         console.log(`i am end`);
//     }
//     move(): void {
//         console.log(`car moved`);
//     }
// }
//  const hondaCar = new FordCar()

//  hondaCar.startEngine()



// ///
// }


// Abstraction using Interface
interface Vehicle1 {
    name: string;
    model: number;
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

// Class implementing the Vehicle1 interface
class Car1 implements Vehicle1 {
    name: string;
    model: number;

    constructor(name: string, model: number) {
        this.name = name;
        this.model = model;
    }

    startEngine(): void {
        console.log('I am starting the engine');
    }
    stopEngine(): void {
        console.log('I am stopping the engine');
    }
    move(): void {
        console.log('The car is moving');
    }
    test() {
        console.log('I am just testing');
    }
}

const ford = new Car1("Ford", 1979);
ford.startEngine();
ford.move();
ford.stopEngine();

// Abstraction using Abstract Class
abstract class Car2 {
    // Abstract methods must be implemented in derived classes
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    // Regular method with implementation
    test() {
        console.log('I am just testing');
    }
}

// Class extending the abstract class Car2
class FordCar extends Car2 {
    startEngine(): void {
        console.log('Starting the engine');
    }
    stopEngine(): void {
        console.log('Stopping the engine');
    }
    move(): void {
        console.log('The car has moved');
    }
}

const hondaCar = new FordCar();
hondaCar.startEngine();
hondaCar.move();
hondaCar.stopEngine();
