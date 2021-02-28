// console.log('a')

// Question 1:
// In your own words what will this point to and why?(Note this is the global scope)
// console.log(this);

//I checked. it consoles : '{}'
// I dont know why
// google... 'The global scope itself'



// Question 2:
// a. In your own words what will this point to and why. b. How can you fix this code.
// const myObj = {
//   name: "Timmy",
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   }
// }
// myObj.greet();

//google:'In an arrow function, this does not refer to the owner of the function'. but why?
// nested functions

// Question 3:
// In your own words what will this point to and why?


// const myFuncDec = function () {
//   console.log(this);
// };

// myFuncDec()

// i think the function itself because its regular function, therefor object. maybe I was right


// Question 4:
// In your own words what will this point to and why?

// const myFuncArrow = () => {
//   console.log(this);
// };

// myFuncArrow();

//global. because nested function not regular
// so nested function uses different ways for functunality... it is 'defined withn another function'


// Question 5:
// a. In your own words what will this point to and why. 
// As it is an EVElistener.. it gives the event: a collection of happenings and facts in the page on paticular moment
//  more acurately - the 'window'

// b. How can you fix this code.
// change the arrow function.... I guess this way the function can take indipendently on the event.
// arrow function uses its 'background'- the window

// const a = document.querySelector(".element")
// a.addEventListener('click' , function click(){
//   console.log(this);
//  });


const storm = {
  superPower: 'flying',
}
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}
storm.newKey = printSuperPower
storm.newKey()

