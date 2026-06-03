const form = document.getElementById("form");

const username = document.getElementById("username");

const email = document.getElementById("email");

const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

  // stop page refresh
  event.preventDefault();

  let userValue = username.value.trim();

  let emailValue = email.value.trim();

  if (userValue === "" || emailValue === "") {

    message.innerText =
      "All fields are required";

    message.className = "error";

    return;
  }

  if (!emailValue.includes("@")) {

    message.innerText =
      "Enter valid email";

    message.className = "error";

    return;
  }

  message.innerText =
    "Form submitted successfully";

  message.className = "success";

  console.log("Username:", userValue);
  console.log("Email:", emailValue);

});