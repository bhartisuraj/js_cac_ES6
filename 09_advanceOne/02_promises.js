// Storing in variable promiseOne:-
// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an async task
//   // DB calls, cryptography, network
//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve(); // To connect 1st part with and 2nd part
//   }, 5000);
// });
// // 2nd part
// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// Without Storing in variable promiseTwo:-
// new Promise(function (resolve, reject){
//   setTimeout(function() {
//     console.log('Async task2');
//     resolve()
//   }, 5000);
// }).then(function(){
//   console.log("Async task2 resolved");
// })

// Storing in variable promiseThree and passing data in resolve({data}):-
// const promiseThree = new Promise(function(resolve, reject){
//   setTimeout(function(){
//          //   resolve(["Chai", "chai@example.com"])
//     resolve({username : "Chai", email: "chai@example.com"})
//   },1000)
// })
// promiseThree.then(function(dataOritcanbe_Superman){
//   console.log(dataOritcanbe_Superman);
//   console.log(dataOritcanbe_Superman.email);
// })

// Storing in variable promiseFour, passing data in resolve({data}) and then taking one data.
// const promiseFour = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let error = true
//      if (!error){
//       resolve({username:"hitesh", password: "123"})
//      } else {
//       reject('ERROR: Something went wrong')
//      }
//   }, 1000)
// })
// promiseFour.then((data)=> {
//   console.log(data);
//   return data.username
// }).then((myUsername)=> {
//   console.log(myUsername);
// })
// .catch(function(errorMsg) {
//   console.log(errorMsg);
// })

// const promiseFiveFinallyStatement = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let error = false
//      if (!error){
//       resolve({username1:"hitesh", password1: "123", username2: "Suraj", password2: "123"})
//      } else {
//       reject('ERROR: Something went wrong')
//      }
//   }, 1000)
// })
// .then((user)=> {
//   console.log(user);
//   return user.username2
// }).then((username2)=> {
//   console.log(username2);
// }).catch(function(errorMsg) {
//   console.log(errorMsg);
// }).finally(() => console.log("The promise is either resolved or rejected")) // Like default statement

// const promiseFive = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     let error = false
//     if (!error) {
//       resolve({username:"javascript", password: "123"})
//     } else {
//       reject('Error: JS went wrong')
//     }
//   }, 5000)
// })

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

// fetch using tryCatch
// async function getAllUsers(){
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers()

// fetch using .then.Catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response) {
  return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error))