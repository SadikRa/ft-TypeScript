{
    // opp

    /// inheritance
    class MusicalInstrument {
        name: string;

        constructor(name: string){
            this.name = name;
        }
        play(){
            console.log(`playing the ${this.name}`)
        }
    }

    class Guiter extends MusicalInstrument{
        constructor() {
            super('guiher')
        }

        tune() {
            console.log(`tuning kori ${this.name}`)
            return 'music is prohabited'
        }
    }


    class Piano extends MusicalInstrument {
        constructor(){
            super('piano ')
        }

        openLid(){
            console.log(`opeing the lid ${this.name}`)
        }
    }

    const guiterist = new Guiter()

    console.log(guiterist.name, guiterist.tune())

}