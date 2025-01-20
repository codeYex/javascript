/* Properties file in Javascript
When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. All
Preview content is loading
data types
have access to specific properties that are passed down to each instance. For example, every string instance has a property called
Preview content is loading
length
that stores the number of characters in that string. You can retrieve property information by appending the string with a period and the property name:

console.log('Hello'.length); // Prints 5

The . is another operator! We call it the dot operator.

In the example above, the value saved to the length property is retrieved from the instance of the string, 'Hello'. The program prints 5 to the console, because Hello has five characters in it. */

//Methods contain functions

console.log("Hello world".length); //displays the length of the string
console.log("Hello uganda".toUpperCase()); //converts string to uppercase
console.log("Hello world".startsWith("o"));
console.log("just another code".startsWith("j")); //checks if the statement starts with j TRUEif true and false if not
console.log(" Hello mister man    ".trim()); //Trims the space
console.log("Jackson".charAt(2)); //Provides the character at 2
//can be written as
console.log("Hello"[3]);

const a = 220;
const b = 220;

if (a < b) {
  console.log(`${a}  is less than ${b} `);
} else if (a > b) {
  console.log(`${a} is greater than ${b} `);
} else {
  console.log(`${a} is equal to ${b}`);
}


// console.log(Math.random() * 30); Logs numbers with decimals

console.log(Math.floor(Math.random() * 450)); //logs a whole number
console.log(Math.ceil(32.9));
console.log(Number.isInteger(2017));


