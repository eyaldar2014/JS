// Ex7 - Implement The Following JS Methods -
// Implement the following methods - - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)

const myFilterFunc = (array, x) => {

  newArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== x) {
      newArray.push(array[i])
    }
  };

  return newArray
}

let array = [1, 2, 3, 4, 5, 6, 7]

// console.log(myFilterFunc(array , 6))


const myForEachFunc = (array) => {

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2
  };

  return array
}

// console.log(myForEachFunc(array))

const myMapFunc = (array) => {

  let newArray = []

  for (let i = 0; i < array.length; i++) {
    let x = array[i] * 3
    newArray.push(x)
  };

  return newArray
}

// console.log(myMapFunc(array))



// ----------------------------------------------------------------------------------------------------------------//

// const myFilterFunc = (s) =>{
//   return s.filter( a => a !==1)
// }
// const myForEachFunc = (s) =>{
//   s.forEach(a => {console.log(a*3)})
//   return s
// }
// const myMapFunc = (s) =>{
//   return s.map(a => a*2)
// }
// s = [ 1,2,3]
// console.log(myFilterFunc(s))
// console.log(myForEachFunc(s))
// console.log(myMapFunc(s))
