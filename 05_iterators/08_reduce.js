// ********** reduce ()************
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// },0 )   // accumulator first time store 0 value, which pass after scope ({},0) , if we pass ({}, 5) then acc value is 5

// reduce() in arrow function
const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

// console.log(myTotal);   // 6
// o/p - acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6

// Ex - to find price total in cart
const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "python Course",
        price : 999
    },
    {
        itemName : "mobile dev Course",
        price : 5999
    },
    {
        itemName : "data science Course",
        price : 12999
    },
]

// const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0 )

const priceToPay = shoppingCart.reduce( (acc,item) => {return acc + item.price}, 0 )
console.log(priceToPay);    //22996
