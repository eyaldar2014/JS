function calcAverage (arr){
  debugger
  var sum = 0;
  for(var i = 0 ; i < arr.length; i ++){ 
    sum += arr[ i ];
  }

  return sum / arr.length ;
  }

  calcAverage ([ 85 , 90 , 92 ]);


//   What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// 3

// 2. Which debug method did you use to find the bug?
// debugger tool in vs code

// 3. Explain the bug in your own words.
// because sum is undefined it cant use as a counter

// 4. Fix the code and submit it all.

