// const tinderUser = new Object();    // singleton object
// console.log(tinderUser);    // {}

const tinderUser = {}   //non-singleton object
tinderUser.id = "123abc";
tinderUser.name = "Jalpa";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

//objects within object declaration
const regularUser = {
    email : "jalpa@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Jalpa",
            lastname : "Vadgama",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

// object combine
const obj1 = {1 : "a", 2 : "b"};
const obj2 = {2 : "a", 3 : "b"};

// const obj3 = {obj1, obj2};  // get object within object, does not merge in one

// const obj3 = Object.assign(obj1, obj2);     // obj2 assign in obj1 and also merge in one 

// const obj3 = Object.assign({}, obj1, obj2);     // here {} is as a target and  obj1&obj2 is a source, all value return in empty object{}

const obj3 = {...obj1, ...obj2};    // using spread operator to merge object
// console.log(obj3);


// when value is come from database to get a array of object
const users = [
    {
        id : 1,
        email : "jalpa@gmail.com"
    },
    {
        id : 1,
        email : "jalpa@gmail.com"
    },
    {
        id : 1,
        email : "jalpa@gmail.com"
    },
]

// users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));   // we get keys in array format and then use it in loop

console.log(Object.values(tinderUser));     // we get values in array format and then use it in loop

console.log(Object.entries(tinderUser));    // to get array within array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // true 
