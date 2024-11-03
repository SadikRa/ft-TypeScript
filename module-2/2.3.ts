{
  //to generics

  interface User {
    name: string;
    age: number;
  }

  type GenericsArray<param> = Array<param>;

  //   const rollNumber: number[] = [3, 4, 5, 343];
  const rollNumber: GenericsArray<number> = [3, 4, 5, 343];

  //   const character: string[] = ['naruto', 'zoro', 'hinita', 'suske', 'sakura'];
  const character: GenericsArray<string> = [
    "naruto",
    "zoro",
    "hinita",
    "suske",
    "sakura",
  ];

  //   const boolArray: boolean[] = [true, false];
  const boolArray: GenericsArray<boolean> = [true, false];

  const watcher: GenericsArray<{ name: string; age: number }> = [
    {
      name: "yuji",
      age: 16,
    },
    {
      name: "nobora",
      age: 16,
    },
  ];

  type GenericsTuple<X, Y> = [X, Y];

  const manush: GenericsTuple<string, string> = ["mr. x", "mr. y"];

  const UserWithId: GenericsTuple<number, { name: string; email: string }> = [
    12,
    { name: "sadik", email: "a@gmail.com" },
  ];
}
