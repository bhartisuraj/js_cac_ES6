// Immediately Invoked Function Expressions (IIFE)
// IIFE is used because to clear pollution caused by global variable. IIFE functions are functions which are invoked immediately.

// function chai() {
//   console.log(`DB CONNECTED ONE`);
// }
// chai();

// Both way to write IIFE is correct
// Also known as named IIFE
// chai as name so named IIFE
// (function chai(){
//   console.log(`DB CONNECTED`);
// })();

// ************ IIFE using arrow function
// If you write two iife code before 2nd code you have to give ;(semi-colon) explicitly
// function don't have name
// (() => {
//   console.log(`DB CONNECTED TWO`);
// })();

// ************ IIFE using arrow function with variable
// ((variable) => {
//   // Also known as normal IIFE(without name)
//   console.log(`DB CONNECTED ${variable}`);
// })("text");