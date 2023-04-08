function b() {
  console.log(x);
}

function a() {
  var x = 2;
  b();
}

var x = 1;
a();