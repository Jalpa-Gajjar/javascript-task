// class base syntax of getter and setter
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
     
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
     }

    get password(){
        return `${this._password}jalpa`
    }

    set password(value){
        this._password = value
    }
}

const jalpa = new User("j@jalpa.ai", "abc") // new user() is a construction function

console.log(jalpa.email);