function myName(){
    console.log("J");
    console.log("A");
    console.log("L");
    console.log("P");
    console.log("A");
}

// myName  //  myName is reference
// myName();    // () is execution

// function addTwoNum(num1, num2){
//     console.log(num1 + num2);    
// }
// addTwoNum();    //NaN
// addTwoNum(3, 4);    // 7
// addTwoNum(3, "4");  // 34 tack as a string 
// addTwoNum(3, "a");  // 3a    
// addTwoNum(3, null);     // 3

// const result = addTwoNum(3, 5);
// console.log("result :", result);

function addTwoNum(num1, num2){
    let result = num1 + num2;
    console.log("Jalpa");
    return result;
    // console.log("Jalpa");   // doesn't execute after return statement
}

// function store in variable
// const result = addTwoNum(3, 5); // return value store in variable
// console.log("result :", result); 

function loginUserMessage(username){
    if(username === undefined){
         console.log("Please enter a username");
         return;
     }   // true condition execution part
    
    return `${username} just logged in`
}
// console.log(loginUserMessage("Jalpa"));
// console.log(loginUserMessage());    //undefine


// professional way to write if condition
function loginUserMessage(username){
    if(!username){  //usename ===undefine is false then use ! means true
         console.log("Please enter a username");
         return;
     }   // true condition execution part
    
    return `${username} just logged in`
}
// console.log(loginUserMessage()); 

// above both r same 

function loginUserMessage(username = "Jalpa"){
    if(!username){  // here if part not execute because condition always made false
         console.log("Please enter a username");
         return;
     }   // true condition execution part
    
    return `${username} just logged in`
}
// console.log(loginUserMessage("Pooja")); // overright value


// *********** function parameter ***********
//  we doesn't not known how many parameter to come in function when we made cart and how many items and price to add in the cart 

function calculateCartPrice(num1){
    return num1;
}
// console.log(calculateCartPrice(200, 300, 700));     // here take only one first value 200

// when come more than value overcome above problem to access all value to use (...)rest operator and value come in array of bundle
// when we have pass multiple value in function to use (...)Rest operator
function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 300, 700));  // [200, 300, 700]

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 300, 700, 1200));    //[700, 1200] is bcz 200 in val1 & 300 in val2 and rest is 700 and 1200 in ...num1

// *********** object pass in function **************

const user = {
    username : "Jalpa",
    course : "React"
}
 
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.course}`);

    // console.log(`Username is ${anyobject.username} and price is ${anyobject.courses}`);     // here courses r undefine so check type safety
}

// handleObject(user); // here compulsory pass object

// object pass in function
// another way to pass whole object in function parameter not to make in advance  
handleObject(
    {
        username : "Pooja",
        course : "Java"
    }
)

// Array pass in function
const myNewArray = [200, 500, 600, 400]

function returnSecondValue(getArray){
    return getArray[1]; //here pass only parameter name getArray
}

// here to make array & store in variable then pass in function
// console.log(returnSecondValue(myNewArray)); // 500

// here pass whole array in function both r same
console.log(returnSecondValue([400, 700, 300, 1500]));
