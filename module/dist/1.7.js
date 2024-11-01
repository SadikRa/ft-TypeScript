"use strict";
// spread operator
//rest operator
//destructuring
const movie = ["deadpool", "spider Man", "iron man"];
const movie1 = ["cap", "hulk", "wanda"];
movie.push(...movie1);
console.log(movie);
const studio = {
    marvel: 'deadpool'
};
