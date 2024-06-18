// const userEmail = -1;

// if (userEmail) {
//   console.log("truthy values");
// } else {
//   console.log("falsy values");
// }

/* falsy values - false, 0, -0, BigInt 0n, "empty", null, undefined, NaN*/
/* truthy values - true, 1, [], {}, "text", 'false', " ", function(){}*/

/* To know array is empty or not */
// const userEmail = [];
// if (userEmail.length === 0) {
//   console.log("Array is empty");
// } else {
//   console.log("Array is not empty");
// }

/* To know object is empty or not */
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is empty");
// } else {
//   console.log("Object is not-empty");
// }

// Nullish Coalescing Operator (??) :- The nullish coalescing ( ?? ) operator is a logical operator that returns its left-hand side value and when its left-hand side value is null or undefined, it takes right-hand side value.

// let val1 = 5 ?? 10;
// console.log(val1);

// let val1 = null ?? 10;
// console.log(val1);

// let val1 = 10 ?? null;
// console.log(val1);

// let val1 =  15 ?? undefined;
// console.log(val1);

// Terniary Operator (condition ? true(statement) : false(statement))

// const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

// let val = 5;
// val > 1 ? console.log("yes it is") : console.log("no it is not");