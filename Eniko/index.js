// 1.Updater
// Depending on the value of a variable (determiner), assign a value to x.
// If determiner is less than 0, x's value should be "Less than 0"
// If determiner is greater or equal 0, x's value should "Greater or equal to 0".
let var1 = 7;
let x
if (var1 < 0) {
    x = "less than zero";
} else {
    x = "it is more than zero";
    console.log(var1);
}


// 2. New Variables
// Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.
// If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
// If determiner is less than 0, updater's value should be "Less than 0".
// Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

let y;
let updater = 42;
if (updater >= 0) {
    y = "greater or equal to 0";
    let message = "Positive Integar";
    console.log(message);
} else {
    y = "Less than 0s";
    console.log(y);
}
// we get an error if we try to consol log it outside of the statment console.log(message);

// 3. Ternary v.s. If statement
// When do you use a ternary v.s. an if statement? Give an example.

//If statment is more simple, mostly used for true false, ternary should be used for more complex rules or if we have more arugments, for example different message to different age groups of people
