// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("12-25-2023")
// console.log(myCreatedDate.toLocaleString());

// Time Stamps
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

newDate.toLocaleDateString('default', {
    weekday: "long",
    month:"long"
})
console.log(newDate.toString());