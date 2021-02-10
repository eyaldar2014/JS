const people = ["Greg", "Mary", "Devon", "James"];


// 1. Using a loop, iterate through this array and console.log all of the people.

for (i=0 ; people.length > i ; i++){
  console.log(people[i])
}


// 2. Write the command to remove "Greg" from the array.

people.splice(0, 1);

console.log(people)


// 3. Write the command to remove "James" from the array.

people.splice(2, 1);

console.log(people)


// 4. Write the command to add "Matt" to the front of the array.

people.unshift('Matt');

console.log(people)


// 5. Write the command to add your name to the end of the array.

people.push('Eyal');

console.log(people)


// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

const maryIndex = people.findIndex(element => element === "Mary");

console.log(maryIndex)

for (i=0 ; i < maryIndex + 1 ; i++){
  if (people[i] === 'Mary'){
    console.log(people[i])

  }
}


// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".

console.log(people);

let newArray = people.slice(2, 4)

console.log(newArray);


// 8. Write the command that gives the indexOf where "Mary" is located.

const index = people.findIndex(element => element === "Mary");

console.log(index);


// 9. Write the command that gives the indexOf where "Foo" is located (this
//   should return -1).

const index2 = people.findIndex(element => element === "Foo");

console.log(index2);


//   10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth"
// and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].

people.splice(2, 1, "Elizabeth")
people.splice(3, 0, "Artie")

console.log(people);


// 11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

let withBob = people.slice()
withBob.push("Bob")

console.log(withBob)