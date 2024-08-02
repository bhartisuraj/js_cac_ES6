const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)]; // Paste old color value in front of this one like #etc.
    }
    return color;
  };
  
  let intervalId;
  
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000); // reference -> changeBgColor
    }
    function changeBgColor() { // method -> changeBgColor
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null; // just corner case, if we dont write this line of code after stop we have to reload the page to start again
  };
  
  /*Grabbing button*/
  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);