// Answer the questions below and use the map or the forEach method :

// 1. Write a function called doubleValues which accepts an array and returns a new
//  array with all the values in the array passed to the function doubled.

const doubleValues = (array) => {

  let newArray = []
  array.forEach(element => {
    newArray.push(element)
    newArray.push(element)
  })

  return newArray
}

let result = doubleValues([1 ,1 ,20 , 'a'])
console.log(result)


// 2. Write a function called onlyEvenValues which accepts an array and returns a new array with 
// only the even values in the array passed to the function.

const onlyEvenValues = (array) => {

  let newArray = []
  array.forEach(element => {
    if (element % 2 === 0) {
      newArray.push(element)
    }
  })

  return newArray
}

// let result = onlyEvenValues([1 ,1 ,2 , 4, 5,'a'])
// console.log(result)


// 3. Write a function called showFirstAndLast which accepts an array as an argument and returns a new array with only
// the first and last elements from the function’s argument array. The returned array should only contain elements that are strings.

const showFirstAndLast = (array) => {

  let newArray = []
  array.forEach(element => {
    if (typeof element === 'string') {
      newArray.push(element)
    }

  })

  return newArray
}

// let result = showFirstAndLast([1 ,1 ,2 , 4, 5,'a' , 'b'])
// console.log(result)


// 4. Write a function called vowelCount which accepts a string as an argument. The function should return an 
// object which has the count of the number of vowel’s that are in the string. The key should be the vowel and 
// the value should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.


const vowelCount = (string) => {

  // {a:3, o:2,u:4}.
  let obj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  }
  let newArray = string.split("")

  // console.log(newArray)
  newArray.forEach(element => {
    if (element === 'a' || element === 'A') {
      obj.a = obj.a + 1
    }
    if (element === 'e' || element === 'E') {
      obj.e = obj.e + 1
    }
    if (element === 'i' || element === 'I') {
      obj.i = obj.i + 1
    }
    if (element === 'o' || element === 'O') {
      obj.o = obj.o + 1
    }
    if (element === 'u' || element === 'U') {
      obj.u = obj.u + 1
    }
  })


  // delete empty vowel from object 

  let tempArray = []
  for (const p in obj) {
    if (obj[p] === 0) {
      tempArray.push(p)
    }
  }
  // console.log(tempArray)

  for (i = 0; i < tempArray.length; i++) {
    delete obj[tempArray[i]]
  }
  // delete empty vowel from object end

  return obj
}

// let result = vowelCount('usegfuAagdfijhgoifdgfadsogfdudfsgauoysfuyg')
// console.log(result)



// 5. Write a function capitalize that takes a string as an argument and will return the whole string capitalized.

const capitalize = (string) => {

  let stringArray = string.split("")
  let newArray = []

  stringArray.forEach(element => {
    let newElement = element.toUpperCase()
    newArray.push(newElement)
  })

  newArray = newArray.join()
  newArray = newArray.replace(/,/g, '')
  return newArray
}

// console.log(capitalize('sdigfouadsgfdoyfgdofdasusdvfuvfudfdas76786g'))


// 6. Write a function called shiftLetters that takes a string as an argument and return’s an encoded
//  string with each letter shifted down the alphabet by one.

const shiftLetters = (string) => {

  let stringArray = string.split("")
  let newArray = []

  stringArray.forEach(element => {
    let char = element
    if (element >= 'a' && element <= 'y') {
      char = element.charCodeAt(0)
      char = String.fromCharCode(char + 1)
    }
    if (element >= 'A' && element <= 'Y') {
      char = element.charCodeAt(0)
      char = String.fromCharCode(char + 1)
    }

    newArray.push(char)
  })

  newArray = newArray.join()
  newArray = newArray.replace(/,/g, '')
  return newArray
}

// console.log(shiftLetters('aceifdbidsafUFIYDFYF5786478gi'))

// 7. Create a function called swapCase that takes a string as an argument and returns a string that every other word
//  is capitalized. (you can use the fifth’s exercise's function to keep it dry)

const swapCase = (string) => {

  let stringArray = string.split(" ")
  let newArray = []
  index = 0

  stringArray.forEach(element => {
    if(index % 2 === 0){

      let newElement = element.toUpperCase()
      newArray.push(newElement)
    }
    else {
      newArray.push(element)
    }

    index = index + 1
  })

  newArray = newArray.join()
  newArray = newArray.replace(/,/g, ' ')
  return newArray
}

// console.log(swapCase('batata batata aceifd bidsafUFIYDFYF5 786478gi'))