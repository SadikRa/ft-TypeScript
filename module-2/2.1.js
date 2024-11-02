"use strict";
{
    //Type assertion / type narrowing
    // let anything : any;
    // anything = 'next season coming'
    const newSeason = (dates1, dates2) => {
        console.log(dates1);
        console.log(dates2);
    };
    newSeason('22december', '22november');
    let anything;
    anything = 'bleach main character is naruto';
    anything = 222;
    anything;
    anything;
    const bleachToNaruto = (value) => {
        if (typeof value === 'string') {
            const result = parseFloat(value) * 1000;
            return result;
        }
        else if (typeof value === 'number') {
            return value * 1000;
        }
    };
}
