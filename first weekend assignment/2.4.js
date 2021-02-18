
// There is an array with some numbers. All numbers are equal except for one. Try to find it! findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

function findUniq(array){
  
  if (array[0] === array[1]){
    let a = array.find(x => x !== array[0])
    return console.log(a)
  }
  else if (array[0] === array[2]){
    return console.log(array[1])
  }
  else{
    return console.log(array[0])
  }
}

let array = [  0,0, 0, 0,0.55,0,0,0,  0, 0 ]

findUniq(array)