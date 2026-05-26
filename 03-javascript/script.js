// global scope
let user = "Ansh";

console.log(user);

function showUser() {
  console.log(user);
}

showUser();

// function scope
function testScope() {

  let message = "Inside function";

  console.log(message);
}

testScope();

// block scope
{
  let blockVariable = "Block scope";
  console.log(blockVariable);
}

// lexical scope
function outer() {

  let outerVariable = "Outer";

  function inner() {
    console.log(outerVariable);
  }

  inner();
}

outer();

// var hoisting
console.log(city);

var city = "Moradabad";

// let hoisting
// console.log(age);

let age = 21;

// function hoisting
greet();

function greet() {
  console.log("Hello");
}

// execution context example
let a = 10;

function demo() {

  let b = 20;

  console.log(a + b);
}

demo();

// call stack example
function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.log("Call stack executed");
}

first();