// const user = {
//          username : "hitesh",
//          loginCount: 8,
//          signedIn: true,

//          getUserDetails: function(){
//                   console.log("Got user details from database");
//          }
// }
// console.log(user.username);
// console.log(user);
// console.log(user.getUserDetails());

function user (username, loginCount, signedIn) {
    this.username = username,
    this.loginCount = loginCount,
    this.Superman_signedIn = signedIn

    this.greeting = function() {
            console.log(`Welcome ${this.username}`); 
    }

    // return this
}

const userOne = new user("suraj", 8, true)
const userTwo = new user("hitesh", 4, false)
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);