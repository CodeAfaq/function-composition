"# function-composition" 

1) What is function composition ?

Function Composition is a technique in which you combine two or more functions to produce a new function. The idea is to take the output of one function and use it as the input for another. Mathematically, given two functions f and g, their composition is represented as f(g(x)). Here, g(x) is computed first, and its result is passed to f.

2) Example:

const f = (x) => x + 2
const g = (x) => x * 3

// Composing f and g
const composedFunction = (x) => f(g(x))

console.log(composedFunction(2))


3) My problem was to make a sandwich so I wrote a function for it

Pseudo code:

step 1: Slice the bread

step 2: Spread Mayonnise

step 3: Add Chicken Fillets

step 4: Make sandwich

Final: Code is in JS file