// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array 
// values as if all were numbers.

function sumMix(x){
    let sum = 0
    let num = x.map(y=>Number(y))
    for(let i = 0; i<num.length; i++){
      sum += num[i]
    }
    return sum
  }