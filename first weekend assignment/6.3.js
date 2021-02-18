
// Ex6.3 - organize strings
// 
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// 
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"



function distinct(a , b){

  a = a.toLowerCase()
  b = b.toLowerCase()
  let s = a + b
  let array = s.split('')

  let z = array.length
  for (let i = 0 ; i < z ; i++){
    
    let x = array[i]
    array = array.filter(a => a !== x)
    z = array.length
    array.unshift(x) 
    
    // console.log(array)
    // console.log(z)
    // console.log(i)
  }

  array.sort()

  return array.join("")
}

console.log(distinct('aAsdgfilshafsvdsauygfrieusgbbhtr' , 'iewgtiuwygz'))