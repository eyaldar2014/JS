// 1. Create 3 separate objects that their key is called name and their value is a string. Store them in separate variables.

const a = {
  name: 'eyal'
}

const b = {
  name: 'dan'
}

const c = {
  name: 'asaf'
}


// 2. Create a new Map object that sets each object as a key and assign an id number as the value.

let people = new Map()
people.set(a, { id: 1})
people.set(b, { id: 2})
people.set(c, { id: 3})

console.log(people.get(a))


// 3. Iterate over the Map object with the for..of loop. - log the name and id

for (let [mapKey, value] of people) {
  // console.log(Object.keys(mapKey) + ' = ' + value)
  console.log(Object.values(mapKey) + ' = ' + Object.values(value))

}


console.log(people)