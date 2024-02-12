// array
const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]);

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// Array methods

myArr.push(6) // Adds element to last index.
myArr.pop(); // Removes last element of array's list. 
myArr.unshift(9) // Adds element to starting index.
myArr.shift(); // Removes first element of the arr list.
// console.log(myArr); 
// console.log(myArr.includes(9)); //Tell where the given element present in list or not gives ans in boolean.

const newArr = myArr.join(); // Converts arrays datatype to string
// console.log(myArr); 
// console.log(newArr); 

// slice or splice

console.log("Original Array ", myArr);
const myn1 = myArr.slice(1,3)// Slice cut the portion
console.log("Slice Arr Array ", myn1);

const myn2 = myArr.splice(1,3) // Splice cuts the portion and manupliate original array
console.log("Splice Arr Array ", myn2);
console.log("Original Array ", myArr);