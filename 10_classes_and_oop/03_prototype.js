// let myName = "Jalpa     "
// let mychannel = "Javascript     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.jalpa = function(){
    console.log(`jalpa is present in all objects`);
}

Array.prototype.heyJalpa = function(){
    console.log(`Jalpa says hello`);
}

// heroPower.jalpa()
// myHeros.jalpa()
// myHeros.heyJalpa()
// heroPower.heyJalpa()

// inheritance

const User = {
    name: "jalpa",
    email: "jalpa@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//******* modern syntax *******
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "MERNStack     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"jalpa".trueLength()
"iceTea".trueLength()