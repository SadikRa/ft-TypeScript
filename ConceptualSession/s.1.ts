{
  ///key of

  type TBook = {
    title: string;
    author: string;
    yearPublish: number;
  };

  // key of to get keys the book

  type BookKeys = keyof TBook;

//   const anotherBook : BookKeys = {
//     title: 'naruto',
//     author: 'kisimoto',
//     yearPublish: 2002,

//   }

  function getBookProperty<T, K extends keyof T>(book: T, key: K): T[K] {
    return book[key];
  }

  const myBook: TBook = {
    title: "one Piece",
    author: "oda",
    yearPublish: 1997,
  };

  const author = getBookProperty(myBook, "author",);

  
  //
}
