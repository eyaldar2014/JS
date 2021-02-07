function circleArea(radius){
  let circleArea = radius**2 * Math.PI
  return circleArea
}

let result = circleArea(1)

console.log(result)

let roundResult = Math.round((result + Number.EPSILON) * 100) / 100

console.log(roundResult)