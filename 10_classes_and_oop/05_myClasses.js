// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const fullName = new User("jalpa", "jalpa@gmail.com", "123")

console.log(fullName.encryptPassword());
console.log(fullName.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const business = new User("Nitya", "nitya@gmail.com", "123")

console.log(business.encryptPassword());
console.log(business.changeUsername());