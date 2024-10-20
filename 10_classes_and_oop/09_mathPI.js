// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") // Here in brackets you have to write whole module (Math) and property ("PI")
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price:250,
    isAvailable:true,

    orderChai: function(){
             console.log("Code faat gaya");
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name")); // here you put object(chai) and key("name")

Object.defineProperty(chai, "name", { // to modify writable, enumerable, configurable
    writable:false,
    enumerable:false // if we write enumerable:false, then in console.log(Object.getOwnPropertyDescriptor(chai, "name")); it will skip name and its property.
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function"){
             console.log(`${key} : ${value}`);
    }
}