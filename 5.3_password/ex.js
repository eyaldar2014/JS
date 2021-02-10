
// Use only a ternary conditional expression.


const validation1 = (password) => {
  if (password.length >= 7){
    return "strong"
  }
    else{
    return "weak"
  }
}

console.log(validation1('adflsdnkljdfsbfgihb'))


const validation2 = (password) => {
    return (password.length > 7 ? "strong" : "weak")
}

console.log(validation2(''))



const advancedValidation = (password) => {
  return password.length < 7 ? "weak" 
  :  password.includes('A')  || 
     password.includes('B')  || 
     password.includes('C')  || 
     password.includes('D')  || 
     password.includes('E')  || 
     password.includes('F')  || 
     password.includes('G')  ||
     password.includes('H')  || 
     password.includes('I')  || 
     password.includes('J')  || 
     password.includes('K')  || 
     password.includes('L')  || 
     password.includes('M')  || 
     password.includes('N')  || 
     password.includes('O')  || 
     password.includes('P')  || 
     password.includes('Q')  || 
     password.includes('R')  || 
     password.includes('S')  || 
     password.includes('T')  || 
     password.includes('U')  || 
     password.includes('V')  || 
     password.includes('W')  || 
     password.includes('X')  || 
     password.includes('Y')  || 
     password.includes('Z')  ? "very strong"
  : "strong" ;
}

console.log(advancedValidation('isbndfibZ'))
