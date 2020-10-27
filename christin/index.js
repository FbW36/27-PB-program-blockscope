//1.. Updater
/*Depending on the value of a variable (determiner), assign a value to x.
If determiner is less than 0, x's value should be "Less than 0"
If determiner is greater or equal 0, x's value should "Greater or equal to 0".*/

let x;
let num1 = -6;

if (num1 < 0) {
  x = "less than 0";
  console.log(x);
} else {
  x = "Greater or equal to 0";
  console.log(x);
}

//2. New Variables
/**Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.

If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
If determiner is less than 0, updater's value should be "Less than 0". */

let var1 = 6;
let updater;

if (var1 >= 0) {
  updater = "Greater or equal to 0";
  let message = "Positive Integer";
  console.log(message);
} else {
  updater = "Less than 0";
}

//? Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
// Itś not printing, an error message appears. The variable is defined in the if-statement, so Message is not declared outside this statement.

//? 3. 3. Ternary v.s. If statement
//When do you use a ternary v.s.an if statement ? Give an example.

// Ternary operator
//Short if , else statement, can be used to check value of a variable or sth else to  give true false back. USe for short check ups (Use ternary operators to set a value to a variable, or to reduce code if necessary.)

//Example:

// Check x

let y1 = x === 42 ? true : false;

// in if Statement

let y2;

if (x == 42) {
  y2 = true;
} else {
  y2 = false;
}

//if statement
/* If you want to have more than two outcomes, such as an else if statement you use the if statement. Also for functions, nested and in multiple operations.
Its more readable in functions and compexer code and can be debugged better*/
