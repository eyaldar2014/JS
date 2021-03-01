
// Write a function that takes a number as an argument and returns a Promise that tests if the 
// value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected. Call the 
// function and print the resolve and reject in a .then, .catch.

function aroundTen(n){
  return new Promise((resolve, reject)=>{
    if (n>10) {
      resolve('more then 10')
    }
    else{
      reject('not higher than 10')
    }
  })
}

aroundTen(1).then(result=>{
  console.log(result)
}).catch(err =>{
  console.log(err)
})