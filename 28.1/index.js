const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
      if (this.health <= 5) {
      return this.power - 10;
    }
    else return this.power;
  }
}

function whoIsStronger(getStrength) {
  const myStrength = 82;
  // console.log(getStrength()) // added for check
  if (getStrength() < myStrength) {
    return "I am stronger";
  }
  else return "You are stronger";
}

hero.newFunction = whoIsStronger
console.log(hero.newFunction(hero.getStrength))

//cant solve it without touching the clousers of getStronger inside the function whoIsStronger
// solved !!!
// call the function from within with another name of course
// no - the function cant call this from whitin anoter function
// console.log((hero.getStrength()))
// not sure. next

// not sure - check tomorrow