class SortNumber {
  static numList = []
  constructor() {
    this.array = []
  }

  addNum(n) {
    if (this.array.find(x => x === n) === undefined) {
      this.array.push(n)
      return true
    }
    else {
      return false
    }
  }

  removeNum(n) {
    let check = this.array.findIndex(x => x === n)
    // console.log(check)

    if (check === undefined) {
      return false
    }
    else {
      this.array.splice(check, 1)
      return true
    }
  }

  getAll() { return this.array }

  print() { console.log(this.array) }

  share(some) {
    // console.log(some)
    let count = 0
    some.array.forEach(element => {
      if (this.array.find(x => x === element) !== undefined) {
        count++
      }
    });
    return count
  }

  union(some) {
    let sum = some.array

    this.array.forEach(element => {
      if (some.array.find(x => x === element) === undefined) {
        sum.push(element)
      }
    });
    return sum 
  }
}


let first = new SortNumber
// console.log(first.addNum(5))
// console.log(first.array)
// console.log(first.removeNum(5))
// console.log(first.array)

first.addNum(0)
first.addNum(1)
first.addNum(3)
first.addNum(5)

let second = new SortNumber

second.addNum(1)
second.addNum(11)
second.addNum(13)

// console.log(first.share(second))
// console.log(first.union(second))