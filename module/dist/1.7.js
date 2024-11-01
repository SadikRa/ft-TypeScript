"use strict";
// spread operator
//rest operator
//destructuring
{
    const movie = ["deadpool", "spider Man", "iron man"];
    const movie1 = ["cap", "hulk", "wanda"];
    movie.push(...movie1);
    console.log(movie);
    const studio = {
        marvel: 'deadpool'
    };
    const studio1 = {
        fox: 'krish'
    };
    const studio2 = {
        dc: 'batman'
    };
    const studioList = Object.assign(Object.assign({}, studio1), studio2);
    const greetingFr = (...frs) => {
        // console.log(`hi ${fr} hello ${fr1} ${fr2} ${fr3}`)
        frs.forEach((fr) => console.log(`hi ${fr}`));
    };
    greetingFr('sadik', 'zoroo', 'luffy', 'sanji');
}
