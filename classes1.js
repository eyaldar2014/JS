class Person {
  constructor(name,age){
    this.name = ''
    this.age = 0
  }
// update age function - get the age and update it
  setAge(age){
    this.age = age 
  } 
  print(){
    console.log('name :'+ this.name)
    console.log('age :'+ this.age)
  }
}

let p1 = new Person
p1.age = 60
p1.name = 'itai'
console.log(p1)
p1.print()