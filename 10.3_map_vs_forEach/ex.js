const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],

    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// console.log(data)

// We are not getting the data as we want it. We are going to need to massage the data.
// Create separate functions for each questions below:

// 1. Create a function that returns all the names from the array.

const names = (array) => {
  let newArray = []

  array.forEach(element => {
    newArray.push(element.name)

  });

  return newArray
}

// console.log(names(data))


// 2. Create a function that returns all the objects that are born before 1990.

const before1990 = (array) => {

  let birthYear = []

  array.forEach(element => {
    for (const p in element) {
      if (p === 'birthday') {
        // console.log(element[p])

        let tempBirthYear = []
        let newArray90 = element[p].split("")
        // console.log(newArray90)

        tempBirthYear.push(newArray90[newArray90.length - 4])
        tempBirthYear.push(newArray90[newArray90.length - 3])
        tempBirthYear.push(newArray90[newArray90.length - 2])
        tempBirthYear.push(newArray90[newArray90.length - 1])

        birthYear = tempBirthYear.join('')
        element.birthYear = birthYear   
      }
    }
  }
  )

  let newArray = []
  array.forEach(element => {
    if(element.birthYear < 1990){
    newArray.push(element)
  }
  });

  return newArray
}

// console.log(before1990(data))

// 3. Create a function that returns an object of all the different foods from all the objects as the 
// key and the number of times that food is present in all the objects as the value.

// { hamburgers: 3, sausages: 1, salmon: 3, pike: 2,    .......}

const differentFoods = (array) =>{

  let newArray = []
  array.forEach((element =>{
    newArray.push(element.favoriteFoods)
  }))

  let newerArray = []
  newArray.forEach((element =>{
    newerArray.push(element.meats)
    newerArray.push(element.fish)
  }))

  let finalArray = []
  newerArray.forEach((a =>{
    finalArray.push(a[0])
    if(typeof a[1] !== 'undefined'){
      finalArray.push(a[1])
    }
    if(typeof a[2] !== 'undefined'){
      finalArray.push(a[2])
    }
    if(typeof a[3] !== 'undefined'){
      finalArray.push(a[3])
    }

  }))
  // console.log(finalArray)

  let answer = {}
  let objArray = Object.keys(answer)
  for(i = 0 ; finalArray.length > i ; i++){
    if(!objArray.includes(finalArray[i])){
      objArray.push(finalArray[i])
      answer[finalArray[i]] = 1
    }   
    else {
      answer[finalArray[i]]++
    }
  }
  
  console.log(answer)
}


differentFoods(data)