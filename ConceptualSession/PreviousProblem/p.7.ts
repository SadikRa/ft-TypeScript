{
    ///

    function logString(input : unknown): void{
        if(typeof input ==='string'){
                console.log(input)
        }else{
            console.error('error: hey there is an error')

        }
    }

    console.log(logString('str'))

    //

}