// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper 
// Camel Case, also often referred to as Pascal case).
// 
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


function toCamelCase(str){

  array = str.split("")

  for (let i = 0 ; array.length > i ; i++){
    if (array[i] === '-' || array[i] === '_'){
      array[i+1] = array[i+1].toUpperCase()
    }
  }

  str = array.join("")
  str = str.replace((/_/g) , "")
  str = str.replace((/-/g) , "")

  return str
}


console.log(toCamelCase("the_stealth-warrior"))