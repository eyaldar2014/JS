
// Block 1

// function funcA() {

//   console.log(a);
//   console.log(foo());
  
  // var a = 1;

//   function foo() {
//     return 2;
//   }
// }

// funcA();

// the output is undefined ; 2 ; because var is declared but has no value yet . and the function is 
// initialized first inside the function and can be called anytime.

// var fullName = 'John Doe'; 
// var obj = {
//   fullName: 'Colin Ihrig', 
//   prop: {
//     fullName: 'Aurelio De Rosa', 
//     getFullName: function () {
//       return this.fullName;
//     }
//   }
// };

// console.log(obj.prop.getFullName());

// var test = obj.prop.getFullName; 

// console.log(test());

// the output is 'Aurelio De Rosa' ; and undefined because the test adds '()', 
// and the word 'this' is not assigned 
// for anything, when the method is an outside var

// function funcB() {
//   let a = b = 0;
//   a++;
//   return a;
// }

// funcB();

// console.log(typeof a);
// console.log(typeof b);

// the output is: I have no idea(what is 'let a = b = 0')... let's check. i was thinking that b isn't defined, 
// but it is a number. so it makes b any. and then
// outside the function a is undefined

// function funcC() {
//   console.log("1");
// }

// funcC();

// function funcC() {
//   console.log("2");
// }

// funcC();

// the output is error because funcrion cant be declared twice - MISTAKE!
// finction can be re-asigned - output is 2 ; 2

// function funcD1() {
//   d = 1;
// }

// funcD1();
// console.log(d);

// function funcD2() {
//   var e = 1;
// }
// funcD2();
// console.log(e);

// the output is 1 (why? how is 'd' initialized? and no return)
// the output is 1 because d is initialized when the function is called, and its global : 'any'
// var is local to the function so  'e' is undefined





function funcE() {
  console.log("Value of f in local scope: ", f);
}

console.log("Value of f in global scope: ", f); 

var f = 1;

funcE();

// the output is undefined and then 1
