

// var b = 1;

// function someFunction(number) {
//   function otherFunction(input) {
//     return b;
//   }

//   b = 5;
//   return otherFunction;
// }

// var firstResult = someFunction(9); 
// var result = firstResult(2);

// first result is actually equals to 'otherFunction(input)'. and because b is var, while going through 'someFunction', b changed to 5

// debugger
// var a = 1;
// function b2() {

//   a = 10;
//   return;

//   function a() { }
// }

// b2();
// console.log(a);


// no idea

let i;

for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  
  setTimeout(log, 100);
}

// this I actually understand - the time out delays the activation of the function. meanwhile i changes to 3. therefor the output will be :'3';'3';'3'