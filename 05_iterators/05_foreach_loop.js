//Limitations of forEach() Method:
//No Break or Continue: Unlike for loops, you cannot break the forEach() loop or use continue to skip to the next iteration. It will always iterate over all elements.

//No Return Value: The forEach() loop does not return a new array, it returns undefined.

//Asynchronous Issues: The forEach() loop does not handle asynchronous operations well. If you need to perform asynchronous operations, consider using for…of with async/await or Promise.all.

// for each is a heigher order function

// The forEach() method is not executed for empty elements.

// ******** for each loop on array *********
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( function (val){
    // console.log(val);  
})
// o/p-
// js
// ruby
// java
// python
// cpp

// here function(val){} is call back function, callback function have no name and parameter (val) is aaray value


// for each loop through arrow function
coding.forEach( (val) => {
    // console.log(val);
})
// o/p - same as above


// define outer function and write in callback function
function printMe(val){
    // console.log(val);
}
coding.forEach(printMe);    // here printMe is function that's pass in caalback but not given parantheses() it's not execution , so only pass a reference in callback
// o/p- same as above

// pass whole function in callback
coding.forEach(function printMe(val){
    // console.log(val);
})

// to get array item, index, and whole array
coding.forEach( (val, index, arr) => {
    // console.log(val, index, arr);
})

// o/p-
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

// ****** for each loop on objects within array
const myCoding = [
    {
        name : "Jalpa",
        age : 28
    },
    {
        name : "Pooja",
        age : 31
    },
    {
        name : "Drashti",
        age : 26
    },
]

myCoding.forEach( (val) => {
    // console.log(val.name);   // here val is access of every objects iterator
} )
// o/p-
// Jalpa
// Pooja
// Drashti

