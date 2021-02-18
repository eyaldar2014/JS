// Ex5.4 - To Weird Case
// 
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all 
// even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. 
// The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present 
// if there are multiple words. Words will be separated by a single space(' ').
// 
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"


function toWeirdCase(str) {

  let newArray = str.split(" ")


  for (let s = 0; newArray.length > s; s++) {

    let array = newArray[s].split("")

    for (let i = 0; array.length > i; i++) {
      if (i % 2 === 0) {
        array[i] = array[i].toUpperCase()
      }
      else {
        array[i] = array[i].toLowerCase()
      }
    }

    newArray[s] = array.join("")
  }

  str = newArray.join(" ")
  return str
}

console.log(toWeirdCase("the sSFGD Fta rrior hUTFIFYFUYFRTUYTFUYgiuydfgiuastgfidouygfiusadgfiu uygdsuy"))