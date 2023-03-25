// Opposite number

// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
    //your code here
    if (number < 0){
      return Math.abs(number)
    }else if (number > 0){
      return -Math.abs(number)
    }else{
      return 0
    }
  }