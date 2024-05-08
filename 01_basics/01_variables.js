const accountId = 144553; // Variables defined using 'const' are not change-able in future.
// accountId = 123;
console.log(accountId)

let accountEmail = "suraj@google.com"; // Variables defined using 'let' are change-able.
accountEmail = "sb@google.com"
console.log(accountEmail);

var accountPassword = "12345"; // Variables defined using 'var' are change-able. But it has some scope(block scope & functional scope) related issue. thats why, we ignore it.
accountPassword = "122333444455555";
console.log(accountPassword);

accountCity = "Kalyan"
accountCity = "Thane"
console.log(accountCity);

let accountState; // Output of this is undefined
console.log(accountState);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // This will give output in table format.