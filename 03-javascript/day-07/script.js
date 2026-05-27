// selecting elements
const title = document.getElementById("title");

console.log(title);

const text = document.querySelector(".text");

console.log(text);

// changing text
title.innerText = "DOM Manipulation";

// innerHTML
text.innerHTML = "<b>Content updated using JavaScript</b>";

// style changes
title.style.color = "red";

title.style.fontSize = "40px";

// classList
const card = document.getElementById("card");

card.classList.add("active");

// button click
const button = document.getElementById("btn");

button.addEventListener("click", function() {

  card.classList.toggle("active");

});

// create element
const newElement = document.createElement("h2");

newElement.innerText = "New Element Added";

// append element
document.body.appendChild(newElement);

// attributes
button.setAttribute("title", "Button tooltip");

console.log(button.getAttribute("title"));

// remove attribute
button.removeAttribute("title");