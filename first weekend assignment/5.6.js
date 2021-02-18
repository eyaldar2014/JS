// Usually when you buy something, you're asked whether your credit card number, 
// phone number or answer to your most secret question is still correct. 
// However, since someone could look over your shoulder, 
// you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all 
// but the last four characters into '#'. 
// 
// Examples
// maskify("4556364607935616") == "############5616"
// maskify( maskify( maskify(
// "64607935616") == "#######5616" "1") == "1"
// "") == ""
// // "What was the name of your first pet?"
// maskify("Skippy") == "##ippy" maskify("Nananananananananananananananana Batman!") == "####################################man!"

function maskify (str){ 

  let array = str.split("")

  for (let i = 0; (array.length -4) > i; i++) {
    array[i] = '#'
  }

  newStr = array.join("")
  return newStr
}


console.log(maskify('sdhfgdsfiasbdijfabdsijfg8347truwbejvf!!!!'))