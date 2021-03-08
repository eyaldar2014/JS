class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  getX() { return this.x }
  getY() { return this.y }
  addToX(n) { this.x += n }
  addToY(n) { this.y += n }
  addPoint(some) {
    this.x += some.x
    this.y += some.y
  }
  isSame(some) {
    if (this.x === some.x && this.y === some.y) {
      return true
    }
    else {
      return false
    }
  }
  print() { console.log("x: " + this.x + ', y: ' + this.y) }
}

let p1 = new Point(5, 5)
let p2 = new Point(5, 4)
let p3 = new Point(5, 3)

// p1.print()


class PointWorld {
  constructor() {
    this.pointsList = []
  }
  sortByY() {
    let sorted = this.pointsList.sort(function (a, b) {
      return b.y - a.y
    })

    return sorted
  }
  filterWorld() {

    let answer = []

    this.pointsList.forEach(element => { 
      if (answer.find(x => x === element) === undefined){
        answer.push(element)
      }
    })
    return answer
  }
  sumX(){
    let answer = this.pointsList.reduce((sum, val) =>{
      return sum + val.x
    }, 0) 
    return answer
  }
  getPoint(n){
    let check = this.pointsList.find(x => x === n)
    if (check === undefined){
      return false
    }
    else{
      return n
    }
  }
}

let w1 = new PointWorld()

w1.pointsList.push(p2, p1, p2, p1, p2, p1)

// console.log(w1)
// console.log(w1.filterWorld())
// console.log(w1.sumX())
// console.log(w1.getPoint(p3))