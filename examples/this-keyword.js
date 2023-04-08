const a = () => {
  console.log(this);
  this.newvariable = 42;
}

// a();
// console.log(this.newvariable);

var c = {

  name: 'the c object',
  log: () => {
    this.name = 'name updated';
    console.log(this.name);

    var setName = () => {
      this.name = 'updated again'; // in this case, 'this' is pointing to the global execution context
    }
    console.log(this.name);
  }

};

c.log();

var d = {
  name: 'the D object',
  log: () => {
    let self = this;
    self.name = 'd updated';

    const setName = () => {
      self.name = 'd updated again';
    }
    setName();
    console.log(this.name);
  }
};
d.log();