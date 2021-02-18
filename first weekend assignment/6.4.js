// Ex6.4 - isogram
// 
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters 
// is an isogram. Assume the empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case


function isIsogram(str){
  
  let answer = true
  str = str.toLowerCase()
  let array = str.split("")

  for (let i = 0 ; 0 < array.length ; i++){
    
    let x = array[0]
    
    array.shift()

    if(array.includes(x)){
      answer = false
    }

    if(answer === false){
      return answer
    }
    
    array = array.filter(a => a !== x)
  }

  return answer
}

console.log(isIsogram('Dermatoglyphics'))