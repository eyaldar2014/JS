

const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

// Create a function that takes these two arrays as arguments.
// // Compare these two arrays using 2 for loops and return the items that are the same. If none are the same return false.

const compare = (a, b) => {

  let result = []
  for (let i = 0; i < a.length; i++) {
    for (let n = 0; n < b.length; n++) {

      if (a[i] === b[n]) {
        result.push(a[i])
      }
    }
  }
  
  if (result.length > 0) {
    return result
  }
  else {
    return false
  }
}

console.log(compare(food, food1))