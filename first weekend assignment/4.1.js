

function fibonacci(n) {

  let newSum = 0

  let sum = 1
  for (i = 0; n > i; i++) {
    let x = newSum
    newSum = sum + newSum
    sum = x
    console.log(sum)
  }

  // let sum = -1
  // for (i = 0; n < i; i--) {
  //   let x = newSum
  //   newSum = sum + newSum
  //   sum = x
  //   console.log(sum)
  // }

  return newSum
}


console.log(fibonacci(10))