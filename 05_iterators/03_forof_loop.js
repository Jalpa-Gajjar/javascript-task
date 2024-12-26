// array specific loop: for of, for in, for each

//******for in loop on array******
/*
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   console.log(num);    //here doesn't need to increment or condition checking
}
*/

//*********for of loop on string*********
/*
const fullname = "Jalpa Vadgama";
for (const name of fullname) {
    console.log(name);  
}
*/

// ********maps************
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// Only Unique Keys are allowed, if we insert the same key with a different value, it overwrites the previous one.

// You can create a JavaScript Map by:
// 1)Passing an Array to new Map()
// 2)Create a Map and use Map.set()


const map = new Map();
map.set("IN", "India");
map.set("USA", "United Status of America");
map.set("Fr", "France");
// map.set("IN", "India"); // not allowed
// console.log(map);

// o/p -Map(3) {
//     'IN' => 'India',
//     'USA' => 'United Status of America',
//     'Fr' => 'France'
// }   

//***********for of loops on map********
for (const key of map) {
    // console.log(key); 
}

// o/p - [ 'IN', 'India' ]
// [ 'USA', 'United Status of America' ]
// [ 'Fr', 'France' ]  // value in array


// overcome array problem to destructuring array [key, value]
for (const [key, value] of map) {
    // console.log(key, " -", value); 
    // console.log(key);
    // console.log(value);
}
// o/p - 
// IN  - India
// USA  - United Status of America
// Fr  - France

// **********for of loop on object***********
const myObject = {
    game1 : "NFS",
    game2 : "Spiderman"
}
for (const [key, value] of myObject) {
    console.log(key, ":-", value);  
}
// o/p - myObject is not iterable