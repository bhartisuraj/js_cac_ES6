// array
const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[3]);

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// Array methods
// myArr.push(6) // Adds element to last index.
// myArr.pop(); // Removes last element of array's list. 
// myArr.unshift(9) // Adds element to starting index.
// myArr.shift(); // Removes first element of the array's list.
// console.log(myArr); 
// console.log(myArr.includes(9)); // Tell where the given element present in list or not, gives answer in boolean.
// console.log(myArr.indexOf(3)); // Tell on what index the element is. If not present then it will give -1 as output.

// const newArr = myArr.join(); // Converts arrays datatype to string
// console.log(myArr); 
// console.log(newArr); 

// slice or splice
console.log("Original Array ", myArr);
const myn1 = myArr.slice(1,3)// Slice cut the portion, and dosen't includes last index.
console.log("Slice Arr Array ", myn1);

const myn2 = myArr.splice(1,3) // Splice cuts the portion and manupliate original array, and includes last index.
console.log("Splice Arr Array ", myn2);
console.log("Original Array ", myArr);