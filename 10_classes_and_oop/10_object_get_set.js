const User = {
    _email: 's@sb.ai',
    _password: 'abc',

    get email(){
             return this._email.toUpperCase()
    },

    set email(value){
             this._email = value
    },

    get password(){
             return this._password.toUpperCase()
    },

    set password(value){
             this._password = value
    }
}


const raj = Object.create(User);
console.log(raj);

console.log(raj.email); // converted value
console.log(raj._email); // original value

console.log(raj.password); // converted value
console.log(raj._password); // original value