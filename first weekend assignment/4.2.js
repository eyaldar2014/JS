

function tribonacci(array , n) {

  if (n < 3){
    return 'na'
  }

  let tribonacciArray = array

  for (i = 0 ; n - 3 > i ; i++){
    
    let a = tribonacciArray[i] + tribonacciArray[i + 1] + tribonacciArray[i + 2]
    
    tribonacciArray.push(a)
  }

  return tribonacciArray
}


console.log(tribonacci([1,2,3] , 10))