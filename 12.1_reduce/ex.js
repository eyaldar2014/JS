// Write the following functions using the reduce built-in function. 

// 1. max

const array = [220, -20 , 10, 39, 1, 5, 55, 1, 89, 100, 1]
const array2 = [1, 2]


let arrayMax = array.reduce(function(acc, value) {
  if (value > acc) {
    return acc = value
  }
  return acc
})

// console.log(arrayMax)


// 2. sum of even numbers

let sumEven = array2.reduce(function(acc, value) {
  if (value % 2 === 0) {
    return acc = value + acc 
  }
  return acc
},0)  // initialize so that : acc = 0 - - - -  otherwise , the acc will defaultly be counted as 'index 0' - the first element of the array

console.log(sumEven)


// 3. average

let average = array.reduce(function(acc, value, index) {
  acc = acc + value
  if (array.length === index + 1) {
    acc = acc / array.length
  }
  return acc
})

// console.log(average)
