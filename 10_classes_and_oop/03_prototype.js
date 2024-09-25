// Have to create a method() which shows texts true length excluding spaces
let myName = "suraj     "
// let drink = "chai     "

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
         thor: "hammer",
         spiderman: "sling",

         getSpiderPower: function(){
                  console.log(`Spidy power is ${this.spiderman}`);
         }         
}

Object.prototype.suraj = function(){
         console.log(`suraj is present in all objects`);
}

Array.prototype.heysuraj = function(){
         console.log(`heysuraj is present in just all arrays`);
}

String.prototype.trueLength = function(){
         // console.log("True length of string is " + (myName.trim()).length);
         console.log("True length of string is " + (this.trim()).length);
}

// heroPower.suraj() -> Run -> Bcause Power is given to Object & and all things will travel through object
// myHeros.suraj() -> Run -> Bcause Power is given to Object & and all things will travel through object

// myHeros.heysuraj() //-> Run -> Bcause Power is given to all arrays
// heroPower.heysuraj() //-> Not-Run -> Bcause Power is given to just all arrays

myName.trueLength()

// inheritance

const User = {
         name: "chai",
         email:"chai@google.com"
}

const Teacher = {
         makeVideo:true
}

const TeachingSupport = {
         isAvailable:false
}

const TASupport = {
         makeAssignment:'JS Assignment',
         fullTime: true,
         __proto__: TeachingSupport // older time. To add feature of some another object
}

Teacher.__proto__ = User // latest time. To add feature of some another object