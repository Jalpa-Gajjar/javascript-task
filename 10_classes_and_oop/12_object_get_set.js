const User = {
    _email: 'j@jv.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const jalpa = Object.create(User) // Object.create() is factory function
console.log(jalpa.email);