// if statement

// operator - //>, <, >=, <=,!=, ==, !==, ===
const isUserLoggedIn = true;
const temperature = 41;

// if( temperature === 41 ){
//    console.log("temperature is less than 50");  
// }else {
//     console.log("temperature is greater than 50");  
// }

// const score = 200;
// if (score > 100){
//     const power = "fly";
//     console.log(`user power : ${power}`); 
// }
// console.log(`user power : ${power}`);   // scope problem,it's a functional scope,so variable is const 

//shorthand notation
// const balance = 1000;

// if(balance > 500) console.log("test");  // it's called imlicit scope, it's write in one line

// if(balance > 500) console.log("test"),
// console.log("test2");   // if we have write implicit code in second line must write another statement by comma(,), bt it's not readable so not use in our code


// nested if
// if (balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }

// Logical operator - &&, ||

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("allow to buy a course");   
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in"); 
}

// Nullish Coalescing Operator (??) 
// These depends on only two keyword : null and undefine
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It’s commonly used to provide default values for variables.

let val1;
// val1 = 5 ?? 10;     // 5
// val1 = null ?? 10;      //  10
// val1 = undefined ?? 10;     // 10
// val1 = null ?? 10 ?? 15;    // 10 first value print
val1 = 15 ?? null;  // 15

// console.log(val1);

//Ternary operator (? :)
/*
const CoursePrice = 10000;

CoursePrice <= 5000 ? console.log("Purchase course") : console.log("Not purchase");
*/

