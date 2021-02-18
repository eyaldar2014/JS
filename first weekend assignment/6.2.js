// Ex6.2 - Counting Duplicates
// 
// Count the number of Duplicates
// Write a function that will return the count of distinct 
// case-insensitive alphabetic characters and numeric digits that
// occur more than once in the input string. The input string can be 
// assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// 
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice



function count(str){
  
  let n = 0
  str = str.toLowerCase()
  let array = str.split("")

  for (let i = 0 ; 1 < array.length ; i++){
    
    let x = array[0]
    
    array.shift()

    if(array.includes(x)){
      n++
      // console.log(x)
    }

    array = array.filter(a => a !== x)
    // console.log(array.length)
  }

  return n
}

console.log(count('1a2Asdgfilshafsvdsauygfrieusgbbhtriew4gt4iuwy8g00'))