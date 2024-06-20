// for loop

/*for (starting point; end point(condition); increment/decrement ){
  console.log("Your message")
}*/

// for (let num = 0; num <= 5; num++) { //Starting point num = 0; Run till num is less than or equal to zero; increment/decrement num after each loop
//   console.log(num); 
// } 

/* Program will run and alert us when that element is detected */
// for (let i = 0; i < 10; i++) {
//   if(i == 5){
//   console.log("5 is best number");
//   }
//   console.log(i);
// }

/* Nested Loop*/
// for (let i = 1; i <= 5; i++) {
//   console.log(`Outer loop value: ${i}`)
//   for (let j = 1; j <= 5; j++) {
//     // console.log(`Outer loop value: ${j} and inner loop ${i}`)
//     console.log(`${i} * ${j} = ` + i*j);
//   }
// }

/*For loop in arrays*/
// let myArray = ["flash", "batman", "superman"];

// for (let i = 0; i < myArray.length; i++) {
//   const arr = myArray[i];
//   console.log(arr);
// }

// break:- To stop/break loop at given(defined) value.
// for(let index = 1; index <= 10; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`Value of index is ${index}`);
// }

// continue:- After detected given(element) program will skip that one loop.
// for(let index = 1; index <= 10; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     continue;
//   }
//   console.log(`Value of i is ${index}`);
// }