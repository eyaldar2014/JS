// Ex7 - Implement The Following JS Methods -
// Implement the following methods - - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)



const myFilterFunc = (s) =>{
  return s.filter( a => a !==1)
}

const myForEachFunc = (s) =>{
  s.forEach(a => {console.log(a*3)})
  return s
}

const myMapFunc = (s) =>{
  return s.map(a => a*2)
}


s = [ 1,2,3]

console.log(myFilterFunc(s))
console.log(myForEachFunc(s))
console.log(myMapFunc(s))