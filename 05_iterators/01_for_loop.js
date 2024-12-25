// for loop
// loop always running on array

for (let i = 0; i <= 10; i++) {
    const element = i;
    
    if (element == 5) {
        // console.log(`${element} is the best number`);    
    }
    // console.log(element);
}
// console.log(element);   // element is not defined bcz this is out of scope

/*
for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop value ${i}`);

        console.log(`${i} * ${j} = ${i * j}`);      
    }
}
*/

// for loop on array
/*
let myArray = ["flash", "batsman", "superman"];
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}
*/

// break and continue
/*
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5`);
        break;  // doesn't execute after break
    }
    console.log(`value of i is ${i}`);    
}
*/
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5`);
        continue;  // skip only this value one time
    }
    console.log(`value of i is ${i}`);    
}