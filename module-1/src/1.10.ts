{
    //union types 

    type animeWatcher = 'OnePiece' | 'naturo'

    const newWatcher : animeWatcher = 'naturo'

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