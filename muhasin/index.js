/* for (let x = 0; x <= 0; x++) {
    console.log(x)
    console.log("x <=0 ==>", x <= 0); // true 
    console.log("x <0 ==>", x < 0); // false
} */

// 1. 
let determiner = 3;
console.log(determiner < 0 ? "Less than 0" : "Greater or equal to 0"); // Greater or equal to 0

// 2. 
let updater = "2"
if (determiner >= 0) {
    updater = "Greater or equal to 0";
    let message = "Positive Integer"
    console.log("message ==>", message);

} else {
    updater = "Less than 0"
}
console.log("updater ==>", updater);
// console.log("message ==>", message); // Error msg 

// Ternary v.s. If statement 

// One reason to use if/ else statements instead of the ternary operators is when you would like to have more than two outcomes such as when you are writing an else if within your if/ else statement.
// Anything that can fit in a single line of code is a great time to use the ternary operator because it's much more compact and easy to read. Ternary operators are also great for when you want to set a value to a given variable.

// Example
const lightColor = "green";
if (lightColor === "green") {
    console.log("Go");

} else if (lightColor === "yellow") {
    console.log("Slow down");

} else if (lightColor === "red") {
    console.log("Stop")
} else {
    console.log("The traffic light is broken");

}