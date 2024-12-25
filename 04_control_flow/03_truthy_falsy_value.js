// falsy value :- false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy value :- true, "0", "false", " ", [], {}, function(){} (empty funcion) 

/*
const userEmail = "j@gmail.com";

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Don't have user Email");
}
*/

// Empty array checking
/*
const userEmail = [];
if(userEmail.length === 0){
    console.log("Array is empty");
}
*/

// Empty object checking
/*
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {   // here we have write Object.keys(emptyObj) to get array[] then after we have use length property on array
    console.log("Object is Empty");     
}
*/

/* note :- we have compare value on console (euality comparision)
false == 0  // true
false == ""  // true
0 == ""  // true
*/