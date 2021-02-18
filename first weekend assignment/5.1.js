// Ex5.1 - trimming string
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, 
// the original string. You don't have to worry with strings with less than two characters.

function remove(str){
  let strArray = str.split("")
  strArray = strArray.splice(1 , strArray.length -2).join("")
  
  return strArray
}

console.log(remove('bca'))