class Car {
  constructor(brand, speed){
    this.brand = brand
    this.speed = speed
  }
  getBrand(){return this.brand}
  getSpeed(){return this.speed}
  print(){console.log('brand: '+ this.brand +' speed: '+ this.speed)}
  setSpeed(s){this.speed = s}
}

let cars =[]

let c1 = new Car("fiat", 50)
let c2 = new Car("citroen", 100)
let c3 = new Car("renault", 89)
let c4 = new Car("pegaut", 200)
// c1.setSpeed(200)
// c1.print()

cars.push(c1, c2, c3, c4)
// console.log(cars)

let maxCarSpeed = cars.reduce((max, val) => {
  return max.speed < val.speed ? val : max 
})
// console.log(maxCarSpeed);

let sortedCarsBySpeed = cars.sort((a, b) => {
  return (a.speed - b.speed)
})
// console.log(sortedCarsBySpeed);