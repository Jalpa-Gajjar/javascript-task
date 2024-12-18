// Array's define by two type

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[1]);  //1

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2); // [1, 2, 3, 4]

// Array method

//value added at last index
myArr.push(6);
// console.log(myArr);  // [0, 1, 2, 3, 4, 5, 6]

// last index value remove
myArr.pop();    // [0, 1, 2, 3, 4, 5]
// console.log(myArr);

// value added at first index
myArr.unshift(8);   // [8, 0, 1, 2, 3, 4, 5]
// console.log(myArr);

// first index value remove
myArr.shift();  // [0, 1, 2, 3, 4, 5]
// console.log(myArr);

// console.log(myArr.includes(8)); //false
// console.log(myArr.includes(4)); //true

// console.log(myArr.indexOf(8));  //-1
// console.log(myArr.indexOf(3));  //2

const newArr = myArr.join();
// console.log(myArr);     // [0, 1, 2, 3, 4, 5]
// console.log(newArr);    // value binded and convert in string (0,1,2,3,4,5)
// console.log(typeof newArr); // string

// slice, splice
// console.log("A", myArr);

const myn1 = myArr.slice(1,3);  // last index not included
// console.log(myn1);  // [1, 2]
// console.log("B", myArr);

const myn2 = myArr.splice(1,3); // last index included
// console.log(myn2);  // [1, 2, 3]
// console.log("C", myArr); // [0, 4, 5] after splice operation change in original array


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);
// console.log(marvel_heros);  // does't merge bt get an array within array
// console.log(marvel_heros[3][1]); // flash

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]    // use sprade operator to merge two array
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);    //  to merge all sub array value in one through flat method
// console.log(real_another_array);


// console.log(Array.isArray("Jalpa"));    // false (it's a string)

// console.log(Array.from("Jalpa"));   // from() method convert a string to array [ 'J', 'a', 'l', 'p', 'a' ]

// console.log(Array.from({name : "Jalpa"})); // return an empty array, here not decided which array will made key or value 

// multiple array and variables convert in single array
let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.from(score1, score2, score3));
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]