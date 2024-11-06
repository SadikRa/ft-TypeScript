{
  /// Statics in OOP

  class Counter {
   static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
        return (Counter.count = Counter.count -1)
    }

  }

  const  instance = new Counter()

  console.log(Counter.increment())  

  const instance2 =  new Counter()

  console.log(Counter.increment())

//   const instance3 =  new Counter()

  console.log(Counter.increment())


  ///
}
