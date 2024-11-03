{
//Function with generics

const createArray = (param : string) : string[] => {
 return [param]
}

const createArrayWithGenerics = <T>(param : T) : T[] => {
 return [param]
}


const result1 = createArray('desh')
const resultGenerics = createArrayWithGenerics<string>('desh')


//
}