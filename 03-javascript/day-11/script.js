// setTimeout
setTimeout(function () {

  console.log("Executed after 3 seconds");

}, 3000);

// clearTimeout
const timeoutId = setTimeout(function () {

  console.log("This message will not appear");

}, 5000);

clearTimeout(timeoutId);

// counter value
let count = 0;

let intervalId;

// start interval
document
  .getElementById("start")
  .addEventListener("click", function () {

    intervalId = setInterval(function () {

      count++;

      console.log("Counter:", count);

    }, 1000);

  });

// stop interval
document
  .getElementById("stop")
  .addEventListener("click", function () {

    clearInterval(intervalId);

    console.log("Counter stopped");

  });