

// 1. Print with for loop all the number.

const arr = [1,7,3,-5,7,3,9, 1 ];

for (i=0 ; i < arr.length ; i++ ){
  console.log(arr[i])
}


// 2. Create function “arrayLength” that return the array length (don’t use arr.length)

const arrayLength = (array) =>{
  let newArray =[]
  let n = 0

  for (i = 0 ; array > newArray ; i++ ){
    n = n + 1
    newArray.push(array[i])
  }
  console.log(n)
  return n
}

console.log(arrayLength([1,1,1,1]))


// 3. Create function “arraySum” , the function return the sum of all elements in array.

const arraySum = (array) =>{
  let sum = 0
  for (i=0 ; i < array.length ; i++ ){
    sum = sum + array[i]
  }
  console.log(sum)
}

arraySum(arr)


// 4. Create function “arrayMulti” , the function return the multiplication of all the elements in array.

const arrayMulti = (array) =>{
  let multi = 1
  for (i=0 ; i < array.length ; i++ ){
    multi = multi * array[i]
  }
  console.log(multi)
}

arrayMulti(arr)