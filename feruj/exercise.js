// 1 
let determiner = 10;
let x;
if (determiner < 0) {
  x = "Less than 0";
  console.log(x);
} else {
  x = "Greater or equal to 0";
  console.log(x);
}
// 2

let updater = 20;
let x2;

if (updater >= 0) {
  x2 = "Greater or equal to 0";
  let message = "Positive Integer";
  console.log(message);
} else {
  x2 = "Less than 0";
}
//3  console.log("message ==>", message); // Error msg 

//Ternary uses for simple solutions, while If statement can use for more complicated conditions

//Ternary example
console.log(8 % 2 == 0 ? "It is even" : "It is not even");

// If statement example

let time = 8;
let greeting;

if (time < 12) {
  greeting = "Good morning";
} else if (time >= 12 && time < 17) {
  greeting = "Good afternoon";
} else {
  greeting = "Good Evening";
}
console.log(greeting);