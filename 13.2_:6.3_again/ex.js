
// 6.3 :
// Write a function that will receive an array of strings and will return a new array containing all the 
// lengths of all the strings in the array it got as a parameter.
// So that if you call this function with this array for example: ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2].

const b = ["boo", "doooo", "hoo","ro", '']


//6.3 solution with for loop:

const newArray = (array) => {

  const result = []

  for (i = 0 ; i < array.length ; i++){
    let a = array[i]
    result.push(a.length)
  }
  
  return result
}

//13.2 solution with while loop:
const newArray2 = (array) => {

  const result = []
  let i = 0

  while (i < array.length){
    let a = array[i]
    result.push(a.length)
    i++
  }

  return result
}

console.log(newArray(b))
console.log(newArray2(b))