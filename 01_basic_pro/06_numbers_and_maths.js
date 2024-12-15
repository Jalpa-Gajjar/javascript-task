const score = 500; //without specify Number 
// console.log(score);

const balance = new Number(200); //specified a Number with new keyword
// console.log(balance);

// console.log(balance.toString()); //to make a string

// console.log(balance.toString().length);  //now we can access string property also

// console.log(balance.toFixed(2)); // precision value

const otherNumber = 12.8966;
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(1));

const num = 1000000;
// console.log(num.toLocaleString());
// console.log(num.toLocaleString('en-IN'));


// ************* Maths **************
console.log(Math); // object

console.log(Math.abs(-4)); //absolute value (to change a -value to +value)

console.log(Math.round(5.7));
console.log(Math.ceil(5.2)); //big value
console.log(Math.floor(5.7)); //small value
console.log(Math.sqrt(144));
console.log(Math.min(4, 1, 7, 9));
console.log(Math.max(4, 1, 7, 9));

console.log(Math.random());
//change everytime when refresh and get value between (0-1)
// console.log(Math.random()*10); 

console.log((Math.random()*10) + 1); //+1 means to get a value above 1 not 0
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.random() * (max - min + 1)); // some time get a value in 0 to avoid this to add min no in above syntax

console.log(Math.random() * (max - min + 1) + min);

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //finally we can get a number above 10