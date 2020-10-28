// 1
let determiner1 = 50;
if (determiner1 < 0) {
  let x = "Value is Less than 0 =";
  console.log(x, determiner1);
} else {
  let x = "Value is greater or equal to 0 =";
  console.log(x, determiner1);
}

// 2
let determiner2 = -30;
let message;
if (determiner2 >= 0) {
  updater = "Greater or equal to 0";
  let message = "Positive Integer";
  console.log(`${determiner2} is ${updater}`);
} else {
  updater = "Less than 0";
}
/* as the console.log is inside the condition
of positive integer, if the determiner is negative
it will not be printed */

// 3
// we use ternary operator for simpler actions with
// only one condition, and would use IF when there are
// several conditions to be addressed
