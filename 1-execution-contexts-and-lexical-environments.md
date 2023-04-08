
- **Syntax parser:**
  - a program(compiler/interpreter) that reads your code and determines what it does and if its grammar is valid


- **Lexical environment:**
  - where something sits physically in the code you write
  - pretty much same as **scope**
  - lexical environments for a function are created NOT when it's *defined*, but when it's *executed*!
  - ??????????


- **Execution context:**
  - a wrapper to help manage the code that is running (e.g. which function)
  - contains:
    - global object
    - 'this'
    - outer environment (global execution context doesn't have one)
    - your code
  - **global execution context**
  - **function execution context**
    - created whenever a function is invoked


- **Name/value pair:**
  - a name which maps to a unique value
  - name may be defined more than once, but it can only have one value in a given **context**
  - the value may be more name/value pairs


- **Object:**
  - collection of name/value pairs


### The global environment and the global object
- whenever code is run, it's run inside an execution context
- base execution context -> **Global** execution context
  - global - accessible everywhere in the code
- the **global execution context** (javascript engine) creates 2 things:
  - **Global Object**
  - **'this'**
- global - "not inside a function"
- 'window' is the *global* object inside *browsers* (== this)


### The execution context: Creation and 'Hoisting'

- **execution context** is created in 2 phases:
  1. **CREATION PHASE**
    - global object
    - 'this'
    - outer environment (if there is one)
    - **Hoisting**
      - setup memory space for variables and functions
      - all variables in javascript are initially set to undefined
      - functions are set in memory in their entirety
  2. **EXECUTION PHASE**
    - runs your code line by line


- **undefined** -> special value -> variable has not been set
- 'uncaught reference error: x is not defined' -> there is no mention of 'x' anywhere


- good practice:
  - never set value to *undefined*. It's better to let that keyword mean that I, the programmer, have never defined that variable (helps with debugging)


### Single threaded, synchronous execution

- single threaded - one command at a time
- synchronous - one at a time, in order


### Function invocation and the execution stack

- *invocation* - calling a function (by using **()**)
- every function creates a new *execution context* -> creation and execution phases


### Functions, context and variable environments

- **variable environment** - where the variables live and how they relate to each other in memory
- every *execution context* has its own variable environment
- see 'example2.js'


### The scope chain

- each **execution context** has a reference to its *outer environment*
  - it doesn't necessarily have to be the execution context directly below it
  - its lexical environment (where the function sits lexically) determines its outer environment
- **scope** - where can I access the variable?
- **chain** - links of outer environment references (lexically)


### Scope, ES6 and 'let'

- **scope** - where a variable is available in your code
  - and if it's truly the same variable, or a new copy


- **let**
  - only available inside the block it's created in
  - cannot be accessed before initialization


### Asynchronous callbacks

- **asynchronous** - more than one at a time
- **Event Queue** - another list (besides the call stack), that sits in the JavaScript Engine
  - contains events or notification of events
- when the callstack is empty, the JavaScript Engine looks *periodically* at the event queue and it processes those events, if any (e.g. click handler)
