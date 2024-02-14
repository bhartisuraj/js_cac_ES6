/*Basic function*/
// function sayMyName() {
//   console.log("S");
//   console.log("U");
//   console.log("R");
//   console.log("A");
//   console.log("J");
// }
// sayMyName()

/*Add two numbers*/
// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
// const result = addTwoNumbers(9, 4)
// console.log(result);

/*Add two numbers - return statement*/
// function addTwoNumbers(number1, number2) {
//   // return number1 + number2;
//   let result = number1 + number2;
//   return result;
// }
// const result = addTwoNumbers(9, 4)
// console.log("Result: " , result);

/*LogIn Checker*/
// function loginUserMessage(username) {
//   if(username===undefined){
//     console.log("Please enter user name");
//   }
//   return `${username} just logged in`
// }
// console.log(loginUserMessage("suraj")); 
// console.log(loginUserMessage());

/*CalculateCartPrice*/

function calculateCartPrice(...num1) {
    return num1
  }
  console.log(calculateCartPrice(200, 400, 500))
  
  const user = {
    username:"suraj",
    price:199
  }
  
  function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  }
  
  // handleObject(user)
  handleObject({
    username:"sam",
    price:299
  })
  
  const myNewArray = [200, 400, 100, 600]
  
  // function arrSecVal(){
  //   console.log(myNewArray[1]);
  // }
  // arrSecVal()
  
  function returnSecondValue(getArray){
    return getArray[1]
  }
  console.log(returnSecondValue(myNewArray));