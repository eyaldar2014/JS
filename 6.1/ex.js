// 3. Create function “arraySum” , the function return the sum of all elements in array.
// 4. Create function “arrayMulti” , the function return the multiplication of all the elements in array.

// 1. Print with for loop all the number.

const arr = [1,7,3,0,-5,7,3,9];

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

arrayLength(arr)


// 3. Create function “arraySum” , the function return the sum of all elements in array.

const arraySum = (array) =>{
  
}