let allButtons = document.querySelectorAll(".button");
let body = document.querySelector("body");
// let headingText1 = document.querySelector("h1");
// let headingText2 = document.querySelector("h2");

// function for all buttons
allButtons.forEach(function (buttonBox) {
  // console.log(buttonBox);
  buttonBox.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === "grey") body.style.backgroundColor = e.target.id;
    if (e.target.id === "white") body.style.backgroundColor = e.target.id;
    if (e.target.id === "yellow") body.style.backgroundColor = e.target.id;
    if (e.target.id === "blue") body.style.backgroundColor = e.target.id;
    if (e.target.id === "purple") body.style.backgroundColor = e.target.id;
  });
});

// allButtons.forEach((box) => {
//   box.addEventListener("click", function (e) {
//     // console.log(e);
//     // console.log(e.target);
//     if (e.target.id === "grey") {
//       body.style.backgroundColor = e.target.id;
//       headingText1.style.color = "white";
//       headingText2.style.color = "white";
//     }
//     if (e.target.id === "white") {
//       body.style.backgroundColor = e.target.id;
//       headingText1.style.color = "black";
//       headingText2.style.color = "black";
//     }
//     if (e.target.id === "yellow") {
//       body.style.backgroundColor = e.target.id;
//       headingText1.style.color = "black";
//       headingText2.style.color = "black";
//     }
//     if (e.target.id === "blue") {
//       body.style.backgroundColor = e.target.id;
//       headingText1.style.color = "white";
//       headingText2.style.color = "white";
//     }
//     if (e.target.id === "purple") {
//       body.style.backgroundColor = e.target.id;
//       headingText1.style.color = "white";
//       headingText2.style.color = "white";
//     }
//   });
// });

// let mainBody = document.querySelector("body")
// let buttonGrey = document.querySelector("#grey")
// let buttonWhite = document.querySelector("#white")
// let buttonBlue = document.querySelector("#blue")
// let buttonYellow = document.querySelector("#yellow")

// // addEventListener on individual buttons
// buttonGrey.addEventListener('click',(el)=>{
//   if(el.target.id === "grey") mainBody.style.backgroundColor = el.target.id;
// })
// buttonWhite.addEventListener('click',(el)=>{
//   if(el.target.id === "white") mainBody.style.backgroundColor = el.target.id;
// })
// buttonBlue.addEventListener('click',(el)=>{
//   switch (el.target.id === "blue") {
//     case el.target.id === "blue":
//       mainBody.style.backgroundColor = el.target.id;
//       break;
//     default:
//       break;
//   }
// })
// buttonYellow.addEventListener('click',(el)=>{
//   if(el.target.id === "yellow") mainBody.style.backgroundColor = el.target.id;
// })