//forEach
const coding = ["js", "ruby", "java", "python", "cpp"]

//Function without name
// coding.forEach(function (element) {
//     console.log(element);
// });

//Arrow Function
// coding.forEach(element => {
//     console.log(element);
// });

// Normal function
// function printMe(coding){
//   console.log(coding);  
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },]
    
//Call back function
myCoding.forEach((item)=>{
console.log(item.languageFileName);
})

//Function without name
myCoding.forEach(function(item){
    console.log(item.languageFileName);
    })