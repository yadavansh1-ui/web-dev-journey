# JavaScript Day 3 – Functions

## 1. What is a Function?

Function is a reusable block of code.

Instead of writing same code repeatedly,
we place it inside a function.

---

## 2. Function Declaration

Example:

function greet() {
  console.log("Hello");
}

greet();

---

## 3. Parameters vs Arguments

Parameters:
Variables inside function definition.

Arguments:
Actual values passed during function call.

Example:

function add(a, b) {
  return a + b;
}

add(2, 3);

a and b → parameters  
2 and 3 → arguments

---

## 4. Return Keyword

Used to send value back from function.

Example:

return a + b;

Without return:
function gives undefined.

---

## 5. Function Expression

Function stored inside variable.

Example:

const greet = function() {
  console.log("Hello");
};

---

## 6. Arrow Functions

Short modern syntax.

Example:

const add = (a, b) => {
  return a + b;
};

Short version:

const double = num => num * 2;

---

## 7. Callback Function

Function passed inside another function.

Example:
- event handling
- timers
- async JS

---

## 8. Higher Order Function

Function that:
- takes another function
OR
- returns another function

---

## 9. Anonymous Function

Function without name.

Example:

function() {
  console.log("Hello");
}

---

## 10. IIFE

Immediately Invoked Function Expression.

Runs immediately after creation.

Example:

(function() {
  console.log("IIFE");
})();

---

## 11. Recursion

Function calling itself.

Used in:
- countdowns
- tree structures
- advanced algorithms

---

## 12. Important Understanding

Functions help:
- organize code
- reuse logic
- reduce repetition

---

## 13. Quick Revision

function → reusable code  
return → sends value back  
arrow function → short syntax  
callback → function inside function  
recursion → function calling itself  

---

## 14. One Line Understanding

Functions make JavaScript modular and reusable.

---