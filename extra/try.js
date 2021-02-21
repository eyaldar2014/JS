function arrayDiff(a, b) {


  for (i = 0 ; b.length > i ; i++){
      a = a.filter(n => n === b[i])
  }
  
  return a
}


let a = [3,4]
let b = [3]

console.log(arrayDiff(a,b))