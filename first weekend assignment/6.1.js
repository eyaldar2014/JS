
// This time no story, no theory. The examples below show you how to write function accum​:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from ​a..z​ and ​A..Z​.

function accum(str){
  
  let array = str.split("")
  let n = 1

  for (let i = 0 ; i < array.length ; i++){
    temp =[]
    temp.push(array[i].toUpperCase())
    let a = array[i].toLowerCase()

    for(let s = 0 ; s < n-1 ; s++){
    temp.push(a)
    }

    array[i] =temp.join('')
    n++
  }

  return array.join("-")
}

console.log(accum('RqaEzty'))