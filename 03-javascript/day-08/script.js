const heading = document.getElementById("heading");

const button = document.getElementById("clickBtn");

const input = document.getElementById("inputField");

const box = document.getElementById("box");

// click event
button.addEventListener("click", function() {

  heading.innerText = "Button Clicked";

});

// input event
input.addEventListener("input", function() {

  console.log(input.value);

});

// keydown event
document.addEventListener("keydown", function(event) {

  console.log("Key Pressed:", event.key);

});

// mouse events
box.addEventListener("mouseenter", function() {

  box.style.background = "green";

});

box.addEventListener("mouseleave", function() {

  box.style.background = "crimson";

});

// event object
button.addEventListener("click", function(event) {

  console.log(event);

});
