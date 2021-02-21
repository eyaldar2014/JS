class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
  toString() {
    return this.element + ' =>'
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  addLast(element) {

    let node = new Node(element)
    let current;

    if (this.head == null) {
      this.head = node
    }
    else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }

    this.size++
  }

  getFirst() {
    return this.head.element
  }

  getLast() {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    return current.element
  }

  reverse() {

    let current = this.head
    let b = current.next
    let prev = null

    while (current) {
      b = current.next
      current.next = prev
      prev = current
      current = b
    }

    this.head = prev
    return list
  }

  removeKNode(element) {

    let current = this.head
    let last = this.getLast()

    if (this.head.element === element) {
      this.head = current.next
      return list
    }

    while (current.next) {
      if (current.next.element === element) {
        current.next = current.next.next
        return list
      }
      else {
        current = current.next
      }
    }
    return 'not exist'
  }

  // for check
  addCircular(element){
    let node = new Node(element)
    let current = this.head.next.next.next.next.next.next
    current.next = node
    node.next = this.head
  }

  circularLinkedList() {
    let first = this.head
    let second = this.head

    while(second) {
      first = first.next
      if (second.next !== null) {
        second = second.next.next  
      }
      else{
        return false
      }

      if (first.element === second.element) {
        return true
      }
    }
  }

  toString() {
    let current = this.head
    let output = 'head =>'

    while (current) {
      output += current.toString()
      current = current.next
    }

    output += ' null'
    return output
  }
}

let list = new LinkedList;
list.addLast(1)
list.addLast(2)
list.addLast(3)
list.addLast(4)
list.addLast(5)
list.addLast(6)
list.addLast(7)
list.addLast(8)
list.addLast(9)

// console.log(list.getFirst())
// console.log(list.getLast())
// console.log(list.size)
// console.log(list.toString())
// list.reverse()
// list.removeKNode(4)

// list.addCircular('x')
// console.log(list.circularLinkedList())