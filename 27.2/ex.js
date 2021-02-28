// You are given a function, Pokeman, that takes three parameters, pokemonName, 
// pokemonType, an array of different pokemon attack methods, pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in a variable.

function Pokeman(name, type, attackArray) {
  this.name = name
  this.type = type
  this.attackArray = attackArray
}

let first = new Pokeman('first', "best", [100, 200])
let second = new Pokeman("second", "worst", [10, 20])
let last = new Pokeman("last", "ok", [70, 70])

// 2. Using prototype properties, add the following methods:
// • A method called callPokemon that will print the following: “I choose you, <pokemon name></pokemon>
Pokeman.prototype.callPokemon = function () {
  console.log('I choose you, ' + this.name)
}

// • A method called attack that takes one parameter, an attack number, that will print the specific 
// attack method from the pokemonAttackList array as the following: “<pokemon name> used <attack method>”

Pokeman.prototype.attack = function () {
  console.log(this.name + ' used ' + this.attackArray[0])
}

first.callPokemon()
second.callPokemon()
last.callPokemon()
first.attack()
second.attack()
last.attack()