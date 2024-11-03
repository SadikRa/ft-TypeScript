{
  //Generic with Interface

  interface developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseDate: number;
    };
    SmartWatch: T;
  }

  const poorDeveloper: developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "sadik",
    computer: {
      brand: "samsung",
      model: "i-7",
      releaseDate: 2024,
    },
    SmartWatch: { brand: "samsung", model: "kw66", display: "amulate" },
  };

  const richDeveloper: developer<{
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }> = {
    name: "sanji",
    computer: {
      brand: "apple",
      model: "i-9",
      releaseDate: 2024,
    },
    SmartWatch: {
      brand: "apple watch",
      model: "updated",
      display: "amulate",
      heartTrack: true,
      sleepTrack: true,
    },
  };

  ///
}
