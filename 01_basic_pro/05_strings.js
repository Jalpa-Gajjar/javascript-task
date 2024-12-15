// const name = "jalpa";
// const repoCount = 50;

// console.log(name + repoCount + "value");

// String Intrepolation Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.)
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Type of String Declaration (2 type)
const firstName = "jalpa"; 
const fullName = new String('jalpa Gajjar');    // with the use of object with new keyword and also use String and given a name in string counstructor  

console.log(fullName[0]);   //j
console.log(fullName.__proto__);
//to get an Object {}

// string length
console.log(fullName.length);

// string upperCase()
console.log(fullName.toUpperCase());

// string lowerCase()
console.log(fullName.toLowerCase());

// string charAt()
console.log(fullName.charAt(2));

//string indexOf()
console.log(fullName.indexOf('p'));

// string concate()
let str = "Hello";
console.log(str.concat("World"));

// string includes()
console.log(fullName.includes('jalpa'));
console.log(fullName.includes('vadgama'));

// string match()
console.log(fullName.match('Gajjar'));
console.log(fullName.match('vadgama'));

// string padStart()
let str1 = "Gajjar";
console.log(str1.padStart(12, "*"));

// string padEnd()
let str2 = "Jalpa";
console.log(str2.padEnd(12, "*"));

// string repeat()
console.log(fullName.repeat(2));
console.log(fullName.repeat(0)); //return empty string

// string subString()
console.log(fullName.substring(6,12));
console.log(fullName.substring(-6)); //doesn't allow negative value.. it start with 0 value

// string startWith()
console.log(fullName.startsWith("jalpa"));
console.log(fullName.startsWith("Gajjar"));

// string split()
console.log(fullName.split(" "));

// string slice()
console.log(fullName.slice(0,6));
console.log(fullName.slice(-6));

// string replace()
console.log(fullName.replace("Gajjar", "Vadgama"));

// string replaceAll()

// string trim()
let str3 = "    Jalpa Gajjar    ";
console.log(str3.trim());

