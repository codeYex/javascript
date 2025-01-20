//This is a variable storing the value
const kelvin = 303;

// We are converting the celsius to kelvin
let celsius = 273 - kelvin;
let fahrenheit = celsius * (9 / 5) + 32;

// This is to round the value got from the round
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);


let Newton  =  celsius * (33/100);
Newton = Math.floor(Newton);

console.log(`The new Newton value is ${Newton}`)