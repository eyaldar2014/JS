// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function answer(array) {

  let newArray = array.filter(element => element > 0 && element % 1 === 0)

  newArray = newArray.sort(function (a, b) { return a - b })

  return (newArray[0] + newArray[1])

}

let array = [3, 5, 6, 34746135, 345643, 0.1, 0.11, -12, -12.1, 4]

console.log(answer(array))