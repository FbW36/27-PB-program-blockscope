// 1--------- Updater ---------------

let determiner = 0;
let x;

if (determiner < 0) {
    x = "less than 0";
    console.log(x);
} else if (determiner >= 0) {
    x = "Greater or equal to 0";
    console.log(x);
}


// 2----------New Variables--------------

let updater;

if (determiner >= 0) {
    updater = "Greater or equal to 0";
    let message = "Positive Integer";
    console.log(message);
} else if (determiner < 0) {
    updater = "Less than 0";
    console.log(updater);
}

//! If we try to print message outside of the if statement we will get an error of variable is undefined because it was only declared in the local scope of the if statement!

// 3------------Ternary v.s. If statement----------------

/** You want to use a Ternary for simple applications of this or that but if it comes to a point where you need multiple choices -- a very complex example would be the dialogue system of a roleplaying game where you have depending on each answer yet another array of several different answers -- for these cases it is adviced to use if statements instead! */
