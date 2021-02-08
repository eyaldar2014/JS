// Write a function that takes one argument n, an integer.
// Print out all the numbers between 1 to n.
// If the number is only divisible by 7 print “BOOM”
// If the number is divisible by 7 and also includes the digit 7 print “BOOM- BOOM”

const boom = (n) => {
  for (a = 1; a < n ; a = a + 1){
    if (a % 7 == 0){
      const arrayOfDigits = Array.from(String(a), Number);
      if(arrayOfDigits.includes(7)){
        console.log('Boom Boom')
      }
      else console.log('Boom')
    }
    else console.log(a)
  }
}

boom(1000)