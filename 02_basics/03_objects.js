// Singleton - When ever objects are made by constructor.
// Object.create

// Non-Singleton(Object literals) - Whenever objects are defined by literals.

const mySym = Symbol("key1")
const JsUser = {
    name: "suraj",
    "full name": "surajkumar bharti",
    [mySym]: "mykey1",
    age: 22,
    location:"Mumbai",
    email: "suraj@google.com",
    isLoggedIn: true,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser);
// console.log(JsUser.isLoggedIn);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "suraj@chatgpt.com";
// Object.freeze(JsUser) // Freeze data of JsUser
// JsUser.email = "suraj@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());