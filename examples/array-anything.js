let arr = [
  1,
  true,
  (name) => {
    console.log('hello ' + name);
  },
  {
    name: 'Andrei',
    age: 28
  },
  "hello"
];

arr[2](arr[3].name);