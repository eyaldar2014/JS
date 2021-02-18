// Ex5.5 - Abbreviate two words
// 
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H

function convert(str) {

  let newArray = str.split(" ")

  for (let s = 0; newArray.length > s; s++) {

    let array = newArray[s].split("")
    array[0] = array[0].toUpperCase()
    array = array.splice(0 , 1)
    newArray[s] = array
  }

  str = newArray.join(".")
  return str
}

console.log(convert("sam Harris"))