// let a = 10;
// const b = 20;
// var c = 30;

// let a = 100;
// const b = 200;
// var c = 300;

// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
//     console.log("Inner " + a);
//     console.log("Inner " + b);
//     console.log("Inner " + c);
// }
// console.log("Outer " + a);
// console.log("Outer " + b);
// console.log("Outer " + c);

// function one(){
//     const username = "suraj"
//     function two(){
//         const website = "youtube";
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()

// if (true) {
//     const username = "suraj"
//     if (username === "suraj") {
//         const website = " youtube"
//         // console.log("My name is " + username + " and my site is" + website);
//     }
//     // console.log(website);
// }
// // console.log(username);

/*******************************Interesting concept******************************* */
console.log(addone(5))
function addone(num){
    return num + 1;
}
console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}