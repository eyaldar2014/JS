class Animal {
  constructor(name, sound){
    this.name = name
    this.sound = sound
  }
  getName(){return this.name}
  getSound(){return this.sound}
  print(){console.log('name: ' + this.name + ' sound: ' + this.sound)}
}

let a1 = new Animal("dog", "bark")
let a2 = new Animal("monkey", "speak")
let a3 = new Animal("cat", "meow")