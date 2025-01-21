class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const jalpa = new User("Jalpa")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const mona = new Teacher("iphone", "mona@gmail.com")

mona.logMe(); // print function data
console.log(mona.createId()); // not accessible