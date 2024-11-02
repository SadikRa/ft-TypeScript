{
  //Type assertion / type narrowing

  // let anything : any;

  // anything = 'next season coming'

  const newSeason = (dates1: string, dates2: string): void => {
    console.log(dates1);
    console.log(dates2);
  };

  newSeason("22december", "22november");

  let anything: any;

  anything = "bleach main character is naruto";

  anything = 222;
  anything as string;
  anything as number;

  const bleachToNaruto = (
    value: string | number
  ): string | number | undefined => {
    if (typeof value === "string") {
      const result = parseFloat(value) * 1000;
      return result;
    } else if (typeof value === "number") {
      return value * 1000;
      
    }
  };

  const result1 = bleachToNaruto(720) as number

  const result2 = bleachToNaruto('720') as string


  type customError = {
    massage: string
  }

  try{

  }
  catch(error) {
    console.log((error as customError).massage)
  }
}
