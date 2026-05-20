function greet() {
  console.log("Welcome to JavaScript");
}

greet();

// user introduction
function introduce(name, age) {
  console.log("Name:", name);
  console.log("Age:", age);
}

introduce("Ansh", 21);

// add two numbers
function add(a, b) {
  return a + b;
}

let result = add(10, 5);

console.log(result);

// function expression
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5));

// arrow function
const square = (num) => {
  return num * num;
};

console.log(square(6));

// short arrow function
const double = num => num * 2;

console.log(double(8));

// callback function
function processUser(callback) {
  console.log("Processing user...");
  callback();
}

processUser(function() {
  console.log("Callback executed");
});

// higher order function
function calculator(a, b, operation) {
  return operation(a, b);
}

function subtract(x, y) {
  return x - y;
}

console.log(calculator(20, 5, subtract));

// anonymous function
setTimeout(function() {
  console.log("Anonymous function executed");
}, 1000);

// IIFE
(function() {
  console.log("IIFE executed");
})();

// recursion
function countdown(num) {

  if (num === 0) {
    console.log("Finished");
    return;
  }

  console.log(num);

  countdown(num - 1);
}

countdown(5);