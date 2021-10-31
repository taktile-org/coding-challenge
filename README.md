# Fold

Fold is a fold function implementation in JavaScript.

## Arguments

iterable: iterable object such as String, Array, Set or Map. On each elment of the iterable the callback function is executed, while passing in the return value from the calculation on the previous element.

callback: function with two arguments: the previousValue (the value resulting from the previous call) and the currentValue

initialValue: value to which previousValue of the callback is initialized the first time the callback is called

## Examples Usage

```js
const result = fold([1, 2, 3], (a, b) => a + b, 100);
// result will be 106

const result = fold([1, 2, 3], (a, b) => a + b);
// if no inital value is given, the first value of the iterable object is used
// result will be 6

const result = fold(
  new Set([1, 1, 2, 2, 3, 3]),
  (a, b) => {
    return a + b;
  },
  0
);
// result will be 6

const result = fold([], (a, b) => {
  return a + b;
});
// when providing an empty array and no initial value, it
// will throw a TypeError "Reduce of empty array with no initial value"
```

## CLI Commands

Run test:
`yarn test`

## System Requirements

Support for ESM (Node.js > 12 / es module compatible browser)

## Package Goals/ Taktile Coding Challenge

Your challenge is to implement `fold` in the language of your choice.

## Description

`fold` is a higher order function that takes

- a sequence of type A
- a "starting" value of type B
- a function (A, B) -> B

and returns a B. E.g., the `sum` of an array is a special case of fold, where

- the sequence is an array of numbers
- the starting value is 0
- the function is `+`

You can find more information on [Wikipedia](<https://en.wikipedia.org/wiki/Fold_(higher-order_function)>).

## Instructions

Fork this repository.

Implement `fold` in any language of your choice. Don't directly use the `fold` that is
already part of your language (see the list on Wikipedia).

Send us a link to your fork **within 1 week** of being invited to participate on this challenge.

## Timebox

Aim to use about 1 hour of time on the solution, don't use more than 2 hours. We give roughly
equal weight to the each of the following:

- Documentation
- Packaging
- Testing
- Readability of code
- Correctness of implementation
- Performance
- Generality
- Correntness of types (if applicable)

Please don't stress if your solution isn't perfect. With a timebox of at most 2 hours,
you most likely won't be able to check all the boxes above. This challenge is intended as an
exercise in tradeoffs. We want to understand how you view the overall value and lifecycle
of software.
