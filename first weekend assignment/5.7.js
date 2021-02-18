// Ex5.7 - shortest words
// Simple, given a string of words, return the ​length​ of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function short(str){ 

  let array = str.split(" ")

  for (let i = 0 ; i < array.length - 1 ; i++){
    if (array[i].length < array[i + 1].length){
      array[i+1] = array[i]
    }
  }

  return array[array.length -1]
}

console.log(short('sdhf a dsfiasbdijfabdsijfg8347t ruwbejvf!!! basdjafdsj asd'))