{
  //type Of

  const MovieName = "Deadpool";

  type MovieType = typeof MovieName;

  const aMovie : MovieType = 'Deadpool'

  const movie = {
    title: "Rock On",
    director: "ruso brother",
  };

  type movesDetails = typeof movie;

  const newMovies: movesDetails = {
    title: "23",
    director: "ruso brother",
  };

  type DetailsLog = {
    massage: string;
    level: "info" | "warn" | "error";
  };

  function logMassage(input: string | number | DetailsLog) {
    if (typeof input === "string") {
      console.log("simple massage info", input);
    } else if (typeof input === "number") {
      console.log("Error Code", input);
    } else if ("massage" in input && "level" in input) {
      console.log(`danger Level ${input.level} instructions for next level`);
    }
  }

  const test = logMassage({ massage: "bhai google koran ", level: "error" });
  console.log(test);
  // /
}
