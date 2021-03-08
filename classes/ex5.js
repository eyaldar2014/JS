class Room {

  constructor(roomId, level, amount) {
    this.roomId = roomId
    this.level = level
    this.amount = amount
    this.isFree = true
  }
  checkCapacityIsRight(n) {
    if (this.amount >= n) {
      this.isFree = false
    }
  }
  print() { console.log('room number: ' + this.roomId + ' levl: ' + this.level + ' max people: ' + this.amount + ' free: ' + this.isFree) }
}

class Hotel {
  constructor(room) {
    this.listOfRooms = [room]
  }

  addRoom(room) {

    let answer = true

    this.listOfRooms.forEach(element => {
      if (element.roomId === room.roomId) {
        answer = false
      }
    })
    if (answer === true) {
      this.listOfRooms.push(room)
    }
    return answer
  }

  addNewRoom(roomId, level, amount) {

    let newRoom = new Room(roomId, level, amount)
    return this.addRoom(newRoom)
  }
  removeRoom(room) {

    let x = this.listOfRooms.indexOf(room)
    if (this.listOfRooms[x].isFree === false) {
      return false
    }
    else {
      this.listOfRooms.splice(x, 1)
      return true
    }
  }
  checkFreeRooms(n) {
    let filtered = this.listOfRooms.filter(x =>
      x.isFree === true && x.amount >= n
    )
    return filtered.length
  }

  checkIn(id, num) {

    let room = this.listOfRooms.find(room => room.roomId === id)
    if (room.amount >= num) {
      room.isFree = false
      return true
    }
    else {
      return false
    }
  }
  highRoomFree() {
    let sorted = this.listOfRooms.sort(function (a, b) {
      return a.level - b.level
    })
    let highest = sorted[sorted.length - 1].level
    let newArray = sorted.filter(x => x.level === highest)

    let filtered = newArray.filter(x=> x.isFree === true)

    let filteredAndSorted = filtered.sort(function (a,b ){
      return b.amount-a.amount
    })
    return filteredAndSorted
  }
  getAllRooms(){}
}


let r1 = new Room(1, 1, 1)

r1.checkCapacityIsRight(1)

let r2 = new Room(2, 1, 2)
// r1.print()

let h1 = new Hotel(r1)
h1.addNewRoom(4, 3, 3)
h1.addNewRoom(5, 3, 3)
h1.addNewRoom(9, 4, 3)
h1.addNewRoom(8, 1, 3)
h1.addNewRoom(7, 100, 3)
h1.addNewRoom(6, 100, 30)
h1.addNewRoom(2, 3, 3)
h1.addNewRoom(67, 3, 3)
h1.addNewRoom(68, 3, 3)


// console.log(h1.checkFreeRooms(100))

// console.log(h1.checkIn(1, 1))
console.log(h1.highRoomFree())