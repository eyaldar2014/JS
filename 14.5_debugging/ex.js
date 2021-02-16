function countOccurrences(str, char) {
  debugger
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter++;
    }
  }
  return counter;
}

countOccurrences("ini mini miny moe", "n");



// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// 6

// 2. Which debug method did you use to find the bug? 
// debugger and common sense

// 3. Explain the bug in your own words.
// the counter was adding wrongly . fixed the command 

// 4. Fix the code and submit it all.

