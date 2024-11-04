{
  /// Class and object

  class Anime {
    // public name: string;
    public genra: string;
    public episodes: string;

    /// parameter property

    constructor( public name: string, genra: string, episodes: string) {
    //   this.name = name;
      this.genra = genra;
      this.episodes = episodes;
    }
    makeEpisode() {
      console.log(`the ${this.name}  have ${this.episodes}`);
    }
  }

  const naruto = new Anime("naruto", "shonen", "720");
  const onePiece = new Anime("onePiece", "shonen", "1122");
  onePiece.makeEpisode();

  //
}
