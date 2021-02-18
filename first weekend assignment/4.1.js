

function fibonacci(n) {

  let newSum = 1
  let sum = 0

  for (i = 0 ; n > i ; i++){
    let x = newSum
    newSum = sum + newSum
    sum = x
  }

  return newSum
}


console.log(fibonacci(6))