// "this" is a problem
// We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.

// We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available

// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return {name: this.firstName + ' ' + this.lastName};
// }

function NameMe(first, last,name) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

// The highest profit wins!

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]
    }