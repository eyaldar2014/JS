const yearCheck = (n) =>{
  if (n % 400 == 0){
    return console.log("It is indeed a leap year")
  } 
  if (n % 100 == 0){
    return console.log("This is not a leap year.")
  }
  if (n % 4 == 0){
    return console.log("It is indeed a leap year")
  }
  else console.log("This is not a leap year.")
}
yearCheck(-0)