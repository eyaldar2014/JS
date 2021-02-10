// Write a function that will receive an array of strings and will return a new array containing all the lengths of all the strings in
//  the array it got as a parameter.

// So that if you call this function with this array for example: ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2].

const newArray = (array) => {

  const result = []

  for (i = 0 ; i < array.length ; i++){
    let a = array[i]
    result.push(a.length)
    
  }

  return result
}

const b = ["boo", "doooo", "hoo","ro", '']

console.log(newArray(b))

