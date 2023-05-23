// Get the mean of an array

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


function getAverage(marks){
    let average = marks.reduce((acc,c) => acc + c ,0)
    let result = average/ marks.length
    return Math.floor(result)
  }



//   Remove All The Marked Elements of a List

//   Define a method/function that removes from a given array of integers all the values contained in a second array.

  Array.prototype.remove_ = function(int, value){
    let solution = []
    let seen = []
    for(let i = 0; i < int.length; i++){
      if(value.includes(int[i])){
        seen.push(int[i]);
      }else{
        solution.push(int[i])
      }
    } return(solution) 
  }
  
  //compare arrays
  //find the nums not the same between two
  //push to another array and return 