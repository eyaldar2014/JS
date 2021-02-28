
let david = {
  name: 'David',
  print: function (){
    console.log(this.name)
  },
  printDelay: function (){
    setTimeout(this.print.bind(david), 1000)
  }
}

david.printDelay()

