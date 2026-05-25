// object basics
const user = {
  name: "Ansh",
  age: 21,
  city: "Moradabad"
};

console.log(user);

// access values
console.log(user.name);
console.log(user.age);

// add new property
user.country = "India";

console.log(user);

// update value
user.age = 22;

console.log(user);

// delete property
delete user.city;

console.log(user);

// nested object
const student = {
  name: "Rahul",

  marks: {
    math: 90,
    science: 85
  }
};

console.log(student.marks.math);

// object methods
const person = {

  firstName: "Ansh",
  lastName: "Yadav",

  fullName: function() {
    return this.firstName + " " + this.lastName;
  }

};

console.log(person.fullName());

// destructuring
const product = {
  title: "Laptop",
  price: 50000
};

const { title, price } = product;

console.log(title);
console.log(price);

// spread operator
const obj1 = {
  a: 1,
  b: 2
};

const obj2 = {
  ...obj1,
  c: 3
};

console.log(obj2);

// rest operator
function total(...numbers) {

  console.log(numbers);

}

total(10, 20, 30);

// Object.keys()
console.log(Object.keys(user));

// Object.values()
console.log(Object.values(user));

// Object.entries()
console.log(Object.entries(user));

// freeze
const account = {
  username: "ansh"
};

Object.freeze(account);

account.username = "newUser";

console.log(account);

// seal
const settings = {
  darkMode: true
};

Object.seal(settings);

settings.darkMode = false;

console.log(settings);