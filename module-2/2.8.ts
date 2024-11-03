{
  // Asynchronous typescript
  //promise

  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: false
  }

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    const data = await response.json();
    console.log(data);
    return data
  };

  getTodo()

  type something = { something: string };

  //simulate
  const createPromise = (): Promise<something> => {
    return new Promise<something>((resolve, reject) => {
      const data: { something: string } = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("fail to load data");
      }
    });
  };

  const showData = async (): Promise<{ something: string }> => {
    const data: something = await createPromise();
    return data;
  };

  showData();

  //
}
