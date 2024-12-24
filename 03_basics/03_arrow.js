// this keyword : to given information or refer to current context(value)

const user = {
    username : "Jalpa",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.    username} , welcome to website`);   // this refer current context
        // console.log(this);   // refer current context
        
    }
}
// user.welcomeMessage();  // Jalpa , welcome to website
user.username = "Pooja";
// user.welcomeMessage();   //Pooja , welcome to website

// console.log(this);  // empty {} in the node environment to refer empty object, here no context in global 

/*note : when we execute code in the browser to get window object 
ex - console.log(this) print in console then output - window {} object
*/

/*
function jalpa(){
    let username = "Pooja";
    // console.log(this);  
    // console.log(this.username); // undefine, here doesn't work in function only work in object 
}*/
// jalpa(); // undefined

/*
const jalpa = function(){
    let usename = "Jalpa";
    console.log(this.username);   
}
jalpa();    //undefined
*/

// function declaration through arrow function
/*
const jalpa = () => {
    let usename = "Jalpa";
    console.log(this.username);   
}
jalpa();    // undefine
*/

/*
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4));  // 7
*/


// implicit return  means doesn't mension return keyword
// const addTwo = (num1, num2) =>  num1 + num2;     // without return keyword, code in one line
// console.log(addTwo(3, 4));

// another way to write implicit return
// const addTwo = (num1, num2) =>  (num1 + num2);  //  write code in ()
// console.log(addTwo(3, 4));  

// note : if we write a code in curly braces{} then must use return keyword it's called explicit function, 

// note : if we write a code in parantheses() then doesn't use return keyword, it's called implicit function

// if we have return object then must use implicit () or wrap in ()
const addTwo = (num1, num2) =>  ({username : "Jalpa"});
console.log(addTwo());  // {username : "Jalpa"} object return
