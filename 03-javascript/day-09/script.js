const button = document.getElementById("btn");
const title = document.getElementById("title");
const box = document.getElementById("box");
const input = document.getElementById("input");

// click event
button.addEventListener("click", function () {

  title.innerText = "Button Clicked";

  box.classList.toggle("active");

});

// input event
input.addEventListener("input", function () {

  console.log(input.value);

});

// keydown event
input.addEventListener("keydown", function (event) {

  console.log("Key Pressed:", event.key);

});

// mouseover event
box.addEventListener("mouseover", function () {

  console.log("Mouse entered box");

});

// mouseout event
box.addEventListener("mouseout", function () {

  console.log("Mouse left box");

});

// event object
button.addEventListener("click", function (event) {

  console.log(event);

});