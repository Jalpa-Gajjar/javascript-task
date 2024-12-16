// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// let myCreateDate = new Date(2024, 0, 23);
// console.log(myCreateDate);
// console.log(myCreateDate.toString());
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2024, 0, 23, 5, 3);

// let myCreateDate = new Date("2024-01-24");  //yyyy-mm-dd

let myCreateDate = new Date("01-24-2024"); //mm-dd-yyyy
// console.log(myCreateDate.toLocaleString());


// Timestamp (Use to create Quiz, poll etc.)
let myTimeStamp = Date.now();
// console.log(myTimeStamp); // in milisecond 1734285521747
// console.log(myCreateDate.getTime());    //1706034600000 milisecond
// console.log(Math.floor(Date.now()/1000));    //1734360087

let newDate = new Date();
console.log(newDate);

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());
console.log(newDate.getTime());
 console.log(newDate.getMonth() + 1);
console.log(newDate.toLocaleString('default', {
    weekday : "long",
    month : "long" 

}));
