
// Ex2.7 - Basic Math
// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation. Examples
// basicOp('+', 4, 7) // Output: 11

function basic(operation, value1, value2) {

  let result;
  
  switch (operation) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    case '/':
      result = value1 / value2;
  }

  return result

}


console.log(basic('-', 7, 8))