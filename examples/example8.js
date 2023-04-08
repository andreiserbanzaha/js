const Andrei = {
  firstName: 'Andrei'
}

const sayHi = (person) => {
  console.log('Hi, ' + person.firstName);
}

sayHi(Andrei);
sayHi({
  firstName: 'George'
});