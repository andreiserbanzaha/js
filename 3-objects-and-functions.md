# Objects and Functions

- objects and functions are VERY related, in many ways they can be considered the same subject


## Objects and the dot

- objects are collections of name-value pairs
- objects can have:
  - *primitive* "property"
  - *object* "property"
  - *function* "method"


- objects have references to all the properties and methods that live in that object


```
var person = new Object();
person['firstName'] = 'andrei';
person.lastName = 'zaha';
person.address.street = 'main st.';
person['address']['city'] = 'oradea';
```


## Objects and object literals

- using curly braces to define name-value pairs, separated by colons

```
var person = {}; // JavaScript assumes you want to create and object

var person = {
  firstName: 'Andrei',
  lastName: 'Zaha',
  address: {
    street: 'main',
    city: 'oradea'
  }
};
```


## Framework aside - Faking namespaces

- **namespace** - a container for variables and functions
  - typically to keep variables and functions with the same name separate


- JavaScript doesn't officially have namespaces, but it can be faked using objects


## JSON and object literals

- **JSON** - JavaScript Object Notation
- JSON has stricter rules
  - properties and values have to be between quotes ""
- JSON format is VALID object literal format, but not vice-versa


```
{
  "firstName": "Andrei",
  "isAProgrammer":, true
}
```


- *JSON.stringify()* -> object to JSON
- *JSON.parse()* -> JSON to object


## Functions are objects!

- **First Class Functions** - everything you can do with other types, you can do with functions (assign to variables, pass them around, create on the fly)


- **Function** - a special type of object
  - all the features of the normal object
  - other special properties
  - can have:
    - primitive properties
    - object properties
    - other functions
    - name (optional, can be anonymous)
    - code property -> invokable **()**


- so, **code is just one property of the function, that can be invoked!**


```
function greet() {
  console.log('hi');
}

greet.language = 'english';
console.log(greet);
console.log(greet.language);
```


## Function statements and function expressions

- **expression** - a unit of code that results in a value
  - it doesn't have to be saved in a variable


- **statement** - just do work
  - do not return a value
  - e.g. *if statements*


```
// statement
function greet() { console.log('hi'); }

// expression, because a function object is created and assigned
var anonymousGreet = function() { console.log('hello'); }
```


## By VALUE vs by REFERENCE

- primitive values are copied
- objects are not copied, if the object is assigned to another variable, it will point to the same memory location


- **mutate** - to change something
- **immutable** - it cannot be changed


- equals operator **=** sets up a new memory space (new address) !


## Objects, functions and 'this'

- when a function is invoked, a new execution context is created
  - variable environment
  - outer environment
  - 'this'

```
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
```


## Conceptual aside: Arrays - collections of anything

```
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
arr[2](arr[3].name); // Hello Andrei
```


## 'arguments' and spread

- **arguments** - the parameters you pass to a function
  - JavaScript offers a keyword of the same name which contains them all
  - created when the *execution context* is created


```
function greet(name, language) {
  console.log(arguments);
}
greet('andrei', 'english');
```


## Framework aside: Function overloading

- JavaScript does NOT have function overloading

```
function greet(firstName, lastName, language) {
    if (language === 'en') {
        console.log('hello ', + firstName + ' ' + lastName);
    }
    if (language === 'es') {
        console.log('hola ', + firstName + ' ' + lastName);
    }
}

function greetEnglish(firstName, lastName) {
    return greet(firstName, lastName, 'en');
}

function greetSpanish(firstName, lastName) {
    return greet(firstName, lastName, 'es');
}

greetEnglish('andrei', 'zaha');
greetSpanish('andrei', 'zaha');
```

## Conceptual aside: Syntax parsers

- the syntax parser may modify your code


## Dangerous aside: Automatic semicolon insertion

- everywhere the syntax parser expects that a semicolon should be, it adds one for you
- pro-tip: you should always use semicolons where you think they should be. Don't let the JavaScript engine add them for you

```
function getPerson() {
    return              // automatically adds ';' after 'return'
	{
        name: 'andrei'
    }
}
console.log(getPerson()); // undefined
```


## Framework aside: Whitespace

- invisible characters that create literal 'space' in your code
    - carriage returns, tabs, spaces


```
var
    // first name
    firstName,

    // last name
    lastName,

    // language
    // can be 'en' or 'es'
    language;

var Person = {
    // the first name
    firstName,

    // the last name
    // always required
    lastName
};
```


## Immediately invoked function expressions (IIFEs)

```
// function statement
function greet() { console.log('hello'); }

// using a function expression
var greet = function() { console.log('hi'); }

// using an immediately invoked function expression (IIFE)
// greeting will be a string
var greeting = function(name) { return 'what's up' + name; }('andrei');
```

```
var firstName = 'andrei';

// wrap the IIFE in parantheses so that the syntax parses doesn't think it's a statement
// because in that case it will give an error because it doesn't have a name
(function(name) {

    var greeting = 'Inside IIFE: ';
    console.log(greeting + ' ' + name);

}(firstName));
```


## Framework aside: IIFEs and safe code

- IIFE create a new execution context -> powerful
    - does not interfere with outer environment
- *some frameworks have a parentheses at the beginning of the file, and one at the end, so that they have their own execution context!*


```
var greeting = 'hola';

(function(global) {

    // change code outside this execution context, by passing parameters
    global.greeting = 'hello';

}(window));
```


## Understanding closures

- they are a feature of JavaScript
- you do not write them
- JavaScript keeps a reference of the variables that were in the execution context when the new function was created

```
function greet(whatToSay) {
    return function(name) {
        console.log(whatToSay + ' ' + name);
    }
}

// JavaScript will keep a reference to whatToSay (closure)
// when the function will be called, the variables will be remembered
var sayHi = greet('Hi');
sayHi('andrei');
```


```
function buildFunctions() {
    var arr = [];
    for(var i = 0; i < 3; ++i) {
        arr.push( function() { console.log(i); } );
    }
    return arr;
}

var fs = buildFunctions();
fs[0](); // 3
fs[1](); // 3
fs[2](); // 3

// if we want to have 0, 1, 2: (understanding closures part 2)
// we can use 'let' and save the variable in scope
// we can use IIFE  
```


## Framework aside: Function factories

- using closures:

```
function makeGreeting(language) {

    return function(name) {
        if (language === 'en') {
            console.log('hello ' + name);
        }
        if (language === 'es') {
            console.log('hola ' + name);
        }
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('andrei');
greetSpanish('costi');
```


## Closures and callbacks

- **callback function** - a function that you give to another function to be run when the other function is finished


```
// closure happens here! -> 'greet' is saved and referenced when needed
function sayHiLater() {
    var greet = 'hi!';

    // function expression
    setTimeout(function() {
        console.log(greet);
    }, 3000);
}
sayHiLater();
```


## call(), apply(), bind()
