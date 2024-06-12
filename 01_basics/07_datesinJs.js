// Dates
// let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate); // 2023-01-22T18:30:00.000Z
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023 just day and date
// let myCreatedDate = new Date(2023, 0, 23, 5, 3, 45) // 23/1/2023, 5:03:00 am
// let myCreatedDate = new Date("01-14-2023") // 14/1/2023, 12:00:00 am (dd/mm/yy)
// console.log(myCreatedDate.toLocaleString());

// Time Stamps
// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1718206954613 - millisec value from 1st Jan 1970.
// console.log(myCreatedDate.getTime()); // to get current date

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate()); // to get current date
// console.log(newDate.getDay()); // to get current day. Starts with Sunday with zero 0.
// console.log(newDate.getMonth()); // to get current month. Starts with Jan with zero 0.
// console.log(`Current date is ${(newDate.getDate()).toLocaleString()}`);

// newDate.toLocaleDateString('default', {
//     weekday: "long",
//     month:"long"
// })
// console.log(newDate.toString());