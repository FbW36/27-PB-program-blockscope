//1
let determiner = 2;
let x;
determiner < 0 ? (x = "Less than 0") : (x = "Greater or equal to 0");
console.log("1==>", x);


//2

let updater=""

if(determiner>=0){
    updater="Greater or equal to 0";
    let message = "Positive Integer"
    console.log("message==>",message);
}
else{
    updater="Less than 0"
}
console.log("updater==>", updater);

//If we try to print message outside of the if statement it will return an error, because the variable was only declared inside the if statement
