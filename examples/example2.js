function b() {
  var x;
  console.log(x);
}

function a() {
  var x = 2;
  console.log(x);
  b();
}

var x = 1;
console.log(x);
a();
console.log(x);

// each 'x' is sitting in its own execution context