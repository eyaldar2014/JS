function describwCountry (country, population, capitalCity){
  let sentence = country + " has " + population + " million people and its capital city is " + capitalCity;
  return sentence
}

let firstCountry = describwCountry("Isreal", "9", "Jerusalem")
let secondCountry = describwCountry("China", "1,500", "Beijing")
let thirdCountry = describwCountry("Australia", "23", "neither Sydny or Melbourne")

console.log(firstCountry)
console.log(secondCountry)
console.log(thirdCountry)