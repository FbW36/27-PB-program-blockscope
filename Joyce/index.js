// 1. Updater
// Depending on the value of a variable (determiner), assign a value to x.
//! If determiner is less than 0, x's value should be "Less than 0"
//! If determiner is greater or equal 0, x's value should "Greater or equal to 0".

let value = 50;
let x;
if (value < 0) {
  x = "Less than 0";
  console.log(x);
} else {
  x = "Greater or equal to 0";
  console.log(x);
}

// 2. New Variables
// Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.

// If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
// If determiner is less than 0, updater's value should be "Less than 0".

let value2 = 48;
let x2;

if (value2 >= 0) {
  x2 = "Greater or equal to 0";
  let message = "Positive Integer";
  console.log(message);
} else {
  x2 = "Less than 0";
}

// Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
//-- The variable message is not defined. Beacuse it is assigned inside of if block, so it only works inside of if block

//3. Ternary v.s. If statement
// When do you use a ternary v.s. an if statement? Give an example.
//Ternary uses for simple solutions, while If statement can use for more complicated conditions and can also add another condition when the first condition is false

//Ternary example
console.log(9 % 2 === 0 ? "It is even" : "It is not even");

// If statement example
let time = 14;
let greeting;

if (time < 12) {
  greeting = "Good morning";
} else if (time >= 12 && time < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good Evening";
}
