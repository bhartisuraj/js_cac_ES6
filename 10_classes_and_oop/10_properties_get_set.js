function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
             get:function(){
                      return this._email.toUpperCase()
             },
             set:function(value){
                      this._email = value
             }
    })
    Object.defineProperty(this, 'password', {
             get:function(){
                      return this._password.toUpperCase()
             },
             set:function(value){
                      this._password = value
             }
    })
}

const raj = new User("s@suraj.ai", "abc");
console.log(raj);

console.log(raj.password); // converted value
console.log(raj._password); // original value

console.log(raj.email); // converted value
console.log(raj._email); // original value