# Types and operators

### Dynamic typing

- you don't tell the engine what type of data a variable holds, it figures it out while code is running
- variables can hold different types of values because it's figured out during execution


### Primitive types

- a type of data that represents a single value (not an object)


- types:
  - **undefined** - lack of existence (you shouldn't set a variable to this)
  - **NULL** - lack of existence (it's alright to set a variable to this)
  - **BOOLEAN** - *true* or *false*
  - **NUMBER** - floating point number (there's always some decimals)
    - unlike other programming languages, there's only one 'number' type
    - it can make math weird
  - **STRING** - a sequence of characters ('' and "" can be used)
  - **SYMBOL** - ???
    - since ES6


### operators

- a special *function* that is syntactically (written) differently
- generally, operators take 2 parameters and return one result


- *infix* notation - operator stands between the 2 parameters (3 + 4)
- *prefix* notation - operator -> before parameters (+ 3 4)
- *postfix* notation - operator -> after parameters (3 4 +)


### Operator precedence and associativity

- **precedence** - which operator function gets called first
  - functions are called in order of precedence (HIGHER precedence wins)


- **associativity** - what order operator functions get called in (left-to-right or right-to-left)
  - when functions have the same precedence


### Coercion

- **coercion** - converting a value from one type to another
  - happens often in JavaScript because it's dynamically typed


### Comparison operators

- === vs ==
- !== vs !=
- ...


### Default values

- functions with parameters can be called without an argument in JavaScript
- the parameter will be created in memory and it will have a default value (undefined)


- the **||** operator coerces the values, and it will return the first one that can be coerced to *true*
  - e.g. undefined || "hi" -> "hi"


### Framework aside

- check if variable already exists in the global execution context before assigning it a value
  - window.libraryName = window.libraryName || "Lib2";
