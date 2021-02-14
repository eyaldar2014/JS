// 1. Write a a function called ‘isString’ that receives 2 arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback function which logs that string to the console.

const isString = (string, callback) =>{
  if(typeof string === 'string'){
    callback(string)
  }
}

const logString = (string) => {
  console.log(string)
}

// isString('batata',logString)


// 2. Create a function called ‘firstWordUpperCase’ that receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence and pass the string to a callback function which will create dashes between the words.

const firstWordUpperCase = (string, callback) =>{
  let newArray = string.split(" ");
  newArray[0] = newArray[0].toUpperCase()
  newString = newArray.join(" ");
 callback(newString)
}

const createDashes = (string) =>{
  newString = string.replace(/\s/g, '/');
  console.log(newString)
}

// firstWordUpperCase('asjhdbsa bidsf sdbfhusdb usdudshf', createDashes)


// 3. Call the ‘firstWordUpperCase’ function with a callback of your choice.

const myFunction = (string) =>{
  console.log(string)
  if(string === 'BATATA is my favorite vegtable'){
    console.log('NOT')
  }
  else{
    console.log('All good')
  }
}

firstWordUpperCase('batata is my favorite vegtable', myFunction)