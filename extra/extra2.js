
// כתוב פעולה countChar המקבלת מחרוזת s ומחזירה את אורך הרצף הארוך ביותר שקיים במערך.
// לדוגמא : aaabbcdd יחזיר 3
// abbcca יחזיר 2
// agbbbgb יחזיר 3




// כתוב פעולה countIncrement המקבלת מספר שלם num ומחזירה true אם המספר מכיל ספרות בסדר עולה , אחרת מחזירה false.
// דוגמא : 
// 123 -> אמת
// 159 - > אמת
// 1549 -> שקר
// 1379-> אמת
// 1470->שקר





// כתוב פונקציה countEven המקבלת מספר שלם ומחזירה כמה ספרות במספר הן זוגיות.
// לדוגמא במספר : 1596 הפונקציה תחזיר 1
// 1640 תחזיר 3

const countEven = (n) =>{

  let count = 0
  for(i=0 ; 0 < n ; i++){
    if(n % 2 === 0 ){
      count = count + 1
    }
    n = (n/10)
    n = Math.floor(n)
    console.log(n)
    console.log(count)
  }

}

countEven(555563872200) // this action is limited to around 12-16 digits before the computer loses it haha / / what is the explanation??



// כתוב פעולה polyNum המקבלת מספר שלם num ובודקת אם המספר הוא פולינדרום בעזרת דרך שונה מסעיף 12!
// במידה והוא פולינדרום יש להחזיר אמת , אחרת שקר.

n = 3263946

