// The first function, makeAllCaps(), will take in an array of words and capitalize them





function makeAllCaps(wordsArray) {
  return new Promise((resolve, reject) => {

    let onlyString = true
    let result = []
    wordsArray.forEach(word => {
      if (typeof word !== 'string') {
        onlyString = false
        return // can I use?
      }
      else {
        result.push(word.toUpperCase())

      }
    });

    if (onlyString === true) {
      resolve(result)
    }
    else {
      reject('not all are words')
    }
  })
}

function sortWords(result) {
  return new Promise((resolve, reject) => {

    if (typeof result !== 'string') {
      resolve(result.sort())
    }
    else {
      reject('not good at all')
    }
  })
}


const array = [1, 'c']
const array2 = ['a', 'c']

// makeAllCaps(array2).then(result => {
//   return sortWords(result)
// })
//   .then(result => {
//     console.log(result)
//   })
//   .catch(err => {
//     console.log(err)
//   })

makeAllCaps(array2)
  .then(sortWords)
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    console.log(err)
  })