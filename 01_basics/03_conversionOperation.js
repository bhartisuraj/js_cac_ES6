/* Converting string */
let score = '33abc'
// console.log(typeof score); // To check datatype of variable
// console.log(typeof (score));

let valueInNumber = Number(score); // Converting string datatype to number datatype
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/* Converting null */
let score2 = null
// console.log(typeof score2); // To check datatype of variable
// console.log(typeof (score2));

let valueInNumber2 = Number(score2); // Converting string datatype to number datatype
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);

/* Converting undefined */
let score3 = undefined
// console.log(typeof score3); // To check datatype of variable
// console.log(typeof (score3));

let valueInNumber3 = Number(score3); // Converting string datatype to number datatype
// console.log(typeof valueInNumber3);
// console.log(valueInNumber3);

/* Converting boolean */
let score4 = true
// console.log(typeof score4); // To check datatype of variable
// console.log(typeof (score4));

let valueInNumber4 = Number(score4); // Converting string datatype to number datatype
// console.log(typeof valueInNumber4);
// console.log(valueInNumber4);

// '33' => 33
// '33abc' => NaN
// true => 1 or -1; false => 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof isLoggedIn);
// console.log(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 or -1 => true; 0 => false;
// '' => false;
// "Suraj" => true;

/* ********************* operations********************/

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2); // Addition 2 plus 2 = 4
// console.log(2-2); // Substraction 2 minus 2 = 0
// console.log(2*2); // Multiply 2 intu 2 = 4
// console.log(2**4); // 2 raise to 4 = 16
// console.log(2/2); // 2 divideby 2 = 1(Quotent)
// console.log(2%2); // 2 modulo 2 = 0(Remainder)

let str1 = "Welcome";
let str2 = " suraj";
let str3 = str1 + str2;
// console.log(str3);

// console.log('1' + 2); // String plus Number 12
// console.log(1 + '2'); // Number plus String 12
// console.log('1' + 2 + '3'); // String plus Number plus String 123
// console.log('1' + '2' + 3); // String plus String plus Number 123
// console.log(1 + '2' + '3'); // Number plus String plus String 123
// console.log(1 + 2 + '3'); // Number plus Number plus String 33. Addition of 1st two numbers then kept string
// console.log( 3 + 4 * 5 % 3);
// console.log( (3 + 4) * 5 % 3);

// console.log(true);
// console.log(+true);

let x = 3;
let y = x++;
// console.log('X:' +" "+ x);
// console.log('Y:' +" "+ y);

let a = 4;
let b = ++a;
// console.log('A:' +" "+ a);
// console.log('B:' +" "+ b);