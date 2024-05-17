// Singleton:-
// const tinderUser = new Object() // Singleton Object
const tinderUser = {} // Object Literals
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// console.log(Object.keys(tinderUser).length);

// Object inside object
const regularUser = {
    email: "some@gmail.com",
    fullname:{
      userfullname:{
        "first name":"suraj",
        lastname:"bharti"
      }  
    }
}

// To access its value
// console.log(regularUser.fullname.userfullname["first name"]);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
// const returnedTarget = Object.assign(target, source);

// const obj4 = {obj1, obj2, obj3};
// console.log(obj4);

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id:1,
        userName:"suraj",
        email:"suraj@123.com"
    },
    {
        id:2,
        userName:"rohit",
        email:"rohit@123.com"
    }
]

// console.log(users[1].userName);
// console.log(Object.keys(tinderUser)); // Converts all keys to array
// console.log((Object.keys(tinderUser)).length);
// console.log(Object.entries(tinderUser)) // Converts all  combination of keys, values to array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // ask is there any value of name 'isLoggedIn'

//****************************Destructure***********************/

const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor: "suraj"
}

console.log(course);
console.log(course.courseInstructor);

// const {courseInstructor:instructor} = course // changed name from courseInstructor to instructor
// const {courseInstructor} = course
// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name":"suraj",
//     "coursename": "js in hindi",
//     "price": "free",
// }

[
    {},
    {},
    {}
]