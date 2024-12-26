// *******for in loop on object******

const myObject = {
    js : "javascript",
    CPP : "C++",
    rb : "Ruby",
    swift : "swift by apple"
}

// to get a key 
for (const key in myObject) {
    // console.log(key); 
} 
// o/p -js
// CPP
// rb
// swift 

// to get a value
for (const key in myObject) {
    // console.log(myObject[key]); 
} 
// o/p - javascript
// C++
// Ruby
// swift by apple

// to get a key-value pair
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`); 
}   
// o/p -
// js shortcut is for javascript
// CPP shortcut is for C++
// rb shortcut is for Ruby
// swift shortcut is for swift by apple


// *******for in loop on array ******
// to get a key
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    // console.log(key);    
}
// o/p-
// 0
// 1
// 2
// 3
// 4

//note : here we have for in loop on array then gave a key, bt for of loop on array gave us direct value

// to get a value
for (const key in programming) {
    // console.log(programming[key]);    
}
// o/p- 
// js
// rb
// py
// java
// cpp

// ********* for in loop on map********
const map = new Map();
map.set("IN", "India");
map.set("USA", "United Status of America");
map.set("Fr", "France");
map.set("IN", "India"); 

for (const key in map) {
    // console.log(key);
    
}
// Not iteratable on map 