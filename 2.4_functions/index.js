function current (){

  // let current = "Today is Sunday the 31 of January, 2021" ;
  return current
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = new Date();
let dayName = days[day.getDay()];

let monthlyDayNumber =  day.getDate();

const months = ['Jan', "Feb'", 'Mars', 'Ap', 'May', 'June', 'July', 'aug', 'sep', 'oc', 'no', 'de'];
let monthNumber = months[day.getMonth()] ; 

let currentYear = day.getFullYear()


console.log(currentYear) ; 
