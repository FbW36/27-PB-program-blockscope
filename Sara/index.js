// 1 - Depending on the value of a variable (determiner), assign a value to `x`. 
//- If determiner is less than 0, `x`'s value should be "Less than 0"
//- If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".
let determiner = 10 ;
let x ;

if(determiner < 0){
    x = 'less than 0' ;
}else if(determiner >= 0){
    x = 'Greater or equal to 0' ;
    console.log('1 ==>', x);
} // ==> Greater or equal to 0

//💕 💕 💕 💕 💕 💕 💕 💕 💕 💕 💕

//2.Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.

//- If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
//- If determiner is less than 0, `updater`'s value should be "Less than 0" 
let determiner2 = 1 ; 
let updater; 
if(determiner2 >= 0){
    updater = 'Greater or equal to 0' ;
    let message = 'Positive Integer';
    console.log('2 ==>', message) ;
}else if(determiner2 < 0){
    updaterValue = 'Less than 0' ; 
} 
console.log('2 ==>', updater) ;
// Greater or equal to 0

// What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
// ===> ReferenceError: message is not defined

// When do you use a ternary v.s. an if statement? Give an example.
// ===> Use ternary operators to set a value to a variable ==>
let age = 18 ;
let ternaryOperator = age >= 18 ? "allowed" : "not allowed" ;
console.log("ternaryOperator ==>", ternaryOperator) ; //
//, or to reduce code if necessary. Use if-else statements for everything else.





