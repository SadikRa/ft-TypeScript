{
  // Mapped types

  const arrayNumbers: number[] = [1, 2, 23, 2];
  // const arrayOFString : string[] = ['1', '23']

  const arrayOfString: string[] = arrayNumbers.map((number) =>
    number.toString()
  );
  // console.log(arrayOfString)

  type AreaNumber = {
    height: number;
    width: number;
  };

  // type AreaString = {
  //     height: string,
  //     Width: string,
  // }

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const Area1: AreaString<{ height: string, width: number }> = {
    height: '100',
    width: 111
  }

  //
}
