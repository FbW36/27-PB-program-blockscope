//1. Updater
let determiner  = 5;
let x;
determiner < 0 ? x="Less than 0" : "Greater or equal to 0"

//2. New Variables
let updater;
if(determiner >= 0){
updater = "Greater or equal to 0"
let message = "Positive integer"
console.log(message);
} else {
    updater = "Less than 0";
}
/* ANSWER: We would get an error because message it is no defined outside of the if statement scope */

//3. Ternary v.s. If statement
 //I would use a ternary to assign variables or execute ONE action based on a condition Example ternary
 let hungry = true;
 hungry ? console.log("Eat something") : console.log("You don'T need to eat");

 //I would use if statements to executes several actions based on a condition, or to handle several conditions.
let temperature = 55;

if(temperature > 75) console.log("Use sunglasses and cream");
else if (temperature > 50) console.log("Use sunglasses");
else console.log("You don't need sunglasses or cream");


