// =========================
// CONDITIONS
// =========================

let age = 20;

// if
if (age >= 18) {
  console.log("You can vote");
}

// if else
let marks = 45;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// else if
let score = 82;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 70) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// switch
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}

// ternary operator
let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

// truthy falsy
let username = "";

if (username) {
  console.log("Username exists");
} else {
  console.log("Username is empty");
}

// =========================
// LOOPS
// =========================

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop:", i);
}

// while loop
let count = 1;

while (count <= 5) {
  console.log("While Loop:", count);
  count++;
}

// do while
let number = 1;

do {
  console.log("Do While:", number);
  number++;
} while (number <= 5);

// nested loop
for (let row = 1; row <= 3; row++) {

  for (let col = 1; col <= 3; col++) {
    console.log(row, col);
  }

}

// break
for (let i = 1; i <= 10; i++) {

  if (i === 5) {
    break;
  }

  console.log(i);
}

// continue
for (let i = 1; i <= 5; i++) {

  if (i === 3) {
    continue;
  }

  console.log("Continue:", i);
}