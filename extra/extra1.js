// מעלה יום בחודש ב7
// very important exercise


const day = new Date();

function addSevenDays(){
  let newDate = day ;
  newDate.setDate(newDate.getDate() + 7) ;
return newDate
}

console.log(addSevenDays(day.getDate()))