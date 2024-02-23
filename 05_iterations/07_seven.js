const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newNumber = []
//  myNumbers.forEach(element => {
//     newNumber.push(element + 10);
// });
// console.log(newNumber);

// let newNumber = myNumbers.map((element )=>
//     // console.log(element + 10);
// )
// console.log(newNumber);

// console.log(newNumber.filter((num)=>num>15));

/*Method Chaning */
let newNums = myNumbers
                .map((num)=>(num * 10))
                .filter((num)=>num>15);

console.log(newNums);