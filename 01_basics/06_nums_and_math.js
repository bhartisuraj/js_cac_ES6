const score = 400;
// console.log(score);
// console.log(typeof score);

const balance = new Number(400)
// console.log(balance);
// console.log(typeof balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const totalAmount = 12547833.33333333;
// console.log(totalAmount.toFixed()); //toFixed():- Defines how much value to show after decimal.

// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-In')); // converts numbers to Indian value format 10,00,000

// ++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3)); //Round off value 4
// console.log(Math.round(4.6)); //Round off value 5
// console.log(Math.ceil(4.2)); //Round off value 5
// console.log(Math.ceil(4.9)); //Round off value 5
// console.log(Math.floor(4.2)); //Round off value 4
// console.log(Math.floor(4.9)); //Round off value 4
// console.log(Math.max(4, 3, 6, 8)); // max number in given list
// console.log(Math.min(4, 3, 6, 8)); // min number in given list

// ++++++++++++++++++++++++++++++++++ Maths.random() ++++++++++++++++++++++++++++++++++++++++

let num = (Math.random()); // to produce random num between 0 and 0.9
let numMul = (num * 10) // random number multiply 10 so 0.123 will become 1.23
let numPlus = (numMul + 1) // random number + 1 will be random output plus 1
console.log(num);
console.log(numMul);
console.log(numPlus);

// Logic for random number but from defined range.
const min = 10;
const max = 20;
console.log((Math.random() * (max - min + 1)) + min);