// const user = {
//   username: "suraj",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username}, welcome to website`); // This keyword is use when you are talking about current context
//     // console.log(this); // This keyword is use when you are talking about current context
//   },
// };
// user.welcomeMessage()

// user.username = "sam" // username will be overwrite with value sam for object user.
// user.welcomeMessage()

// console.log(this); // In node this keyword refer to an empty object{}, while in browser its window object.

// function chai(){
//   console.log(this)
// }
// chai()

// function chai(){
//   let username = "suraj" // We can't access this.username in function, we can access it only inside functions inside objects.
//   console.log(this.username);
// }
// chai()

// const chai = function() {
//   let username = "suraj" // We can't access this.username in function, we can access it only inside functions inside objects.
//   console.log(this.username);
// }
// chai()

// const chai = () => {
//   let username = "suraj" // We can't access this.username in function, we can access it only inside functions inside objects.
//   console.log(this.username);
// }
// chai()

// const addTwo1 = (num1, num2) => {  //Explicitly return arrow function, if you write in curly brace then you have to write return statement and when you write paranthesis then you dont have to write return statement in arrow function.
//   return num1 + num2
// }
// console.log(addTwo1(3, 4))

// const addTwo2 = (num1, num2) => (num1 + num2) // implicit return arrow function, if you write in curly brace then you have to write return statement and when you write paranthesis then you dont have to write return statement in arrow function.
// console.log(addTwo2(3, 4))

// const paranthesisObject = () => ({username: "suraj"}) // Here we want to return some value from object, if we write as {username: "suraj"} Then the code was unreachable. Because of that we wrap it in ({username: "suraj"}) curly braces.
// console.log(paranthesisObject())