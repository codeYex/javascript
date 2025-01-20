let user = "Micheal";
let car = "Toyota";
let message = "Hello ";
let list = user;
let age = 42;
console.log(message, user, list, age); //will output the name with a greeting

//CONSTANTS are unchanged variables
const myDateOfBirth = "21/12/1990";
const COLOR_BLUE = "#00F";
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLACK = "#000";
const COLOR_YELLOW = "#0089";

let color = COLOR_RED;
console.log(color);

const pageLoadTime = 32;

let clientName = "John";
let admin = clientName;
console.log(admin); // John

let namePolice, administrator;
namePolice = "John";
administrator = namePolice;

console.log(administrator);

let planetName, currentVisitor;
planetName = "earth";
currentVisitor = "John Doe";

let changeMe = true; //LET VARIABLES CAN BE REASSIGNED
changeMe = false;
console.log(changeMe);

const myName = "angel"; // COST VARIABLES CANNOT BE REASSIGNED
console.log(myName);

const myUsers = 43;
console.log(myUsers);

//MATH OPERATORS    *= , -= , /=

let ageOfSuspect = 32;
ageOfSuspect += 2;
console.log(ageOfSuspect);

let myNumber = 100;
myNumber -= 3;
console.log(myNumber);

let hisWives = 20;
hisWives *= 10;
console.log("This is the multiplication of the let variable", hisWives);

let myDays = 100;
myDays /= 2;
console.log("These are my numbered days ", myDays);

// The Increment and Decrement Operator ++ , --

let myPet = "Jackson";
console.log("Uganda has the best player named: " + myPet + ".");

let favoriteDays = "Saturday";
console.log("My favorite days is : " + favoriteDays + "."); //STRING CONCATENATION using the +
console.log(`My best day of the week ${favoriteDays}`); //string interpolation using backticks

let ages = 32;
console.log(typeof ages);

let myHome = "London";
console.log(typeof myHome);

let myChildren = true;
console.log(typeof myChildren);

let myYoungBrother = 43;
console.log(typeof myYoungBrother);