# JavaScript Day 6 – Scope and Hoisting

## 1. What is Scope?

Scope decides where variables can be accessed.

---

# TYPES OF SCOPE

## 2. Global Scope

Variable accessible everywhere.

Example:

```javascript
let name = "Ansh";
```

Accessible:
- inside functions
- outside functions

---

## 3. Function Scope

Variables declared inside function
can only be used inside that function.

Example:

```javascript
function test() {
  let msg = "Hello";
}
```

---

## 4. Block Scope

Variables inside {} only work inside block.

Works with:
- let
- const

Example:

```javascript
{
  let age = 21;
}
```

---

## 5. Lexical Scope

Inner function can access variables
from outer function.

Example:

```javascript
function outer() {

  let a = 10;

  function inner() {
    console.log(a);
  }

}
```

---

# HOISTING

## 6. What is Hoisting?

JavaScript moves declarations to top internally.

---

## 7. var Hoisting

var becomes:

```javascript
undefined
```

before initialization.

Example:

```javascript
console.log(city);

var city = "Delhi";
```

---

## 8. let and const Hoisting

They are hoisted too,
but stay inside:

```text
Temporal Dead Zone (TDZ)
```

Access before declaration gives error.

---

## 9. Function Hoisting

Function declarations are fully hoisted.

Example:

```javascript
greet();

function greet() {}
```

Works correctly.

---

# EXECUTION CONTEXT

## 10. What is Execution Context?

Environment where JavaScript code runs.

Contains:
- variables
- functions
- scope information

---

# CALL STACK

## 11. What is Call Stack?

Tracks function execution order.

Last called function executes first.

LIFO:
Last In First Out

---

## 12. Important Understanding

Scope controls accessibility.

Hoisting controls declaration behavior.

---

## 13. Common Mistakes

- using variable before declaration
- confusing var and let
- scope confusion inside functions

---

## 14. Quick Revision

global → everywhere  
function scope → inside function  
block scope → inside {}  
hoisting → declarations move up  
call stack → function execution order  

---

## 15. One Line Understanding

Scope controls access.  
Hoisting controls initialization behavior.

---