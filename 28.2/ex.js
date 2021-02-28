
let david = {
  name: 'David',
  print: function (){
    console.log(david.name)
  },
  printDelay: function (){
    setTimeout(this.print, 1000)
  }
}

david.printDelay()

