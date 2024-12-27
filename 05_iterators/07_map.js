//********* map ***************
// map is automatically return a value
 
// map on array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map( (num) => num + 10);

// const newNums = myNums.map( (num) => {return num + 10});

// const newNums = [];

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);   
// o/p-[
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

// *********** chaining ***********
// two or more method use perallel

const newNums = myNums.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num > 45)
console.log(newNums);   //[ 51, 61, 71, 81, 91, 101 ]

// above chaining -
// first .map() return add 10 value [10, 20, 30, 40, 50,60, 70, 80, 90, 100]
// second .map() perform on previous .map method and add 1 value on above value [11, 21, 31, 41, 51,61, 71, 81, 91, 101]
// third .filter() perform on previous two method value and return[ 51, 61, 71, 81, 91, 101 ]