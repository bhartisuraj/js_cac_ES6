// const score = 400;
// console.log(score);
// console.log(typeof score);

// const balance = new Number(400)
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString());
// console.log(typeof (balance.toString()));
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //toFixed(2):- Defines how much value to show after decimal point. 2 Digits

// const totalAmount = 12547833.33333333;
// console.log(totalAmount.toFixed()); //toFixed():- If we didn't define in bracket, it will show integers before decimal.

// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // converts numbers to Indian value format XX,XX,XXX

// ++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // Converts negative value to positive value.
// console.log(Math.round(4.3)); // Round off value 4
// console.log(Math.round(4.6)); // Round off value 5
// console.log(Math.ceil(4.2)); // Round off value 5
// console.log(Math.ceil(4.9)); // Round off value 5
// console.log(Math.floor(4.2)); // Round off value 4
// console.log(Math.floor(4.9)); // Round off value 4
// console.log(Math.max(4, 3, 6, 8)); // max number in given list
// console.log(Math.min(4, 3, 6, 8)); // min number in given list
// console.log(Math.sqrt(25)); // will give square root of given number

// ++++++++++++++++++++++++++++++++++ Maths.random() ++++++++++++++++++++++++++++++++++++++++

// let num = (Math.random()); // to produce random num between 0 to 0.9
// let numMul = (num * 10) // num is multiply 10 so 0.123 will become 1.23
// let numPlus = (numMul + 1) // random number + 1 will give random output plus 1
// console.log(num);
// console.log(numMul);
// console.log(numPlus);

// Logic for random number but for specific range.
// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);