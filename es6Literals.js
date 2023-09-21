console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 
var greet = "Hello";
var place = "World"; //es5
console.log(greet + " " + place + "!"); //display both variables without using template literals


let Greet = "Hello"; //es6
let Place = "World";
console.log(`${Greet} 
${Place} !`) //display both variables using template literals


let multiLine = `
    using ES6
    backticks
    multiline
    strings are
    possible!
`;
console.log(multiLine);