// Find Multiples of a Number

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.



function findMultiples(integer, limit) {
    let value = limit / integer //finds how many times integar goes into limit
    let array = [] //creats empty array to push results
    for(let i = 1; i<=value; i++){ //for loop, going to that value
       let sum = integer * i //getting each multiple
       array.push(sum) //adding each multiple to array
    }
    return array //returning the full array once finished 
  }