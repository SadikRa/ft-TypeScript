{
  //Type guard using instance of

  class Anime {
    name: string;
    genra: string;
    episodes: number;

    constructor(name: string, genra: string, episodes: number) {
      this.name = name;
      this.genra = genra;
      this.episodes = episodes;
    }

    makeEpisode () {
        console.log('i am making new episode')
    }
  }


  class Naruto extends Anime {
    constructor(name,  genra, episodes){
        super(name, genra, episodes)
    }
  }
  //
}
