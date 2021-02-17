
// 1
// תוב פעולה PrintToTen המדפיסה את כל המספרים מ0 ועד 10

function PrintToTen () {
  console.log(0,1,2,3,4,5,6,7,8,9)
}

// PrintToTen()


// 2
// כתוב פעולה PrintToTenRev המדפיסה את כל המספרים מ-0 ועד 10 בסדר הפוך

function PrintToTenRev () {

  for (i = 9; i > -1; i--){
  console.log(i)
  }
}

// PrintToTenRev()


// 3
// כתוב פעולה printArr  המקבלת מערך arr ומדפיסה את כל איברי המערך בסדר הפוך .

function printArr (array) {

  for (i = array.length - 1; i > -1; i--){
  console.log(array[i])
  }
}

// arr = [1,2,3,4,5,6,0]

// printArr(arr)


// 4
// כתוב פעולה arrSum המקבלת מערך של מספרים nums ומחזירה את סכום המערך.

function arrSum (array) {
  let sum = 0
  for (i = 0 ;i < array.length; i++){
    sum = sum + array[i]
  }

  return sum
}

arr = [1,2,3,4,5,6,0]

// console.log(arrSum(arr))

// const a = arr.reduce() = (sum, value) => {
  // sum += value
// }

// console.log(a)


// 5
// arrayAverage

// function arrayAverage (array) {
//   let sum = 0
//   for (i = 0 ;i < array.length; i++){
//     sum = sum + array[i]
//   }

//   return sum / array.length
// }

// arr = [1,2,3,4,5,6,0, 3, 3, 4]

// console.log(arrayAverage(arr))

// 5
// כתוב פעולה arrSort המקבלת מערך nums מסוג מספרים שלמים ומחזירה את המערך מסודר בסדר עולה.

function arrSort (nums) {
  
  let sorted = nums.sort(function(a, b){
    return a-b}); 
  
  return sorted
}

arr = [1,2,3,4,5,6,0]


// const arrSort2 = (nums){
//   return nums.sort(a,b){}
// }


// console.log(arrSort2(arr))

// 6
// כתוב פעולה arrSort המקבלת מערך nums מסוג מספרים שלמים ומחזירה את המערך מסודר בסדר יורד.

function arrSort3 (nums) {
  
  let sorted = nums.sort(function(a, b){
    return b-a}); 
  
  return sorted
}

arr = [1,2,3,4,5,6,0]


// console.log(arrSort3(arr))


// 7
// כתוב פעולה printWithMap המקבלת מערך ומדפיסה את כל איברי המערך בעזרת map.

let printWithMap = (arr) => {
  arr.map((x => console.log(x)))
}

// printWithMap(arr)

// 8
// כתוב פעולה multiTenToAll המקבלת מערך numbers ומחזירה את כל המספרים בתוך המערך כפול 10.

let multiTenToAll = (arr) => {
  const newArray = arr.map(x => x*10)
  return newArray
}

// console.log(multiTenToAll(arr))


// 9
// כתוב פעולה removeNegative המקבלת מערך של מספרים שלמים ומחזירה מערך של מספרים חיוביים בלבד.

let removeNegative = (arr) => { return arr.filter(x => x > 0)}

arr2 = [1,2,3,4,5,6,0, -1871276]

// console.log(removeNegative(arr2))


// 10
// כתוב פעולה removePositive המקבלת מערך numbers ומחזירה מערך של מספרים שליליים בלבד

let removePositive = (arr) => { return arr.filter(x => x < 0)}

arr2 = [1,2,3,4,5,6,0, -1871276]

// console.log(removePositive(arr2))

// 11
// תוב פעולה המקבלת מערך של מספרים ומדפיסה את כל המספרים השליליים במערך מחולקים ב

// arr2.forEach(x => x < 0 && console.log(x/2))

arr2 = [1, 7,2,3,4,5,6,0, -1871276]


// 12
// כתוב פעולה המקבלת מערך של מספרים num ומדפיסה בסדר עולה רק את המספרים החיוביים במערך

const function6 = (array) => {

  let newArray = []

  array.forEach(element => {
    if(element > 0){newArray.push(element)}
  })

  return newArray.sort(function(a,b){return a - b})
}

// console.log(function6(arr2))

const max = (array) =>{
  
  let max = 0

array.reduce(function(acc, value) {
  if (value > acc) {
    return acc = value
  }
  return max = acc
})

return max
}



// reduce shortened:
console.log(arr2.reduce(function(max, value){return max > value ? max : value}))

// console.log(max(arr2))


// 20
// 