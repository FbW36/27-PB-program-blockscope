// #### 1. Updater
// * Depending on the value of a variable (determiner), assign a value to `x`. 
//     - If determiner is less than 0, `x`'s value should be "Less than 0"
//     - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".
let det = -10;
let x;
console.log(det < 0 ? "x = less than 0" : "Greater or equal to 0");

// #### 2. New Variables 
// * Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
//     - If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
//     - If determiner is less than 0, `updater`'s value should be "Less than 0".
let updater;
if (det >= 0) {
    updater = "Greater or equal to 0"
    let message = "Positive Integer";
    console.log(message);
}
else {
    console.log(updater = "Less than 0")
}

// * **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
// We get error.

// #### 3. Ternary v.s. If statement 
// * When do you use a ternary v.s. an if statement? Give an example.
//I would use a ternary to assign variables or execute ONE action based on a condition Example ternary
 let hungry = true;
 hungry ? console.log("Eat something") : console.log("You don'T need to eat");

 //I would use if statements to executes several actions based on a condition, or to handle several conditions.
let temperature = 55;

if(temperature > 75) console.log("Use sunglasses and cream");
else if (temperature > 50) console.log("Use sunglasses");
else console.log("You don't need sunglasses or cream");