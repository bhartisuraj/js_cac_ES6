// Javascript is dynamically typed language.

// # Primitive(Call by value)
// String(text) 
// const name = 'Suraj'
// console.log(typeof name);

// Number(integer can be decimal)
// const score = 100;
// const scoreValue = 100.3;
// console.log(typeof score);
// console.log(typeof scoreValue);

// Boolean(true or false) 
// const isLoggedIn = false;
// console.log(typeof isLoggedIn);

// null(empty value but not zero)
// const outsideTemp = null;
// console.log(typeof outsideTemp);

// undedfined(assigned variable name but not value)
// let userEmail;
// console.log(typeof userEmail);

// Symbol(a===Symbol(a) => false )
// let id = 10;
// let id2 = Symbol(10);
// console.log(typeof id2);
// console.log(id == id2);
// console.log(id === id2);

// bigint(long number/sentific values)
// const bigNumber = 3456435999999999999999999999n
// console.log(typeof bigNumber);

// # Non-Primitive(Reference type)
// Arrays 
// const arraysExampleheros = ['shaktiman', 'naagraj', 'doga']
// console.log(typeof arraysExampleheros);

// Objects 
// let objExample = {
//   name:'suraj',
//   age:22
// }
// console.log(typeof objExample);
// console.log(objExample.age);

// Functions
// let functionExample =  function(){
//   console.log("Hello World");
// }
// functionExample();
// console.log(typeof functionExample);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive - changes done in copy), Heap(Non-Primitive - changes done in original copy)

// let myYoutubeName = "surajbhartidotcom"

// let anotherName = myYoutubeName
// console.log(anotherName);

// anotherName = "chai aur code";
// console.log(anotherName);
// console.log(myYoutubeName);

// let userOne = {
//   email: "user@google.com",
//   upi: "user@bol"
// }

// let userTwo = userOne
// console.log(userTwo);

// userTwo.email = "suraj@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);