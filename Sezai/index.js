//1.

let determiner = -1;
let x =333;


if (determiner < 0){
    x= "Less than 0"
    console.log("x ", x);
}
else {
    x= "Greater or equal to 0"
    console.log("x ", x);
}


//2.
let updater = 666;
if (determiner >= 0){
    updater= "Greater or equal to 0"
    let message = "Positive Integer"
    console.log("message ", message);
}
else {
    updater= "Less than 0";
    console.log("message ", updater);
}

//Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
//Answer: "message is not defined" when you just copy the console.log.
//when you copy let messag and console.log it returns positive integer


//3. 
/**
 * One reason to use if / else statements instead of the ternary operators is when you would like to have more than two outcomes such as when you are writing an else if within your if /else statement. If you find yourself needing to check more than one condition, the if / else statement with else if inside of it is more than likely the way to go.

One great time to use the ternary operator instead of the if / else statement is whenever you would otherwise use a simple if / else statement. Anything that can fit in a single line of code is a great time to use the ternary operator because it’s much more compact and easy to read. Ternary operators are also great for when you want to set a value to a given variable.
 */