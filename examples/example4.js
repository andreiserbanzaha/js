function a() {

  function b() {
    console.log(x);
  }

  var x = 2;
  b();
}

var x = 1;
a();
b(); // not defined

// lexically, b() is defined inside a(), that means function a() is its outer environment