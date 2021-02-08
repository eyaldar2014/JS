

let worldPopulation = 7900 ;

// decleration

function percentageOfWorld1(n){
  let result = n / worldPopulation * 100 ;
  return result
}

let Africa = percentageOfWorld1(1000)
console.log("Africa's population is around " +Africa+ "% of the world")

let Australia = percentageOfWorld1(22)
console.log("Australia's population is around " +Australia+ "% of the world")

let me = percentageOfWorld1(0.000001)
console.log("'I' population is around (" +me+ ")% of the world")

// expression:

let percentageOfWorld2 = (n) => {
  let result = n / worldPopulation * 100 ;
  return result
}

let Africa2 = percentageOfWorld2(1000)
console.log("Africa's population is around " +Africa2+ "% of the world")

let Australia2 = percentageOfWorld2(22)
console.log("Australia's population is around " +Australia2+ "% of the world")

let me2 = percentageOfWorld2(0.000001)
console.log("'I' population is around (" +me2+ ")% of the world")
