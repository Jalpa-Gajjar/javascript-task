// object declare by two typed:
// 1) literal type, 2) constructor type


// singleton object always made through constuctor
// Object.create

// object literal made a multiple instances

const mySym = Symbol("key1");   // define symbol

const JsUser = {
    name : "Jalpa", 
    [mySym] : "mykey1",
    age : 28,
    location : "Ahmedabad",
    email : "jalpa@google.com",
    isLoggedIn : false,
    lastLogginDays : ["Monday", "Saturday"]
}

// object value access ways
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// here name = "name" is treated as a string by the system understand  bt we have write without qoute

// change in object value
JsUser.email = "jalpa@chatgpt.com"; 

//we can lock value of object through freeze
// Object.freeze(JsUser);
JsUser.email = "jalpa@microsoft.com";   // here not propogate value of email
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");   
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);   
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());