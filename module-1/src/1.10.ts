{
    //union types 

    type animeWatcher = 'OnePiece' | 'naturo'
    type OldAnimeWatcher = 'DragonBall' | 'sailor moon'

    const newWatcher : animeWatcher = 'naturo'
    const oldWatcher : OldAnimeWatcher = 'DragonBall'

    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female';
        bloodGroup:  'O+' | 'A+' | 'B+'
    }


    const user1: User = {
        name: 'sadik',
        email: 'sadik@gmail.com',
        gender: 'male',
        bloodGroup:  'O+',
    }

}