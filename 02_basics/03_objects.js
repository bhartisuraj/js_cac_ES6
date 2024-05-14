// Singleton - Whenever objects are made by constructor.
// Object.create

// Non-Singleton(Object literals) - Whenever objects are defined by literals.

const mySym = Symbol("key1")
const JsUser = {
    // keys:"values"
    name: "suraj",
    "full name": "surajkumar bharti",
    [mySym]: "mykey1",
    age: 22,
    location:"Mumbai",
    email: "suraj@google.com",
    isLoggedIn: true,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser); // To access data of whole object we write object name
// console.log(JsUser.isLoggedIn); // To access data of object we write object name followed by dot and specific keys/value's name.
// console.log(JsUser["full name"]); // To access data of object we write object name followed by specific keys/value's name in square brackets in double quotes.

/* To create symbol and to print symbol value
const mySym = Symbol("key1") // Defining symbol
const JsUser = {
    [mySym]: "mykey1"
}
console.log(JsUser[mySym]); // To print its value*/

// console.log(JsUser[mySym]); 
// console.log(typeof JsUser[mySym]);

// JsUser.email = "suraj@chatgpt.com"; // To change value of email key.
// Object.freeze(JsUser) // Freeze data of JsUser
// JsUser.email = "suraj@microsoft.com";
// console.log(JsUser);

// Adding keys in JsUser using function as variable
JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// Adding key in JsUser
// JsUser.id = 123;
console.log(JsUser);