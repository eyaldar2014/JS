
const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4
    },
  ],
  cashRegister: 200
}

// console.log(candyStore)

// // 1. Implement the following getCandy function:
// //   The function should return the candy element with the specified id.

// function getCandy(candyStore, id){

//   for (i = 0 ; candyStore.candies.length > i ; i++ ){

//     if (candyStore.candies[i].id === id) {

//       return candyStore.candies[i]
//     }
//   }
//   return 'not exist'
// }

// console.log(getCandy(candyStore, '5hd7y'))

// // 2. Implement the following getPrice function:
// //   The function should return the price(number) of the candy with the specified
// // id.

// function getPrice(candyStore, id){ 

//   for (i = 0 ; candyStore.candies.length > i ; i++ ){

//     if (candyStore.candies[i].id === id) {

//       return candyStore.candies[i].price
//     }
//   }
//   return 'not exist'
// }

// console.log(getPrice(candyStore, 'as12f'))

// // 3. Implement the following addCandy function:
// //   The function should add a new candy to the candy list in candyStore with a
// // default amount of 1. The function will not return anything.


// function addCandy(candyStore, id, name, price) { 
//   candyStore.candies.push(
//     {
//     name : name ,
//     id : id ,
//     price : price ,
//     amount : 1 ,
//   }
//   )
// }

// addCandy(candyStore, 'aaa', 'aaaa', 3)

// console.log(candyStore)

// 4. Implement the following buy function: The function should add the candy price to the cashRegister,
//  and decrease the amount property of the relevant candy.



function buy(candyStore, id) {

  for (i = 0; candyStore.candies.length > i; i++) {

    if (candyStore.candies[i].id === id) {
      if (candyStore.candies[i].amount === 0) {
        return console.log('not exist')

      }
      else
        candyStore.candies[i].amount--
      candyStore.cashRegister = candyStore.cashRegister + candyStore.candies[i].price
    }
  }
  return 'not exist'
}

buy(candyStore , '5hd7y')
buy(candyStore , '5hd7y')
buy(candyStore , '5hd7y')
buy(candyStore , '5hd7y')
buy(candyStore , 'as12f')
buy(candyStore , 'as12f')
buy(candyStore , 'as12f')
buy(candyStore , 'as12f')
buy(candyStore , 'as12f')
buy(candyStore , 'as12f')

console.log(candyStore)