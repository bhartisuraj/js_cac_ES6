// const userEmail = "s@suraj.ai"
// // const userEmail = []

// if ("s@suraj.ai") {
//   console.log('Got user email');
// } else {
//   console.log("Don't have user email");
// }

/* falsy values
- false, 0, -0, BigInt ZeroN(0n), "", null, undefined, NaN

truthy values
- true, any number, "0", "false", " ", [], {}, function(){}
- Excluding above keywords/text all are truth values */

// if (userEmail.length === 0){
//   console.log("Array is empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is empty");
// }

// const myObj = {
//   firstname:"suraj",
//   lastname:"bharti",
//   city:"mumbai",
//   country:"India",
//   isLoggedIn : false,
//   id:2222
// }
// console.log(myObj);

// const arrObj = Object.keys(myObj); // Convert Object to Array
// console.log(arrObj);

// Nullish coalescing operator (??) null and undefined
// let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 10 // 10
// val1 = undefined ?? null // null
// val1 = null ?? undefined  // undefined
// val1 = 15 ?? null
// console.log(val1);

// Terniary Operator (condition ? true statement : false statement)
// condition ? true : false
// const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("less than 150") : console.log("less than 120");