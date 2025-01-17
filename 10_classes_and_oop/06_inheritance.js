class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("sakshi", "sakshi@teacher.com", "123")
teacher1.logMe()

const teacher2 = new User("Nidhi")

teacher2.logMe()

// console.log(chai === masalaChai); // false
// console.log(teacher1 === Teacher);   // false

// console.log(teacher1 instanceof teacher);   //true
console.log(teacher1 instanceof User);  // true