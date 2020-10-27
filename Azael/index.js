// 1. Updater
/* Depending on the value of a variable (determiner), assign a value to `x`. 
    - If determiner is less than 0, `x`'s value should be "Less than 0"*/
// - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".*/

let determiner = 0;
let x;
if (determiner < 0) {
  let x = "Less than 0";
  console.log("x :>> ", x);
} else {
  let x = "Greater or equal to 0";
  console.log("x :>> ", x);
}

// 2. New Variables
/* Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
    - If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
    - If determiner is less than 0, `updater`'s value should be "Less than 0".*/
let updater;

if (determiner >= 0) {
  updater = "Greater or equal to 0";
  let message = "Positive Integer";
  console.log(message);
} else {
  updater = "Less than 0";
}

// ? Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
// answer: we get ReferenceError: message is not defined

// 3. Ternary v.s. If statement
//? When do you use a ternary v.s. an if statement? Give an example.
// There's a different emphasis: An if / else statement emphasises the branching first and what's to be done is secondary, while a ternary operator emphasises what's to be done over the selection of the values to do it with.
// Use ternary operators to set a value to a variable, or to reduce code if necessary.
// Use if-else statements for everything else.
