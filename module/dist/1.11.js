"use strict";
{
    //Ternary, optional chaining & nullish coalescing operator
    const age = 20;
    // if else
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    //Ternary
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log(isAdult);
}
