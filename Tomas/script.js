let log = console.log;

/* Depending on the value of a variable (determiner), assign a value to x.
- If determiner is less than 0, x's value should be "Less than 0"
- If determiner is greater or equal 0, x's value should "Greater or equal to 0"
*/
let num = 1;
let x;
if(x < 0) {
    x = 'Less than 0';
    log(x);
}
else {
    x = 'Greater or equal to 0';
    log(x);
}

/* 
Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.

- If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
- If determiner is less than 0, updater's value should be "Less than 0"
*/
let updater;
if(num >= 0) {
    updater = 'Greater and equal to 0';
    let message = 'Positive Integer';
    log(message);
}
else {
    updater = "Less than 0";
    log(updater);
}


// Q: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

// A: terminal gives back an error saying it didn't recognize variable "message". This is because this variable is declared inside of if/else statement

// Q: When do you use a ternary v.s. an if statement? Give an example?

// A: they do both the same: perform action base on result of a given check, condition. ternary should be used for inline, rather simple code, whereas if statement is used for more complex, multiline code