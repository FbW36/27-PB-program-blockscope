
// 1-

let determiner = [-5, 8, -3, 0, 7, 11];
let x;

for (let i = 0; i < determiner.length; i++ )
{
    x = 0;
    if (determiner[i] < 0)
    {
        x = determiner[i];
    }
    else
    {
        x = determiner[i]
    }
    
    console.log(determiner[i], x); 
}
// In every iteration x takes a value based on the condition of the determiner array 
/* console.log(determiner, x);  */


// 2- 

determiner = [-5, 8, -3, 0, 7, 11];
let updater;
/* let message; */

for (let i = 0; i < determiner.length; i++ )
{
    /* x = 0; */
    if (determiner[i] >= 0 )
    {
        updater = determiner[i];
        let message = determiner[i];
        console.log('message: ', message, '\n');
    }
    else
    {
        updater = determiner[i];
    }
    /* console.log('message outside if: ', message, '\n'); */
    console.log(determiner[i], updater);
}
/*
Printing the message variable outside the if-statement throws an error ('message is not defined') because it is used outside of the scope in which it is defined
*/

// 3-

/*
- Both if-statement and ternary-operator execute actions some  
  action based on a condition which is either true or false. 
- If if the condition is true, the action directly after the 
  condition is executed otherwise, the execution goes to the next action if any
- The only difference between using either if or ternary is based 
  on the nature of the condition we need to apply. If we are going to use complex conditions then if-statement is the best choice (i.e., for the sake of readability and simplicity) On the other hand if we just have a simple condition, then ternary-operator is the best choice.  Please see examples below
*/

/*
Exampe 1. 
Finding the greater number between two numbers. 
- since the condition is not too complex it is preferable to use 
  the ternary-operator
*/
let n1 = 8;
let n2 = 5;

let theGreatestNo = n1 > n2 ? n1 : n2;
console.log(`The greatest number among ${n1}, ${n2} is ${theGreatestNo}`);

/*
Example 2.
Finding the greatest number within three numbers.
- Since the condition in this example is a bit complex then to 
  make the solution easier using if-statement
*/

let num1 = 5;
let num2 = 3;
let num3 = 7;

if ( (num1 > num2) && (num1 > num3) )
{
    console.log(`the greatest number among ${num1}, ${num2}, ${num3} is ==> ${num1}`);
}
else if (num2 > num3)
{
    console.log(`the greatest number among ${num1}, ${num2}, ${num3} is ==> ${num2}`);
}
else
{
    console.log(`the greatest number among ${num1}, ${num2}, ${num3} is ==> ${num3}`);
}