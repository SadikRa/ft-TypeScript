{
  //to generics

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

  const watcher : = [
    {
        name: 'yugi'
    }
  ]

}
