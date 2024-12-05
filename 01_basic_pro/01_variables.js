// var - redeclare & reassign, It's global scope
// let - reassign but not redeclare, Il have local scope 
// const - neighter redeclare nor reassign, It have local and functional scope 

const accountId = 14243331;
let accountEmail = "jalpa@gmail.com";
var accountPassword = "12345";
accountCity = "ahmedabad";

// accountId = 2; // not allowed

accountEmail = "abc@ab.com";
accountPassword = "123456789";
accountCity = "baroda";

console.log(accountId); //14243331
console.table([accountId, accountEmail, accountPassword, accountCity]);
