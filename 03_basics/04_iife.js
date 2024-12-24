// Immediately Invoked Function Expressionas (IIFE)
// IIFE in two part 1)function with some code, 2) IIFE
// Below code automatically execute doesn't need to call again
// so IIFE use to unnecessary global variable or declaration pollution in function

// There r two type of IIFE :1)named 2) unnamed

//jalpa() is named IIFE
(function jalpa(){
    console.log(`DB CONNECTED`);  
})();       // DB CONNECTED

// Unnamed IIFE
(() => {
    console.log(`SECOND DB CONNECTED`);
})();       // SECOND DB CONNECTED

((name) => {
    console.log(`SECOND DB CONNECTED ${name}`);
})("Jalpa");    // SECOND DB CONNECTED Jalpa

// if we write two IIFE in one file must use semicolan(;) completed first then run second IIFE 