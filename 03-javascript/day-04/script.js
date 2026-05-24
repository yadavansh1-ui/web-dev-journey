// array basics
let fruits = ["apple", "mango", "banana"];

console.log(fruits);

// indexing
console.log(fruits[0]);
console.log(fruits[1]);

// push
fruits.push("orange");

console.log(fruits);

// pop
fruits.pop();

console.log(fruits);

// unshift
fruits.unshift("grapes");

console.log(fruits);

// shift
fruits.shift();

console.log(fruits);

// splice
fruits.splice(1, 1, "kiwi");

console.log(fruits);

// slice
let newFruits = fruits.slice(0, 2);

console.log(newFruits);

// concat
let vegetables = ["potato", "tomato"];

let food = fruits.concat(vegetables);

console.log(food);

// join
console.log(food.join(" - "));

// reverse
console.log(food.reverse());

// sort
let numbers = [5, 2, 9, 1];

numbers.sort();

console.log(numbers);

// forEach
food.forEach(function(item) {
  console.log(item);
});

// map
let doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);

// filter
let greater = numbers.filter(function(num) {
  return num > 3;
});

console.log(greater);

// find
let found = numbers.find(function(num) {
  return num > 4;
});

console.log(found);

// some
let checkSome = numbers.some(function(num) {
  return num > 8;
});

console.log(checkSome);

// every
let checkEvery = numbers.every(function(num) {
  return num > 0;
});

console.log(checkEvery);

// reduce
let total = numbers.reduce(function(acc, curr) {
  return acc + curr;
}, 0);

console.log(total);