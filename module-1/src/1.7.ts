// spread operator
//rest operator
//destructuring
{

      
const movie: string[] = ["deadpool", "spider Man", "iron man"];
const movie1: string[] = ["cap", "hulk", "wanda"];
movie.push(...movie1);

console.log(movie)

const studio = {
      marvel: 'deadpool'
}
const studio1 = {
      fox: 'krish'
}

const studio2 = {
      dc: 'batman'
}

const studioList = {
      ...studio1,
      ...studio2
}


const greetingFr = (...frs: string[]) => {
      // console.log(`hi ${fr} hello ${fr1} ${fr2} ${fr3}`)
      frs.forEach((fr: String )=> console.log(`hi ${fr}`))
}

greetingFr('sadik', 'zoroo',  'luffy', 'sanji')


}
