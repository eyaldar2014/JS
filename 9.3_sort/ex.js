


const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// a.1. Sort the array of strings from descending to ascending order

console.log(foods.sort())


// a.2. Sort the array of strings from descending to ascending order.

console.log(foods.reverse(foods.sort()))

// b. Lets sort an array of words that includes a word with an uppercase:
const foodsWithUpperCase = [ "falafel", "Sabich", "hummus", "pizza with extra pineapple"];
  
const arrayToLowerCase = (array) =>{
let newArray = array.map(function(string) {
    return string.toLowerCase()
  })
  return newArray
}


const sortArrayWithUpperCase = (array, callback) =>{
  let newArray = callback(array)
  newArray.sort()
  console.log(newArray)
  return newArray
}

const ascendingFoodsWithUpperCase = sortArrayWithUpperCase(foodsWithUpperCase, arrayToLowerCase)


// b.1. Sort the array of strings from descending to ascending order.

const descendingFoodsWithUpperCase = ascendingFoodsWithUpperCase.reverse()
console.log(descendingFoodsWithUpperCase)



// c. Longest word

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

// c.1. Sort the array of strings from the longest word to the shortest word only using the sort function

words.sort(function(a, b) {
  return a.length - b.length ;
});
console.log(words);