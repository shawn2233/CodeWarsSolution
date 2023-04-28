// Count cubes in a Menger Sponge

// In this kata you will create a function that takes non negative integers (from 0 to n) and return the amount of cubes that the Menger Sponge would have in that specific iteration.

// Example
// calc_ms(0) == 1
// calc_ms(1) == 20
// calc_ms(2) == 400
// calc_ms(3) == 8000
// calc_ms(4) == 160000
// calc_ms(5) == 3200000
// calc_ms(6) == 64000000

function calc_ms(n) {
    if(n===0){
      return 1
    }else{
      return Math.pow(20,n)
    }
  }




//   Quadrants
//   Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// Examples
// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4

function quadrant(x, y) {
  if(x>0 && y>0){
    return 1
  }else if(x<0 && y>0){
    return 2
  }else if(x<0 && y<0){
    return 3
  }else{
    return 4
  }
}

