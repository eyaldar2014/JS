function current (a, b, c, d){

  let current = "Today is " +a+ " the " +b+ " of " +c+ ", " +d ;
  return current
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = new Date();
let dayName = days[day.getDay()];

let monthlyDayNumber =  day.getDate();

const months = ['Jan', "Feb'", 'Mars', 'Ap', 'May', 'June', 'July', 'aug', 'sep', 'oc', 'no', 'de'];
let monthNumber = months[day.getMonth()] ; 

let currentYear = day.getFullYear()

result = current(dayName, monthlyDayNumber, monthNumber, currentYear)
console.log(result) ; 
