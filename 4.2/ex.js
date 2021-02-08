// Create a function that takes 1 argument, a number score. Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D” 70-79 is a “C” 80-89 is a “B” 90-100 is an “A


const grade = (score) => {
  if (score < 65){
    return "F"
  }
  else if (score > 64 && score < 70){
    return "D"
  }
  else if (score > 69 && score < 80){
    return "C"
  }
  else if (score > 79 && score < 90){
    return "B"
  }
  else {
    return "A"
  }
}

console.log(grade(68))