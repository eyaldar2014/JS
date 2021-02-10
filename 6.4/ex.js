
// 1. Create array containing jumps of acrobats, each 3 numbers representative 1 jumper.
// for example : [5,5,8,7,-1,5] represent 2 jumpers. (The -1 means that the jump not accept)

const jumps = [5, 5, 8, 7, -1, 5, 4 , 4, 3000]


// 2. Create function “avgJumper” that return average for each jumper example : [6,6] (the -1 is not includes on average).

const avgJumper = (array) => {

  const averages = []

  for (i = 0; array.length > i; i = i + 3) {

    let avgArray = []

    for (n = 0; n < 3; n++) {
      if (array[i + n] > 0) {
        avgArray.push(array[i + n])
      }
    }

    console.log((avgArray.reduce((a, b) => a + b, 0)) / avgArray.length)

    const result = (avgArray.reduce((a, b) => a + b, 0)) / avgArray.length

    averages.push(result)
  }
  console.log(averages)
  return averages
}

const averages = avgJumper(jumps)


// 3. Create function “bestAvgJump” return the best avg jump from all jumpers.

const bestAvgJump = (results) =>{
  let bestAvg = Math.max(...results)

  console.log(bestAvg)
}

bestAvgJump(averages)


// 4. Create function “bestJump” return the best jump.

const bestJump = (jumps) =>{
  let maximum = Math.max(...jumps)
  console.log(maximum)
}

bestJump(jumps)