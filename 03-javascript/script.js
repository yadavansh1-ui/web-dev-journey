// console output
console.log("JavaScript Day 1");

/* variables */
let name = "Ansh";
const age = 21;
var city = "Moradabad";

console.log(name);
console.log(age);
console.log(city);

/* data types */
let language = "JavaScript";   // string
let marks = 95;                // number
let isLearning = true;         // boolean
let futureGoal = null;         // null
let skill;                     // undefined

console.log(typeof language);
console.log(typeof marks);
console.log(typeof isLearning);
console.log(typeof futureGoal);
console.log(typeof skill);

/* operators */
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

/* type conversion */
let score = "100";

console.log(Number(score));
console.log(String(50));

/* type coercion */
console.log("5" + 1); // string
console.log("5" - 1); // number

/* browser interaction */
alert("Welcome to JavaScript!");

let userName = prompt("Enter your name:");

console.log(userName);

let result = confirm("Are you enjoying JavaScript?");

console.log(result);