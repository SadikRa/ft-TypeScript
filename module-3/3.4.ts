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

    makeEpisode() {
      console.log("i am making new episode");
    }
  }

  class Naruto extends Anime {
    constructor(name: string, genra: string, episodes: number) {
      super(name, genra, episodes);
    }
    makeEpisode() {
      console.log("making a new episode ");
    }
  }

  class Bleach extends Anime {
    constructor(name: string, genra: string, episodes: number) {
      super(name, genra, episodes);
    }
    makeArt() {
      console.log("i am giving new new design");
    }
  }

  const isNaruto = (anime: Anime) : anime is Naruto=> {
    return anime instanceof Naruto;
  };

  const isBleach = (anime: Anime) : anime is Bleach => {
    return anime instanceof Bleach;
  };

  const getNewAnime = (anime: Anime) => {
    if (anime instanceof Naruto) {
      anime.makeEpisode();
    } else if (anime instanceof Bleach) {
      anime.makeArt();
    } else {
      anime.makeEpisode();
    }
  };

  const naruto = new Naruto("naruto", "action", 220);
  const bleach = new Bleach("Bleach", "action", 366);
  naruto.makeEpisode();
  bleach.makeArt();

  getNewAnime(naruto);

  //
}
