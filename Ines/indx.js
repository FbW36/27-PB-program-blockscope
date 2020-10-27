//1
let determiner = 2;
console.log("1==>",determiner<0?"Less than 0":"Greater or equal to 0")


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