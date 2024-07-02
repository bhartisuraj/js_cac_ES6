const form = document.querySelector("form");
// this usecase will set empty value in height/weight:- const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value); //.value to get value inputed and to set that value in height but the value will be in string format so ve converted to no. with help of parseInt

  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //.toFixed(2) means show value but only 2 digits after decimal and to do round off of 2digit after decimal
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (`${bmi} < 18.6`) {
      results.innerHTML = `Your BMI is ${bmi} and you are under weight`;
    } else if (`${bmi} >= 18.6 && ${bmi} <= 24.9`) {
      results.innerHTML = `Your BMI is ${bmi} and you are in normal range`;
    } else {
      results.innerHTML = `Your BMI is ${bmi} and you are Overweight`;
    }
  }
})