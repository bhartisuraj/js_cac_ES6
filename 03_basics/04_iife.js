// Immediately Invoked Function Expression(IIFE)

(function chai(){
    //Named IIFI
    console.log(`DB CONNECTED ONE`);
})();// To run second iifi we have to explicitly tell to end( by giving ; after end of function call)

((num)=>{
    //UnNamed IIFI
    console.log(`DB CONNECTED TWO ${num}`);
})(22)