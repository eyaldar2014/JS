
// # Note: We ask you not to solve the bug by finding it with your eyes but to use the debugging tools we've learned!

debugger

function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}

findSmallest(52, 66, 2);



// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down. 
// line 13

// 2. Which debug method did you use to find the bug?
// ran it once first to see the issue in the console
// the used a debugger to make shure

// 3. Explain the bug in your own words.
// just got an error because of type mistake

// 4. Fix the code and submit it all.

