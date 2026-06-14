// synchronous code

console.log("1");

console.log("2");

console.log("3");

// asynchronous code

console.log("Start");

setTimeout(function () {

  console.log("Timeout Executed");

}, 2000);

console.log("End");

// callback example

function fetchData(callback) {

  console.log("Fetching data...");

  setTimeout(function () {

    callback();

  }, 3000);

}

fetchData(function () {

  console.log("Data received");

});

// event loop example

console.log("A");

setTimeout(function () {

  console.log("B");

}, 0);

console.log("C");