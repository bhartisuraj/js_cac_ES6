const user = {
    username: "suraj",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

/*this using function*/
// function chai(){
//     let username = "suraj"
//     console.log(this.username);
// }
// chai()

/*this using function with value stored in variable*/
// const chai = function() {
//     let username = "suraj"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "suraj"
//     console.log(this.username);
// }
// chai()

/*Basic arrow function*/
// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,4));

/*Implicit return*/
// const addTwo = (num1,num2) => num1 + num2;
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => (num1 + num2);
// console.log(addTwo(3,4));

/* have to take output in object*/
// const addTwo = () => ({username:"suraj"});
// console.log(addTwo());