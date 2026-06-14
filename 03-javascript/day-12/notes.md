# JavaScript Day 12 – Synchronous vs Asynchronous JavaScript

## 1. What is Synchronous JavaScript?

Code executes line by line.

Example:

```javascript
console.log("1");
console.log("2");
console.log("3");
```

Output:

1
2
3

Next line waits for previous line.

---

## 2. What is Asynchronous JavaScript?

Some tasks take time.

Examples:
- API requests
- file downloads
- timers

JavaScript does not stop entire program.

It continues executing other code.

---

## 3. Example

```javascript
console.log("Start");

setTimeout(function () {

  console.log("Hello");

}, 2000);

console.log("End");
```

Output:

Start

End

Hello

---

# WEB APIS

## 4. What are Web APIs?

Provided by browser.

Examples:

- setTimeout
- DOM
- fetch
- geolocation

JavaScript hands these tasks to browser.

---

# CALLBACKS

## 5. What is a Callback?

Function passed into another function.

Example:

```javascript
function greet(callback) {

  callback();

}
```

Used heavily in asynchronous code.

---

# EVENT LOOP

## 6. What is Event Loop?

Event Loop continuously checks:

1. Call Stack
2. Callback Queue

When Call Stack becomes empty,
Event Loop pushes queued tasks
into Call Stack.

---

# EXECUTION FLOW

## 7. Example

```javascript
console.log("A");

setTimeout(() => {

  console.log("B");

}, 0);

console.log("C");
```

Output:

A

C

B

---

## Why?

setTimeout does not go directly
to Call Stack.

Flow:

Call Stack
→ Web API
→ Callback Queue
→ Event Loop
→ Call Stack

---

# CALLBACK HELL

## 8. What is Callback Hell?

Many nested callbacks.

Example:

```javascript
task1(function() {

  task2(function() {

    task3(function() {

    });

  });

});
```

Problems:

- difficult to read
- difficult to debug

Promises solve this issue.

---

## 9. Important Understanding

JavaScript is:

Single Threaded

But can handle asynchronous tasks
using browser APIs and Event Loop.

---

## 10. Common Mistakes

- assuming setTimeout runs immediately
- misunderstanding execution order
- confusing Web APIs and JavaScript

---

## 11. Quick Revision

synchronous → line by line

asynchronous → non-blocking

callback → function passed to function

event loop → manages async execution

web api → browser feature

---

## 12. One Line Understanding

JavaScript uses the Event Loop to handle asynchronous tasks efficiently.

---