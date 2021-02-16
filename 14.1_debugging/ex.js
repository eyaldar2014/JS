
// # Note: We ask you not to solve the bug by finding it with your eyes but to use the debugging tools we've learned!

function getSum (arr1, arr2) {
  let sum = 0;
debugger
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}

getSum([1, 2, 3],[5, 66, 23]);


// What is wrong with this code?

// 1. First find the line that contains the problem. Write it down.
// line 6

// 2. Which debug method did you use to find the bug?
//got an error with line information and placed a debugger

// 3. Explain the bug in your own words.
// '.length' property works only on array, and on this point 'arr1' is undefined
// it is undefined because ',' is missing between the elements when calling the function
// also '+=' cant assign to const variable
 
// 4. Fix the code and submit it all.