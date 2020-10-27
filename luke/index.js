// * Depending on the value of a variable(determiner), assign a value to`x`.

// - If determiner is less than 0, `x`'s value should be "Less than 0"

// - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".

let determiner = 3;
if (determiner < 0) {
  console.log(`${determiner}'s Less then 0`);
} else {
  console.log(`${determiner}'s Greater or equal to 0`);
}

// * Depending on the value of the determiner, assign a value to another variable(`updater`) and create another variable.

// - If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message.

// - If determiner is less than 0, `updater`'s value should be "Less than 0".
let updater = -25;
if (determiner >= 0 && updater < 0) {
  updater = Math.abs(updater);
  let message = "Positive Integer";
  console.log(message);
} else if (determiner < 0 && updater >= 0) {
  updater = updater * -1;
  console.log(determiner, updater);
} else if (determiner >= 0 && updater >= 0) {
  let message = "Positive Integer";
  console.log(message);
} else {
  console.log(determiner, updater);
}

// * ** Question **: What would happen if we tried to print "message" outside of the if statement ? Comment your answer in the js file.

// the message 'positive intiger' wont print because its not defined outside the if statement; there would be an error

// #### 3. Ternary v.s.If statement
// * When do you use a ternary v.s.an if statement ? Give an example.

// I would use ternary statements on simple things, just two conditions like a true or false statement, however if statements allows you to be a lot more complicated while be very clear on whats happening in the code.

// ternary
// isItHuman = true;
// console.log(isItHuman === true ? "hello Human": "hello alein");

// if statement
// isItHuman = 'Maybe' // its not just 2 things to consider
/* if(isItHuman === true){
    console.log('hello human');
} else if (isItHuman === false){
    console.log('hello alien)
} else {
    console.log('just decide already')
}

that how i would do it
*/
