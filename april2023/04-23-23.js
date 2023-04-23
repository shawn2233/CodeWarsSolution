// Keep Hydrated!

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
    return Math.floor(time*.5)
  }


//   Returning Strings

//   Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

  function greet(name){
    return `Hello, ${name} how are you doing today?`
  }


//   Convert a Boolean to a String

//   Implement a function which convert the given boolean value into its string representation.

  function booleanToString(b){
    return b.toString()
  }


//   Basic Mathematical Operations

//   Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


function basicOp(operation, value1, value2)
{
  if(operation === "+"){
    return value1 + value2
  }else if (operation === "-"){
    return value1 - value2
  }else if (operation === "*"){
      return value1 * value2
  }else if (operation === "/"){
    return value1 / value2
  }
}


// A Needle in the Haystack

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle

function findNeedle(haystack) {
    let spot = haystack.indexOf("needle")
    return `found the needle at position ${spot}`
}


// Beginner Series #1 School Paperwork

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
    if(n<0 || m<0){
      return 0
    }else{
      return n * m
    }
  }

//   Sum Arrays

//   Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

  // Sum Numbers
function sum (numbers) {
    "use strict";
    return numbers.reduce((acc,c)=>acc+c,0)
};



// Simple multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


function simpleMultiplication(number) {
    if(number%2===0){
      return number * 8
    }else{
      return number * 9
    }
}


// You only need one - Beginner

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.


function check(a, x) {
    return a.includes(x)
  }


//   How good are you really?

//   There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
    let average = (classPoints.reduce((acc,c)=>acc+c,0)) / classPoints.length
    if(yourPoints>average){
      return true
    }else{
      return false
    }
  }