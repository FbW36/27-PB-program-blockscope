let determiner = 4;
let x;
if (determiner < 0) {
  x = "Less than 0";
} else {
  x = "Greater or equal to 0";
}
console.log(x);

//2
// let determiner = 5;
let updater;
if (determiner >= 0) {
  updater = "Greater or equal to 0";
  let message = "Positive integer";
  console.log(message);
} else {
  updater = "Less than 0";
}
console.log(updater);
// console.log(message);

//**Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
//it will not work

//ternary i use it for only have 1 condition

let cold = true;
console.log(cold ? "Today is cold" : "No today is not cold");

//if i can add more conditions.
let age = 30;

if (age > 20) {
  console.log("adult");
} else if (age > 12 && age < 20) {
  console.log("teenager");
} else console.log(child);
