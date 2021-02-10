
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c: 1, m: 2, t: 1, b: 1, s: 1 }

// to count over all the letters and return an object
// with the letter as the key and the letter count as the value.

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];


//making string, small letters, no spaces
// make array out of it 'newArray'
// [
//   'h', 'e', 'l', 'l', 'o', 'g', 'o', 'o', 'd', 'd', 'a', 'y', 'y', 'o', 'u', 'r', 'w', 'e', 'l', 'c', 'o',
//   'm', 'e', 'h', 'o', 't', 'd', 'o', 'g', 'h', 'a', 'm', 'b', 'u', 'r', 'g', 'e', 'r', 's'
// ]


let newString = array.join('')

newString = newString.toLowerCase();

newString = newString.replace(/\s/g, '');

newArray = newString.split("");

console.log(newString)


const putInOrder = (newArray) => {

  // make object with only one letter of a kind
  // {  h: 1,e: 1,l: 1,o: 1,g: 1,d: 1,a: 1,y: 1, u: 1, r: 1, w: 1, c: 1,  m: 1,t: 1, b: 1,  s: 1}

  count = {}
  for (let i = 0; newArray.length > i; i++) {
    if (newArray[i] !== count[Object.keys(count)[0]]) {
      count[newArray[i]] = 1;

    }
  }

  //create new array to check repetitive letters
  // const superArray = []


  const superArray = []

  for (let i = 0; newArray.length > i; i++) {

    // check if letter has already been declared in 'superArray'
    // if yes so - add for the object 'count'

    if (superArray.includes(newArray[i])) {
      count[newArray[i]] = count[newArray[i]] + 1;

    }

    // if not - declare it

    else superArray.push(newArray[i])

  }
  return count
}

count = putInOrder(newArray)
console.log(count)



// Extra:
// return the letter with the most occurrences as well

let keys = Object.keys(count);
let max = count[keys[0]];

for (i = 1; i < keys.length; i++) {
  let value = count[keys[i]];
  if (value > max) {
    max = value;
  }
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

console.log(getKeyByValue(count, max))