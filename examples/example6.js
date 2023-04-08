// long running functions
function waitThreeSeconds() {
  var ms = 3000 + new Date.getTime();
  while (new Date() < ms) {}
  console.log('finished function');
}


function clickHandler() {
  console.log('click event');
}

// listener for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');


// finished function
// finished execution
// click event