// Scope is 3 type
// let - var - const
// syntax : type_of_var var_name = value;
// ex : let name = "Jalpa"

/* Rules : 
var = redeclare and reassign, it's global scope
let = reassign but not redeclare, it's local scope
const = neighter redeclare nor reassign, it's local,functional scope
*/

// let a = 10;
// const b = 20;
// var c = 30;


var c = 300;    // global scope
let a = 300;

if(true){
    let a = 10;
    const b = 20;
    var c = 30; // local scope
    c = 40;
    // console.log("Inner a value :", a);   
}

// console.log(a);  // a not define bcz it's local/ functional scope
// console.log(b);  // b not define bcz it's local/ functional scope
// console.log(c); // 30


// ********** nested function ********

function one(){
    const username = "Jalpa";

    function two(){
        const website = "Youtube";
        console.log(username);  // child always access parent variable bt parent doesn't access
        
    }
    // console.log(website);   // doesn't access out of scope
    two();
}
// one();


if(true){
    const username = "Jalpa";

    if(true){   // true or username === "Jalpa" both r same
        const website = "Youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// *************** Interesting ****************
// normal function
// console.log(addOne(5));     // access value or call function before declaration

function addOne(num){
    return num + 1;
}
// addOne(5);  // here only return value doesn't print, we can solve this to store in variable and then execute or console log to print it's value

// console.log(addOne(5));     // 6 access after declaration


// expression function to hold in variable

// addTwo(5);  // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}
// addTwo(5);  
