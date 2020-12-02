// 1. Updater
// Depending on the value of a variable (determiner),
//assign a value to x.
// If determiner is less than 0, x's value should be "Less than 0"
// If determiner is greater or equal 0, x's
//value should "Greater or equal to 0".

let determiner = 5;
let x = 3;

if (determiner < 0) {
  console.log("Value of x =", x < 0);
} else if (determiner >= 0) {
  console.log("value of x =", x >= 0);
}

// 2. New Variables
// Depending on the value of the determiner, assign a
// value to another variable (updater) and create another variable.
// If determiner is greater of equal to 0, updater's value should
// be "Greater or equal to 0" and create another variable called message,
//  assign a value of "Positive Integer" and print message.
// If determiner is less than 0, updater's value should be "Less than 0".
// Question: What would happen if we tried to print "message" outside
// of the if statement? Comment your answer in the js file.

let updater = 10;

if (determiner >= 0) {
  console.log("Value of updater", updater >= 0);
  let message = 20;
  console.log("message=", message);
} else if (determiner < 0) {
  console.log("Value of updater", updater < 0);
}

// 3. Ternary v.s. If statement
// When do you use a ternary v.s. an if statement? Give an example.

let determiner1 = 50;
let updater1 = 60;
let result = determiner1 >= 0 ? updater1 >= 0 : updater1 < 0;
console.log("result=", result); // true
